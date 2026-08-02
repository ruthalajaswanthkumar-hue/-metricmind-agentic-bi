from backend.services.query_service import QueryService

sql = """
SELECT *
FROM sales
LIMIT 5;
"""

result = QueryService.execute_query(sql)

print(result)