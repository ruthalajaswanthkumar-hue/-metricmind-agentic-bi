from fastapi import FastAPI

from backend.api.health import router as health_router
from backend.api.chat import router as chat_router

app = FastAPI(
    title="MetricMind Backend API",
    version="1.0.0"
)

app.include_router(health_router)
app.include_router(chat_router)


@app.get("/")
def root():
    return {
        "message": "MetricMind Backend Running Successfully!"
    }