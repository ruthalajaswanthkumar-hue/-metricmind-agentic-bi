import csv
import os

from sqlalchemy import create_engine, text
from backend.config.config import DATABASE_URL

# Connect to PostgreSQL
engine = create_engine(DATABASE_URL)

DATASET_FOLDER = "datasets"


def infer_sql_type(value):
    """Infer PostgreSQL column type from sample value."""
    try:
        int(value)
        return "INTEGER"
    except ValueError:
        pass

    try:
        float(value)
        return "DOUBLE PRECISION"
    except ValueError:
        pass

    return "TEXT"
def make_headers_unique(headers):
    seen = {}
    unique_headers = []

    for header in headers:
        if header in seen:
            seen[header] += 1
            unique_headers.append(f"{header}_{seen[header]}")
        else:
            seen[header] = 1
            unique_headers.append(header)

    return unique_headers


for filename in os.listdir(DATASET_FOLDER):

    if not filename.endswith(".csv"):
        continue

    table_name = os.path.splitext(filename)[0].lower()
    file_path = os.path.join(DATASET_FOLDER, filename)

    print(f"\n📂 Importing {filename}...")

    with open(file_path, "r", newline="", encoding="utf-8-sig") as csvfile:

        reader = csv.reader(csvfile)

        headers = make_headers_unique(next(reader))
        rows = list(reader)

        if not rows:
            print(f"⚠ {filename} is empty. Skipping.")
            continue

        # Infer column types using first row
        sample_row = rows[0]

        column_types = [
            infer_sql_type(value)
            for value in sample_row
        ]

        columns_sql = ", ".join(
            f'"{col}" {dtype}'
            for col, dtype in zip(headers, column_types)
        )

        create_table_sql = f'''
        DROP TABLE IF EXISTS "{table_name}";
        CREATE TABLE "{table_name}" (
            {columns_sql}
        );
        '''

        with engine.begin() as conn:

            # Create table
            conn.execute(text(create_table_sql))

            # Insert every row
            for row in rows:

                values = []

                for value in row:

                    value = value.strip()

                    if value == "":
                        values.append("NULL")
                    else:
                        value = value.replace("'", "''")
                        values.append(f"'{value}'")

                insert_sql = f'''
                INSERT INTO "{table_name}"
                VALUES ({",".join(values)});
                '''

                conn.execute(text(insert_sql))

    print(f"✅ Imported {len(rows)} rows into '{table_name}'")

print("\n🎉 All datasets imported successfully!")
