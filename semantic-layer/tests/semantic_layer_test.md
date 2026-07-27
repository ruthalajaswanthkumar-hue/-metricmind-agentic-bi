
# Semantic Layer Testing

## Test 1

Question

Show Revenue

Expected Metric

Revenue

Expected SQL

SUM(total_revenue)

Status

✅ Passed

---

## Test 2

Question

Show Sales

Expected Metric

Revenue

Expected SQL

SUM(total_revenue)

Status

✅ Passed

---

## Test 3

Question

Show Income

Expected Metric

Revenue

Expected SQL

SUM(total_revenue)

Status

✅ Passed

---

## Test 4

Question

Show Profit

Expected Metric

Profit

Expected SQL

SUM(total_profit)

Status

✅ Passed

---

## Test 5

Question

Show Orders

Expected Metric

Orders

Expected SQL

SUM(total_orders)

Status

✅ Passed

---

## Test 6

Question

Show Customer Count

Expected Metric

Customers

Expected SQL

COUNT(customer_id)

Status

✅ Passed

---

## Test 7

Question

Show Revenue by Region

Expected

Revenue Measure

Region Dimension

Status

✅ Passed

---

## Test 8

Question

Show Profit by Category

Expected

Profit Measure

Category Dimension

Status

✅ Passed

---

## Test 9

Revenue = -100

Expected

Validation Error

Status

✅ Passed

---

## Test 10

Orders = 5.5

Expected

Validation Error

Status

✅ Passed

---

## Overall Result

✔ Metric Mapping Working

✔ Dictionary Working

✔ Validation Working

✔ Cube Working

✔ dbt Working

✔ Semantic Layer Ready
