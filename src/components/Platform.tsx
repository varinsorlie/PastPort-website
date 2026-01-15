import Link from "next/link";
import Image from "next/image";
import { BookOpen, Users, Share2 } from "lucide-react";

export default function Platform() {
  const benefits = [
    {
      icon: BookOpen,
      text: "Publiser forskning med tekst, lyd og bilde",
    },
    {
      icon: Users,
      text: "Diskuter og kommenter med fagfeller",
    },
    {
      icon: Share2,
      text: "Nå ut til flere gjennom PastPort-appen",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[var(--accent)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-6 py-2 bg-[var(--burgundy)]/20 text-[var(--burgundy)] rounded-full text-lg md:text-xl font-semibold mb-4">
            For fagfolk
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
            PastHive Plattform
          </h2>
          <p className="text-lg text-[var(--text-dark)]/80 max-w-2xl mx-auto">
            En plattform der historikere, arkeologer og andre fagfolk kan
            publisere og dele kunnskap.
          </p>
        </div>

        {/* Full width platform image
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-12">
          <Image
            src="/images/pasthive-platform.png"
            alt="PastHive plattform"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </div> */}

        {/* Benefits row */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[var(--burgundy)]/10 backdrop-blur-sm rounded-xl p-4"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--burgundy)] flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-[var(--text-dark)]/90 font-medium">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center">
          <Link
            href="https://pasthive.no"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--burgundy)] text-white text-lg px-10 py-4 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity"
          >
            Utforsk PastHive
          </Link>
        </div>
      </div>
    </section>
  );
}
