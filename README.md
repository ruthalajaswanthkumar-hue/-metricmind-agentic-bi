 # MetricMind

## Agentic Semantic Business Intelligence Platform

<p align="center">

**AI-Powered Conversational Business Intelligence Platform**

Transform business data into actionable insights through natural-language interaction, intelligent analytics, interactive dashboards, and AI-powered business intelligence.

</p>

---

##  Overview

**MetricMind** is an AI-powered Business Intelligence platform designed to help businesses analyze their data without requiring users to manually write SQL queries or navigate complicated analytical systems.

The platform combines:

*  Artificial Intelligence
*  Natural-language business queries
*  Interactive dashboards
*  Business analytics
*  AI-generated insights
*  Structured business databases
*  User authentication
*  KPI monitoring
*  Reports and data visualization

The main goal of MetricMind is to allow a user to simply ask a business question in natural language and receive meaningful analytical results.

### Example

Instead of writing:

```sql
SELECT SUM(total_amount)
FROM orders
WHERE region = 'South';
```

a user can ask:

> "What is the total revenue generated in the South region?"

MetricMind is designed to understand the question, identify the relevant business data, generate the required query, execute the analysis, and present the result in an understandable format.

---

#  Project Objective

Traditional Business Intelligence systems often require users to understand:

* SQL
* Database schemas
* Data warehouses
* BI tools
* Dashboard configuration
* Data modeling
* Analytical queries

MetricMind aims to simplify this process.

### Traditional BI

```text
Business User
      ↓
BI Tool
      ↓
Select Dataset
      ↓
Create Query
      ↓
Create Visualization
      ↓
Analyze Result
```

### MetricMind

```text
Business User
      ↓
Natural Language Question
      ↓
AI Agent
      ↓
Understand Intent
      ↓
Generate SQL
      ↓
Query Database
      ↓
Analyze Result
      ↓
Generate Insight
      ↓
Interactive Visualization
```

---
<img width="1919" height="955" alt="Screenshot 2026-08-15 223817" src="https://github.com/user-attachments/assets/ce8c0db2-3bb2-4e51-8f15-fbd3df4b05ea" />
<img width="1919" height="735" alt="Screenshot 2026-08-15 223831" src="https://github.com/user-attachments/assets/bbd2a723-2a7c-4fd2-b2c0-52750b07445f" />
<img width="1891" height="762" alt="Screenshot 2026-08-15 223840" src="https://github.com/user-attachments/assets/bc81ab5d-3715-4e96-9d4a-2486651046b0" />
<img width="1913" height="957" alt="Screenshot 2026-08-15 223851" src="https://github.com/user-attachments/assets/ab352b7b-c0a3-4b35-bcdf-07972c1b4907" />
#  Core Features

## 1. AI-Powered Business Analytics

Users can communicate with the system using natural language.

Example questions:

```text
What is our total revenue?

Which region has the highest sales?

Show me monthly sales growth.

Which category is performing best?

What are the top-selling products?

Why did revenue decrease this month?
```

The platform is designed to convert these questions into analytical operations.

---

## 2. Conversational AI Interface

MetricMind provides a conversational interface where users can interact with the analytics system.

The chat interface contains:

* User messages
* AI responses
* Loading/typing animation
* Suggested questions
* Business insights
* Charts
* Dashboard information

The objective is to make business analytics feel like a conversation rather than a traditional BI workflow.

---

#  Dashboard

The MetricMind dashboard provides a centralized view of business performance.

The dashboard is designed to display:

### KPI Cards

Examples include:

* Total Revenue
* Total Sales
* Total Orders
* Average Order Value
* Total Customers
* Revenue Growth

### Charts

Examples:

* Sales trend
* Revenue trend
* Regional sales
* Category performance
* Product performance
* Monthly performance

### Dashboard Filters

Users can filter analytical results by:

* Region
* Category
* Date
* Other available business dimensions

---

#  AI Insights

MetricMind is designed to go beyond simply displaying numbers.

The AI layer can generate meaningful business observations such as:

> "The South region generated the highest revenue during the selected period."

or:

> "Technology products contributed the largest share of sales."

The objective is to convert raw analytical results into understandable business insights.

---
<img width="1919" height="955" alt="Screenshot 2026-08-15 223930" src="https://github.com/user-attachments/assets/89515acc-4bf7-4393-b10c-619c292a93ac" />
<img width="1919" height="960" alt="Screenshot 2026-08-15 223943" src="https://github.com/user-attachments/assets/82a951b2-1a83-47db-9605-0c14d9fe7036" />
<img width="1894" height="893" alt="Screenshot 2026-08-15 223958" src="https://github.com/user-attachments/assets/58f75bdb-e7d2-4291-999a-57b0dbfd27ca" />
<img width="1429" height="770" alt="Screenshot 2026-08-05 065513" src="https://github.com/user-attachments/assets/be19e529-18ad-48bb-96ce-ba74eb89ce21" />
#  AI Chat Architecture

The conversational analytics flow is designed as follows:

