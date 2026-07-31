# MetricMind Backend API Documentation

## Base URL

```
http://127.0.0.1:8000
```

-

# 1. Root API

### Endpoint

```
GET /
```

### Description

Returns a welcome message.

### Response

```json
{
    "message": "Welcome to MetricMind Backend API"
}
```

---

# 2. Health API

### Endpoint

```
GET /health
```

### Description

Checks whether the backend is running.

### Response

```json
{
    "status": "healthy"
}
```

---

# 3. Chat API

### Endpoint

```
POST /chat
```

### Description

Accepts a business question and returns:

- Generated SQL
- Recommended chart
- AI insight
- Recommendation

### Request

```json
{
    "question": "Show revenue by region"
}
```

### Response

```json
{
    "question": "Show revenue by region",
    "generated_sql": "...",
    "chart": "Bar",
    "insight": "...",
    "recommendation": "..."
}
```

---

# 4. Charts API

### Endpoint

```
GET /charts
```

### Description

Returns chart data for the frontend dashboard.

### Response

```json
{
    "status": "success",
    "charts": {
        "bar": [...],
        "line": [...],
        "pie": [...]
    }
}
```
---

# Error Responses

## 400 Bad Request

Returned when the request is invalid.

Example

```json
{
    "success": false,
    "error": "Invalid request."
}
```

---

## 404 Not Found

Returned when the endpoint does not exist.

---

## 422 Validation Error

Returned when the request body fails validation.

Example

```json
{
    "detail": [
        {
            "msg": "Question cannot be empty."
        }
    ]
}
```

---

## 500 Internal Server Error

Returned when an unexpected server error occurs.

Example

```json
{
    "success": false,
    "error": "Internal Server Error"
}
```
---

# API Flow

```text
Frontend
    │
    ▼
FastAPI Backend
    │
    ▼
AI Agent
    │
    ▼
Generate SQL
    │
    ▼
Validate SQL
    │
    ▼
Database
    │
    ▼
Business Insight
    │
    ▼
Frontend Response
```
---

# Frontend Integration

## Base URL

```
http://127.0.0.1:8000
```

## APIs

| Method | Endpoint | Purpose |
|---------|----------|---------|
| GET | / | Welcome API |
| GET | /health | Health Check |
| POST | /chat | Generate AI Business Insights |
| GET | /charts | Dashboard Chart Data |

## Content Type

```
application/json
```

## Authentication

Currently authentication is not required.

JWT support is planned for future versions.
