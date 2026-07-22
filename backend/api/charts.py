from fastapi import APIRouter

from backend.services.chart_service import ChartService
from backend.schemas.chart_response import ChartResponse

router = APIRouter()


@router.get("/charts", response_model=ChartResponse)
def get_charts():

    return ChartService.get_all_charts()
