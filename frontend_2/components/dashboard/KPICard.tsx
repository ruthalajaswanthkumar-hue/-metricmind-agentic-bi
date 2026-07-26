interface KPICardProps {

title:string;
value:string;
icon:React.ReactNode;
percentage:string;
trend:string;

}


export default function KPICard({

title,
value,
icon,
percentage,
trend

}:KPICardProps){


return(

<div className="bg-white p-6 rounded-xl shadow-md">


<div className="flex justify-between items-center">


<div>

<h3 className="text-gray-500">
{title}
</h3>


<h2 className="text-3xl font-bold text-black mt-2">
{value}
</h2>


</div>


<div className="text-4xl text-blue-600">
{icon}
</div>


</div>



<p className="mt-4 text-green-600">

{percentage} {trend}

</p>


</div>

)

}