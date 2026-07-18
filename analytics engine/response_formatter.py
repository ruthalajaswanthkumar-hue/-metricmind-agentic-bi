 """
Response Formatter
Converts analytics output into dashboard-friendly JSON.
"""

class ResponseFormatter:

    @staticmethod
    def format_response(title, metric, chart, data):

        return {
            "title": title,
            "metric": metric,
            "chart": chart,
            "records": len(data),
            "data": data
        }
