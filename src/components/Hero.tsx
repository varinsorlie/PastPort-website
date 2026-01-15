import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Historisk bakgrunn"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--burgundy)]/60 via-[var(--burgundy)]/30 to-[var(--accent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center -mt-20 md:-mt-32">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl font-[var(--font-cinzel)]">
          Utforsk
          <br />
          <span className="text-[var(--accent)]">Fortiden</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-lg">
          Din portal til historie gjennom spill og læring
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#features"
            className="btn-primary text-lg px-10 py-4"
          >
            Oppdag appen
          </Link>
          <Link
            href="https://pasthive.no"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-lg px-10 py-4"
          >
            Se plattformen
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll ned"
      >
        <ChevronDown className="w-10 h-10 text-white/70" />
      </Link>
    </section>
  );
}
