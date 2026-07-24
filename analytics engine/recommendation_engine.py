
"""
Recommendation Engine
Generates business recommendations based on KPI and trend analysis.
"""

class RecommendationEngine:

    @staticmethod
    def generate(kpi_name, trend):

        if kpi_name == "Revenue":

            if trend == "Increasing":
                return "Maintain the current sales strategy and explore opportunities to expand into new markets."

            elif trend == "Decreasing":
                return "Review sales performance, marketing campaigns, and customer demand."

        elif kpi_name == "Profit":

            if trend == "Increasing":
                return "Continue controlling operational costs and improve product margins."

            elif trend == "Decreasing":
                return "Reduce logistics costs, review pricing strategy, and minimize unnecessary expenses."

        elif kpi_name == "Orders":

            if trend == "Increasing":
                return "Ensure inventory is sufficient to meet growing customer demand."

            elif trend == "Decreasing":
                return "Analyze customer purchasing behavior and improve promotional campaigns."

        elif kpi_name == "Customers":

            if trend == "Increasing":
                return "Focus on customer retention and loyalty programs."

            elif trend == "Decreasing":
                return "Improve customer engagement and launch acquisition campaigns."

        return "Continue monitoring business performance and optimize low-performing areas."

    @staticmethod
    def general_recommendations():

        return [
            "Monitor KPI performance regularly.",
            "Improve inventory planning.",
            "Optimize operational costs.",
            "Increase customer satisfaction.",
            "Review marketing campaigns.",
            "Focus on high-performing products."
        ]
