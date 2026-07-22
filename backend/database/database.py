from sqlalchemy import create_engine
from backend.config.config import DATABASE_URL

print(f"DATABASE_URL = {DATABASE_URL}")

engine = create_engine(DATABASE_URL)

print("Database Engine Created Successfully")