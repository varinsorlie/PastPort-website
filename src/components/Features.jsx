// import "../components/Features.css"
// export default function Features() {
//   const images = [
//     {
//       id: 1,
//       src: "https://placecats.com/300/200",
//       alt: "map",
//       caption: "Oppdag kjente og ukjente historiske steder på kartet"
//     },
//     {
//       id: 2,
//       src: "https://placecats.com/neo/300/200",
//       alt: "Quest",
//       caption: "Løs gåter og rebuser, og vinn premier"
//     },
//     {
//       id: 3,
//       src: "https://placecats.com/millie/300/150",
//       alt: "Kort",
//       caption: "Samle historiekort fra stedene du besøker"
//     },
//   ];

//   return (
//     <section id="features" className="grid-features">
//       <section className="merch">
//         <h2>Buy merch</h2>

//         <div className="merch-row">
//           {images.map((image) => (
//             <div key={image.id} className="merch-item">
//               <img src={image.src} alt={image.alt} />
//               <p>{image.caption}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </section>
//   );
// }
import React from "react";
import "./Features.css";
import kort from  "../assets/4.png"
import kart from "../assets/7.png"
import quest from "../assets/5.png"

function Features() {

  const images = [
    {
      id: 1,
      src: kart,
      alt: "map",
      caption: "Oppdag kjente og ukjente historiske steder på kartet"
    },
    {
      id: 2,
      src: quest,
      alt: "Quest",
      caption: "Løs gåter og rebuser, og vinn premier"
    },
    {
      id: 3,
      src: kort,
      alt: "Kort",
      caption: "Samle historiekort fra stedene du besøker"
    },
  ];
  const features = [
    { title: "Rask og enkel", description: "Bruk appen hvor som helst." },
    { title: "Sikkerhet i fokus", description: "Vi tar personvern på alvor." },
    { title: "Gratis prøveperiode", description: "Prøv uten kostnad i 7 dager." },
  ];

  return (
    <section className="features"> 
      {/* <h2>PastPort app</h2> */}
      {/* <div className="features-grid">
        {images.map((image) => (
            <div className="feature-card">
            <div key={image.id} className="features-image">
              <img src={image.src} alt={image.alt} />
              <p>{image.caption}</p>
            </div>
            </div>
          ))}
      </div> */}
    
     {/* <div className="platform-card">
        <h2>PastHive</h2>
        <p>
            En plattform som muliggjør deling av historiske artikler, blogger og podcatster!
        </p>
        <button className="cta">Les mer her</button>
        <button className="bta">Utforsk</button>
        </div> */}
    </section>
  );
}

export default Features;
