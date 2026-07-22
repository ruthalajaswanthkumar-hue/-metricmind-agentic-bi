from langchain_ollama import OllamaLLM


class AIService:

    def __init__(self):

        self.llm = OllamaLLM(
            model="llama3:latest"
        )

    def generate_sql(self, question: str):

        prompt = f"""
You are a SQL Expert.

Convert the following question into SQL.

Return ONLY SQL.

Question:
{question}

SQL:
"""

        sql = self.llm.invoke(prompt)
        sql = sql.replace("```sql", "")
        sql = sql.replace("```", "")
        sql = sql.strip()

        return sql.strip()