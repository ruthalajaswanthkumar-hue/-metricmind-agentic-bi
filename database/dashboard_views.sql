CREATE VIEW sales_dashboard AS

SELECT
    s.order_id,
    s.order_date,
    c.customer_name,
    p.product_name,
    p.category,
    s.quantity,
    s.sales_amount,
    s.discount,
    s.profit

FROM sales s

JOIN customers c
ON s.customer_id = c.customer_id

JOIN products p
ON s.product_id = p.product_id;

CREATE VIEW profit_dashboard AS

SELECT
    p.product_name,
    p.category,
    SUM(s.sales_amount) AS total_sales,
    SUM(s.profit) AS total_profit

FROM sales s

JOIN products p
ON s.product_id = p.product_id

GROUP BY
    p.product_name,
    p.category

ORDER BY total_profit DESC;

CREATE VIEW customer_dashboard AS

SELECT
    c.customer_id,
    c.customer_name,
    c.region,
    c.city,
    COUNT(s.order_id) AS total_orders,
    SUM(s.sales_amount) AS total_purchase,
    SUM(s.profit) AS total_profit

FROM customers c

JOIN sales s
ON c.customer_id = s.customer_id

GROUP BY
    c.customer_id,
    c.customer_name,
    c.region,
    c.city

ORDER BY total_purchase DESC;

CREATE VIEW region_dashboard AS

SELECT
    c.region,
    COUNT(DISTINCT c.customer_id) AS total_customers,
    COUNT(s.order_id) AS total_orders,
    SUM(s.sales_amount) AS total_sales,
    SUM(s.profit) AS total_profit

FROM customers c

JOIN sales s
ON c.customer_id = s.customer_id

GROUP BY c.region

ORDER BY total_sales DESC;
