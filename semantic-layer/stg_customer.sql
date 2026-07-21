SELECT DISTINCT
    TRIM(CustomerID) AS customer_id,
    TRIM(CustomerName) AS customer_name,
    TRIM(Region) AS region,
    TRIM(City) AS city

FROM {{ source('raw', 'Customers') }}

WHERE CustomerID IS NOT NULL
  AND CustomerName IS NOT NULL
  AND Region IS NOT NULL
  AND City IS NOT NULL;
