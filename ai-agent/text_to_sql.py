 from pathlib import Path
from langchain_ollama import OllamaLLM

BASE_DIR = Path(__file__).parent
prompt_path = BASE_DIR / "prompts" / "sql_prompt.txt"

with open(prompt_path, "r", encoding="utf-8") as file:
    sql_prompt = file.read()

llm = OllamaLLM(model="qwen2.5:3b")


def generate_sql(question):

    q = question.lower()

    # -------------------------
    # Revenue
    # -------------------------
    if "total revenue" in q or "show revenue" in q:
        return """
        SELECT
            SUM(SalesAmount) AS Revenue
        FROM Sales;
        """

    # -------------------------
    # Profit
    # -------------------------
    if "profit" in q:
        return """
        SELECT
            SUM(Profit) AS Profit
        FROM Sales;
        """

    # -------------------------
    # Top Customers
    # -------------------------
    if "top customer" in q or "find top customers" in q:
        return """
        SELECT
            c.CustomerID,
            c.Region,
            c.City,
            SUM(s.SalesAmount) AS TotalRevenue,
            COUNT(s.OrderID) AS OrdersCount
        FROM Sales s
        JOIN Customer c
        ON s.CustomerID = c.CustomerID
        GROUP BY
            c.CustomerID,
            c.Region,
            c.City
        ORDER BY TotalRevenue DESC
        LIMIT 10;
        """

    # -------------------------
    # Best Selling Products
    # -------------------------
    if "best selling" in q or "top products" in q:
        return """
        SELECT
            p.ProductName,
            SUM(s.Quantity) AS TotalSold
        FROM Sales s
        JOIN Products p
        ON s.ProductID = p.ProductID
        GROUP BY p.ProductName
        ORDER BY TotalSold DESC
        LIMIT 10;
        """

    # -------------------------
    # Monthly Sales
    # -------------------------
    if "monthly sales" in q:
        return """
        SELECT
            substr(OrderDate,1,7) AS Month,
            SUM(SalesAmount) AS Revenue
        FROM Sales
        GROUP BY Month
        ORDER BY Month;
        """

    # -------------------------
    # Revenue by Region
    # -------------------------
    if "region" in q:
        return """
        SELECT
            c.Region,
            SUM(s.SalesAmount) AS Revenue
        FROM Sales s
        JOIN Customer c
        ON s.CustomerID = c.CustomerID
        GROUP BY c.Region;
        """

    # -------------------------
    # AI fallback
    # -------------------------
    prompt = f"""
{sql_prompt}

User Request:
{question}

SQL:
"""

    sql = llm.invoke(prompt)

    sql = sql.replace("```sql", "")
    sql = sql.replace("```", "")
    sql = sql.strip()

    upper_sql = sql.upper()

    if "SELECT" in upper_sql:
        sql = sql[upper_sql.index("SELECT"):]

    if ";" in sql:
        sql = sql.split(";")[0] + ";"

    return sql
