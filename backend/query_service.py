from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError

from backend.database.database import engine


class QueryService:
    """
    Handles all database query execution.
    """

    @staticmethod
    def validate_sql(sql: str):
        """
        Validate that only safe SQL statements are executed.
        """

        if not sql:
            return False

        sql = sql.strip().lower()

        allowed = (
            "select",
            "show",
            "with"
        )

        return sql.startswith(allowed)


    @staticmethod
    def execute_query(sql: str):
        """
        Execute SQL query and return results.
        """

        # Validate SQL before execution
        if not QueryService.validate_sql(sql):
            return {
                "success": False,
                "error": "Only SELECT, SHOW, and WITH queries are allowed."
            }

        try:
            with engine.connect() as connection:

                result = connection.execute(text(sql))

                if result.returns_rows:

                    rows = result.fetchall()
                    columns = result.keys()

                    data = [
                        dict(zip(columns, row))
                        for row in rows
                    ]

                    return {
                        "success": True,
                        "count": len(data),
                        "data": data
                    }

                return {
                    "success": True,
                    "message": "Query executed successfully."
                }

        except SQLAlchemyError as error:

            return {
                "success": False,
                "error": str(error)
            }