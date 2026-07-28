from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.api.charts import router as charts_router
from backend.schemas.chat import ChatRequest
from backend.services.query_service import QueryService

from ai_agent.text_to_sql import generate_sql
from ai_agent.insight_generator import generate_insight
from ai_agent.recommendation_engine import generate_recommendation
from ai_agent.chart_recommender import recommend_chart


app = FastAPI(
    title="MetricMind Backend API",
    version="1.0.0"
)

# ---------------- CORS ---------------- #

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- Routers ---------------- #

app.include_router(charts_router)

# ---------------- Root API ---------------- #

@app.get(
    "/",
    summary="Root API",
    description="Returns a welcome message to verify that the MetricMind Backend API is running."
)
def root():
    return {
        "message": "Welcome to MetricMind Backend API"
    }


# ---------------- Health API ---------------- #

@app.get(
    "/health",
    summary="Health Check",
    description="Checks whether the backend service is running successfully."
)
def health():
    return {
        "status": "healthy"
    }


# ---------------- Chat API ---------------- #

@app.post(
    "/chat",
    summary="Generate Business Insights",
    description="Accepts a business question, generates SQL using AI, generates insights, recommends charts, and returns recommendations."
)
def chat(request: ChatRequest):

    sql = generate_sql(request.question)

    # Remove markdown if AI returns it
    sql = (
        sql.replace("```sql", "")
           .replace("```", "")
           .strip()
    )

    print("=" * 50)
    print("Generated SQL:")
    print(sql)
    print("=" * 50)

    # Validate SQL
    if not QueryService.validate_sql(sql):
        return {
            "success": False,
            "generated_sql": sql,
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
