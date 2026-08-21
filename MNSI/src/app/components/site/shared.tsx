// Shared brand tokens and components used across all pages

export const NAVY   = "#0B1F4B";
export const GOLD   = "#C8962E";
export const LIGHT  = "#F8F9FC";
export const BORDER = "#E2E6EF";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: GOLD }}>
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  center = false,
  light = false,
}: {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-black leading-tight mb-5 ${center ? "text-center" : ""}`}
      style={{ color: light ? "#fff" : NAVY, fontFamily: "'Montserrat', sans-serif" }}
    >
      {children}
    </h2>
  );
}

export function Btn({
  children,
  variant = "primary",
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "gold";
  onClick?: () => void;
  className?: string;
}) {
  const base = "inline-flex items-center gap-2 font-black px-6 py-3 rounded text-sm transition-all hover:opacity-90";
  const styles = {
    primary: { background: NAVY, color: "#fff" },
    outline: { border: `2px solid ${NAVY}`, color: NAVY, background: "transparent" },
    gold:    { background: GOLD, color: "#fff" },
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${className}`}
      style={{ fontFamily: "'Montserrat', sans-serif", ...styles[variant] }}
    >
      {children}
    </button>
  );
}

export function PageHero({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1a3a6b 100%)` }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: GOLD, transform: "translate(30%,-30%)" }}
      />
      <div className="relative max-w-4xl mx-auto px-5 text-center">
        <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: GOLD }}>
          {label}
        </p>
        <h1
          className="text-4xl md:text-5xl font-black text-white leading-tight mb-5"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {title}
        </h1>
        {subtitle && <p className="text-blue-200 text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
