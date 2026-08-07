import pandas as pd
from sqlalchemy import create_engine
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(BASE_DIR)

engine = create_engine("sqlite:///metricmind.db")

files = {
    "Sales": os.path.join(PROJECT_DIR, "datsets", "Sales.csv"),
    "Customer": os.path.join(PROJECT_DIR, "datsets", "Customer.csv"),
    "Products": os.path.join(PROJECT_DIR, "datsets", "Products.csv"),
    "OrderTable": os.path.join(PROJECT_DIR, "datsets", "Order.csv"),
    "Region": os.path.join(PROJECT_DIR, "datsets", "Region.csv"),
    "Category": os.path.join(PROJECT_DIR, "datsets", "Category.csv"),
    "DateTable": os.path.join(PROJECT_DIR, "datsets", "Date.csv"),
}

for table, file in files.items():
    df = pd.read_csv(file)
    df.to_sql(table, engine, if_exists="replace", index=False)
    print(f"{table} imported successfully.")

print("Database created successfully.")
