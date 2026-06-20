"use client";

import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { useReveal } from "./UseReveal";

interface Feature {
  id: number;
  image: string;
  tag: string;
  headline: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    image: "/images/feature-map.png",
    tag: "Kart",
    headline: "Finn historiske steder",
    description: "Utforsk kartet og oppdag steder basert på dine valgte temaer og tidsepoker.",
  },
  {
    id: 2,
    image: "/images/feature-quest.png",
    tag: "Quest",
    headline: "Løs gåter og oppdrag",
    description: "Delta i interaktive eventyr som bringer historien til live.",
  },
  {
    id: 3,
    image: "/images/feature-cards.png",
    tag: "Kort",
    headline: "Bygg din samling",
    description: "Samle unike historiekort og objekter inspirert av lokal kultur.",
  },
];

export default function Features() {
  const ref = useReveal();

  return (
    <section id="features" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal">
            <SectionLabel centered>Pastport</SectionLabel>
          </div>
          <h2 className="reveal reveal-delay-1 font-display font-black tracking-tight leading-tight mb-5 text-[clamp(2rem,5vw,3.5rem)] text-[var(--text)]">
            Tre måter å
            <br />
            oppleve historien
          </h2>
          <p className="reveal reveal-delay-2 max-w-2xl mx-auto text-[1.05rem] leading-relaxed font-light text-[var(--text-muted)]">
            La fortiden komme til live ved å oppdage skjulte perler! Velg
            perioder og temaer som interesserer deg, oppdag steder på kartet, ha
            det gøy med quester, og samle historiekort fra stedene du besøker.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={f.id} feature={f} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, delay }: { feature: Feature; delay: number }) {
  return (
    <article
      className={`reveal reveal-delay-${delay} flex flex-col bg-surface border border-gold/20
        rounded-[4px] overflow-hidden transition-all duration-300
        hover:border-gold/40 hover:-translate-y-1`}
    >
      {/* Phone mockup */}
      <div className="flex justify-center pt-8 px-8">
        <div className="w-[160px] rounded-[24px] p-2 shadow-2xl border border-gold/20 bg-[#1e1e2e]">
          <div
            className="rounded-[18px] overflow-hidden relative bg-bg"
            style={{ aspectRatio: "9/19.5" }}
          >
            <Image
              src={feature.image}
              alt={feature.tag}
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="px-7 pb-8 pt-6">
        <span className="block text-[0.65rem] tracking-[0.2em] uppercase font-semibold mb-2 text-gold">
          {feature.tag}
        </span>
        <h3 className="font-display font-bold text-[1.25rem] mb-2 text-[var(--text)]">
          {feature.headline}
        </h3>
        <p className="text-[0.9rem] leading-relaxed font-light text-[var(--text-muted)]">
          {feature.description}
        </p>
      </div>
    </article>
  );
}