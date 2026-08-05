  """
Business Rules Engine
"""

class BusinessRules:

    @staticmethod
    def calculate_profit(revenue, cost):
        return revenue - cost

    @staticmethod
    def calculate_margin(profit, revenue):

        if revenue == 0:
            return 0

        return round((profit / revenue) * 100, 2)

    @staticmethod
    def calculate_growth(current, previous):

        if previous == 0:
            return 0

        return round(((current - previous) / previous) * 100, 2)

    @staticmethod
    def average_order_value(revenue, orders):

        if orders == 0:
            return 0

        return round(revenue / orders, 2)
