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

export default function DataTable({ data }: DataTableProps) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 border">Product</th>
            <th className="p-3 border">Revenue</th>
            <th className="p-3 border">Profit</th>
            <th className="p-3 border">Quantity</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="text-center hover:bg-gray-100"
            >
              <td className="border p-2">{item.product}</td>
              <td className="border p-2">${item.revenue}</td>
              <td className="border p-2">${item.profit}</td>
              <td className="border p-2">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
