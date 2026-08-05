from semantic_engine import SemanticEngine

engine = SemanticEngine()
dashboard = DashboardEngine()
print(engine.normalize_question("Show Income by Region"))

print(engine.normalize_question("Show Earnings"))

print(engine.normalize_question("Show Buyers"))
