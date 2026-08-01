CREATE VIEW line_chart_data AS
SELECT
    strftime('%Y-%m', order_date) AS month,
    SUM(sales_amount) AS total_sales
FROM sales
GROUP BY month
ORDER BY month;