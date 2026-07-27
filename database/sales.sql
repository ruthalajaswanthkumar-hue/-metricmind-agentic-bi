CREATE TABLE sales(
    order_id TEXT PRIMARY KEY,
    customer_id TEXT,
    product_id TEXT,
    order_date TEXT,
    quantity INTEGER,
    sales_amount REAL,
    discount REAL,
    profit REAL,
    FOREIGN KEY(customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY(product_id) REFERENCES products(product_id)
);
