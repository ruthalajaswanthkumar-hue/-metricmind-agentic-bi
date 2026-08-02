"use client";

interface Product {
  product: string;
  revenue: number;
  profit: number;
  quantity: number;
}

interface DataTableProps {
  data: Product[];
}

export default function DataTable({
  data,
}: DataTableProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-900">
      <div className="border-b border-gray-200 p-6 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Product Performance
        </h2>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Revenue, profit, and quantity sold by product
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">
                Product
              </th>

              <th className="px-6 py-4 text-right font-semibold">
                Revenue
              </th>

              <th className="px-6 py-4 text-right font-semibold">
                Profit
              </th>

              <th className="px-6 py-4 text-center font-semibold">
                Quantity
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr
                  key={index}
                  className="transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {item.product}
                  </td>

                  <td className="px-6 py-4 text-right text-gray-700 dark:text-gray-300">
                    ₹{item.revenue.toLocaleString()}
                  </td>

                  <td className="px-6 py-4 text-right font-semibold text-green-600">
                    ₹{item.profit.toLocaleString()}
                  </td>

                  <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">
                    {item.quantity}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="py-10 text-center text-gray-500 dark:text-gray-400"
                >
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
