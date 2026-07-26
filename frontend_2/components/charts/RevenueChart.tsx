"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";


const data = [
  {
    month:"Jan",
    revenue:100
  },
  {
    month:"Feb",
    revenue:200
  },
  {
    month:"Mar",
    revenue:300
  },
  {
    month:"Apr",
    revenue:450
  }
];


export default function RevenueChart(){

return(

<div className="bg-white p-6 rounded-xl shadow-md">

<h2 className="text-xl font-bold text-black mb-4">
Revenue Chart
</h2>


<ResponsiveContainer width="100%" height={300}>

<LineChart data={data}>

<CartesianGrid />

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>


<Line
type="monotone"
dataKey="revenue"
stroke="#2563eb"
/>


</LineChart>

</ResponsiveContainer>


</div>

)

}