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
// import bakgrunn from "../assets/moderne-bakgrunn.png"
// import Header from "../components/Header";
// import appMockup from "../assets/mockup-app.png"
// import darkMockup from "../assets/mockup-app-dark.png"
// import kort from  "../assets/4.png"
import kart from "../assets/7.png"
// import quest from "../assets/5.png"

function Hero() {
    const images = [
        {
          id: 1,
          src: kart,
          alt: "map",
          caption: "Oppdag kjente og ukjente historiske steder på kartet"
        },
        
      ];
      const features = [
        { title: "Rask og enkel", description: "Bruk appen hvor som helst." },
       
      ];
    
  return (
    <div  className="hero"
        >
    <div className="overlay"></div>
    <div className="hero-inner">
        <div className="hero-text">
        <h1>Utforsk fortiden</h1>
        <p>
            Din portal til historie gjennom spill og læring!
        </p>
        {/* <button className="button-primary">Play</button> */}
        </div>

      
    </div>
    </div>

  );
  
}

export default Hero;

