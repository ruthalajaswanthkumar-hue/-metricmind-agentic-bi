 "use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import DashboardFilter from "@/components/dashboard/Dashboardfilter";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KPIGrid from "@/components/dashboard/KPIGrid";

import RevenueChart from "@/components/charts/RevenueChart";
import SalesChart from "@/components/charts/SalesChart";
import RegionChart from "@/components/charts/RegionChart";

import AIInsight from "@/components/dashboard/AIInsight";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";
import LiveClock from "@/components/dashboard/LiveClock";


export default function DashboardPage() {

  const [revenueData, setRevenueData] = useState<any[]>([]);
  const [salesData, setSalesData] = useState<any[]>([]);
  const [regionData, setRegionData] = useState<any[]>([]);
  const [kpi, setKpi] = useState({
  Revenue: 0,
  Profit: 0,
  Orders: 0,
  Customers: 0,
});
async function applyFilter(region: string, category: string) {
  try {
    const response = await api.get("/dashboard/filter", {
      params: {
        region,
        category,
      },
    });


    setKpi(response.data);
  } catch (error) {
    console.error(error);
  }
}

  useEffect(() => {

  async function loadCharts() {

    try {

      const res = await fetch(
        "http://127.0.0.1:8000/dashboard/charts"
      );

      const data = await res.json();

      setRevenueData(data.monthly);
      setSalesData(data.category);
      setRegionData(data.region);

    } catch (err) {

      console.error("Chart API Error:", err);

    }

  }

  loadCharts();
  applyFilter("", "");

}, []);

  return (

    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-8 space-y-8">

        <DashboardHeader />

        <DashboardFilter onFilter={applyFilter} />

<KPIGrid
  revenue={kpi.Revenue}
  profit={kpi.Profit}
  orders={kpi.Orders}
  customers={kpi.Customers}
/>

        <section className="space-y-6">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">

                Business Analytics

              </h2>

              <p className="mt-2 text-gray-500 dark:text-gray-400">

                Live Business Analytics

              </p>

            </div>

            <LiveClock />

          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            <RevenueChart data={revenueData} />

            <SalesChart data={salesData} />

          </div>

          <div className="grid lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2">

              <RegionChart data={regionData} />

            </div>

            <AIInsight />

          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            <RecentActivity />

            <QuickActions />

          </div>

        </section>

      </div>

    </main>

  );

}
