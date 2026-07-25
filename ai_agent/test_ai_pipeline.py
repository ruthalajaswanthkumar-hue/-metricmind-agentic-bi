from text_to_sql import generate_sql
from insight_generator import generate_insight
from recommendation_engine import generate_recommendation
from chart_recommandation import recommend_chart
sample_data = {
    "revenue": 250000,
    "growth": "15%",
    "region": "North"
}
question = "Monthly revenue"
sql = generate_sql(question)

chart = recommend_chart(question)

insight = generate_insight(sample_data)

recommendation = generate_recommendation(sample_data)
print("=" * 50)
print("Question:")
print(question)

print("\nGenerated SQL:")
print(sql)

print("\nRecommended Chart:")
print(chart)

print("\nBusiness Insight:")
print(insight)

print("\nRecommendation:")
print(recommendation)

print("=" * 50)