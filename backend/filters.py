from fastapi import APIRouter
from sqlalchemy import text

from backend.database import engine

router = APIRouter(
    prefix="/dashboard",
    tags=["Filters"]
)


@router.get("/filter")
def dashboard_filter(
    region: str | None = None,
    category: str | None = None,
):

    query = """
    SELECT
        SUM(SalesAmount) AS Revenue,
        SUM(Profit) AS Profit,
        COUNT(DISTINCT s.OrderID) AS Orders,
       COUNT(DISTINCT s.CustomerID) AS Customers
    FROM Sales s
    """

    joins = ""
    where = []
    params = {}

    if region:
        joins += """
        JOIN Customer c
        ON s.CustomerID = c.CustomerID
        """
        where.append("c.Region = :region")
        params["region"] = region

    if category:
        joins += """
        JOIN Products p
        ON s.ProductID = p.ProductID
        """
        where.append("p.Category = :category")
        params["category"] = category

    query += joins

    if where:
        query += " WHERE " + " AND ".join(where)

    print("SQL Query:")
    print(query)
    print("Parameters:")
    print(params)

    with engine.connect() as conn:
        row = conn.execute(
            text(query),
            params
        ).fetchone()

    print("Row:", row)

    return {
        "Revenue": row[0] or 0,
        "Profit": row[1] or 0,
        "Orders": row[2] or 0,
        "Customers": row[3] or 0
    }
