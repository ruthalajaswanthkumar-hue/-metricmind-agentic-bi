
"""
Trend Analyzer
Analyzes business trends.
"""

class TrendAnalyzer:

    @staticmethod
    def analyze(current_value, previous_value):

        if current_value > previous_value:
            return {
                "trend": "Increasing",
                "direction": "Up",
                "percentage": round(((current_value - previous_value) / previous_value) * 100, 2)
            }

        elif current_value < previous_value:
            return {
                "trend": "Decreasing",
                "direction": "Down",
                "percentage": round(((previous_value - current_value) / previous_value) * 100, 2)
            }

        else:
            return {
                "trend": "Stable",
                "direction": "None",
                "percentage": 0
            }
