 SELECT
    COUNT(order_id) AS total_orders,

    SUM(quantity) AS total_quantity_sold,

    SUM(sales_amount) AS total_revenue,

    SUM(profit) AS total_profit,

    AVG(sales_amount) AS average_order_value,

    AVG(quantity) AS average_quantity_per_order,

    SUM(discount) AS total_discount_given

FROM {{ ref('stg_sales') }};
