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
import React, { useEffect } from "react";
import "./Features.css";
import kort from  "../assets/4.png"
import kart from "../assets/7.png"
import quest from "../assets/5.png"



function Features() {

  const features = [
    {
      id: 1,
      src: kart,
      alt: "map",
      feat: "Kart",
      title: "Finn interessante historier på kartet",
      description: "Velg historiske temaer og epoker for innholdet du vil få opp på kartet og utforsk historiske steder du er interessert i."
    },
    {
      id: 2,
      src: quest,
      alt: "Quest",
      feat: "Quest",
      title: "Løs gåter og rebuser, og vinn premier",
      description: "Gå ut på spennende rebuser og oppdrag som bringer historien til live med interaktive historiefortellinger."
    },
    {
      id: 3,
      src: kort,
      alt: "kort",
      feat: "Kort",
      title: "Skap din digitale kolleksjon",
      description: "Plukk opp historiske objekter for å samle unike historiekort som gjenspeiler den lokale kulturen og historien."
    },
  ];
  const features2 = [
    { title: "Rask og enkel", description: "Bruk appen hvor som helst." },
    { title: "Sikkerhet i fokus", description: "Vi tar personvern på alvor." },
    { title: "Gratis prøveperiode", description: "Prøv uten kostnad i 7 dager." },
  ];

//    useEffect(() => {
//     const id = "launchlist-widget-script";
//     if (!document.getElementById(id)) {
//       const s = document.createElement("script");
//       s.id = id;
//       s.src = "https://getlaunchlist.com/js/widget.js";
//       s.async = true;
//       document.body.appendChild(s);
//     }
//     // optional cleanup (keeps script if other pages use it)
//     return () => {
//       // do not remove if you want widget persistent across navigations
//       // const el = document.getElementById(id); if (el) document.body.removeChild(el);
//     };
//   }, []);
  
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
                I dag oppdager vi historiske steder gjennom de samme “topp 10”-listene på nettet, 
                og går glipp av hundrevis av skjulte perler rett rundt oss.
                <br></br>
                <br></br>
                Vår app lar deg utforske både kjente og ukjente historiske steder i ditt nærområde, 
                tilpasset akkurat dine interesser. Velg selv hvilke tidsepoker eller historiske 
                temaer du vil utforske, og få kun relevante steder vist på kartet.
                 <p></p>
                Hvert sted byr på levende formidling gjennom tekst, lyd og bilder, 
                og du kan løse interaktive oppdrag som tar deg med på små historiske eventyr. 
                Underveis samler du unike historiekort og objekter inspirert av lokal kultur og historie, 
                og bygger din egen personlige samling av fortiden.
            </p>
        </div>

        <div className="app-box">
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
                <h2>{feature.feat}</h2>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
        
        {/* <div
            className="launchlist-widget"
            data-key-id="aARg9m"
            data-height="180px"
        ></div>

        <iframe className="leaderboard"
            title="launchlist-leaderboard"
            src="https://getlaunchlist.com/w/e/aARg9m/leaderboard"
            style={{ width: "20%", display: "block", border: "none", height: "60vh" }}
            loading="lazy"
        /> */}

         {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          // naviger til pasthive når brukeren klikker submit
          window.location.href = "https://pasthive.no";
        }}
      >
        <button className="button-primary">Spill</button>
      </form>
 */}

           <div className="platform-card">
        <h2>PastHive Plattform</h2>
        {/* <p>
            En plattform som muliggjør deling av historiske artikler, blogger og podcaster!
        </p> */}
        <p>
            Pasthive er en plattform der fagfolk kan publisere historisk forskning og kunnskap med tekst, 
            lyd og bilde. Den gir publikum nye måter å navigere kunnskap om fortiden på, uten å være avhengig 
            av å lese lange fagartikler og tidsskrifter. Samtidig er det et faglig rom der kvalifiserte fagfolk 
            kan diskutere og kommentere hverandres arbeid for å fremme kunnskapsutvikling. Innhold i Pasthive 
            kan også formidles i Pastport-appen med kildehenvisninger, med formål omat fagfolks arbeid når ut til flere.
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



       