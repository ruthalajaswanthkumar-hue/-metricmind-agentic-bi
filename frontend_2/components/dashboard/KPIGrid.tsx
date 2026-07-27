import KPICard from "./KPICard";

import {
FaDollarSign,
FaShoppingCart,
FaUsers
} from "react-icons/fa";

import {
FaArrowTrendUp
} from "react-icons/fa6";


export default function KPIGrid(){


const data=[

{
title:"Revenue",
value:"₹5,20,000",
icon:<FaDollarSign/>,
percentage:"+12%",
trend:"Increase"
},


{
title:"Profit",
value:"₹1,80,000",
icon:<FaArrowTrendUp/>,
percentage:"+8%",
trend:"Increase"
},


{
title:"Orders",
value:"1250",
icon:<FaShoppingCart/>,
percentage:"+15%",
trend:"Increase"
},


{
title:"Customers",
value:"420",
icon:<FaUsers/>,
percentage:"+10%",
trend:"Increase"
}


];


return(

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">


{
data.map((item)=>(
<KPICard

key={item.title}

title={item.title}

value={item.value}

icon={item.icon}

percentage={item.percentage}

trend={item.trend}

/>
))
}


</div>

)

}