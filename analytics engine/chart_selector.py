 """
MetricMind Analytics Engine
Chart Recommendation Module
"""

class ChartSelector:

    CHART_MAPPING = {
        "Revenue": "Line Chart",
        "Sales": "Bar Chart",
        "Profit": "Column Chart",
        "Customers": "Pie Chart",
        "Growth": "Area Chart",
        "Orders": "Bar Chart",
        "Region": "Horizontal Bar Chart",
        "Category": "Donut Chart"
    }

    @classmethod
    def get_chart(cls, metric):
        return cls.CHART_MAPPING.get(metric, "Table")

    @classmethod
    def supported_charts(cls):
        return list(set(cls.CHART_MAPPING.values()))
