import Sidebar from "@/app/components/layout/Sidebar";
import Navbar from "@/app/components/layout/Navbar";
import DashboardHeader from "@/app/components/DashboardHeader";
import DashboardGrid from "@/app/components/DashboardGrid";
import Footer from "@/app/components/layout/footer";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-900">

      
      <Sidebar />

      
      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="p-6 flex-1">
          <DashboardHeader />
          <DashboardGrid />
        </main>

        <Footer />

      </div>
    </div>
  );
}