 """
Chart Service
Provides chart data for dashboard visualization.
"""

class ChartService:

    @staticmethod
    def get_bar_chart():

        # TODO:
        # Replace with database query

        return [
            {"month": "Jan", "value": 120},
            {"month": "Feb", "value": 180},
            {"month": "Mar", "value": 250},
            {"month": "Apr", "value": 300}
        ]

    @staticmethod
    def get_line_chart():

        # TODO:
        # Replace with database query

        return [
            {"month": "Jan", "revenue": 50000},
            {"month": "Feb", "revenue": 65000},
            {"month": "Mar", "revenue": 72000},
            {"month": "Apr", "revenue": 81000}
        ]

    @staticmethod
    def get_pie_chart():

        # TODO:
        # Replace with database query

        return [
            {"name": "Electronics", "value": 45},
            {"name": "Furniture", "value": 30},
            {"name": "Clothing", "value": 25}
        ]

    @classmethod
    def get_all_charts(cls):

        return {
            "bar": cls.get_bar_chart(),
            "line": cls.get_line_chart(),
            "pie": cls.get_pie_chart()
        }
