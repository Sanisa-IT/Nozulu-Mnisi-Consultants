import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAVY, GOLD, BORDER } from "./shared";

type Page =
  | "home" | "about" | "services" | "journey"
  | "who-we-serve" | "insights" | "reviews" | "faqs" | "contact";

const links: { label: string; page: Page }[] = [
  { label: "Home",         page: "home" },
  { label: "About Us",     page: "about" },
  { label: "Services",     page: "services" },
  { label: "Our Journey",  page: "journey" },
  { label: "Who We Serve", page: "who-we-serve" },
  { label: "Insights",     page: "insights" },
  { label: "Reviews",      page: "reviews" },
  { label: "FAQs",         page: "faqs" },
  { label: "Contact",      page: "contact" },
];

export default function Navbar({
  current,
  navigate,
}: {
  current: Page;
  navigate: (p: Page) => void;
}) {
  const [open, setOpen] = useState(false);

  const go = (p: Page) => { navigate(p); setOpen(false); window.scrollTo(0, 0); };

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm" style={{ borderColor: BORDER }}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => go("home")} className="flex items-center gap-3 shrink-0">
          <div
            className="w-10 h-10 rounded flex items-center justify-center text-white font-black text-sm"
            style={{ background: NAVY }}
          >
            NM
          </div>
          <div className="text-left">
            <p className="text-sm font-black leading-none" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>
              NOZULU MNISI
            </p>
            <p className="text-sm font-black leading-none" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>
              CONSULTANTS
            </p>
            <p className="text-[9px] tracking-widest text-gray-400 uppercase leading-none mt-0.5">
              Accounting · Taxation · Advisory
            </p>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => go(page)}
              className="px-3 py-2 text-xs font-semibold rounded transition-colors"
              style={{
                color: current === page ? GOLD : NAVY,
                background: current === page ? GOLD + "12" : "transparent",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={() => go("contact")}
          className="hidden lg:flex font-black text-sm px-5 py-2.5 rounded text-white hover:opacity-90 transition-all"
          style={{ background: NAVY, fontFamily: "'Montserrat', sans-serif" }}
        >
          Let's Work Together
        </button>

        {/* Hamburger — small screens only */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={22} color={NAVY} /> : <Menu size={22} color={NAVY} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t px-5 py-4" style={{ borderColor: BORDER }}>
          <div className="space-y-1 mb-4">
            {links.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => go(page)}
                className="block w-full text-left px-3 py-2.5 rounded text-sm font-semibold transition-colors"
                style={{
                  color: current === page ? GOLD : NAVY,
                  background: current === page ? GOLD + "12" : "transparent",
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            onClick={() => go("contact")}
            className="w-full font-black text-sm py-3 rounded text-white"
            style={{ background: NAVY }}
          >
            Let's Work Together
          </button>
        </div>
      )}
    </nav>
  );
}

export type { Page };
