"use client";

interface FilterPanelProps {
  region: string;
  category: string;
  year: string;
  month: string;
  setRegion: (value: string) => void;
  setCategory: (value: string) => void;
  setYear: (value: string) => void;
  setMonth: (value: string) => void;
}

export default function FilterPanel({
  region,
  category,
  year,
  month,
  setRegion,
  setCategory,
  setYear,
  setMonth,
}: FilterPanelProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-900">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard Filters
        </h2>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Filter business insights by region, category, year, and month.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          <option value="">All Regions</option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Clothing">Clothing</option>
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          <option value="">All Years</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>

        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          <option value="">All Months</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
        </select>
      </div>
    </div>
  );
}
