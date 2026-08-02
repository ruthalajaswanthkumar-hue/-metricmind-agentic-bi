

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.api.charts import router as charts_router
from backend.schemas.chat import ChatRequest
from backend.services.query_service import QueryService

from ai_agent.text_to_sql import generate_sql
from ai_agent.insight_generator import generate_insight
from ai_agent.recommendation_engine import generate_recommendation
from ai_agent.chart_recommender import recommend_chart
print(">>> backend.main loaded <<<")


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
@app.post("/chat")
def chat(request: ChatRequest):
    try:
        print("===== CHAT API CALLED =====")
        print("Question:", request.question)

        sql = generate_sql(request.question)
        print("Generated SQL:", sql)
        print("=" * 60)
        print("RAW AI SQL:")
        print(sql)
        print("=" * 60)

        sql = (
            sql.replace("```sql", "")
               .replace("```", "")
               .strip()
        )

        if not QueryService.validate_sql(sql):
            return {
                "success": False,
                "generated_sql": sql,
                "error": "Unsafe SQL generated."
            }

        query_result = QueryService.execute_query(sql)
        print("Query Result:", query_result)

        insight = generate_insight(query_result)
        recommendation = generate_recommendation(query_result)
        chart = recommend_chart(request.question)

        return {
            "question": request.question,
            "generated_sql": sql,
            "query_result": query_result,
            "chart": chart,
            "insight": insight,
            "recommendation": recommendation
        }

    except Exception as e:
        import traceback
        traceback.print_exc()

        return {
            "success": False,
            "error": str(e)
        }