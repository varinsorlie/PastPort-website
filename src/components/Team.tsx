"use client";

import Image from "next/image";
import ScrollCarousel from "./ScrollCarousel";

const members = [
  {
    name: "Mathilde Altenborg",
    role: "Prosjektleder & Fagansvarlig",
    image: "/images/team/mathilde.png",
  },
  {
    name: "Sofie S. Aaslund",
    role: "Kommunikasjon & Marked",
    image: "/images/team/sofie.png",
  },
  {
    name: "Vårin Sørlie",
    role: "Teknisk utvikler",
    image: "/images/team/vaarin.png",
  },
];

function TeamCard({ member }: { member: (typeof members)[0] }) {
  return (
    <div
      className="
        flex-shrink-0 w-[180px] md:w-[200px] scroll-snap-align-center
        bg-[var(--burgundy)] rounded-2xl p-4 text-center shadow-lg card-hover
      "
    >
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-white/10">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>
      <h3 className="font-bold text-white text-sm md:text-base">
        {member.name}
      </h3>
      <p className="text-white/70 text-xs md:text-sm mt-1">
        {member.role}
      </p>
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
            Vi er en tverrfaglig gjeng med bakgrunn fra historie, arkeologi, kommunikasjon, salg, og programmering.
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
