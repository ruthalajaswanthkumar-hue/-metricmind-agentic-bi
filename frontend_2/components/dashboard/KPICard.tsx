"use client";

interface KPICardProps {
  title: string;
  value: string | number;
}

export default function KPICard({
  title,
  value,
}: KPICardProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border">

      <h3 className="text-gray-500 text-lg">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}
