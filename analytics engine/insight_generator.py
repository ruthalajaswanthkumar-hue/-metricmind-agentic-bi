 """
Insight Generator
Generates business insights from KPI and trend data.
"""

class InsightGenerator:

    @staticmethod
    def generate(kpi_name, current_value, previous_value):

        if previous_value == 0:
            return f"No previous data available for {kpi_name}."

        change = current_value - previous_value
        percentage = round((change / previous_value) * 100, 2)

        if change > 0:
            return f"{kpi_name} increased by {percentage}% compared to the previous period."

        elif change < 0:
            return f"{kpi_name} decreased by {abs(percentage)}% compared to the previous period."

        else:
            return f"{kpi_name} remained unchanged."
