"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Layout from "@/components/layout/Layout";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const router = useRouter();


  useEffect(() => {


    const logged =
      localStorage.getItem("isLoggedIn");


    if(logged !== "true"){

      router.push("/login");

    }


  }, [router]);



  return (

    <Layout>
      {children}
    </Layout>

  );

}
