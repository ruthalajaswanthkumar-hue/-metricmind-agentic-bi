SELECT DISTINCT
    TRIM(ProductID) AS product_id,
    TRIM(ProductName) AS product_name,
    TRIM(Category) AS category,
    UnitPrice AS unit_price

FROM {{ source('raw', 'Products') }}

WHERE ProductID IS NOT NULL
  AND ProductName IS NOT NULL
  AND UnitPrice IS NOT NULL;
