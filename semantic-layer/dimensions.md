# Business Dimensions

## Introduction

Business dimensions are descriptive attributes that provide context to business data. Unlike metrics, which measure performance using numerical values, dimensions describe the characteristics of business entities such as customers, products, locations, and time. They are primarily used to filter, group, and analyze data in reports and dashboards.

Dimensions play a critical role in a Semantic Layer by allowing users to answer questions like **Who purchased?**, **Which product was sold?**, **Where was the sale made?**, and **When did the transaction occur?**

---

## Characteristics of Business Dimensions

Business dimensions have the following characteristics:

- Contain descriptive information rather than numerical values.
- Used for filtering, grouping, and categorizing business data.
- Usually stored in dimension tables.
- Connected to fact tables using primary and foreign keys.
- Frequently used in Business Intelligence (BI) reports and dashboards.

---

# Customer

## Definition

The Customer dimension represents the individual or organization purchasing products or services from the business.

### Database Columns

- customer_id
- customer_name
- customer_email
- customer_phone

### Business Purpose

Used to analyze customer purchasing behavior, customer segmentation, retention, loyalty, and lifetime value.

### Relationship with Other Tables

The Customer dimension has a **one-to-many relationship** with the Sales (Fact) table. A single customer can place multiple orders, while each sales transaction belongs to only one customer. The relationship is established using **customer_id**, allowing businesses to analyze customer-wise sales, revenue, and purchasing patterns.

---

# Product

## Definition

The Product dimension contains detailed information about products offered by the business.

### Database Columns

- product_id
- product_name
- product_price
- category_id

### Business Purpose

Used to analyze product performance, demand, pricing, and inventory trends.

### Relationship with Other Tables

The Product dimension has a **one-to-many relationship** with the Sales (Fact) table. One product can appear in multiple sales transactions, while each transaction references a specific product. The relationship is maintained through **product_id**.

---

# Category

## Definition

The Category dimension classifies products into logical groups.

### Database Columns

- category_id
- category_name

### Business Purpose

Helps compare sales and performance across different product categories.

### Relationship with Other Tables

The Category dimension has a **one-to-many relationship** with the Product table. A single category can contain multiple products, while each product belongs to only one category. The tables are connected using **category_id**.

---

# Region

## Definition

The Region dimension identifies the geographical region where business activities occur.

### Database Columns

- region_id
- region_name

### Business Purpose

Used to analyze regional sales performance, customer distribution, and market trends.

### Relationship with Other Tables

The Region dimension has a **one-to-many relationship** with the Sales (Fact) table. Multiple sales transactions can originate from the same region. It is linked using **region_id**, enabling region-wise reporting and performance analysis.

---

# Country

## Definition

The Country dimension stores information about the country where customers, sales, or operations are located.

### Database Columns

- country_id
- country_name

### Business Purpose

Used for country-level business analysis, international reporting, and market expansion planning.

### Relationship with Other Tables

The Country dimension has a **one-to-many relationship** with the Region table and may also connect directly to the Sales (Fact) table depending on the database design. One country can contain multiple regions, allowing country-level business reporting.

---

# Salesperson

## Definition

The Salesperson dimension contains information about employees responsible for completing sales.

### Database Columns

- salesperson_id
- salesperson_name
- department

### Business Purpose

Used to evaluate employee performance, sales targets, and commission calculations.

### Relationship with Other Tables

The Salesperson dimension has a **one-to-many relationship** with the Sales (Fact) table. A salesperson can complete many sales transactions, while each transaction is associated with one salesperson through **salesperson_id**.

---

# Date

## Definition

The Date dimension represents the exact calendar date of a business transaction.

### Database Columns

- date
- day
- day_name

### Business Purpose

Used for daily sales analysis, trend identification, and historical reporting.

### Relationship with Other Tables

The Date dimension has a **one-to-many relationship** with the Sales (Fact) table. Multiple sales transactions can occur on the same date. It is connected using the transaction date, enabling daily reporting and trend analysis.

---

# Month

## Definition

The Month dimension groups transactions according to the month in which they occurred.

### Database Columns

- month_number
- month_name

### Business Purpose

Used for monthly sales reports, performance comparisons, and seasonal analysis.

### Relationship with Other Tables

The Month dimension is **derived from the Date dimension**. One month contains multiple dates, allowing users to aggregate daily transactions into monthly reports and performance summaries.

---

# Quarter

## Definition

The Quarter dimension divides the year into four business reporting periods.

### Database Columns

- quarter

### Business Purpose

Used for quarterly financial reporting, performance evaluation, and strategic planning.

### Relationship with Other Tables

The Quarter dimension is **derived from the Date dimension**. Each quarter contains three months, enabling businesses to evaluate quarterly performance and compare financial growth.

---

# Year

## Definition

The Year dimension represents the calendar or financial year of a transaction.

### Database Columns

- year

### Business Purpose

Used for yearly performance analysis, long-term business planning, and growth comparisons.

### Relationship with Other Tables

The Year dimension is **derived from the Date dimension**. One year contains multiple quarters, months, and dates, allowing organizations to perform annual reporting and long-term trend analysis.

---

# Summary Table

| Dimension | Primary Purpose | Common Database Column |
|-----------|-----------------|------------------------|
| Customer | Customer analysis | customer_id |
| Product | Product analysis | product_id |
| Category | Product grouping | category_id |
| Region | Regional analysis | region_id |
| Country | Country-wise reporting | country_id |
| Salesperson | Employee performance | salesperson_id |
| Date | Daily reporting | date |
| Month | Monthly reporting | month_name |
| Quarter | Quarterly reporting | quarter |
| Year | Yearly reporting | year |

---


---

# Conclusion

Business dimensions are essential components of a Semantic Layer because they provide context to business transactions and enable meaningful data analysis. They allow users to organize information based on customers, products, locations, and time, making reports easier to understand and interpret. Well-designed dimensions improve reporting consistency, simplify business analysis, and support better decision-making across an organization.
