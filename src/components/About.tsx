import { MapPin, Sparkles, Eye } from "lucide-react";

export default function About() {
  const highlights = [
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

  return (
    <section id="about" className="section-padding bg-[var(--accent)]">
      <div className="max-w-5xl mx-auto">
        {/* Intro text - shortened */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-6">
            Historien rundt deg
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-dark)]/80 max-w-3xl mx-auto leading-relaxed">
            Gå forbi de typiske turistlistene og oppdag hundrevis av historiske
            steder i ditt nærområde. Velg epoker og temaer som interesserer deg,
            og la fortiden komme til live.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--burgundy)]/15 rounded-2xl p-6 text-center card-hover shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--burgundy)] flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--text-dark)]/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
