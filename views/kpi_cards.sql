CREATE VIEW kpi_cards AS
SELECT
    SUM(sales_amount) AS total_sales,
    SUM(profit) AS total_profit,
    COUNT(DISTINCT customer_id) AS total_customers,
    COUNT(DISTINCT order_id) AS total_orders
FROM sales;