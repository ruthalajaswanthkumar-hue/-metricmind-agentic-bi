import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KPIGrid from "@/components/dashboard/KPIGrid";

import RevenueChart from "@/components/charts/RevenueChart";
import SalesChart from "@/components/charts/SalesChart";
import RegionChart from "@/components/charts/RegionChart";

import AIInsight from "@/components/dashboard/AIInsight";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";
import LiveClock from "@/components/dashboard/LiveClock";

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3200 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
];

const salesData = [
  { month: "Jan", sales: 120 },
  { month: "Feb", sales: 180 },
  { month: "Mar", sales: 150 },
  { month: "Apr", sales: 220 },
  { month: "May", sales: 260 },
];

const regionData = [
  { name: "North", value: 400 },
  { name: "South", value: 300 },
  { name: "East", value: 300 },
  { name: "West", value: 200 },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-8 space-y-8">

        {/* Header */}
        <DashboardHeader />

        {/* KPI */}
        <KPIGrid />

        {/* Analytics */}
        <section className="space-y-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Business Analytics
              </h2>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Real-time performance overview
              </p>
            </div>

            <LiveClock />

          </div>

          {/* Revenue & Sales */}
          <div className="grid lg:grid-cols-2 gap-6">

            <RevenueChart data={revenueData} />

            <SalesChart data={salesData} />

          </div>

          {/* Region + AI */}
          <div className="grid lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2">
              <RegionChart data={regionData} />
            </div>

            <AIInsight />

          </div>

          {/* Bottom Widgets */}
          <div className="grid lg:grid-cols-2 gap-6">

            <RecentActivity />

            <QuickActions />

          </div>

        </section>

      </div>

    </main>
  );
}
