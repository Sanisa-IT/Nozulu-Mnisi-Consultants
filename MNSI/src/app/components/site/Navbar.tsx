import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAVY, GOLD, BORDER, BACKGROUND_BLUE, BACKGROUND_GREEN } from "./shared";
import companyLogo from "../../../imports/Screenshot 2026-08-27 110932.png";

type Page =
  | "home" | "about" | "services" | "journey"
  | "who-we-serve" | "reviews" | "faqs" | "contact";

const mainLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Services", page: "services" },
  { label: "Who We Serve", page: "who-we-serve" },
  { label: "Contact", page: "contact" },
];

const aboutLinks: { label: string; page: Page }[] = [
  { label: "About Us", page: "about" },
  { label: "Our Journey", page: "journey" },
];

export default function Navbar({
  current,
  navigate,
}: {
  current: Page;
  navigate: (p: Page) => void;
}) {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const go = (p: Page) => { navigate(p); setOpen(false); setAboutOpen(false); window.scrollTo(0, 0); };
  const isAboutActive = current === "about" || current === "journey";

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm" style={{ borderColor: BORDER }}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => go("home")} className="shrink-0" aria-label="Go to home page">
          <img src={companyLogo} alt="Nozulu Mnisi Consultants" className="h-12 w-auto" />
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {mainLinks.map(({ label, page }) => {
            if (page === "about") {
              return (
                <div
                  key={page}
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button
                    onClick={() => {
                      if (current !== "about") navigate("about");
                      setAboutOpen((prev) => !prev);
                    }}
                    className="flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded transition-colors"
                    style={{
                      color: isAboutActive ? GOLD : NAVY,
                      background: isAboutActive ? BACKGROUND_GREEN + "12" : "transparent",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {label}
                    <ChevronDown size={14} />
                  </button>

                  {aboutOpen && (
                    <div className="absolute left-0 top-full w-44 pt-2">
                      <div className="rounded-lg border bg-white shadow-lg py-2" style={{ borderColor: BORDER }}>
                        {aboutLinks.map(({ label: childLabel, page: childPage }) => (
                          <button
                            key={childPage}
                            onClick={() => go(childPage)}
                            className="block w-full text-left px-3 py-2 text-xs font-semibold transition-colors"
                            style={{
                              color: current === childPage ? GOLD : NAVY,
                              background: current === childPage ? BACKGROUND_GREEN + "12" : "transparent",
                              fontFamily: "'Montserrat', sans-serif",
                            }}
                          >
                            {childLabel}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={page}
                onClick={() => go(page)}
                className="px-3 py-2 text-xs font-semibold rounded transition-colors"
                style={{
                  color: current === page ? GOLD : NAVY,
                  background: current === page ? BACKGROUND_GREEN + "12" : "transparent",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {label}
              </button>
            );
          })}
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
            {mainLinks.map(({ label, page }) => {
              if (page === "about") {
                return (
                  <div key={page} className="rounded border" style={{ borderColor: BORDER }}>
                    <button
                      onClick={() => {
                        setAboutOpen((prev) => !prev);
                        if (current !== "about") navigate("about");
                      }}
                      className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm font-semibold"
                      style={{ color: isAboutActive ? GOLD : NAVY }}
                    >
                      <span>{label}</span>
                      <ChevronDown size={14} />
                    </button>

                    {aboutOpen && (
                      <div className="border-t px-3 py-2" style={{ borderColor: BORDER }}>
                        {aboutLinks.map(({ label: childLabel, page: childPage }) => (
                          <button
                            key={childPage}
                            onClick={() => go(childPage)}
                            className="block w-full text-left px-3 py-2 text-sm font-medium"
                            style={{
                              color: current === childPage ? GOLD : NAVY,
                              background: current === childPage ? BACKGROUND_GREEN + "12" : "transparent",
                            }}
                          >
                            {childLabel}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={page}
                  onClick={() => go(page)}
                  className="block w-full text-left px-3 py-2.5 rounded text-sm font-semibold transition-colors"
                  style={{
                    color: current === page ? GOLD : NAVY,
                    background: current === page ? BACKGROUND_GREEN + "12" : "transparent",
                  }}
                >
                  {label}
                </button>
              );
            })}
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
