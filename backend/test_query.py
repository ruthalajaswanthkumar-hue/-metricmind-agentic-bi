from backend.services.query_service import QueryService

sql = "SELECT 1 AS test"

result = QueryService.execute_query(sql)

print(result)