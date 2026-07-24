
# API Contract

## Purpose

This document defines how different modules of the MetricMind platform communicate with each other. It ensures every component follows a common request and response structure during integration.

---

# System Flow

User
↓
Frontend
↓
Backend API
↓
AI Agent
↓
Semantic Layer
↓
Database
↓
Analytics Engine
↓
Frontend Dashboard

---

# Module Communication

## 1. Frontend → Backend

### Endpoint

POST /chat

### Request

```json
{
    "question": "Show monthly revenue"
}
```

### Response

```json
{
    "status": "success",
    "message": "Processing request"
}
```

---

## 2. Backend → AI Agent

Purpose

Convert user questions into structured business queries.

Example

Input

```json
{
    "question":"Show top selling products"
}
```

Output

```json
{
    "intent":"sales_analysis",
    "metric":"Revenue",
    "dimension":"Product"
}
```

---

## 3. AI Agent → Semantic Layer

Purpose

Validate business metrics before generating SQL.

Example

```json
{
    "metric":"Revenue",
    "dimension":"Category"
}
```

---

## 4. Semantic Layer → Database

Purpose

Generate valid SQL using approved business definitions.

Example SQL

```sql
SELECT
category,
SUM(sales_amount) AS revenue
FROM sales
GROUP BY category;
```

---

## 5. Database → Analytics Engine

Purpose

Return query results.

Example

```json
[
    {
        "category":"Electronics",
        "revenue":580000
    },
    {
        "category":"Furniture",
        "revenue":420000
    }
]
```

---

## 6. Analytics Engine → Frontend

Purpose

Prepare dashboard-ready response.

Example

```json
{
    "title":"Revenue by Category",
    "chart":"Bar Chart",
    "metric":"Revenue",
    "insight":"Electronics generated the highest revenue.",
    "data":[]
}
```

---

# Standard Response Format

Every API should follow this structure.

```json
{
    "status":"success",
    "message":"Request processed successfully",
    "data":{}
}
```

---

# Error Response

```json
{
    "status":"error",
    "message":"Invalid request"
}
```

---

# Future Integration

Frontend
↓

Backend

↓

AI Agent

↓

Semantic Layer

↓

Database

↓

Analytics Engine

↓

Dashboard

---

## Version

API Version : v1.0

Status : Development Phase
