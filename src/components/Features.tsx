"use client";

import Image from "next/image";
import { Map, Compass, Layers } from "lucide-react";
import ScrollCarousel from "./ScrollCarousel";

const features = [
  {
    id: 1,
    icon: Map,
    image: "/images/feature-map.png",
    title: "Kart",
    headline: "Finn historiske steder",
    description:
      "Utforsk kartet og oppdag steder basert på dine valgte temaer og tidsepoker.",
  },
  {
    id: 2,
    icon: Compass,
    image: "/images/feature-quest.png",
    title: "Quest",
    headline: "Løs gåter og oppdrag",
    description:
      "Delta i interaktive eventyr som bringer historien til live rundt deg.",
  },
  {
    id: 3,
    icon: Layers,
    image: "/images/feature-cards.png",
    title: "Kort",
    headline: "Bygg din samling",
    description:
      "Samle unike historiekort og objekter inspirert av lokal kultur.",
  },
];

function FeatureCard({ feature }: { feature: (typeof features)[0] }) {
  return (
    <article
      className="
        flex-shrink-0 w-[300px] md:w-[340px] scroll-snap-align-center
        bg-[var(--accent)] rounded-3xl overflow-hidden shadow-xl card-hover
      "
    >
      {/* Image container */}
      <div className="relative h-44 md:h-52 bg-black/10">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover"
          sizes="340px"
        />
        {/* Icon badge */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-[var(--burgundy)] flex items-center justify-center shadow-lg">
          <feature.icon className="w-6 h-6 text-[var(--accent)]" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-sm font-semibold text-[var(--burgundy)] uppercase tracking-wider">
          {feature.title}
        </span>
        <h3 className="text-xl font-bold text-[var(--text-dark)] mt-1 mb-3">
          {feature.headline}
        </h3>
        <p className="text-[var(--text-dark)]/70 leading-relaxed text-sm">
          {feature.description}
        </p>
      </div>
    </article>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-[var(--burgundy)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center px-4 mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4">
            PastPort App
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Alt du trenger for å oppdage fortiden i lomma
          </p>
        </div>

        {/* Scroll carousel with arrows */}
        <ScrollCarousel>
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </ScrollCarousel>
      </div>
    </section>
  );
}
