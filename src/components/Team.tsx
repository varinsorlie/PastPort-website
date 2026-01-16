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
        name: "Jakob Anthony",
        role: "Daglig leder",
        image: "/images/team/jakob.jpg",
    },
  {
    name: "Vårin Sørlie",
    role: "Teknisk utvikler",
    image: "/images/team/vaarin.png",
  },
  {
    name: "Dmitry Solt",
    role: "Teknisk utvikler",
    image: "/images/team/dmitry.png",
  },
];

function TeamCard({ member }: { member: (typeof members)[0] }) {
  return (
    <div
      className="
        flex-shrink-0 w-[180px] md:w-[200px] scroll-snap-align-center
        bg-[var(--accent)] rounded-2xl p-4 text-center shadow-lg card-hover
      "
    >
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-[var(--burgundy)]/10">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>
      <h3 className="font-bold text-[var(--text-dark)] text-sm md:text-base">
        {member.name}
      </h3>
      <p className="text-[var(--text-dark)]/60 text-xs md:text-sm mt-1">
        {member.role}
      </p>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="section-padding bg-[var(--burgundy)]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Teamet
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Vi bringer fortiden til live ved å knytte historier til steder.
            Vårt mål er å gjøre historie spennende og tilgjengelig for alle.
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
