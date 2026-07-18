# Semantic Layer Notes

## Introduction

A Semantic Layer is a business-friendly layer that sits between the raw
database and end users. It provides standardized definitions of business
metrics and dimensions so that everyone in an organization works with
the same data and calculations. This creates a single source of truth
for reporting and analytics.

------------------------------------------------------------------------

# Why is a Semantic Layer Important?

-   Provides consistent business metrics across all reports and
    dashboards.
-   Hides complex database structures from business users.
-   Reduces duplicate calculations and data inconsistencies.
-   Makes data easier to understand and analyze.
-   Improves collaboration between technical and business teams.

------------------------------------------------------------------------

# Metrics

## Definition

A Metric is a measurable business value used to evaluate the performance
of an organization. Metrics are usually calculated using one or more
measures.

### Examples

-   Revenue
-   Profit
-   Sales
-   Average Order Value
-   Growth Percentage

### Characteristics

-   Used to measure business performance.
-   Derived using mathematical calculations.
-   Frequently displayed in reports and dashboards.

------------------------------------------------------------------------

# Dimensions

## Definition

Dimensions are descriptive attributes used to categorize, filter, and
analyze business data.

### Examples

-   Customer Name
-   Product Category
-   Region
-   Date
-   Department

### Characteristics

-   Provide context to business data.
-   Used for grouping and filtering reports.
-   Usually contain descriptive information instead of numerical values.

------------------------------------------------------------------------

# Facts

## Definition

Facts are records of business transactions or events that occur within
an organization. They typically contain measurable numerical values.

### Examples

-   Sales Transaction
-   Customer Order
-   Invoice
-   Payment

### Characteristics

-   Represent actual business events.
-   Stored in fact tables.
-   Contain measurable values such as quantity, sales amount, or cost.

------------------------------------------------------------------------

# Measures

## Definition

Measures are numerical values stored in fact tables that can be
aggregated using mathematical functions such as SUM, COUNT, AVG, MIN,
and MAX.

### Examples

-   Sales Amount
-   Quantity Sold
-   Cost
-   Profit

### Characteristics

-   Numeric in nature.
-   Used for calculations.
-   Can be summed, averaged, counted, or otherwise aggregated.

------------------------------------------------------------------------

# Difference Between Metrics, Dimensions, Facts, and Measures

  Component   Description                      Example
  ----------- -------------------------------- ------------------
  Metric      Business performance indicator   Revenue
  Dimension   Descriptive attribute            Product Category
  Fact        Business transaction or event    Customer Order
  Measure     Numerical value inside a fact    Sales Amount

------------------------------------------------------------------------

# Relationship

Business Transaction\
↓\
Fact\
↓\
Measure\
↓\
Metric\
↑\
Analyzed using Dimensions

------------------------------------------------------------------------

# Conclusion

A Semantic Layer simplifies data analysis by providing standardized
definitions for metrics, dimensions, facts, and measures. It ensures
consistency across reports, improves data quality, and enables business
users to make informed decisions using reliable and meaningful
information.
