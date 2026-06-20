"use client";

import { MapPin, Sparkles, Eye, type LucideIcon } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { useReveal } from "./UseReveal";

interface Highlight {
  icon: LucideIcon;
  title: string;
  text: string;
}

const highlights: Highlight[] = [
  {
    icon: MapPin,
    title: "Lokale skatter",
    text: "Finn skjulte historiske perler rett der du er",
  },
  {
    icon: Sparkles,
    title: "Personlig",
    text: "Tilpasset dine interesser og epoker",
  },
  {
    icon: Eye,
    title: "Levende",
    text: "Opplev historien med tekst, lyd og bilder",
  },
];

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 px-6 bg-surface border-t border-b border-gold/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <div className="reveal">
            <SectionLabel>Om appen</SectionLabel>
          </div>
          <h2 className="reveal reveal-delay-1 font-display font-black tracking-tight leading-tight text-[clamp(2rem,5vw,3.5rem)] text-[var(--text)]">
            Historien rundt deg
          </h2>
        </div>

        {/* Cards — flush grid with hairline gold gaps */}
        <div className="grid md:grid-cols-3 gap-px bg-gold/20">
          {highlights.map((item, i) => (
            <HighlightCard key={item.title} item={item} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ item, delay }: { item: Highlight; delay: number }) {
  const { icon: Icon } = item;

  return (
    <div
      className={`reveal reveal-delay-${delay} group relative overflow-hidden p-10 md:p-12
        bg-bg hover:bg-[#0f0f18] transition-colors duration-300`}
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-gold to-transparent" />

      {/* Icon ring */}
      <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center mb-6 border border-gold/30 text-gold">
        <Icon size={20} strokeWidth={1.5} />
      </div>

      <h3 className="font-display font-bold text-xl mb-2 text-[var(--text)]">
        {item.title}
      </h3>
      <p className="text-[0.95rem] leading-relaxed text-[var(--text-muted)]">
        {item.text}
      </p>
    </div>
  );
}