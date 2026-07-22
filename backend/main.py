from backend.api.charts import router as charts_router
from fastapi import FastAPI
from pydantic import BaseModel
from core.middleware import RequestMiddleware
from core.exception_handler import ExceptionHandler

from ai_agent.text_to_sql import generate_sql

app = FastAPI()
app.add_exception_handler(404, ExceptionHandler.not_found)
app.add_middleware(RequestMiddleware)
app.include_router(charts_router)

class ChatRequest(BaseModel):
    question: str


@app.post("/chat")
def chat(request: ChatRequest):

    sql = generate_sql(request.question)

    return {
        "question": request.question,
        "generated_sql": sql
    }
