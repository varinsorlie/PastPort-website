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

import appMockup from "../assets/mockup-app.png"


function Features() {

  const features = [
    {
      id: 1,
      src: kart,
      alt: "map",
      title: "Kart",
      description: "Oppdag kjente og ukjente historiske steder på kartet"
    },
    {
      id: 2,
      src: quest,
      alt: "Quest",
      title: "Quest",
      description: "Løs gåter og rebuser, og vinn premier"
    },
    {
      id: 3,
      src: kort,
      alt: "Kort",
      title: "Kort",
      description: "Samle historiekort fra stedene du besøker"
    },
  ];
  const features2 = [
    { title: "Rask og enkel", description: "Bruk appen hvor som helst." },
    { title: "Sikkerhet i fokus", description: "Vi tar personvern på alvor." },
    { title: "Gratis prøveperiode", description: "Prøv uten kostnad i 7 dager." },
  ];

  return (
    
    <div className="features"> 
      {/* <h2>PastPort app</h2>
      <div className="features-grid">
        {images.map((image) => (
            <div className="feature-card">
            <div key={image.id} className="features-image">
              <img src={image.src} alt={image.alt} />
              <p>{image.caption}</p>
            </div>
            </div>
          ))}
      </div>
    
     <div className="platform-card">
        <h2>PastHive</h2>
        <p>
            En plattform som muliggjør deling av historiske artikler, blogger og podcatster!
        </p>
        <button className="cta">Les mer her</button>
        <button className="bta">Utforsk</button>
        </div> */}
        
        <div className="about">
            <p>
                Stepcraft is lovingly crafted in The Hague, 
                by developers who turned their own struggle with sedentary work-life into gaming magic.
                <p></p>
                Together, we're proof that the best games solve real problems. 
                Our daily walks through the deer-lined paths of Haagse Bos fuel both our creativity 
                and our commitment to making movement magical for everyone – 
                because we believe your neighborhood should feel like an adventure waiting to happen.
            </p>
        </div>
        <h2>PastPort App</h2>
        <div className="app-column">
            {/* <div className="features1">
                {images.map((image) => (
                <div className="feature-card">
                    <div key={image.id} className="features-image">
                    <p>{image.caption}</p>
                    </div>
                </div>
                ))}
            </div> */}

            {/* <div className="mockup-visual">
            <img src={appMockup} alt="App preview" />
            </div> */}

            

            <div className="features-column">
            {features.map((feature) => (
                <div className="feature-card">
                <div key={feature.id} className="features-image">
                {/* <img src={image.src} alt={image.alt} /> */}
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                </div>
                </div>
            ))}
            </div>
          
        </div>
        <div className="line"></div>
           <div className="platform-card">
        <h2>PastHive Plattform</h2>
        <p>
            En plattform som muliggjør deling av historiske artikler, blogger og podcaster!
        </p>

         <form
        onSubmit={(e) => {
          e.preventDefault();
          // naviger til pasthive når brukeren klikker submit
          window.location.href = "https://pasthive.no";
        }}
      >
        <button className="button-primary">Utforsk</button>
      </form>
       
        </div> 
    </div>
  );
}

export default Features;



       