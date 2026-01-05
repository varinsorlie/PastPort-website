// export default function Hero() {
//   return (
//     <section id="hero" className="text-center py-20">
//       <h2 className="text-4xl font-bold mb-4">unlock the past</h2>
//       <p className="text-xl mb-8">historien kommer til live gjennom spill</p>
//       {/* <img
//         src="/images/header-nettside.png"
//         alt="Pastport header"
//         className="mx-auto max-w-xl"
//       /> */}
//     </section>
//   );
// }
import React from "react";
import "./Hero.css";
import bakgrunn from "../assets/moderne-bakgrunn.png"
import Header from "../components/Header";
import appMockup from "../assets/mockup-app.png"

function Hero() {
  return (
    //  <section
    //   className="hero"
    //   style={{ backgroundImage: `url(${kartbakgrunn})` }}
    // >
    // <Header></Header>
    //   <h1>Velkommen til PastPort</h1>
    //   <p>Din portal til historie, gjennom spill, bevegelse og læring</p>
    //   <button className="cta">Start reisen</button>
    // </section>
    <div  className="hero"
        // style={{ backgroundImage: `url(${bakgrunn})`}}
        >
     <Header />
    <div className="hero-inner">
        <div className="hero-text">
        <h1>Utforsk historien</h1>
        <p>
            Din portal til historie gjennom spill, bevegelse og læring
        </p>
        <button className="button-primary">Start reisen</button>
        </div>

        <div className="hero-visual">
        <img src={appMockup} alt="App preview" />
        </div>
    </div>
    </div>

  );
  
}

export default Hero;
