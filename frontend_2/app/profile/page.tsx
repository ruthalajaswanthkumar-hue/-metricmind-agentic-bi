"use client";


import { getUser } from "@/lib/auth";
import { useEffect,useState } from "react";



export default function ProfilePage(){


const [user,setUser]=useState<any>();


useEffect(()=>{


setUser(getUser());


},[]);



return (

<div className="
p-10
">


<h1 className="
text-3xl
font-bold
">

Edit Profile

</h1>


<div className="
mt-8
rounded-xl
bg-white
p-6
shadow
">


<h2>
Name:
{user?.name}
</h2>


<h2>
Email:
{user?.email}
</h2>



</div>


</div>

);


}
