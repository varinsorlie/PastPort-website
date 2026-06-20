import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layered radial background */}
      <div className="absolute inset-0 hero-bg" />

      {/* Grid lines */}
      <div className="absolute inset-0 hero-grid" />

      {/* Decorative concentric circles */}
      {(
        [
          { size: 700, opacity: 0.060 },
          { size: 500, opacity: 0.095 },
          { size: 300, opacity: 0.130 },
        ] as const
      ).map(({ size, opacity }) => (
        <div
          key={size}
          className="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: size,
            height: size,
            border: `1px solid rgba(232,197,106,${opacity})`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-[800px] px-6 mt-16 md:mt-20">

        {/* Eyebrow */}
        <div className="inline-block text-[0.75rem] tracking-[0.22em] uppercase font-medium
          border border-gold/30 px-5 py-1.5 mb-8 text-gold">
          En inngangsport til fortiden
        </div>

        <h1 className="font-display font-black leading-[0.95] tracking-tight mb-6
          text-[clamp(3rem,9vw,7.5rem)] text-[var(--text)]">
          Utforsk
          <br />
          <em className="not-italic text-gold">fortiden</em>
        </h1>

        <p className="max-w-[500px] mx-auto mb-12 font-light leading-relaxed
          text-[clamp(1.05rem,2.5vw,1.3rem)] text-[var(--text-muted)]">
          La historien komme til live. Oppdag skjulte perler, løs gåter og bygg
          din samling – rett der du er.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="#features"
            className="bg-gold text-bg font-semibold text-[0.95rem] tracking-[0.06em] uppercase
              px-9 py-4 rounded-sm transition-all duration-200 hover:bg-[#f0d380] hover:-translate-y-0.5"
          >
            Oppdag appen
          </Link>
          <Link
            href="https://pasthive.no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-medium text-[0.95rem] tracking-[0.06em] uppercase
              border border-gold/40 px-9 py-4 rounded-sm
              transition-all duration-200 hover:bg-gold/[0.07] hover:-translate-y-0.5"
          >
            Se plattformen
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <Link
        href="#features"
        aria-label="Scroll ned"
        className="absolute bottom-10 left-1/2 animate-float z-10
          flex flex-col items-center gap-2 text-[var(--text-dim)]"
      >
        <span className="text-[0.7rem] tracking-[0.15em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </Link>
    </section>
  );
}