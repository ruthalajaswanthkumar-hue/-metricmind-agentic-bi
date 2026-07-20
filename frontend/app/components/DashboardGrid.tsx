
import KPICard from "./KPICard";
import { FaDollarSign, FaChartLine, FaShoppingCart, FaUsers } from "react-icons/fa";

export default function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      <KPICard
        title="Revenue"
        value="₹0"
        change="12% from last month"
        trend="up"
        icon={<FaDollarSign />}
      />

      <KPICard
        title="Profit"
        value="₹12,000"
        change="8% from last month"
        trend="up"
        icon={<FaChartLine />}
      />

      <KPICard
        title="Orders"
        value="320"
        change="5% decrease"
        trend="down"
        icon={<FaShoppingCart />}
      />

      <KPICard
        title="Customers"
        value="1,200"
        change="15% growth"
        trend="up"
        icon={<FaUsers />}
      />

    </div>
  );
}