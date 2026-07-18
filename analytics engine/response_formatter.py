
"""
Response Formatter
"""

class ResponseFormatter:

    def format(self, title, chart, data):

        return {
            "title": title,
            "chart": chart,
            "data": data
        }
