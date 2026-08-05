from pathlib import Path
from langchain_ollama import OllamaLLM

BASE_DIR = Path(__file__).parent
prompt_path = BASE_DIR / "prompts" / "sql_prompt.txt"

with open(prompt_path, "r", encoding="utf-8") as file:
    sql_prompt = file.read()

llm = OllamaLLM(model="qwen2.5:3b")


def generate_sql(question):

    prompt = f"""
{sql_prompt}

User Request:
{question}

SQL:
"""

    sql = llm.invoke(prompt)

    sql = sql.replace("```sql", "")
    sql = sql.replace("```", "")
    sql = sql.strip()

    upper_sql = sql.upper()

    if "SELECT" in upper_sql:
        sql = sql[upper_sql.index("SELECT"):]

    if ";" in sql:
        sql = sql.split(";")[0] + ";"

    return sql
