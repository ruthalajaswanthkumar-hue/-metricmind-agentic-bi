"use client";

interface SimpleKPICardProps {
  title: string;
  value: string | number;
}

export default function SimpleKPICard({
  title,
  value,
}: SimpleKPICardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {title}
      </h3>

      <p className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}
