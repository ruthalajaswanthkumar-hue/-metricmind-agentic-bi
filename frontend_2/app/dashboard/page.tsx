import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KPIGrid from "@/components/dashboard/KPIGrid";

import RevenueChart from "@/components/charts/RevenueChart";
import SalesChart from "@/components/charts/SalesChart";
import RegionChart from "@/components/charts/RegionChart";


export default function DashboardPage(){

return(

<main className="min-h-screen bg-gray-100 p-8">


<DashboardHeader/>


<KPIGrid/>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">


<RevenueChart/>


<SalesChart/>


<RegionChart/>


</div>


</main>

)

}
