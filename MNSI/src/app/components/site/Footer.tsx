import { Linkedin, Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { NAVY, GOLD } from "./shared";
import type { Page } from "./Navbar";

const quickLinks: { label: string; page: Page }[] = [
  { label: "Home",         page: "home" },
  { label: "About Us",     page: "about" },
  { label: "Services",     page: "services" },
  { label: "Our Journey",  page: "journey" },
  { label: "Who We Serve", page: "who-we-serve" },
  { label: "Reviews",      page: "reviews" },
  { label: "FAQs",         page: "faqs" },
  { label: "Contact",      page: "contact" },
];

export default function Footer({ navigate }: { navigate: (p: Page) => void }) {
  const go = (p: Page) => { navigate(p); window.scrollTo(0, 0); };

  return (
    <footer style={{ background: NAVY }}>
      <div className="max-w-7xl mx-auto px-5 pt-16 pb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded flex items-center justify-center text-white font-black text-sm" style={{ background: GOLD }}>
                NM
              </div>
              <div>
                <p className="text-sm font-black text-white leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>NOZULU MNISI</p>
                <p className="text-sm font-black text-white leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>CONSULTANTS</p>
              </div>
            </div>
            <p className="text-xs text-blue-200 leading-relaxed mb-2">Your Partner in Personal and Business Wellbeing.</p>
            <p className="text-xs text-blue-300 mb-5">Accounting · Taxation · Advisory</p>
            <div className="flex gap-2 mb-5">
              {[<Linkedin size={15} />, <Facebook size={15} />, <Instagram size={15} />, <Youtube size={15} />].map((icon, i) => (
                <div key={i} className="w-8 h-8 rounded flex items-center justify-center text-white hover:opacity-80 cursor-pointer transition-opacity" style={{ background: "rgba(255,255,255,0.12)" }}>
                  {icon}
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-blue-200">
                <Phone size={12} style={{ color: GOLD }} /> 011 568 7121 (Gauteng)
              </div>
              <div className="flex items-center gap-2 text-xs text-blue-200">
                <Phone size={12} style={{ color: GOLD }} /> 031 100 0320 (KZN)
              </div>
              <div className="flex items-center gap-2 text-xs text-blue-200">
                <Mail size={12} style={{ color: GOLD }} /> admin@nozulumnisi.co.za
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-black tracking-[0.2em] uppercase mb-5" style={{ color: GOLD }}>Quick Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, page }) => (
                <li key={page}>
                  <button onClick={() => go(page)} className="text-xs text-blue-200 hover:text-white transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <p className="text-xs font-black tracking-[0.2em] uppercase mb-5" style={{ color: GOLD }}>Offices</p>
            <div className="space-y-5">
              <div>
                <p className="text-xs font-black text-white mb-1.5">Gauteng — Head Office</p>
                <p className="text-xs text-blue-200 leading-relaxed">
                  10 Edgar Road<br />Benista Office Park<br />Janssen Park<br />Boksburg, 1459
                </p>
              </div>
              <div>
                <p className="text-xs font-black text-white mb-1.5">KwaZulu-Natal — Durban Office</p>
                <p className="text-xs text-blue-200 leading-relaxed">
                  9 Linden Road<br />Eschenwood<br />Durban, 4001
                </p>
              </div>
            </div>
          </div>

          {/* Legal + Services */}
          <div>
            <p className="text-xs font-black tracking-[0.2em] uppercase mb-5" style={{ color: GOLD }}>Legal</p>
            <ul className="space-y-2.5 mb-8">
              {["Privacy Policy", "Terms & Conditions", "POPIA", "Disclaimer"].map((l) => (
                <li key={l}><a href="#" className="text-xs text-blue-200 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
            <p className="text-xs font-black tracking-[0.2em] uppercase mb-4" style={{ color: GOLD }}>Services</p>
            <ul className="space-y-2">
              {["Financial Reporting", "Taxation", "Payroll", "Statutory Compliance", "Advisory", "Finance Operations"].map((s) => (
                <li key={s}>
                  <button onClick={() => go("services")} className="text-xs text-blue-200 hover:text-white transition-colors">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-300">© 2025 Nozulu Mnisi Consultants. All rights reserved.</p>
          <p className="text-xs text-blue-400">Registered Tax Practitioner · AGA(SA) · CIBA Approved Training Office</p>
        </div>
      </div>
    </footer>
  );
}
