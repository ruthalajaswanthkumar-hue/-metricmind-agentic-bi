
-- customer_summary.sql
-- Business summary of customer distribution by region and city.

SELECT
    region,
    city,
    COUNT(customer_id) AS total_customers

FROM {{ ref('stg_customer') }}

GROUP BY
    region,
    city

ORDER BY
    total_customers DESC,
    region,
    city;
