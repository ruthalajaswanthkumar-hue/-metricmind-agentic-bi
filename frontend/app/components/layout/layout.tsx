import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      
      <Sidebar />

      
      <div className="flex flex-col flex-1">

        
        <Navbar />

        
        <main className="flex-1 p-5">
          {children}
        </main>

        
        <Footer />

      </div>
    </div>
  );
}
