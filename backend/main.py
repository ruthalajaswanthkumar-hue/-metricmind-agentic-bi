 import sys
import os

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(PROJECT_ROOT)


from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


from backend.api.charts import router as charts_router
from backend.core.middleware import RequestMiddleware
from backend.core.exception_handler import ExceptionHandler


from ai_agent.text_to_sql import generate_sql
from semantic_layer.semantic_engine import SemanticEngine

from backend.query_service import QueryService
from analytics_engine.dashboard_engine import DashboardEngine



semantic = SemanticEngine()
dashboard = DashboardEngine()



app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.add_exception_handler(
    404,
    ExceptionHandler.not_found
)



app.add_middleware(RequestMiddleware)


app.include_router(charts_router)



class ChatRequest(BaseModel):
    question: str
 
@app.post("/chat")
def chat(request: ChatRequest):

    try:


        # Semantic Layer

        normalized_question = semantic.normalize_question(
            request.question
        )



        # Generate SQL

        sql = generate_sql(normalized_question)



        # Force KPI SQL for dashboard questions

        if any(word in normalized_question.lower()
               for word in [
                    "revenue analysis",
                    "sales analysis",
                    "business overview",
                    "performance summary",
                    "dashboard"
               ]):


            sql = """
            SELECT
                SUM(SalesAmount) AS Revenue,
                SUM(Profit) AS Profit,
                COUNT(DISTINCT OrderID) AS Orders,
                COUNT(DISTINCT CustomerID) AS Customers
            FROM Sales;
            """



        print("RAW SQL:")
        print(repr(sql))



        # Clean SQL

        sql = sql.replace("```sql", "")
        sql = sql.replace("```", "")
        sql = sql.strip()


        upper_sql = sql.upper()



        if "SELECT" in upper_sql:

            sql = sql[
                upper_sql.index("SELECT"):
            ]



        if ";" in sql:

            sql = sql.split(";")[0] + ";"



        print("CLEAN SQL:")
        print(repr(sql))
 

        # Execute SQL

        result = QueryService.execute_query(sql)



        if not result["success"]:

            return result




        data = result["data"]



        # Convert list to dictionary

        if isinstance(data, list):

            data = data[0] if data else {}
 
        # Normalize KPI names


        for key in list(data.keys()):


            name = key.upper()



            if "REVENUE" in name or "SALESAMOUNT" in name:

                data["Revenue"] = data[key]



            elif "PROFIT" in name:

                data["Profit"] = data[key]



            elif "ORDER" in name:

                data["Orders"] = data[key]



            elif "CUSTOMER" in name:

                data["Customers"] = data[key]
 

        # Default values


        data.setdefault("Revenue",0)

        data.setdefault("Profit",0)

        data.setdefault("Orders",0)

        data.setdefault("Customers",0)
 
        # Dashboard Generation


        dashboard_result = dashboard.dashboard_summary(
            data
        )

 

        # -----------------------------
        # Chart Data
        # -----------------------------


        chart_data = {


            "bar": [

                {
                    "name": "Revenue",
                    "value": data["Revenue"]
                }

            ],



            "line": [

                {
                    "name": "Orders",
                    "value": data["Orders"]
                }

            ],



            "pie": [

                {
                    "name": "Revenue",
                    "value": data["Revenue"]
                },


                {
                    "name": "Profit",
                    "value": data["Profit"]
                },


                {
                    "name": "Orders",
                    "value": data["Orders"]
                },


                {
                    "name": "Customers",
                    "value": data["Customers"]
                }

            ]

        }

 

        return {


            "question": request.question,


            "normalized_question": normalized_question,


            "generated_sql": sql,


            "dashboard": {


                **dashboard_result,


                "chart_data": chart_data


            }


        }

 
    except Exception as e:


        print(
            "CHAT ERROR:",
            e
        )


        return {


            "success": False,


            "error": str(e)

        }

 
@app.get("/")
def root():

    return {

        "message": "MetricMind API is running"

    }

 
@app.get("/health")
def health():

    return {

        "status": "healthy"

    }
