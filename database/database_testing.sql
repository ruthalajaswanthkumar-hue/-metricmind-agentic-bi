SELECT COUNT(*) FROM customers;

SELECT COUNT(*) FROM products;

SELECT COUNT(*) FROM sales;

SELECT customer_id, COUNT(*)
FROM customers
GROUP BY customer_id
HAVING COUNT(*) > 1;

SELECT *
FROM customers
WHERE customer_id IS NULL;

SELECT product_id, COUNT(*)
FROM products
GROUP BY product_id
HAVING COUNT(*) > 1;

SELECT *
FROM products
WHERE product_id IS NULL;

SELECT order_id, COUNT(*)
FROM sales
GROUP BY order_id
HAVING COUNT(*) > 1;

SELECT *
FROM sales
WHERE order_id IS NULL;

SELECT *
FROM sales
WHERE customer_id NOT IN
(
    SELECT customer_id
    FROM customers
);

SELECT *
FROM sales
WHERE product_id NOT IN
(
    SELECT product_id
    FROM products
);

SELECT *
FROM customers
WHERE customer_id IS NULL
OR customer_name IS NULL;

SELECT *
FROM products
WHERE product_id IS NULL
OR product_name IS NULL;

SELECT *
FROM sales
WHERE order_id IS NULL
OR customer_id IS NULL
OR product_id IS NULL
OR sales_amount IS NULL;

SELECT customer_name, region, city, COUNT(*)
FROM customers
GROUP BY customer_name, region, city
HAVING COUNT(*) > 1;

SELECT product_name, category, price, COUNT(*)
FROM products
GROUP BY product_name, category, price
HAVING COUNT(*) > 1;

SELECT 
customer_id,
product_id,
order_date,
sales_amount,
COUNT(*)
FROM sales
GROUP BY 
customer_id,
product_id,
order_date,
sales_amount
HAVING COUNT(*) > 1;

SELECT
    c.region,
    SUM(s.sales_amount) AS total_revenue
FROM sales s
JOIN customers c
ON s.customer_id = c.customer_id
GROUP BY c.region
ORDER BY total_revenue DESC;

SELECT
    strftime('%Y-%m', order_date) AS month,
    SUM(sales_amount) AS monthly_sales
FROM sales
GROUP BY month
ORDER BY month;

SELECT
    strftime('%Y', order_date) AS year,
    SUM(sales_amount) AS yearly_sales
FROM sales
GROUP BY year
ORDER BY year;

SELECT
    p.product_name,
    SUM(s.sales_amount) AS total_sales
FROM sales s
JOIN products p
ON s.product_id = p.product_id
GROUP BY p.product_name
ORDER BY total_sales DESC
LIMIT 10;

SELECT
    c.customer_name,
    SUM(s.sales_amount) AS total_purchase
FROM sales s
JOIN customers c
ON s.customer_id = c.customer_id
GROUP BY c.customer_name
ORDER BY total_purchase DESC
LIMIT 10;

SELECT
    p.product_name,
    SUM(s.profit) AS total_profit
FROM sales s
JOIN products p
ON s.product_id = p.product_id
GROUP BY p.product_name
ORDER BY total_profit DESC;

SELECT
    p.product_name,
    SUM(s.profit) AS total_loss
FROM sales s
JOIN products p
ON s.product_id = p.product_id
GROUP BY p.product_name
HAVING total_loss < 0
ORDER BY total_loss ASC;

SELECT
    strftime('%Y', order_date) AS year,
    SUM(sales_amount) AS total_sales,
    SUM(sales_amount) -
    LAG(SUM(sales_amount)) OVER
    (ORDER BY strftime('%Y', order_date))
    AS sales_growth
FROM sales
GROUP BY year;

SELECT
    region,
    COUNT(customer_id) AS customer_count
FROM customers
GROUP BY region
ORDER BY customer_count DESC;

SELECT
    p.category,
    SUM(s.sales_amount) AS total_sales,
    SUM(s.profit) AS total_profit
FROM sales s
JOIN products p
ON s.product_id = p.product_id
GROUP BY p.category
ORDER BY total_sales DESC;