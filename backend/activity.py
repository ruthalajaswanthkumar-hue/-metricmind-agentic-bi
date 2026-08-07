from fastapi import APIRouter
from sqlalchemy import text
from backend.database import engine

router = APIRouter(prefix="/activity", tags=["Activity"])


@router.get("/recent")
def recent_activity():

    with engine.connect() as conn:

        rows = conn.execute(text("""

        SELECT
            OrderID,
            CustomerID,
            SalesAmount,
            Profit,
            OrderDate

        FROM Sales

        ORDER BY OrderDate DESC

        LIMIT 10

        """)).fetchall()

    return [

        {
            "order": row[0],
            "customer": row[1],
            "sales": float(row[2]),
            "profit": float(row[3]),
            "date": row[4]
        }

        for row in rows

    ]
