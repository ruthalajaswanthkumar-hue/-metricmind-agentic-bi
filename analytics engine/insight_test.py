"""
Insight Generator Test
"""

from insight_generator import InsightGenerator

print(
    InsightGenerator.generate(
        "Revenue",
        600000,
        500000
    )
)

print(
    InsightGenerator.region_insight("South")
)

print(
    InsightGenerator.customer_insight(250)
)

print(
    InsightGenerator.order_insight(420)
)

print(
    InsightGenerator.recommendation()
)
