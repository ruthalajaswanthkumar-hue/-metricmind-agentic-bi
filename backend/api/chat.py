 from fastapi import APIRouter

from backend.schemas.chat_request import ChatRequest
from backend.schemas.chat_response import ChatResponse

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):

    return {
        "response": "Processing..."
    }
