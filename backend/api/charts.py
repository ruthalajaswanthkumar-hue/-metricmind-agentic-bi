from fastapi import APIRouter
from backend.services.chart_service import ChartService
from backend.schemas.chart_response import ChartResponse

router = APIRouter(
    prefix="",
    tags=["Charts"]
)


@router.get(
    "/charts",
    response_model=ChartResponse,
    summary="Get Dashboard Charts"
)
def get_charts():
    """
    Returns Bar, Line and Pie chart datasets
    for the Business Dashboard.
    """

    return ChartService.get_all_charts()
