interface SectionLabelProps {
  children: React.ReactNode;
  centered?: boolean;
}
 
export default function SectionLabel({
  children,
  centered = false,
}: SectionLabelProps) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.7rem] tracking-[0.25em] uppercase font-medium mb-5 text-gold
        ${centered ? "justify-center" : ""}`}
    >
      <span className="block w-8 h-px flex-shrink-0 bg-gold" />
      {children}
    </p>
  );
}
 