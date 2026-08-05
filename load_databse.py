
import pandas as pd
import sqlite3


DB_PATH = "backend/metricmind.db"


conn = sqlite3.connect(DB_PATH)


files = {
    "Sales": "datsets/Sales.csv",
    "Customer": "datsets/Customer.csv",
    "Order": "datsets/Order.csv",
    "Products": "datsets/Products.csv",
    "Date": "datsets/Date.csv",
    "Region": "datsets/Region.csv",
    "Category": "datsets/Category.csv"
}


for table, file in files.items():

    df = pd.read_csv(file)

    df.to_sql(
        table,
        conn,
        if_exists="replace",
        index=False
    )

    print(
        f"{table} loaded successfully"
    )


conn.close()

print("Database loading completed")
