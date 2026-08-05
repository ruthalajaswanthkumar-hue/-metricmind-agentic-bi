 from pydantic import BaseModel
from typing import Any


class Chart_Response(BaseModel):
    status: str
    charts: Any
