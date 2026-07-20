from sqlalchemy import create_engine
from backend.config.settings import DATABASE_URL

engine = create_engine(DATABASE_URL)

print("Database Engine Created Successfully")