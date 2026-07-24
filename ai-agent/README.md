
# 🤖 MetricMind AI Agent

## Overview

The AI Agent is the intelligence layer of the MetricMind Agentic Semantic BI Engine.

It converts natural language business questions into SQL queries, understands business terminology using the Semantic Layer, communicates with the backend, and returns structured responses for analytics and dashboard generation.

The AI Agent acts as the bridge between users and the database without requiring SQL knowledge.

---

# Features

- Natural Language Processing
- Text-to-SQL Generation
- Semantic Understanding
- Business Metric Recognition
- Chart Recommendation Support
- AI-powered Query Interpretation
- Backend Integration
- Analytics Engine Integration
- Error Handling
- Prompt Engineering
- Logging Support

---

# Technology Stack

- Python 3.12+
- LangChain
- FastAPI
- SQL
- Snowflake
- SQLite (Development)
- Pydantic
- Uvicorn

---

# Project Structure

```
ai-agent/
│
├── prompts/
│
├── services/
│
├── utils/
│
├── text_to_sql.py
├── sql_validator.py
├── prompt_builder.py
├── chart_recommender.py
├── logger.py
├── config.py
├── requirements.txt
└── README.md
```

---

# AI Workflow

```
User Question
      │
      ▼
Prompt Builder
      │
      ▼
Large Language Model
      │
      ▼
Generated SQL
      │
      ▼
SQL Validator
      │
      ▼
Semantic Layer
      │
      ▼
Database
      │
      ▼
Analytics Engine
      │
      ▼
Dashboard Response
```

---

# Responsibilities

The AI Agent is responsible for:

- Understanding business questions
- Identifying metrics
- Identifying dimensions
- Building prompts
- Generating SQL queries
- Validating generated SQL
- Passing SQL to the backend
- Suggesting suitable visualizations
- Returning structured responses

---

# Supported Business Metrics

- Revenue
- Profit
- Orders
- Customers
- Sales
- Profit Margin
- Quantity Sold
- Discount

---

# Supported Dimensions

- Product
- Category
- Region
- Customer
- Date
- City
- State

---

# Example Questions

### Revenue

```
Show total revenue.
```

---

### Sales

```
Show monthly sales.
```

---

### Profit

```
Which product has the highest profit?
```

---

### Customer

```
Show customer growth.
```

---

### Region

```
Show revenue by region.
```

---

# AI Processing Steps

1. Receive user question.
2. Build optimized system prompt.
3. Send prompt to LLM.
4. Generate SQL query.
5. Validate SQL syntax.
6. Map business terms using Semantic Layer.
7. Send SQL to Backend.
8. Receive database results.
9. Return structured response.
10. Recommend visualization type.

---

# Prompt Engineering

The AI Agent uses three prompt layers:

### System Prompt

Defines AI behaviour and business rules.

### SQL Prompt

Converts natural language into SQL.

### Analysis Prompt

Generates business insights from query results.

---

# Error Handling

The AI Agent handles:

- Invalid questions
- Empty questions
- Invalid SQL
- Database errors
- AI generation failures
- Unsupported metrics
- Unsupported dimensions

---

# Integration

The AI Agent communicates with:

```
Frontend
     │
     ▼
Backend
     │
     ▼
AI Agent
     │
     ▼
Semantic Layer
     │
     ▼
Database
     │
     ▼
Analytics Engine
     │
     ▼
Frontend Dashboard
```

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the AI Agent

```bash
cd ai-agent
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run

```bash
python text_to_sql.py
```

or

```bash
uvicorn main:app --reload
```

---

# Requirements

- Python 3.12+
- LangChain
- FastAPI
- SQLAlchemy
- Snowflake Connector
- Pydantic
- Uvicorn

---

# Future Improvements

- Multi-language support
- Follow-up conversational queries
- AI memory
- Query optimisation
- Explain generated SQL
- Auto dashboard generation
- Voice query support

---

# Developers Checklist

Before committing code:

- Pull latest changes
- Test SQL generation
- Test prompt quality
- Validate SQL
- Verify semantic mapping
- Check chart recommendation
- Commit with meaningful messages

---

# Expected Output

The AI Agent returns a structured response such as:

```json
{
  "question": "Show monthly revenue",
  "generated_sql": "SELECT month, SUM(revenue) FROM sales GROUP BY month;",
  "recommended_chart": "Line Chart",
  "status": "success"
}
```

---

# Final Goal

The AI Agent should enable users to ask business questions in plain English and receive accurate SQL queries, business insights, and dashboard-ready responses without writing SQL manually.
