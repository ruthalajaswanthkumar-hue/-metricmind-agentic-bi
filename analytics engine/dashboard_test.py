
"""
Dashboard Engine Test
"""

from dashboard_engine import DashboardEngine

sample_data = {
    "Revenue": 500000,
    "Profit": 120000,
    "Orders": 350,
    "Customers": 200
}

dashboard = DashboardEngine.dashboard_summary(sample_data)

print("Dashboard Summary")
print(dashboard)
