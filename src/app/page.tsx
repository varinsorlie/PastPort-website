import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Platform from "@/components/Platform";
import Team from "@/components/Team";
import Journey from "@/components/Journey";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <CTA />
        <Platform />
        <Team />
        <Journey />
      </main>
      <Footer />
    </>
  );
}
