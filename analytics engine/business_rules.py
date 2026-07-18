
"""
Business Rules
"""

class BusinessRules:

    def calculate_profit(self, revenue, cost):
        return revenue - cost

    def calculate_margin(self, profit, revenue):
        if revenue == 0:
            return 0
        return (profit / revenue) * 100
