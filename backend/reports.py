from fastapi import APIRouter
from datetime import datetime

router = APIRouter()


@router.get("/reports/summary")
def reports_summary():

    today = datetime.now().strftime("%d %b %Y")

    reports = [

        {
            "id": 1,
            "title": "Sales Performance Report",
            "description": "Generated from live Sales data",
            "type": "Sales",
            "date": today
        },

        {
            "id": 2,
            "title": "Customer Analysis Report",
            "description": "Generated from Customer data",
            "type": "Customers",
            "date": today
        },

        {
            "id": 3,
            "title": "Profit Analysis Report",
            "description": "Generated from Profit data",
            "type": "Finance",
            "date": today
        },

        {
            "id": 4,
            "title": "Regional Sales Report",
            "description": "Generated from Region data",
            "type": "Region",
            "date": today
        }

    ]

    return {
        "totalReports": len(reports),
        "generatedToday": len(reports),
        "categories": 4,
        "reports": reports
    }
