import json
import os


class SemanticEngine:

    def __init__(self):

        base = os.path.dirname(__file__)

        with open(
            os.path.join(base, "mappings", "Metric_Map.json"),
            "r",
            encoding="utf-8",
        ) as f:
            self.metric_map = json.load(f)

    def normalize_question(self, question: str):

        updated_question = question

        for metric, synonyms in self.metric_map.items():

            for word in synonyms:

                if word.lower() in updated_question.lower():

                    updated_question = updated_question.replace(
                        word,
                        metric
                    )

        return updated_question
