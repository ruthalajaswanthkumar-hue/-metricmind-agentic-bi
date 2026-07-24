
# MetricMind Database

---

# Project Overview

The MetricMind Database stores business data for the AI-powered Business Intelligence system.

It provides sales, customer, product, employee, region, and order information for analytics.

---

# Database Setup

1. Clone the repository.

2. Navigate to the database folder.

3. Install SQLite (or your database software).

4. Run SQL scripts in the following order:

- database_preparation.sql
- products.sql
- customers.sql
- orders.sql
- sales.sql
- employees.sql

---

# Installation

Clone repository

```bash
git clone <repository-url>
```

Move into project

```bash
cd MetricMind
```

---

# Requirements

- Python 3.12
- SQLite
- VS Code
- Git

---

# Dataset

Datasets included

- Sales.csv
- Customers.csv
- Products.csv
- Regions.csv
- Category.csv

---

# Folder Structure

Database

├── sales.sql

├── customers.sql

├── products.sql

├── orders.sql

├── employees.sql

├── dashboard_views.sql

├── business_queries.sql

├── ER_Diagram.png

└── README.md

---

# ER Diagram

Refer

ER_Diagram.png

---

# Tables

Sales

Customers

Products

Orders

Employees

Regions

Category

---

# Relationships

Customer

↓

Orders

Orders

↓

Products

Products

↓

Category

Sales

↓

Regions

---

# Running Queries

Execute

business_queries.sql

or

dashboard_views.sql

to test reports.

---

# Developer Notes

Always execute SQL files before importing CSV files.

Use dashboard_views.sql for Power BI dashboards.

Use business_queries.sql for analytics queries.
