import MySidebar from "../components/layout/MySidebar";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>

      
      <MySidebar />

      
      <div style={{ width: "100%" }}>
        
       
        <Navbar />

       
        <div style={{ padding: "20px", background: "#f3f4f6", height: "100vh" }}>
            <h1>Dashboard Page</h1>
        </div>

      </div>

    </div>
  );
}