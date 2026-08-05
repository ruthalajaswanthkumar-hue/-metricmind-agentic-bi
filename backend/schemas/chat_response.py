 from pydantic import BaseModel
from typing import Any, Dict


class Chat_Response(BaseModel):
    question: str
    normalized_question: str
    generated_sql: str
    dashboard: Dict[str, Any]
    chart_data: Dict[str, Any]
    recommended_chart: Dict[str, Any]
    analytics: Dict[str, Any]
