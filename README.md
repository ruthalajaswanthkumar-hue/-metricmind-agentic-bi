 #  MetricMind – Agentic Semantic BI Engine

> **An Enterprise Conversational Business Intelligence Platform powered by AI**

![Status](https://img.shields.io/badge/Status-Development-orange)
![Team](https://img.shields.io/badge/Team-6%20Members-blue)
![Framework](https://img.shields.io/badge/Frontend-Next.js-black)
![Backend](https://img.shields.io/badge/Backend-FastAPI-green)
![AI](https://img.shields.io/badge/AI-LangChain%20%7C%20Llama-red)

---

#  Project Overview

**MetricMind** is an enterprise-grade **Agentic Semantic Business Intelligence (BI) Engine** that allows business users to ask questions in natural language and receive accurate analytics, visualizations, and business insights.

Instead of writing SQL queries, users can simply ask:

> *"Why did European sales decrease last quarter?"*

The AI Agent understands the business context, converts the request into optimized SQL, retrieves data from the data warehouse, and generates interactive dashboards with meaningful explanations.

---

# Project Objectives

- Build an AI-powered Conversational BI platform
- Convert Natural Language into SQL
- Create a Semantic Layer for governed business metrics
- Generate interactive visualizations
- Provide trustworthy business insights
- Deliver enterprise-grade dashboard experience

---

#  System Architecture

```
                User
                  │
                  ▼
         Next.js Frontend
                  │
                  ▼
            FastAPI Backend
                  │
      ┌───────────┴───────────┐
      ▼                       ▼
 LangChain Agent         Semantic Layer
      │                       │
      ▼                       ▼
     Llama               Cube.dev / dbt
      │                       │
      └───────────┬───────────┘
                  ▼
             Snowflake Database
                  │
                  ▼
          Business Analytics
```

---

#  Tech Stack

## Frontend
- Next.js
- TypeScript
- Tailwind CSS
- React
- Recharts
- Framer Motion

## Backend
- FastAPI
- Python
- SQLAlchemy
- Pydantic

## Artificial Intelligence
- LangChain
- Llama 3
- Ollama

## Semantic Layer
- Cube.dev
- dbt

## Database
- Snowflake
- SQL

## Version Control
- Git
- GitHub

---

#  Repository Structure

```
METRICMIND-agentic-bi
│
├── src/                    # Frontend Source Code
├── public/                 # Static Assets
│
├── backend/                # FastAPI Backend
│
├── ai-agent/               # LangChain + Llama
│
├── semantic-layer/         # Cube.dev & dbt
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
│   └── Coding_Guidelines.md
│
├── assets/
│
└── README.md
```

---

# Team Members

| Role | Member |
|------|--------|
|  Team Lead AND Analytics Engine & Dashboard Intelligence | **Ruthala Jaswanth Kumar** |
|  Frontend Developer | Preksha Acharya |
|  Backend Developer | Farhana Shaik |
|  AI Engineer | Vanshika |
|  Semantic Layer Engineer | SREERAJ K |
|  Database & Documentation | Neelum Nithusha |

---

#  Module Responsibilities

###  Frontend
- User Interface
- Dashboard
- Charts
- Chat UI
- Authentication

###  Backend
- REST APIs
- Database Integration
- Authentication
- Business Logic

###  AI Agent
- Prompt Engineering
- LangChain
- Llama Integration
- SQL Generation

###  Semantic Layer
- Business Metrics
- Dimensions
- Cube.dev
- dbt Models

###  Database
- ER Diagram
- SQL Schema
- Snowflake
- Documentation

---

#  Git Workflow

Every team member works on their own feature branch.

```
main
│
├── develop
│
├── feature/frontend
├── feature/backend
├── feature/ai-agent
├── feature/semantic-layer
└── feature/database
```

All changes must be submitted through **Pull Requests** before merging into `develop` or `main`.

---

#  Development Status

| Module | Status |
|---------|--------|
| Repository Setup |  Completed |
| Frontend Setup |  In Progress |
| Backend Setup |  In Progress |
| AI Agent |  In Progress |
| Semantic Layer |  In Progress |
| Database Design |  In Progress |

---

#  Development Rules

- Create a separate branch for your assigned module.
- Commit your work daily.
- Use meaningful commit messages.
- Push changes before 10:00 PM every day.
- Never push directly to the `main` branch.
- Update documentation whenever new features are added.

---

#  Expected Deliverables

- AI Chat Interface
- Semantic Layer
- SQL Generator
- Business Dashboard
- Interactive Charts
- Snowflake Integration
- Enterprise Analytics Platform

---

#  License

This project is developed as part of the **Axlero Solutions Advanced Data Analytics Internship Program**.

© 2026 Axlero Solutions Internship Team.
#  MetricMind – Agentic Semantic BI Engine

> Enterprise-grade AI-powered Business Intelligence System  
> Axlero Solutions Internship Project (Project 1)

 

##  Project Overview

MetricMind is an AI-powered Business Intelligence (BI) platform that allows users to ask business questions in natural language and receive accurate insights, SQL-generated results, and interactive visualizations.

Instead of writing SQL manually, users can ask questions such as:

> "Why did European sales drop last quarter?"

The system intelligently:

- Understands the business question
- Uses a Semantic Layer for governed metrics
- Generates optimized SQL
- Retrieves data from the warehouse
- Explains the results
- Displays interactive charts

 

##  Project Objectives

- Build an Agentic AI-powered BI assistant
- Implement a governed Semantic Layer
- Convert Natural Language → SQL
- Generate business insights with AI
- Display interactive dashboards and charts

---

#  System Architecture

```
User
   │
   ▼
Frontend (Next.js)
   │
   ▼
Backend (FastAPI)
   │
   ▼
AI Agent (LangChain + Llama)
   │
   ▼
Semantic Layer (dbt + Cube.dev)
   │
   ▼
Database / Warehouse
   │
   ▼
Business Insights & Charts
```

---

#  Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | Next.js |
| Backend | FastAPI |
| AI Framework | LangChain |
| LLM | Llama |
| Semantic Layer | dbt, Cube.dev |
| Data Warehouse | Snowflake |
| Database | SQL |
| Version Control | Git & GitHub |

---

#  Repository Structure

```
metricmind-agentic-bi/
│
├── frontend/
├── backend/
├── ai-agent/
├── semantic-layer/
├── database/
├── visualization/
├── docs/
├── assets/
└── README.md
```

---

#  Team Details

## Team Lead

**RUTHALA JASWANTH KUMAR**

## Team Members

- Preksha Acharya
- Sreeraj K
- Vanshika
- Neelum Nithusha
- Farhana Shaik

---

#  Current Status

 Phase 1 – Project Planning & Repository Setup

Current Tasks:

- Repository Setup
- Team Collaboration
- Project Architecture
- Requirement Analysis
- Module Distribution

---

#  Upcoming Milestones

- Frontend Development
- Backend APIs
- AI Agent Development
- Semantic Layer Integration
- Database Integration
- Interactive Visualizations
- Final Deployment

---

##  Internship

**Organization:** Axlero Solutions

**Project:** MetricMind – Agentic Semantic BI Engine

**Duration:** 1 Month

---

## ⭐ Project Vision

Build a production-ready conversational Business Intelligence platform that enables business users to obtain accurate insights using natural language while ensuring governance, explainability, and scalability.
