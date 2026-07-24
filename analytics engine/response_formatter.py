"""
MetricMind Analytics Engine
Response Formatter
Converts analytics output into dashboard-ready JSON.
"""

class ResponseFormatter:

    @staticmethod
    def format_response(
        title,
        metric,
        chart,
        data,
        insights=None,
        kpis=None,
        recommendations=None,
        trend=None
    ):

        return {
            "status": "success",
            "title": title,
            "metric": metric,
            "recommended_chart": chart,
            "trend": trend if trend else {},
            "total_records": len(data),
            "kpis": kpis if kpis else {},
            "insights": insights if insights else [],
            "recommendations": recommendations if recommendations else [],
            "data": data
        }
