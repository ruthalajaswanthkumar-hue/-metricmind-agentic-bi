# Business Metrics

## Introduction

Business metrics are measurable values used to evaluate the performance
of an organization. They help businesses monitor growth, profitability,
customer behavior, and overall success.

------------------------------------------------------------------------

## Revenue

**Definition:** Total income generated from selling products or services
before deducting expenses.

**Formula:** Revenue = Selling Price × Quantity Sold

**Expected Database Columns:** selling_price, quantity

**Business Meaning:** Measures the total money earned by the business.

------------------------------------------------------------------------

## Profit

**Definition:** Money remaining after subtracting all costs from
revenue.

**Formula:** Profit = Revenue − Cost

**Expected Database Columns:** revenue, cost

**Business Meaning:** Indicates whether the business is making money.

------------------------------------------------------------------------

## Orders

**Definition:** Total number of customer orders placed.

**Formula:** Count of Orders

**Expected Database Columns:** order_id

**Business Meaning:** Shows customer purchasing activity.

------------------------------------------------------------------------

## Customers

**Definition:** Total number of unique customers.

**Formula:** Count of Unique Customers

**Expected Database Columns:** customer_id

**Business Meaning:** Measures customer base size.

------------------------------------------------------------------------

## Average Order Value (AOV)

**Definition:** Average revenue earned from each order.

**Formula:** Revenue / Number of Orders

**Expected Database Columns:** revenue, order_id

**Business Meaning:** Indicates how much customers spend per order.

------------------------------------------------------------------------

## Growth Percentage

**Definition:** Percentage increase or decrease compared to a previous
period.

**Formula:** ((Current Value − Previous Value) / Previous Value) × 100

**Expected Database Columns:** current_period_value,
previous_period_value

**Business Meaning:** Measures business growth over time.

------------------------------------------------------------------------

## Sales

**Definition:** Total value of products or services sold.

**Formula:** Sum of Sales Amount

**Expected Database Columns:** sales_amount

**Business Meaning:** Measures total sales performance.

------------------------------------------------------------------------

## Discount

**Definition:** Reduction in selling price offered to customers.

**Formula:** Original Price − Selling Price

**Expected Database Columns:** original_price, selling_price

**Business Meaning:** Helps analyze promotional strategies.

------------------------------------------------------------------------

## Cost

**Definition:** Total expense incurred to produce or purchase products.

**Formula:** Sum of Product Costs

**Expected Database Columns:** cost

**Business Meaning:** Measures operational expenses.

------------------------------------------------------------------------

## Margin

**Definition:** Percentage of revenue retained as profit.

**Formula:** (Profit / Revenue) × 100

**Expected Database Columns:** profit, revenue

**Business Meaning:** Indicates business profitability.

------------------------------------------------------------------------

# Summary

  Metric                Purpose
  --------------------- ----------------------------
  Revenue               Total income
  Profit                Earnings after expenses
  Orders                Number of customer orders
  Customers             Number of unique customers
  Average Order Value   Average spending per order
  Growth Percentage     Business growth over time
  Sales                 Total sales value
  Discount              Price reduction
  Cost                  Business expenses
  Margin                Profitability percentage

------------------------------------------------------------------------

# Conclusion

Business metrics provide meaningful insights into organizational
performance. Monitoring these metrics enables better business decisions,
improved efficiency, and long-term growth.
