"use client";

import { useEffect, useState } from "react";

import {
  FaDollarSign,
  FaChartBar,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";

import FilterPanel from "./FilterPanel";
import KPICard from "./KPICard";
import DataTable from "./DataTable";

import RevenueChart from "../charts/RevenueChart";
import SalesChart from "../charts/SalesChart";
import RegionChart from "../charts/RegionChart";
interface DashboardData {
  kpis: {
    revenue: string;
    profit: string;
    orders: number;
    customers: number;
  };
  charts: {
    bar: any[];
    line: any[];
    pie: any[];
  };
  table: any[];
}

const defaultDashboard: DashboardData = {
  kpis: {
    revenue: "$0",
    profit: "$0",
    orders: 0,
    customers: 0,
  },
  charts: {
    bar: [],
    line: [],
    pie: [],
  },
  table: [],
};

export default function Dashboard() {
  const [dashboardData, setDashboardData] =
    useState<DashboardData>(defaultDashboard);

  const [loading, setLoading] = useState(true);

  const [region, setRegion] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  async function loadDashboard() {
    try {
      setLoading(true);

      const url = `http://localhost:8000/charts?region=${encodeURIComponent(
        region
      )}&category=${encodeURIComponent(
        category
      )}&year=${encodeURIComponent(year)}&month=${encodeURIComponent(month)}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch dashboard data");
      }

      const data = await response.json();

      setDashboardData(data);
    } catch (error) {
      console.error("Dashboard Error:", error);

      // Prevent UI crash
      setDashboardData(defaultDashboard);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, [region, category, year, month]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <h2 className="text-xl font-semibold">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        Business Dashboard
      </h1>

      {/* Filters */}
      <FilterPanel
        region={region}
        category={category}
        year={year}
        month={month}
        setRegion={setRegion}
        setCategory={setCategory}
        setYear={setYear}
        setMonth={setMonth}
      />

      {/* KPI Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
  <KPICard
    title="Revenue"
    value={dashboardData.kpis.revenue}
    icon={<FaDollarSign />}
    percentage="+12%"
    trend="Increasing"
  />

  <KPICard
  title="Profit"
  value={dashboardData.kpis.profit}
  icon={<FaChartBar />}
  percentage="+8%"
  trend="Increasing"
/>

  <KPICard
    title="Orders"
    value={dashboardData.kpis.orders}
    icon={<FaShoppingCart />}
    percentage="+15%"
    trend="Increasing"
  />

  <KPICard
    title="Customers"
    value={dashboardData.kpis.customers}
    icon={<FaUsers />}
    percentage="+10%"
    trend="Increasing"
  />
</div>

{/* Charts */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
  <RevenueChart
    data={dashboardData.charts.bar}
  />

  <SalesChart
    data={dashboardData.charts.line}
  />
</div>

      <div className="mb-8">
        <RegionChart
          data={dashboardData.charts.pie}
        />
      </div>

      {/* Product Table */}
      <DataTable
        data={dashboardData.table}
      />
    </div>
  );
}
