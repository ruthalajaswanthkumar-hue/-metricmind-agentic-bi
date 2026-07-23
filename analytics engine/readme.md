
#  Analytics Engine

## Overview

The Analytics Engine is a core component of the MetricMind platform. It transforms processed business data into meaningful analytics that can be displayed on interactive dashboards.

This module acts as the bridge between the AI Agent, Semantic Layer, and Frontend by preparing KPIs, selecting appropriate visualizations, formatting responses, and generating business insights.

---

 ## Responsibilities

- Process business metrics
- Generate Key Performance Indicators (KPIs)
- Select suitable chart types
- Format analytics responses
- Generate business insights
- Support dashboard visualization

---

## Module Workflow

```
User Query
      │
      ▼
AI Agent
      │
      ▼
Query Processor
      │
      ▼
Business Rules
      │
      ▼
Dashboard Metrics
      │
      ▼
Chart Selector
      │
      ▼
Response Formatter
      │
      ▼
Frontend Dashboard
```

---

## Files

| File | Purpose |
|------|---------|
| dashboard_metrics.py | KPI definitions |
| query_processor.py | Query analysis |
| chart_selector.py | Chart recommendation |
| business_rules.py | Business calculations |
| response_formatter.py | API response formatting |
| insights.py | Business insights generation |
| config.py | Configuration settings |

---

Status:  Development Started
