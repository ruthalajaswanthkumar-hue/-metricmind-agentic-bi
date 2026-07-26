import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar + Main Content */}
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}