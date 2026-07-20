
 from sqlalchemy import create_engine

DATABASE_URL = "sqlite:///metricmind.db"

engine = create_engine(
    DATABASE_URL,
    echo=True
)
