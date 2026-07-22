from langchain_ollama import OllamaLLM

llm = OllamaLLM(model="llama3:latest")


def generate_insight(data):
   prompt = f"""
You are a Senior Business Analyst.

Analyze the business data below.

Business Data:
{data}

Instructions:
- Return ONLY the business insight.
- Do not explain your reasoning.
- Do not use headings.
- Keep it under 3 sentences.
- Use professional business language.
"""
   return llm.invoke(prompt)


if __name__ == "__main__":
    sample = {
        "region": "South",
        "revenue": 1520000,
        "growth": 18
    }

    print(generate_insight(sample))