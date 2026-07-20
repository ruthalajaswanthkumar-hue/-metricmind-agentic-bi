from fastapi import FastAPI

from backend.config.config import APP_NAME, VERSION
from backend.database.database import engine
from backend.api.health import router as health_router

app = FastAPI(
    title=APP_NAME,
    version=VERSION,
    description="Backend APIs for MetricMind AI Platform"
)

app.include_router(health_router)