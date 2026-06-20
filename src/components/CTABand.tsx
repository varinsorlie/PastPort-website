import Link from "next/link";
 
export default function CTABand() {
  return (
    <div className="py-20 px-6 text-center bg-gold">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-black tracking-tight mb-4 text-[clamp(1.8rem,4vw,3rem)] text-bg">
          Klar til å oppdage fortiden?
        </h2>
        <p className="text-[1.05rem] mb-10 font-light text-bg/65">
          Meld deg på og vær blant de første til å prøve Pastport.
        </p>
        <Link
          href="https://nettskjema.no/a/566846#/page/1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-bg text-gold font-semibold text-[0.95rem] tracking-[0.07em] uppercase
            px-10 py-4 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
        >
          Bli med nå
        </Link>
      </div>
    </div>
  );
}
 