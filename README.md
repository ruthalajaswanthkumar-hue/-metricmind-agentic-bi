 #  MetricMind – AI-Powered Conversational Business Intelligence Platform

> **An Enterprise Agentic Semantic BI Engine powered by AI, Analytics Intelligence, and Semantic Modeling**

![Status](https://img.shields.io/badge/Status-Development-orange)
![Team](https://img.shields.io/badge/Team-6%20Members-blue)
![Frontend](https://img.shields.io/badge/Frontend-Next.js-black)
![Backend](https://img.shields.io/badge/Backend-FastAPI-green)
![AI](https://img.shields.io/badge/AI-LangChain%20%7C%20Llama-red)

---

#  Project Overview

**MetricMind** is an enterprise-grade **AI-Powered Conversational Business Intelligence Platform** that combines **Natural Language Processing, Semantic Modeling, Analytics Intelligence, and Interactive Dashboards** to help organizations make data-driven decisions without writing SQL queries.

Users can ask business questions in natural language, and MetricMind intelligently processes the request, understands business context, retrieves the required data, generates meaningful insights, and presents the results through interactive dashboards.

---

#  Project Objectives

- Build an AI-powered Conversational BI platform.
- Convert Natural Language into SQL queries.
- Develop a Semantic Layer for governed business metrics.
- Build an Analytics Engine for KPI processing and business insights.
- Generate intelligent chart recommendations.
- Deliver interactive enterprise dashboards.
- Provide accurate, explainable business insights.

---

#  System Architecture

```text
                  User
                    │
                    ▼
           Next.js Frontend
                    │
                    ▼
            FastAPI Backend
                    │
          Query Processing API
                    │
      ┌─────────────┴─────────────┐
      ▼                           ▼
 AI Agent (LangChain)      Semantic Layer
      │                           │
      ▼                           ▼
   Analytics Engine         Cube.dev / dbt
      │                           │
      └─────────────┬─────────────┘
                    ▼
             Snowflake Database
                    │
                    ▼
         Business Insights & Dashboard
```

---

#  Tech Stack

## Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Recharts
- Framer Motion

##  Backend
- FastAPI
- Python
- SQLAlchemy
- Pydantic

##  Artificial Intelligence
- LangChain
- Llama 3
- Ollama

## 📊 Analytics Engine
- KPI Processing
- Business Rules Engine
- Insight Generation
- Chart Recommendation
- Response Formatter

##  Semantic Layer
- Cube.dev
- dbt

## Database
- Snowflake
- SQL

##  Version Control
- Git
- GitHub

---

#  Repository Structure

```text
METRICMIND-agentic-bi
│
├── frontend/
│
├── backend/
│
├── ai-agent/
│
├── analytics-engine/
│   ├── README.md
│   ├── dashboard_metrics.py
│   ├── chart_selector.py
│   ├── query_processor.py
│   ├── response_formatter.py
│   ├── insights.py
│   ├── business_rules.py
│   └── config.py
│
├── semantic-layer/
│
├── database/
│   ├── schema/
│   ├── datasets/
│   ├── queries/
│   ├── views/
│   └── er-diagram/
│
├── docs/
│   ├── Architecture.md
│   ├── API_Contract.md
│   ├── Team_Roles.md
│   ├── Daily_Status.md
│   ├── Coding_Guidelines.md
│   └── Meeting_Notes.md
│
├── assets/
│
└── README.md
```

---

#  Team Members

| Role | Member |
|------|--------|
|  Team Lead & Analytics Engineer | **Ruthala Jaswanth Kumar** |
|  Frontend Developer | **Preksha Acharya** |
|  Backend Developer | **Farhana Shaik** |
|  AI Engineer | **Vanshika** |
|  Semantic Layer Engineer | **SREERAJ K** |
|  Database Engineer | **Neelum Nithusha** |

---

#  Module Responsibilities

##  Frontend
- Landing Page
- Dashboard UI
- Charts
- AI Chat Interface
- Responsive Design
- API Integration

---

##  Backend
- REzT APIs
- Authentication
- Database Connectivity
- Business Logic
- API Documentation

---

##  AI Agent
- Prompt Engineering
- LangChain
- Llama Integration
- Natural Language Processing
- SQL Generation

---

##  Analytics Engine
- Query Processing
- Dashboard KPI Engine
- Business Rules
- Business Insight Generation
- Intelligent Chart Selection
- Response Formatting

---

##  Semantic Layer
- Business Metrics
- Business Dimensions
- Cube.dev Models
- dbt Models
- Metadata Management

---

##  Database
- Snowflake Database
- SQL Schema
- ER Diagram
- Sample Dataset
- Database Optimization

---

#  Git Workflow

Each team member works on a dedicated branch.

```text
main
│
├── frontend
├── backend
├── ai-agent
├── analytics-engine
├── semantic-layer
└── database
```

All completed work should be reviewed before being merged into the **main** branch.

---

#  Development Status

| Module | Status |
|---------|--------|
| Repository Setup | ✅ Completed |
| Frontend | 🚧 In Progress |
| Backend | 🚧 In Progress |
| AI Agent | 🚧 In Progress |
| Analytics Engine | 🚧 In Progress |
| Semantic Layer | 🚧 In Progress |
| Database | 🚧 In Progress |

---

#  Development Guidelines

- Work only in your assigned branch.
- Commit your work daily with meaningful commit messages.
- Keep your module organized.
- Update documentation whenever new functionality is added.
- Never push directly to the **main** branch.
- Test your work before committing.

---

#  Expected Deliverables

- AI Conversational Interface
- Analytics Engine
- Semantic Layer
- Natural Language to SQL Conversion
- Enterprise Dashboard
- Intelligent KPI Cards
- Interactive Visualizations
- Business Insight Generator
- Snowflake Integration

---

#  License

This project is developed as part of the **Axlero Solutions – Advanced Data Analytics Internship Program**.

© 2026 Axlero Solutions Internship Team.
