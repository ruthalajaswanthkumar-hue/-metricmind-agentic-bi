cube(`Sales`, {
  sql: `SELECT * FROM sales_summary`,

  measures: {
    revenue: {
      sql: `total_revenue`,
      type: `sum`,
      title: `Revenue`
    },

    profit: {
      sql: `total_profit`,
      type: `sum`,
      title: `Profit`
    },

    orders: {
      sql: `total_orders`,
      type: `sum`,
      title: `Orders`
    },

    quantity: {
      sql: `total_quantity_sold`,
      type: `sum`,
      title: `Quantity Sold`
    },

    averageOrderValue: {
      sql: `average_order_value`,
      type: `avg`,
      title: `Average Order Value`
    }
  }
});
