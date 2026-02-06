import Image from "next/image";

const features = [
  {
    id: 1,
    image: "/images/feature-map.png",
    title: "Kart",
    headline: "Finn historiske steder",
    description:
      "Utforsk kartet og oppdag steder basert på dine valgte temaer og tidsepoker.",
  },
  {
    id: 2,
    image: "/images/feature-quest.png",
    title: "Quest",
    headline: "Løs gåter og oppdrag",
    description:
      "Delta i interaktive eventyr som bringer historien til live.",
  },
  {
    id: 3,
    image: "/images/feature-cards.png",
    title: "Kort",
    headline: "Bygg din samling",
    description:
      "Samle unike historiekort og objekter inspirert av lokal kultur.",
  },
];

function FeatureCard({ feature }: { feature: (typeof features)[0] }) {
  return (
    <article className="flex flex-col">
      {/* Phone mockup with screenshot */}
      <div className="relative mx-auto mb-6">
        {/* Phone frame */}
        <div className="relative w-[200px] md:w-[240px] mx-auto">
          {/* Phone bezel */}
          <div className="bg-[var(--burgundy)]/30 rounded-[2rem] p-1.5 shadow-2xl">
            {/* Screen - using actual screenshot aspect ratio */}
            <div className="relative rounded-[1.5rem] overflow-hidden bg-[var(--accent)]">
              <Image
                src={feature.image}
                alt={feature.title}
                width={240}
                height={520}
                className="w-full h-auto"
                sizes="240px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center px-4">
        <span className="text-sm font-semibold text-[var(--burgundy)] uppercase tracking-wider">
          {feature.title}
        </span>
        <h3 className="text-xl font-bold text-[var(--text-dark)] mt-2 mb-3">
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
    <section id="features" className="section-padding bg-[var(--accent)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-dark)] mb-6">
            Pastport
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-dark)]/80 max-w-3xl mx-auto leading-relaxed">
            La fortiden komme til live ved å oppdage skjulte perler! Velg perioder og temaer som interesserer deg, oppdag steder på kartet, ha det gøy med quester, og samle historiekort fra stedene du besøker.
          </p>
        </div>

        {/* Feature images grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
