"use client";


import {

PieChart,
Pie,
Cell,
Tooltip,
ResponsiveContainer

} from "recharts";


const data=[

{
name:"North",
value:400
},

{
name:"South",
value:300
},

{
name:"East",
value:200
},

{
name:"West",
value:100
}

];


export default function RegionChart(){


return(

<div className="bg-white p-6 rounded-xl shadow-md">


<h2 className="text-xl font-bold text-black mb-4">
Region Chart
</h2>


<ResponsiveContainer width="100%" height={300}>


<PieChart>


<Pie
data={data}
dataKey="value"
nameKey="name"
outerRadius={100}
>


{
data.map((entry,index)=>(

<Cell key={index}/>

))
}


</Pie>


<Tooltip/>


</PieChart>


</ResponsiveContainer>


</div>

)

}
