"use client";

import Image from "next/image";
import ScrollCarousel from "./ScrollCarousel";

const members = [
  {
    name: "Mathilde Altenborg",
    role: "Prosjektleder & Fagansvarlig",
    occupation: "Historielektor",
    image: "/images/team/mathilde.png",
  },
  {
    name: "Sofie S. Aaslund",
    role: "Kommunikasjon & Marked",
    occupation: "Skriver master i arkeologi",
    image: "/images/team/sofie.png",
  },
  {
    name: "Vårin Sørlie",
    role: "Teknisk utvikler",
    occupation: "Skriver master i informasjons teknologi",
    image: "/images/team/vaarin.png",
  },
];

function TeamCard({ member }: { member: (typeof members)[0] }) {
  return (
    <div className="flex flex-col items-center w-[220px] md:w-[240px] flex-shrink-0">
      <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden mb-4 bg-white/10">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="160px"
        />
      </div>

      <div className="flex flex-col items-center justify-start h-28 md:h-32 text-center px-2">
        <h3 className="font-bold text-[var(--text-dark)] text-sm md:text-base">
          {member.name}
        </h3>
        <p className="text-[var(--text-dark)]/70 text-xs md:text-sm mt-1">
          {member.role}
        </p>
        <p className="text-[var(--text-dark)]/70 text-xs md:text-sm mt-1">
          {member.occupation}
        </p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="section-padding bg-[var(--accent)]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
            Teamet
          </h2>
          <p className="text-lg text-[var(--text-dark)]/80 max-w-2xl mx-auto">
            Vi er en tverrfaglig gjeng med bakgrunn fra historie, arkeologi, kommunikasjon og programmering.
          </p>
        </div>

        {/* Scroll carousel with arrows */}
        <ScrollCarousel>
          {members.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </ScrollCarousel>
      </div>
    </section>
  );
}