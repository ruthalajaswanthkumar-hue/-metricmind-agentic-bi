 from analytics_engine.analytics_pipeline import AnalyticsPipeline


class DashboardEngine:

    @staticmethod
    def generate_chart_data(rows):

        if not isinstance(rows, list):
            rows = [rows]

        bar = []
        line = []
        pie = []

        for i, row in enumerate(rows):

            # Revenue Chart
            bar.append({
                "name": row.get("Month", f"Item {i+1}"),
                "value": row.get("Revenue", row.get("Total_Revenue", 0))
            })

            # Sales Trend
            line.append({
                "name": row.get("Month", f"Item {i+1}"),
                "value": row.get("Orders", 0)
            })

            # Region Distribution
            if "Region" in row:
                pie.append({
                    "name": row["Region"],
                    "value": row.get("Revenue", 0)
                })

        # KPI Pie Chart
        if not pie and rows:

            row = rows[0]

            pie = [
                {
                    "name": "Revenue",
                    "value": row.get("Revenue", 0),
                },
                {
                    "name": "Profit",
                    "value": row.get("Profit", 0),
                },
                {
                    "name": "Orders",
                    "value": row.get("Orders", 0),
                },
                {
                    "name": "Customers",
                    "value": row.get("Customers", 0),
                },
            ]

        return {
            "bar": bar,
            "line": line,
            "pie": pie,
        }

    @staticmethod
    def dashboard_summary(data):

        revenue = data.get("Revenue", 0)
        profit = data.get("Profit", 0)
        orders = data.get("Orders", 0)
        customers = data.get("Customers", 0)

        chart_data = DashboardEngine.generate_chart_data(data)

        return {

            "dashboard": {

                "cards": [

                    {
                        "title": "Revenue",
                        "value": revenue
                    },

                    {
                        "title": "Profit",
                        "value": profit
                    },

                    {
                        "title": "Orders",
                        "value": orders
                    },

                    {
                        "title": "Customers",
                        "value": customers
                    }

                ]

            },

            "chart_data": chart_data,

            "recommended_chart": {

                "Revenue": "Column Chart",
                "Profit": "Column Chart",
                "Orders": "Line Chart",
                "Customers": "Pie Chart"

            },

            "analytics": {

                "data": data,

                "insights": [

                    f"Total revenue generated: ₹{revenue:,.2f}",

                    f"Total profit generated: ₹{profit:,.2f}",

                    f"Total customers: {customers}",

                    f"Total orders: {orders}"

                ],

                "recommendations": [

                    "Increase focus on high-profit products.",

                    "Improve customer retention through loyalty programs.",

                    "Monitor sales trends regularly.",

                    "Optimize pricing and inventory."

                ]

            }

        }
