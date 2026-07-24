 from analytics_pipeline import AnalyticsPipeline

class DashboardEngine:

    @staticmethod
    def dashboard_summary(data):

        pipeline = AnalyticsPipeline()

        analytics = pipeline.generate_dashboard(data)

        dashboard = {

            "cards":[
                {
                    "title":"Revenue",
                    "value":data.get("Revenue",0)
                },
                {
                    "title":"Profit",
                    "value":data.get("Profit",0)
                },
                {
                    "title":"Orders",
                    "value":data.get("Orders",0)
                },
                {
                    "title":"Customers",
                    "value":data.get("Customers",0)
                }
            ],

            "charts":[
                "Bar Chart",
                "Line Chart",
                "Pie Chart"
            ]

        }

        return {

            "dashboard": dashboard,

            "analytics": analytics

        }
