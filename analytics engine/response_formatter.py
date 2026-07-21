 """
MetricMind Analytics Engine
Response Formatter
Converts analytics output into dashboard-ready JSON.
"""

class ResponseFormatter:

    @staticmethod
    def format_response(title, metric, chart, data, insights=None, kpis=None):

        return {
            "status": "success",
            "title": title,
            "metric": metric,
            "recommended_chart": chart,
            "total_records": len(data),
            "kpis": kpis if kpis else {},
            "insights": insights if insights else [],
            "data": data
        }
