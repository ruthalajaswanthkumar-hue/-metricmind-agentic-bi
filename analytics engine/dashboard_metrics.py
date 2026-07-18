 """
MetricMind Analytics Engine
Dashboard KPI Definitions
"""

class DashboardMetrics:

    KPIS = {
        "Revenue": {
            "formula": "SUM(sales_amount)",
            "description": "Total revenue generated from sales"
        },

        "Profit": {
            "formula": "Revenue - Cost",
            "description": "Net profit earned"
        },

        "Orders": {
            "formula": "COUNT(order_id)",
            "description": "Total completed orders"
        },

        "Customers": {
            "formula": "COUNT(DISTINCT customer_id)",
            "description": "Unique customers"
        },

        "Average Order Value": {
            "formula": "Revenue / Orders",
            "description": "Average revenue per order"
        },

        "Growth": {
            "formula": "(Current - Previous) / Previous *100",
            "description": "Business growth percentage"
        },

        "Margin": {
            "formula": "(Profit / Revenue) *100",
            "description": "Profit Margin"
        }
    }

    @classmethod
    def get_metrics(cls):
        return cls.KPIS
