import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/layout/footer";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white">
      <Hero />
      <Features />
      <About />
      <Footer />
    </main>
  );
}