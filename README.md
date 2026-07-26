 #  MetricMind – Agentic Semantic BI Engine
 
 

> **Enterprise-grade AI-powered Conversational Business Intelligence Platform**

![Status](https://img.shields.io/badge/Status-Development-orange)
![Team](https://img.shields.io/badge/Team-6%20Members-blue)
![Frontend](https://img.shields.io/badge/Frontend-Next.js-black)
![Backend](https://img.shields.io/badge/Backend-FastAPI-green)
![AI](https://img.shields.io/badge/AI-LangChain%20%7C%20Llama-red)
![Database](https://img.shields.io/badge/Database-Snowflake-blue)
![License](https://img.shields.io/badge/Internship-Axlero%20Solutions-success

---

#  Project Overview

**MetricMind** is an Enterprise AI-powered Business Intelligence (BI) platform that enables business users to ask questions in natural language and instantly receive accurate analytics, visualizations, and business insights.

Instead of writing SQL queries manually, users can simply ask:

> **"Why did European sales decrease last quarter?"**

MetricMind intelligently:

-  Understands the business question
-  Converts Natural Language into SQL
-  Uses a Semantic Layer for governed metrics
-  Retrieves data from Snowflake
-  Generates interactive dashboards
-  Provides AI-generated business insights

---

#  Project Objectives

- Build an AI-powered Conversational BI Platform
- Convert Natural Language → SQL
- Create an Enterprise Semantic Layer
- Generate Interactive Visualizations
- Provide Explainable Business Insights
- Deliver Enterprise Dashboard Experience
- Build a Modular & Scalable Architecture

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
                          ▼
             AI Agent (LangChain + Llama)
                          │
                          ▼
          Semantic Layer (dbt + Cube.dev)
                          │
                          ▼
             Snowflake Data Warehouse
                          │
                          ▼
      Analytics Engine & Dashboard Intelligence
          ├── KPI Generator
          ├── Metric Processor
          ├── Business Rule Engine
          ├── Trend Analyzer
          ├── Insight Generator
          ├── Chart Selector
          └── Response Formatter
                          │
                          ▼
      Interactive Dashboard & Business Insights
```

---

#  Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | Next.js, React, TypeScript, Tailwind CSS |
| Backend | FastAPI, Python, SQLAlchemy, Pydantic |
| AI | LangChain, Llama 3, Ollama |
| Semantic Layer | dbt, Cube.dev |
| Analytics Engine | Python, Pandas, NumPy |
| Database | Snowflake, SQL |
| Charts | Recharts |
| Version Control | Git & GitHub |

---

#  Repository Structure

```text
METRICMIND-agentic-bi/
│
├── frontend/                 # Next.js Application
│
├── backend/                  # FastAPI APIs
│
├── ai-agent/                 # LangChain + Llama
│
├── semantic-layer/           # dbt & Cube.dev
│
├── analytics-engine/
│   ├── metrics/
│   ├── processors/
│   ├── insights/
│   ├── charts/
│   ├── rules/
│   └── formatter/
│
├── database/
│   ├── schema/
│   ├── datasets/
│   ├── queries/
│   ├── views/
│   └── er-diagram/
│
├── visualization/
│
├── docs/
│   ├── Architecture.md
│   ├── API_Contract.md
│   ├── Team_Roles.md
│   ├── Daily_Status.md
│   └── Coding_Guidelines.md
│
├── assets/
│
└── README.md
```

---

#  Team Members

| Role | Member |
|------|--------|
|  Team Lead | **Ruthala Jaswanth Kumar** |
|  Analytics Engine & Dashboard Intelligence | **Ruthala Jaswanth Kumar** |
|  Frontend Developer |  Neelum Nithusha|
|  Backend Developer |  vanshika |
|  AI Engineer | Vanshika |
|  Semantic Layer Engineer | Ruthala Jaswanth Kumar |
|  Database & Documentation | Neelum Nithusha |

---

#  Module Responsibilities

##  Frontend

- Landing Page
- Login Page
- Dashboard UI
- Chat Interface
- KPI Cards
- Charts
- Authentication

---

##  Backend

- REST APIs
- Business Logic
- Database Connectivity
- Authentication
- Error Handling
- Logging
- API Documentation

---

##  AI Agent

- Prompt Engineering
- LangChain Integration
- Llama Integration
- Natural Language Understanding
- SQL Generation

---

##  Semantic Layer

- Business Metrics
- Dimensions
- Cube.dev Models
- dbt Models
- Metric Governance

---

##  Database

- ER Diagram
- SQL Schema
- Data Warehouse
- Snowflake Integration
- Sample Datasets

---

##  Analytics Engine & Dashboard Intelligence

The Analytics Engine transforms raw SQL results into meaningful business insights.

Responsibilities:

- KPI Calculation
- Business Rule Processing
- Trend Analysis
- Insight Generation
- Chart Recommendation
- Dashboard Intelligence
- Metric Processing
- Executive Summary Generation
- Response Formatting

---

#  Analytics Engine Workflow

```text
SQL Result
      │
      ▼
Metric Processor
      │
      ▼
Business Rule Engine
      │
      ▼
Insight Generator
      │
      ▼
Chart Selector
      │
      ▼
Response Formatter
      │
      ▼
Dashboard JSON
      │
      ▼
Frontend Dashboard
```

---

#  Git Workflow

Every developer works in a separate feature branch.

```text
main
│
├── develop
│
├── feature/frontend
├── feature/backend
├── feature/ai-agent
├── feature/semantic-layer
├── feature/database
└── feature/analytics-engine
```

All code must be submitted through **Pull Requests** before merging.

---

#  Development Status

| Module | Status |
|---------|--------|
| Repository Setup |  Completed |
| Frontend |  In Progress |
| Backend |  In Progress |
| AI Agent |  In Progress |
| Semantic Layer |  In Progress |
| Database |  In Progress |
| Analytics Engine |  In Progress |

---

#  Development Rules

- Create a separate branch for your assigned module.
- Commit work every day.
- Use meaningful commit messages.
- Push before **10:00 PM**.
- Never push directly to `main`.
- Submit Pull Requests for review.
- Update documentation whenever new features are added.
- Follow project folder structure.

---

#  Expected Deliverables

- AI Chat Interface
- Natural Language → SQL
- Semantic Layer
- Snowflake Integration
- Analytics Engine
- KPI Recommendation Engine
- Business Rule Engine
- Dashboard Intelligence
- Interactive Charts
- Executive Business Insights
- Enterprise Dashboard

---

#  Future Scope

Future improvements planned for MetricMind include:

- Predictive Analytics
- AI Forecasting
- Anomaly Detection
- Voice-Based BI Assistant
- Role-Based Access Control
- Multi-Language Support
- Auto KPI Recommendations
- Real-Time Dashboard Updates
- AI Executive Reports
- Smart Dashboard Personalization

---

#  Internship Information

**Organization:** Axlero Solutions

**Project:** MetricMind – Agentic Semantic BI Engine

**Duration:** 1 Month

---

#  Project Vision

To build a **production-ready AI-powered Conversational Business Intelligence Platform** that enables business users to obtain accurate, explainable, and actionable insights using natural language while ensuring governance, scalability, and enterprise-grade performance.

---

# 📄 License

This project is developed as part of the **Axlero Solutions Advanced Data Analytics Internship Program**.

© 2026 Axlero Solutions Internship Team
