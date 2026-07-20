from fastapi import APIRouter

from backend.schemas.health import (
    HealthResponse,
    RootResponse,
)

router = APIRouter()


@router.get("/", response_model=RootResponse)
def root():
    return {
        "message": "MetricMind Backend Running"
    }


@router.get("/health", response_model=HealthResponse)
def health():
    return {
        "status": "Running"
    }