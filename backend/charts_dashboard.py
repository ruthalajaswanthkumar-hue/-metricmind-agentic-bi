from fastapi import APIRouter
from sqlalchemy import text
from backend.database import engine

router = APIRouter(prefix="/dashboard", tags=["Charts"])


@router.get("/charts")
def dashboard_charts():

    with engine.connect() as conn:

        # Monthly Revenue
        monthly = conn.execute(text("""

        SELECT
            substr(OrderDate,4,2) AS Month,
            SUM(SalesAmount) AS Revenue

        FROM Sales

        GROUP BY Month

        ORDER BY Month

        """)).fetchall()


        # Category Revenue
        category = conn.execute(text("""

        SELECT
            Products.Category,
            SUM(Sales.SalesAmount) AS Revenue

        FROM Sales

        JOIN Products
        ON Sales.ProductID = Products.ProductID

        GROUP BY Products.Category

        ORDER BY Revenue DESC

        LIMIT 10

        """)).fetchall()


        # Region Revenue
        region = conn.execute(text("""

        SELECT
            Customer.Region,
            SUM(Sales.SalesAmount) AS Revenue

        FROM Sales

        JOIN Customer
        ON Sales.CustomerID = Customer.CustomerID

        GROUP BY Customer.Region

        ORDER BY Revenue DESC

        """)).fetchall()


    return {

        "monthly": [

            {
                "name": row[0],
                "value": float(row[1])
            }

            for row in monthly

        ],

        "category": [

            {
                "name": row[0],
                "value": float(row[1])
            }

            for row in category

        ],

        "region": [

            {
                "name": row[0],
                "value": float(row[1])
            }

            for row in region

        ]

    }
