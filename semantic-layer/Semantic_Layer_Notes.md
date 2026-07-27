# Semantic Layer Notes

## What is Business Intelligence (BI)?

Business Intelligence (BI) helps organisations analyse business data to make better decisions.

Examples:
- Revenue Analysis
- Sales Dashboard
- Customer Analysis
- Profit Reports

---

## What is a Semantic Layer?

A Semantic Layer is a business-friendly layer between the AI and the database.

Instead of users knowing database tables, they ask questions in business language.

Example:

User asks:
Show Revenue

Semantic Layer understands:
Revenue = SUM(sales_amount)

---

## Why is it needed?

- Hides database complexity
- Standardises business definitions
- Improves AI understanding
- Reuses business metrics
- Ensures consistent reporting

---

## What are Metrics?

Metrics are measurable business values.

Examples:

Revenue
Profit
Orders
Customers

---

## What are Dimensions?

Dimensions describe metrics.

Examples:

Product
Region
Category
Customer
Date

---

## What are Facts?

Facts are measurable values stored inside fact tables.

Example:

Sales Amount
Profit
Quantity

---

## What are Measures?

Measures are calculations performed on facts.

Examples:

SUM(Revenue)

AVG(Profit)

COUNT(Orders)
