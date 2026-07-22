 """
MetricMind Analytics Engine

KPI Calculator
"""

class KPICalculator:

    @staticmethod
    def calculate_revenue(data):
        return data.get("Revenue", 0)

    @staticmethod
    def calculate_profit(data):
        return data.get("Profit", 0)

    @staticmethod
    def calculate_orders(data):
        return data.get("Orders", 0)

    @staticmethod
    def calculate_customers(data):
        return data.get("Customers", 0)

    @staticmethod
    def calculate_profit_margin(data):
        revenue = data.get("Revenue", 0)
        profit = data.get("Profit", 0)

        if revenue == 0:
            return 0

        return round((profit / revenue) * 100, 2)

    @staticmethod
    def calculate_average_order_value(data):
        revenue = data.get("Revenue", 0)
        orders = data.get("Orders", 0)

        if orders == 0:
            return 0

        return round(revenue / orders, 2)

    @staticmethod
    def calculate_growth_rate(current, previous):

        if previous == 0:
            return 0

        return round(((current - previous) / previous) * 100, 2)
