import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Team from "../components/Team";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
   <div className="appen">

      <main className="main">
         <Header />
        <section id="hero" className="hero-section">
          <Hero />
        </section>

        <section id="features" className="features-section">
          <Features />
        </section>

        <section id="team" className="team-section">
          <Team />
        </section>

        <section id="join" className="join-section">
          <JoinUs />
        </section>
      </main>

      <Footer />
    </div>
  );
}