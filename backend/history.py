
from fastapi import APIRouter
from sqlalchemy import text
from backend.database import engine

router = APIRouter(
    prefix="/history",
    tags=["History"]
)

@router.get("")
def get_history():

    with engine.connect() as conn:

        rows = conn.execute(
            text("""
                SELECT
                    id,
                    question,
                    generated_sql,
                    created_at
                FROM ChatHistory
                ORDER BY created_at DESC
            """)
        ).fetchall()

    return [
        {
            "id": row[0],
            "question": row[1],
            "sql": row[2],
            "time": row[3]
        }
        for row in rows
    ]
