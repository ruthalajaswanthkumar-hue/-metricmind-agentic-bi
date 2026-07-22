 from pydantic import BaseModel
from typing import List, Dict, Any


class ChartResponse(BaseModel):
    bar: List[Dict[str, Any]]
    line: List[Dict[str, Any]]
    pie: List[Dict[str, Any]]
