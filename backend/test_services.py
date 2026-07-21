from backend.services.ai_service import AIService
from backend.services.query_service import QueryService

ai = AIService()

question = "Show all companies"

# Generate SQL
sql = ai.generate_sql(question)

print("Generated SQL:")
print(sql)

# Validate SQL
print("\nSQL Valid:", QueryService.validate_sql(sql))

# Execute SQL
result = QueryService.execute_query(sql)

print("\nDatabase Result:")
print(result)