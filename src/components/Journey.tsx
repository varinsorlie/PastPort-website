import { Eye, Target, Heart } from "lucide-react";

export default function Journey() {
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
      description: "Vi skal være empatiske, sannhetssøkende, transparente, og ha integritet i vårt arbeid",
    },
  ];

  return (
    <section id="journey" className="section-padding bg-[var(--burgundy)]">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vår reise
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Pastport begynte som en idé om å tilgjengeliggjøre historie på en engasjerende måte. Sommeren 2025 fikk vi muligheten til å utforske denne ideen, og resultatet har blitt en oversikt over kulturminner med morsomme spillelementer - Pastport.
          </p>
        </div>

        {/* Values circles */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[var(--accent)] flex items-center justify-center mx-auto mb-6 shadow-lg">
                <value.icon className="w-10 h-10 md:w-12 md:h-12 text-[var(--burgundy)]" />
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
