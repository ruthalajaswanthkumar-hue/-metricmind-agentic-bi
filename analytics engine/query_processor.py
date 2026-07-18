
"""
Query Processor

Extracts important information from user questions.
"""

class QueryProcessor:

    def extract(self, query):

        return {
            "query": query,
            "metric": None,
            "dimension": None,
            "time": None,
            "status": "Processing"
        }
