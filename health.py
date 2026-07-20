 from fastapi import APIRouter

# Create a router
router = APIRouter()

# Home API
@router.get("/")
def root():
    return {
        "message": "MetricMind Backend Running"
    }

# Health Check API
@router.get("/health")
def health():
    return {
        "status": "Running"
    }
