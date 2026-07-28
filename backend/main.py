from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from backend.api.charts import router as charts_router
from ai_agent.text_to_sql import generate_sql
from ai_agent.insight_generator import generate_insight
from ai_agent.recommendation_engine import generate_recommendation
from ai_agent.chart_recommender import recommend_chart
from backend.schemas.chat import ChatRequest
from backend.services.query_service import QueryService

app = FastAPI(
    title="MetricMind Backend API",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(charts_router)

@app.get("/")
def root():
    return {
        "message": "Welcome to MetricMind Backend API"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }




@app.post("/chat")
def chat(request: ChatRequest):

    sql = generate_sql(request.question)
    if not QueryService.validate_sql(sql):
      return {
        "success": False,
        "error": "Unsafe SQL generated. Only SELECT, SHOW, and WITH statements are allowed."
    }

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
