import { Lightbulb, Sun, Code, Rocket } from "lucide-react";

export default function Journey() {
  const milestones = [
    {
      icon: Lightbulb,
      title: "Ideen",
      description: "Fra en lidenskap for historie og teknologi",
    },
    {
      icon: Sun,
      title: "Sommerstipend",
      description: "Støtte til å utvikle konseptet videre",
    },
    {
      icon: Code,
      title: "Utvikling",
      description: "Fra prototype til fungerende app",
    },
    {
      icon: Rocket,
      title: "Fremtiden",
      description: "Vår visjon for å gjøre historie tilgjengelig for alle",
    },
  ];

  return (
    <section id="journey" className="section-padding bg-[var(--accent)]">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
            Vår reise
          </h2>
          <p className="text-lg text-[var(--text-dark)]/80 max-w-2xl mx-auto">
            Pastport startet som en idé om å gjøre lokalhistorie mer
            tilgjengelig og engasjerende. Med støtte fra sommerstipend har vi
            utviklet en konsept av plattform og app som bringer fortiden til live. Vår visjon er å skape
            en plattform der alle kan oppdage og dele historien rundt seg.
          </p>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="text-center p-4"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--burgundy)] flex items-center justify-center mx-auto mb-4">
                <milestone.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-dark)] mb-2">
                {milestone.title}
              </h3>
              <p className="text-sm text-[var(--text-dark)]/70">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
