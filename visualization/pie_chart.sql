CREATE VIEW pie_chart_data AS
SELECT
    p.category,
    SUM(s.sales_amount) AS total_sales
FROM sales s
JOIN products p
ON s.product_id = p.product_id
GROUP BY p.category;