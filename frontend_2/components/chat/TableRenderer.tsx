interface TableRendererProps {
  headers: string[];
  rows: string[][];
}

export default function TableRenderer({
  headers,
  rows,
}: TableRendererProps) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden">
        <thead className="bg-gray-800">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="border border-gray-700 px-4 py-2 text-left text-white"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-gray-900 even:bg-gray-800">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-gray-700 px-4 py-2 text-gray-200"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
