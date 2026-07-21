SELECT DISTINCT
    TRIM(OrderID) AS order_id,
    TRIM(ProductID) AS product_id,
    Quantity AS quantity,
    UnitPrice AS unit_price,
    SalesAmount AS sales_amount,
    Discount AS discount,
    Profit AS profit

FROM {{ source('raw', 'Sales') }}

WHERE OrderID IS NOT NULL
  AND ProductID IS NOT NULL
  AND SalesAmount IS NOT NULL;
