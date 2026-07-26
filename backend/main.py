from fastapi import FastAPI
from pydantic import BaseModel

from ai_agent.text_to_sql import generate_sql
from ai_agent.insight_generator import generate_insight
from ai_agent.recommendation_engine import generate_recommendation
from ai_agent.chart_recommender import recommend_chart

app = FastAPI()

class ChatRequest(BaseModel):
    question: str


@app.post("/chat")
def chat(request: ChatRequest):

    sql = generate_sql(request.question)

    # Mock database result
    sample_data = {
        "revenue": 250000,
        "growth": "15%",
        "region": "North"
    }

    insight = generate_insight(sample_data)
    recommendation = generate_recommendation(sample_data)
    chart = recommend_chart(request.question)

    return {
        "question": request.question,
        "generated_sql": sql,
        "chart": chart,
        "insight": insight,
        "recommendation": recommendation
    }