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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="border rounded-lg p-2"
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
        className="border rounded-lg p-2"
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Clothing">Clothing</option>
      </select>

      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="">All Years</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>

      <select
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="">All Months</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
      </select>
    </div>
  );
}
