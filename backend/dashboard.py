from fastapi import APIRouter
import sqlite3

router = APIRouter()

DATABASE = "metricmind.db"


@router.get("/dashboard/kpi")
def get_kpi():

    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    # Total Revenue
    cursor.execute("""
        SELECT ROUND(SUM(SalesAmount),2)
        FROM Sales
    """)
    revenue = cursor.fetchone()[0] or 0

    # Total Profit
    cursor.execute("""
        SELECT ROUND(SUM(Profit),2)
        FROM Sales
    """)
    profit = cursor.fetchone()[0] or 0

    # Total Orders
    cursor.execute("""
        SELECT COUNT(OrderID)
        FROM Sales
    """)
    orders = cursor.fetchone()[0] or 0

    # Total Customers
    cursor.execute("""
        SELECT COUNT(DISTINCT CustomerID)
        FROM Sales
    """)
    customers = cursor.fetchone()[0] or 0

    conn.close()

    return {
        "revenue": revenue,
        "profit": profit,
        "orders": orders,
        "customers": customers
    }
