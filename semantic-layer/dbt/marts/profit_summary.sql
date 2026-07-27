
SELECT
    SUM(profit) AS total_profit,
    AVG(profit) AS average_profit_per_order,
    MAX(profit) AS highest_profit,
    MIN(profit) AS lowest_profit,
    SUM(sales_amount) AS total_revenue,
    SUM(discount) AS total_discount_given,
    ROUND((SUM(profit) / NULLIF(SUM(sales_amount), 0)) * 100, 2) AS profit_margin_percentage
FROM {{ ref('stg_sales') }};
