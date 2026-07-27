CREATE INDEX idx_sales_customer_id
ON sales(customer_id);

CREATE INDEX idx_sales_product_id
ON sales(product_id);

CREATE INDEX idx_sales_order_date
ON sales(order_date);

CREATE INDEX idx_products_category
ON products(category);
