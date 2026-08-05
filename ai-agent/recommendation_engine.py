 from langchain_ollama import OllamaLLM

llm = OllamaLLM(model="llama3.2:1b")


def generate_recommendation(data):
   prompt = f"""
You are a Senior Business Strategy Consultant.

Business Metrics:
{data}

Instructions:
- Return ONLY 4 actionable recommendations.
- Use bullet points.
- Recommendations must be practical and business-focused.
- Do not include introductions or explanations.
- Each recommendation should be one sentence.

Recommendations:
"""
   return llm.invoke(prompt)


if __name__ == "__main__":
    sample = {
        "profit": -8,
        "returns": 14,
        "logistics_cost": 21
    }

    print(generate_recommendation(sample))
