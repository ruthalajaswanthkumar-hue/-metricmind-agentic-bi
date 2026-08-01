from sqlalchemy import text
from backend.database.database import engine

try:
    with engine.connect() as conn:
        result = conn.execute(text("SELECT version();"))

        print("✅ Connected to PostgreSQL!")
        print(result.fetchone())

except Exception as e:
    print("❌ Connection Failed")
    print(e)