```text
User
 |
 | Natural Language Question
 ↓
Next.js Chat Interface
 |
 ↓
FastAPI Backend
 |
 ↓
AI Agent
 |
 ↓
Intent Understanding
 |
 ↓
Text-to-SQL
 |
 ↓
Database
 |
 ↓
Query Result
 |
 ↓
AI Analysis
 |
 ↓
Chart / KPI / Insight
 |
 ↓
Frontend
```
<img width="1899" height="886" alt="Screenshot 2026-08-15 224016" src="https://github.com/user-attachments/assets/d09d7ec4-2f72-4d3a-8ed1-56cc9a58f396" />
<img width="1868" height="907" alt="Screenshot 2026-08-15 224028" src="https://github.com/user-attachments/assets/513f8a93-e846-4647-b34c-7d0474feac47" />
<img width="1895" height="899" alt="Screenshot 2026-08-15 224043" src="https://github.com/user-attachments/assets/fdd1a441-1693-4ee6-bbe1-2db277af80be" />
<img width="1919" height="958" alt="Screenshot 2026-08-15 224054" src="https://github.com/user-attachments/assets/86d9052d-3853-4c58-aba6-45453fa4bdc6" />




---

#  System Architecture

```text
                    ┌──────────────────────┐
                    │       User           │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Next.js Frontend  │
                    │                      │
                    │  Landing Page        │
                    │  Login               │
                    │  Dashboard           │
                    │  Chat                │
                    │  Settings            │
                    │  Profile             │
                    └──────────┬───────────┘
                               │
                         HTTP / REST API
                               │
                               ▼
                    ┌──────────────────────┐
                    │    FastAPI Backend   │
                    │                      │
                    │  Chat API             │
                    │  Dashboard API        │
                    │  Chart API            │
                    │  Health API           │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      AI Agent        │
                    │                      │
                    │ Intent Understanding │
                    │ Text-to-SQL          │
                    │ Analysis             │
                    │ Insights              │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       Database       │
                    │                      │
                    │ Customers            │
                    │ Products             │
                    │ Orders               │
                    │ Sales                │
                    │ Regions              │
                    │ Categories           │
                    │ Dates                │
                    └──────────────────────┘
```

---

#  Technology Stack

## Frontend

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Framer Motion**
* **React Icons**
* **Recharts / Chart Libraries**

The frontend is responsible for:

* User interface
* Navigation
* Authentication UI
* Dashboard
* Charts
* Chat interface
* Settings
* Profile
* Responsive design

---

## Backend

* **Python**
* **FastAPI**
* **SQLAlchemy**
* **AI Agent**
* **Text-to-SQL processing**

The backend handles:

* API requests
* Database communication
* AI processing
* SQL generation
* Dashboard data
* Chart data
* Business analysis

---

## AI / LLM

MetricMind is designed around a local or configurable Large Language Model.

Models used during development include:

* `gemma3:1b`
* `llama3.2:1b`

The local model server can be provided through:

**Ollama**

Typical development setup:

```text
Ollama
   ↓
Local LLM
   ↓
AI Agent
   ↓
Text-to-SQL
```

---

## Database

The current development environment uses:

* SQLite
* SQLAlchemy

 

#  Authentication

MetricMind includes a basic frontend authentication/session mechanism.

The current development implementation stores session information in browser `localStorage`.

After successful login:

```text
isLoggedIn = true
```

and user information is stored as:

```json
{
  "name": "Ruthala Jaswanth Kumar",
  "email": "user@example.com"
}
```

The dashboard checks the login state before displaying protected content.

---

#  Login Flow

```text
Landing Page
      |
      ↓
Get Started
      |
      ↓
Login Page
      |
      ↓
Enter Email + Password
      |
      ↓
Create Local Session
      |
      ↓
Dashboard
```

---

#  Logout Flow

The logout process:

```text
Dashboard
    |
    ↓
Settings
    |
    ↓
Logout
    |
    ↓
Confirm Logout
    |
    ↓
Remove Session
    |
    ↓
Redirect to /login
```

The session values removed include:

```text
isLoggedIn
user
userEmail
```

---

#  Settings

The MetricMind settings section provides several application controls.

## Profile

Displays account information.

## Notifications

Notification settings include:

* Email Notifications
* Report Alerts
* AI Updates

Each option can be enabled or disabled.

## Theme

MetricMind supports:

* Light mode
* Dark mode

The selected theme is stored in browser local storage.

---

#  Theme System

The application uses a dark/light theme mechanism.

The theme is stored as:

```text
theme = dark
```

or:

```text
theme = light
```

Tailwind's dark mode classes are used throughout the interface.

---

#  Landing Page

The MetricMind landing page introduces the platform.

The hero section contains:

### Badge

```text
🚀 AI Powered Analytics Platform
```

### Main Heading

```text
Transform Your
Business Data
Into Insights
```

### Description

The landing page explains that MetricMind helps businesses analyze revenue, monitor KPIs, generate AI insights, and make smarter decisions.

### Buttons

#### Get Started

Navigates to:

```text
/login
```

#### Learn More

