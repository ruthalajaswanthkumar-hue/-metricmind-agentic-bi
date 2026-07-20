 from pathlib import Path
from langchain_ollama import OllamaLLM

BASE_DIR = Path(__file__).parent
prompt_path = BASE_DIR / "prompts" / "sql_prompt.txt"

with open(prompt_path, "r", encoding="utf-8") as file:
    sql_prompt = file.read()

llm = OllamaLLM(model="llama3:latest")


def generate_sql(question):
    prompt = f"""
{sql_prompt}

User Request:
{question}

SQL:
"""
    return llm.invoke(prompt)


def main():
    question = input("Enter your question: ")

    print("\nGenerated SQL:\n")
    print(generate_sql(question))


if __name__ == "__main__":
    main()
