"use client";

import { Eye, Target, Heart, type LucideIcon } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { useReveal } from "./UseReveal";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
  num: string;
}

const values: Value[] = [
  {
    icon: Eye,
    title: "Visjon",
    description: "Vi skal tilgjengeliggjøre historisk kunnskap og objekter",
    num: "01",
  },
  {
    icon: Target,
    title: "Misjon",
    description: "Gjennom gameifisering gjør vi historielæring gøy",
    num: "02",
  },
  {
    icon: Heart,
    title: "Verdier",
    description:
      "Vi skal være empatiske, sannhetssøkende, transparente, og ha integritet i vårt arbeid",
    num: "03",
  },
];

export default function Journey() {
  const ref = useReveal();

  return (
    <section
      id="journey"
      ref={ref}
      className="py-28 px-6 bg-bg border-t border-gold/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="reveal">
            <SectionLabel>Vår historia</SectionLabel>
          </div>
          <h2 className="reveal reveal-delay-1 font-display font-black tracking-tight leading-tight mb-5 text-[clamp(2rem,5vw,3.5rem)] text-[var(--text)]">
            Vår reise
          </h2>
          <p className="reveal reveal-delay-2 text-[1.05rem] font-light leading-relaxed text-[var(--text-muted)]">
            Pastport begynte som en idé om å tilgjengeliggjøre historie på en
            engasjerende måte. Sommeren 2025 fikk vi muligheten til å utforske
            denne ideen, og resultatet har blitt en oversikt over kulturminner
            med morsomme spillelementer — Pastport.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 border-t border-gold/20">
          {values.map((v, i) => (
            <ValueCard key={v.title} value={v} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value, delay }: { value: Value; delay: number }) {
  const { icon: Icon } = value;

  return (
    <div className={`reveal reveal-delay-${delay} relative p-10 border-l border-gold/20`}>
      {/* Large decorative number */}
      <span className="absolute top-6 right-6 font-display font-black text-[4.5rem] leading-none pointer-events-none select-none text-gold/[0.06]">
        {value.num}
      </span>

      {/* Icon */}
      <div className="w-11 h-11 rounded-full flex items-center justify-center mb-5 border bg-crimson/15 border-crimson/30 text-[var(--crimson-bright)]">
        <Icon size={18} strokeWidth={1.5} />
      </div>

      <h3 className="font-display font-bold text-[1.2rem] mb-2 text-[var(--text)]">
        {value.title}
      </h3>
      <p className="text-[0.9rem] leading-relaxed font-light text-[var(--text-muted)]">
        {value.description}
      </p>
    </div>
  );
}