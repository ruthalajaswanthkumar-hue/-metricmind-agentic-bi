
from business_rules import BusinessRules
from chart_selector import ChartSelector
from response_formatter import ResponseFormatter

print("===== MetricMind Analytics Engine Test =====")

# Business Rules
profit = BusinessRules.calculate_profit(100000, 70000)
margin = BusinessRules.calculate_margin(profit, 100000)
growth = BusinessRules.calculate_growth(120000, 100000)

print("Profit:", profit)
print("Margin:", margin)
print("Growth:", growth)

# Chart Selection
chart = ChartSelector.get_chart("Revenue")
print("Chart:", chart)

# Response Formatter
data = [
    {"Month": "January", "Revenue": 50000},
    {"Month": "February", "Revenue": 60000}
]

response = ResponseFormatter.format_response(
    title="Monthly Revenue",
    metric="Revenue",
    chart=chart,
    data=data
)

print("\nFormatted Response:")
print(response)
