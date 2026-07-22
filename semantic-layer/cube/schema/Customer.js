
cube(`Customer`, {
  sql: `SELECT * FROM customer_summary`,

  measures: {
    totalCustomers: {
      sql: `total_customers`,
      type: `sum`,
      title: `Total Customers`
    }
  },

  dimensions: {
    region: {
      sql: `region`,
      type: `string`,
      title: `Region`
    },

    city: {
      sql: `city`,
      type: `string`,
      title: `City`
    }
  }
});
