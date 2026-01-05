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

function Team() {
  const members = [
  { name: "Mathilde Altenborg", role: "Spillutvikler og researcher", img: mathilde },
  { name: "Sofie Stubberud Aaslund", role: "Kommunikasjon og markedsføring", img: sofie },
  { name: "Jakob Anthony", role: "Daglig leder og produktansvarlig", img: jakob },
  { name: "Vårin Sørlie", role: "Teknisk ansvarlig", img: jakob },
  { name: "Dmitry Solt", role: "Teknisk ansvarlig", img: jakob },
];

  return (
    <section className="team">
      <h2>Om oss</h2>
      <div className="team-grid">
        {members.map((member, index) => (
          <div className="team-member" key={index}>
            <img className="avatar" src={member.img}>{member[0]}</img>
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
