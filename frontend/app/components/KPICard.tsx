type Props = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
};

export default function KPICard({
  title,
  value,
  change,
  trend,
  icon,
}: Props) {
  return (
    <div className="bg-gray-800 p-5 rounded-xl shadow-md w-full">
      
      
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-gray-300 text-sm">{title}</h3>
        <div className="text-blue-400 text-lg">{icon}</div>
      </div>

      
      <h2 className="text-2xl font-bold text-white">{value}</h2>

      
      <p
        className={`text-sm mt-2 ${
          trend === "up" ? "text-green-400" : "text-red-400"
        }`}
      >
        {trend === "up" ? "↑" : "↓"} {change}
      </p>
    </div>
  );
}