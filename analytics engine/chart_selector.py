
"""
Chart Recommendation Logic
"""

class ChartSelector:

    def suggest(self, metric):

        charts = {
            "Revenue": "Line Chart",
            "Sales": "Bar Chart",
            "Profit": "Column Chart",
            "Customers": "Pie Chart",
            "Growth": "Area Chart"
        }

        return charts.get(metric, "Table")
