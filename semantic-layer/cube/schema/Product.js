
cube(`Product`, {
  sql: `SELECT * FROM stg_products`,

  measures: {
    totalProducts: {
      sql: `product_id`,
      type: `count`,
      title: `Total Products`
    },

    averagePrice: {
      sql: `unit_price`,
      type: `avg`,
      title: `Average Unit Price`
    }
  },

  dimensions: {
    productId: {
      sql: `product_id`,
      type: `string`,
      title: `Product ID`
    },

    productName: {
      sql: `product_name`,
      type: `string`,
      title: `Product Name`
    },

    category: {
      sql: `category`,
      type: `string`,
      title: `Category`
    }
  }
});
