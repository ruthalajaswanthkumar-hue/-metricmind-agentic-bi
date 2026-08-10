import pandas as pd

input_file = "../Dataset/retail_sales_dataset.csv"

df = pd.read_csv(input_file)

print("Dataset Loaded Successfully")
print(df.head())

customers = df[
    [
        "CustomerID",
        "CustomerName",
        "Region",
        "City"
    ]
].drop_duplicates()

customers.to_csv("../Dataset/customers.csv", index=False)

products = df[
    [
        "ProductID",
        "ProductName",
        "Category",
        "UnitPrice"
    ]
].drop_duplicates()

products.to_csv("../Dataset/products.csv", index=False)

sales = df[
    [
        "OrderID",
        "CustomerID",
        "ProductID",
        "OrderDate",
        "Quantity",
        "SalesAmount",
        "Discount",
        "Profit"
    ]
]

sales.to_csv("../Dataset/sales.csv", index=False)


print("CSV files created successfully!")
