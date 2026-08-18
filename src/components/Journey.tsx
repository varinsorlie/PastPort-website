"use client";

import { Eye, Target, Heart } from "lucide-react";

const milestones = [
  {
    year: "2024",
    title: "Idéen ble til",
    description:
      "Pastport begynte som en idé om å tilgjengeliggjøre historie på en engasjerende måte.",
  },
  {
    year: "Sommer 2025",
    title: "Prosjektet starter",
    description:
      "Vi fikk muligheten til å utforske idéen videre og laget de første konseptene.",
  },
  {
    year: "2025–2026",
    title: "Utvikling",
    description:
      "Vi bygger appen med spillelementer for å lære bort historie og kulturminner.",
  },
];

const values = [
  {
    icon: Eye,
    title: "Visjon",
    description: "Vi skal tilgjengeliggjøre historisk kunnskap og objekter",
  },
  {
    icon: Target,
    title: "Misjon",
    description: "Gjennom gameifisering gjør vi historielæring gøy",
  },
  {
    icon: Heart,
    title: "Verdier",
    description:
      "Vi skal være empatiske, sannhetssøkende, transparente, og ha integritet i vårt arbeid",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section-padding bg-[var(--blue)]">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vår reise
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Fra idé til virkelighet! Dette er historien om hvordan Pastport ble til:
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          {/* Mobile: vertical */}
          <div className="md:hidden relative pl-8">
            <div className="absolute left-2 top-1 bottom-1 w-px bg-white/20" />
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative">
                  <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--dark-blue)]" />
                  <span className="text-[var(--accent)] font-semibold text-sm tracking-wide">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5 mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: horizontal */}
          <div className="hidden md:block relative">
            {/* Horizontal line */}
            <div className="absolute top-1.5 left-0 right-0 h-px bg-white/20" />

            <div className="grid grid-cols-3 gap-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative pt-8 text-center">
                  {/* Dot */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--dark-blue)]" />

                  <span className="text-[var(--accent)] font-semibold text-sm tracking-wide">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values circles */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[var(--accent)] flex items-center justify-center mx-auto mb-6 shadow-lg">
                <value.icon className="w-10 h-10 md:w-12 md:h-12 text-[var(--blue)]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}