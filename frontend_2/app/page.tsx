 import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-slate-950">

      <Hero />

      <Features />

      <About />

      <CTA />

    </main>
  );
}
