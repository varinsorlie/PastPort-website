import Image from "next/image";

const features = [
  {
    id: 1,
    image: "/images/Pastport-home.png",
    title: "Dashboard",
    headline: "Bygg din kunnskap",
    description:
      "Utforsk spillelementer og oppdag steder basert på dine valgte temaer og tidsepoker.",
  },
  {
    id: 2,
    image: "/images/pastport-profile.png",
    title: "Profil",
    headline: "Velg interesser",
    description:
      "Lag en personlig tilpasset profil som matcher dine interesser.",
  },
  {
    id: 3,
    image: "/images/Pastport-quests.png",
    title: "Quester",
    headline: "Løs gåter og oppdrag",
    description:
      "Lær gjennom spillbaserte quester, laget av historikere.",
  },
  {
    id: 4,
    image: "/images/Pastport-this-quest.png",
    title: "Kart",
    headline: "Besøk fortiden",
    description:
      "Besøk historiske steder i et interaktivt kart.",
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
            Historiske quester laget og skrevet av erfarne historikere!
          </p>
          <p className="text-lg md:text-xl text-[var(--text-dark)]/80 max-w-3xl mx-auto leading-relaxed">
           Oppdag skjulte hendelser fra ditt lokalområde.
            Velg perioder, områder og temaer som interesserer deg.
            Samle premier underveis i læringen.
          </p>
          
        </div>

        {/* Feature images grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
