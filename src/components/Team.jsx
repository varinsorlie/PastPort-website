// const teamMembers = [
//   { name: "Mathilde Altenborg", role: "Spillutvikler og researcher", img: "ansattbilde.jpg" },
//   { name: "Sofie Stubberud Aaslund", role: "Kommunikasjon og markedsføring", img: "sofia.jpg" },
//   { name: "Jakob Anthony", role: "Daglig leder og produktansvarlig", img: "meg2.jpg" },
// ];

// export default function Team() {
//   return (
//     <section id="team" className="py-16">
//       <h2 className="text-2xl font-bold text-center mb-8">Dette er oss</h2>
//       <div className="grid gap-8 md:grid-cols-3">
//         {teamMembers.map((m) => (
//           <div key={m.name} className="text-center">
//             {/* <img src={`/images/${m.img}`} alt={m.name} className="mx-auto rounded-full w-32 h-32 mb-4" /> */}
//             <h4 className="font-semibold">{m.name}</h4>
//             <p>{m.role}</p>
//             <a href="mailto:info@pastport.no" className="text-blue-600 underline">Send mail</a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React from "react";
import "./Team.css";
import mathilde from "../assets/Portrett_Mathilde.png"
import sofie from "../assets/Portrett_Sofie.png"
import jakob from "../assets/Portrett_Jakob.jpg"
import dmitry from "../assets/Portrett_Dmitry.png"
import vaarin from "../assets/Portrett_Vaarin.png"

function Team() {
  const members = [
  { name: "Mathilde Altenborg", 
    role: "Prosjektleder og fagansvarlig", 
    education: "Lektor i historie (NTNU), Bachelor i historie (UiO), Bachelor i filmregi (NISS)",
    img: mathilde },

  { name: "Jakob Anthony", 
    role: "Daglig leder", 
    education: "Historiestudent i historie (UiO), Informatikkstudent i historie (UiO)",
    img: jakob },

  { name: "Sofie Stubberud Aaslund", 
    role: "Kommunikasjon- og markedsansvarlig", 
    education: "Masterstudent i arkeologi (UiO), Bachelor i arkeologi (UiO), Bachelor i kommunikasjonsledelse (BI)",
    img: sofie },

  { name: "Vårin Sørlie", 
    role: "Teknisk utvikler", 
    education: "Masterstudent i informatikk: programmering og systemarkitektur (UiO), Bachelor i informatikk: Design, bruk og interaksjon (UiO)",
    img: vaarin },

  { name: "Dmitry Solt", 
    role: "Teknisk utvikler", 
    education: "Masterstudent i informatikk: programmering og systemarkitektur (UiO), Bachelor i informatikk: Digital økonomi og ledelse (UiO)",
    img: dmitry },
];

  return (
    <section className="team">
      <h2>Om oss</h2>
      <div className="om-oss">
        <p>
        Pastport bringer fortiden til live ved å knytte historier til steder og objekter.
        Vi gjør historisk kunnskap spennende og enkelt tilgjengelig for folk flest, 
        samtidig som vi hjelper fagmiljøet å nå ut til flere med kvalitetssikret innhold. 
        Dette gjør vi gjennom en kartbasert app for publikum og en publiseringsplattform for fagfolk. 
        </p>
      </div>
      <div className="team-grid">
        {members.map((member, index) => (
          <div className="team-member" key={index}>
            <img className="avatar" src={member.img} alt={member.name}>{member[0]}</img>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            {/* <p>Utdanning: <br></br>{member.education}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
