from fastapi import FastAPI
from pydantic import BaseModel

from ai_agent.text_to_sql import generate_sql

app = FastAPI()


class ChatRequest(BaseModel):
    question: str


@app.post("/chat")
def chat(request: ChatRequest):

    sql = generate_sql(request.question)

    return {
        "question": request.question,
        "generated_sql": sql
    }