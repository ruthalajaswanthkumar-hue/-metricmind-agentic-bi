 from sqlalchemy import create_engine
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DATABASE_URL = f"sqlite:///{os.path.join(BASE_DIR, 'metricmind.db')}"

engine = create_engine(
    DATABASE_URL,
    echo=True
)
