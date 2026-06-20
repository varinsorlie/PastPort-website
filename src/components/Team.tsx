"use client";

import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { useReveal } from "./UseReveal";

interface Member {
  name: string;
  role: string;
  image: string;
  initials: string;
}

const members: Member[] = [
  {
    name: "Mathilde Altenborg",
    role: "Prosjektleder & Fagansvarlig",
    image: "/images/team/mathilde.png",
    initials: "MA",
  },
  {
    name: "Sofie S. Aaslund",
    role: "Kommunikasjon & Marked",
    image: "/images/team/sofie.png",
    initials: "SA",
  },
  {
    name: "Vårin Sørlie",
    role: "Teknisk utvikler",
    image: "/images/team/vaarin.png",
    initials: "VS",
  },
];

export default function Team() {
  const ref = useReveal();

  return (
    <section id="team" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal">
            <SectionLabel centered>Hvem vi er</SectionLabel>
          </div>
          <h2 className="reveal reveal-delay-1 font-display font-black tracking-tight leading-tight mb-4
            text-[clamp(2rem,5vw,3.5rem)] text-[var(--text)]">
            Teamet
          </h2>
          <p className="reveal reveal-delay-2 max-w-xl mx-auto text-[1.05rem] font-light leading-relaxed
            text-[var(--text-muted)]">
            Vi er en tverrfaglig gjeng med bakgrunn fra historie, arkeologi,
            kommunikasjon, salg og programmering.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5">
          {members.map((m, i) => (
            <MemberCard key={m.name} member={m} delay={i % 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member, delay }: { member: Member; delay: number }) {
  return (
    <div
      className={`reveal reveal-delay-${delay} flex flex-col bg-surface border border-gold/20
        rounded-[4px] overflow-hidden text-center pb-5 ml-20 mr-20 md:m-10
        transition-all duration-300 hover:border-gold/35 hover:-translate-y-1`}
    >
      {/* Photo */}
      <div className="relative w-full aspect-square overflow-hidden bg-[linear-gradient(145deg,#1a1a26,#12121a)]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale-[20%]"
          sizes="220px"
        />
      </div>

      {/* Info */}
      <div className="px-3 pt-4">
        <h3 className="text-[0.88rem] font-semibold leading-tight mb-1 text-[var(--text)]">
          {member.name}
        </h3>
        <p className="text-[0.75rem] font-light leading-snug text-[var(--text-muted)]">
          {member.role}
        </p>
      </div>
    </div>
  );
}