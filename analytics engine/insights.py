 
 
 """
Business Insight Generator
"""

class InsightGenerator:

    @staticmethod
    def generate(metric):

        insights = {

            "Revenue":
                "Revenue has shown positive growth compared to the previous period.",

            "Profit":
                "Profit margin remains healthy with stable operating costs.",

            "Sales":
                "Sales performance is increasing across major regions.",

            "Customers":
                "Customer acquisition continues to improve month over month.",

            "Orders":
                "Order volume indicates strong business demand.",

            "Growth":
                "Business growth trend is positive based on recent performance."
        }

        return insights.get(metric, "No insights available.")
