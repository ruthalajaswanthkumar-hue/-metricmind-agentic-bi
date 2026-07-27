"use client";

import {
 BarChart,
 Bar,
 XAxis,
 YAxis,
 Tooltip,
 CartesianGrid,
 ResponsiveContainer
} from "recharts";


const data=[

{
month:"Jan",
sales:100
},

{
month:"Feb",
sales:200
},

{
month:"Mar",
sales:300
},

{
month:"Apr",
sales:450
}

];


export default function SalesChart(){

return(

<div className="bg-white p-6 rounded-xl shadow-md">


<h2 className="text-xl font-bold text-black mb-4">
Sales Chart
</h2>


<ResponsiveContainer width="100%" height={300}>


<BarChart data={data}>


<CartesianGrid/>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>


<Bar
dataKey="sales"
fill="#16a34a"
/>


</BarChart>


</ResponsiveContainer>


</div>

)

}