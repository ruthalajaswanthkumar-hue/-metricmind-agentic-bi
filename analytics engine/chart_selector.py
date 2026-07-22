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
        "Category": "Donut Chart",
        "Profit Margin": "Gauge Chart",
        "Average Order Value": "KPI Card",
        "Top Products": "Horizontal Bar Chart",
        "Monthly Sales": "Line Chart",
        "Yearly Sales": "Column Chart"
    }

    @classmethod
    def get_chart(cls, metric):
        return cls.CHART_MAPPING.get(metric, "Table")

    @classmethod
    def supported_charts(cls):
        return sorted(list(set(cls.CHART_MAPPING.values())))

    @classmethod
    def is_supported_metric(cls, metric):
        return metric in cls.CHART_MAPPING

    @classmethod
    def get_all_metrics(cls):
        return list(cls.CHART_MAPPING.keys())
