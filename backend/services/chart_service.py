
"""
Chart Service
Provides data for dashboard charts.
"""

class ChartService:

    @staticmethod
    def get_bar_chart():

        return [
            {"month": "Jan", "value": 120},
            {"month": "Feb", "value": 180},
            {"month": "Mar", "value": 250},
            {"month": "Apr", "value": 300}
        ]

    @staticmethod
    def get_line_chart():

        return [
            {"month": "Jan", "revenue": 50000},
            {"month": "Feb", "revenue": 65000},
            {"month": "Mar", "revenue": 72000},
            {"month": "Apr", "revenue": 81000}
        ]

    @staticmethod
    def get_pie_chart():

        return [
            {"name": "Electronics", "value": 45},
            {"name": "Furniture", "value": 30},
            {"name": "Clothing", "value": 25}
        ]

    @staticmethod
    def get_all_charts():

        return {
            "bar": ChartService.get_bar_chart(),
            "line": ChartService.get_line_chart(),
            "pie": ChartService.get_pie_chart()
        }
