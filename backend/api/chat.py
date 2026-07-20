 from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

# Request Model
class ChatRequest(BaseModel):
    question: str

# Response Model
class ChatResponse(BaseModel):
    response: str

@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):

    if request.question.strip() == "":
        return {
            "response": "Question cannot be empty."
        }

    return {
        "response": "Processing..."
    }
