 from analytics_engine.kpi_calculator import KPICalculator
from analytics_engine.trend_analyzer import TrendAnalyzer
from analytics_engine.insight_generator import InsightGenerator
from analytics_engine.recommendation_engine import RecommendationEngine
from analytics_engine.chart_selector import ChartSelector
from analytics_engine.response_formatter import ResponseFormatter


class AnalyticsPipeline:

    def generate_dashboard(self, data):

        # Convert SQL rows into one summary dictionary
        if isinstance(data, list):

            summary = {
                "Revenue": 0,
                "Profit": 0,
                "Orders": 0,
                "Customers": 0
            }

            for row in data:
                summary["Revenue"] += row.get("Revenue", 0)
                summary["Profit"] += row.get("Profit", 0)
                summary["Orders"] += row.get("Orders", 0)
                summary["Customers"] += row.get("Customers", 0)

            data = summary

        # KPIs
        revenue = KPICalculator.calculate_revenue(data)
        profit = KPICalculator.calculate_profit(data)
        orders = KPICalculator.calculate_orders(data)
        customers = KPICalculator.calculate_customers(data)

        kpis = {
            "Revenue": revenue,
            "Profit": profit,
            "Orders": orders,
            "Customers": customers
        }

        # Trends
        trends = {
            "Revenue": TrendAnalyzer.analyze(revenue, 450000),
            "Profit": TrendAnalyzer.analyze(profit, 100000),
            "Orders": TrendAnalyzer.analyze(orders, 300),
            "Customers": TrendAnalyzer.analyze(customers, 200)
        }

        # Insights
        insights = [
            InsightGenerator.generate("Revenue", revenue, 450000),
            InsightGenerator.generate("Profit", profit, 100000),
            InsightGenerator.customer_insight(customers),
            InsightGenerator.order_insight(orders)
        ]

        # Recommendations
        recommendations = [
            RecommendationEngine.generate("Revenue", trends["Revenue"]["trend"]),
            RecommendationEngine.generate("Profit", trends["Profit"]["trend"]),
            RecommendationEngine.generate("Orders", trends["Orders"]["trend"]),
            RecommendationEngine.generate("Customers", trends["Customers"]["trend"])
        ]

        # Charts
        charts = {
            "Revenue": ChartSelector.get_chart("Revenue"),
            "Profit": ChartSelector.get_chart("Profit"),
            "Orders": ChartSelector.get_chart("Orders"),
            "Customers": ChartSelector.get_chart("Customers")
        }

        return ResponseFormatter.format_response(
            title="Business Dashboard",
            metric="Business Analytics",
            chart=charts,
            data=data,
            insights=insights,
            kpis=kpis,
            recommendations=recommendations,
            trend=trends
        )
