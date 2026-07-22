"""
Dashboard Engine Test
Tests the complete Analytics Pipeline.
"""

from analytics_pipeline import AnalyticsPipeline

# Sample Business Data
sample_data = {
    "Revenue": 500000,
    "Profit": 120000,
    "Orders": 350,
    "Customers": 220
}

# Create Analytics Pipeline
pipeline = AnalyticsPipeline()

# Generate Dashboard
dashboard = pipeline.generate_dashboard(sample_data)

# Print Result
print(dashboard)
