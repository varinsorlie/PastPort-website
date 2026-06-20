import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import CTABand from "@/components/CTABand";
import Platform from "@/components/Platform";
import Team from "@/components/Team";
import Journey from "@/components/Journey";
import Footer from "@/components/Footer";
 
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <CTABand />
        <Platform />
        <Team />
        <Journey />
      </main>
      <Footer />
    </>
  );
}
 