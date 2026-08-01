CREATE VIEW area_chart_data AS
SELECT
    strftime('%Y-%m', order_date) AS month,
    SUM(profit) AS total_profit
FROM sales
GROUP BY month
ORDER BY month;