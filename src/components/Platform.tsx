"use client";

import Link from "next/link";
import { BookOpen, Users, Share2, type LucideIcon } from "lucide-react";
import { useReveal } from "./UseReveal";

interface Benefit {
  icon: LucideIcon;
  text: string;
}

const benefits: Benefit[] = [
  { icon: BookOpen, text: "Publiser forskning med tekst, lyd og bilde" },
  { icon: Users,    text: "Diskuter og kommenter med fagfeller" },
  { icon: Share2,   text: "Nå ut til flere gjennom PastPort-appen" },
];

export default function Platform() {
  const ref = useReveal();

  return (
    <section
      id="platform"
      ref={ref}
      className="py-28 px-6 bg-surface border-t border-b border-gold/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text side */}
          <div className="reveal">
            <span className="inline-block text-[0.7rem] tracking-[0.2em] uppercase font-medium
              border border-gold/30 px-4 py-1.5 mb-6 text-gold">
              For fagfolk
            </span>

            <h2 className="font-display font-black tracking-tight leading-tight mb-5
              text-[clamp(2rem,5vw,3.5rem)] text-[var(--text)]">
              Pasthive
            </h2>

            <p className="text-[1.05rem] leading-relaxed mb-8 font-light text-[var(--text-muted)]">
              En plattform der historikere, arkeologer og andre fagfolk kan
              publisere og dele kunnskap.
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              {benefits.map((b) => (
                <BenefitItem key={b.text} benefit={b} />
              ))}
            </ul>

            <Link
              href="https://pasthive.no"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gold font-medium text-[0.95rem] tracking-[0.06em] uppercase
                border border-gold/40 px-8 py-3.5 rounded-sm
                transition-all duration-200 hover:bg-gold/[0.07] hover:-translate-y-px"
            >
              Utforsk Pasthive →
            </Link>
          </div>

          {/* Visual side */}
          <div
            className="reveal reveal-delay-1 bg-bg border border-gold/20 rounded-[4px]
              flex items-center justify-center relative overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,197,106,0.05)_0%,transparent_70%)]" />

            <div className="relative text-center z-10 p-8">
              <span className="block font-display font-black text-[6rem] leading-none tracking-tighter text-gold/10">
                PH
              </span>
              <p className="font-display font-bold text-[2rem] -mt-3 text-gold">
                Pasthive
              </p>
              <p className="text-[0.8rem] tracking-[0.12em] uppercase mt-1 text-[var(--text-dim)]">
                Kunnskap for alle
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function BenefitItem({ benefit }: { benefit: Benefit }) {
  const { icon: Icon } = benefit;
  return (
    <li className="flex items-start gap-4">
      <div className="w-[34px] h-[34px] flex-shrink-0 flex items-center justify-center
        border border-gold/25 rounded-sm mt-0.5 text-gold">
        <Icon size={15} strokeWidth={1.5} />
      </div>
      <span className="text-[0.95rem] leading-relaxed font-light text-[var(--text-muted)]">
        {benefit.text}
      </span>
    </li>
  );
}