Smoothly scrolls to:

```text
#features
```

---

 
#  ChatBox

The ChatBox is the primary conversational analytics interface.

Main components include:

```text
ChatBox
ChatInput
MessageBubble
AIResponse
TypingAnimation
```

The chat flow is:

```text
User enters question
        ↓
ChatInput
        ↓
ChatBox
        ↓
FastAPI /chat
        ↓
AI Agent
        ↓
SQL
        ↓
Database
        ↓
Result
        ↓
AIResponse
        ↓
Chart / Insight
```

---

#  AI Response

The AI response component can display:

* Text insights
* KPI cards
* Revenue charts
* Sales charts
* Region charts
* Recommended chart type
* Business recommendations

Example response structure:

```text
Question
   ↓
Answer
   ↓
Insight
   ↓
Visualization
   ↓
Recommendation
 

  
#  Future Improvements

MetricMind can be expanded with:

### Authentication

* Real user registration
* Password hashing
* Email verification
* Password reset
* OAuth
* Role-based access

### AI

* Better LLM models
* Multi-step AI agents
* Query validation
* Query optimization
* Automated recommendations
* Forecasting
* Anomaly detection

### Business Intelligence

* Advanced KPI builder
* Custom dashboards
* Drill-down analytics
* Date comparisons
* Forecast charts
* What-if analysis

### Reporting

* Automated reports
* Scheduled reports
* PDF generation
* Excel export
* Email reports

### Enterprise

* Multi-tenant architecture
* Team workspaces
* User roles
* Permissions
* Audit logs
* Cloud deployment

---

#  Production Security Considerations

Before deploying MetricMind to production, the following should be implemented:

* Secure authentication
* Password hashing
* HTTP-only cookies
* CSRF protection where applicable
* Input validation
* SQL injection protection
* AI-generated SQL validation
* Rate limiting
* API authentication
* Environment variable protection
* Database backups
* Logging
* Monitoring

AI-generated SQL should never be executed blindly in a production environment.

A validation layer should verify that generated queries are safe before execution.

---

#  Production Architecture

A possible production architecture:

```text
                    Users
                      |
                      ↓
                HTTPS / CDN
                      |
                      ↓
              Next.js Frontend
                      |
                      ↓
                API Gateway
                      |
                      ↓
               FastAPI Backend
                      |
          ┌───────────┼───────────┐
          ↓           ↓           ↓
       AI Agent    Database    Cache
          |
          ↓
        LLM
          |
          ↓
   Analytics Engine
          |
          ↓
      BI Results
```

---

#  Example Business Questions

MetricMind should eventually support questions such as:

```text
What is our total revenue?

Which region has the highest sales?

What are the top five products?

Which category generates the most revenue?

Show monthly revenue.

What was our best-performing month?

Which customers placed the most orders?

Compare sales between regions.

What products are declining?

What are the latest orders?

Give me a summary of business performance.

Why did sales decrease?

What should the business focus on next?
```

---

# 🎯 Expected User Experience

A business user should be able to enter MetricMind and do the following:

```text
1. Login
      ↓
2. Open Dashboard
      ↓
3. View KPIs
      ↓
4. View Charts
      ↓
5. Ask a business question
      ↓
6. AI understands the question
      ↓
7. AI retrieves relevant data
      ↓
8. AI generates an insight
      ↓
9. User receives visualization
      ↓
10. User makes a business decision
```

---

#  Project Value

MetricMind combines several modern technologies into a single Business Intelligence platform.

It demonstrates concepts including:

* Artificial Intelligence
* Natural Language Processing
* Generative AI
* Text-to-SQL
* Business Intelligence
* Data Analytics
* Data Modeling
* Database Systems
* REST APIs
* Full-stack development
* Data Visualization
* Interactive Dashboards
* Authentication
* Modern Web Development

---

#  Learning Outcomes

Developing MetricMind provides practical experience in:

### Frontend Development

```text
React
Next.js
TypeScript
Tailwind CSS
Framer Motion
```

### Backend Development

```text
Python
FastAPI
REST APIs
SQLAlchemy
```

### Data

```text
SQL
SQLite
Data Modeling
Fact Tables
Dimension Tables
Data Cleaning
```

### AI

```text
LLMs
Ollama
LangChain
Text-to-SQL
AI Agents
Natural Language Analytics
```

### Business Intelligence

```text
KPIs
Charts
Dashboards
Reports
Business Insights
```

---

 
### In Development / Further Integration

* Complete production authentication
* Fully dynamic profile editing
* Advanced AI insights
* Complete text-to-SQL pipeline
* Advanced dashboard filtering
* Report generation
* Export functionality
* Live updates
* Production deployment

---

#  Development Philosophy

MetricMind follows the principle:

> **Ask questions naturally. Understand the data intelligently. Make decisions confidently.**

The goal is not simply to create another dashboard.

The goal is to create an **AI-powered business intelligence assistant** that allows users to communicate with their business data naturally.

---

#  License

This project is developed as an academic/project implementation.

License information can be added here when the final repository licensing decision is made.

---
\*

