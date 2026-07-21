from response_formatter import ResponseFormatter

response = ResponseFormatter.format_response(

    {
        "Revenue":120000,
        "Profit":25000,
        "Orders":500,
        "Customers":200
    },

    "Revenue increased by 20% compared to last month.",

    "Bar Chart"
)

print(response)
