import {
  Building2, Briefcase, Globe, HeartHandshake,
  Factory, UserCog, CheckCircle, ArrowRight,
} from "lucide-react";
import { NAVY, GOLD, LIGHT, BORDER, BACKGROUND_BLUE, SectionLabel, SectionHeading, Btn, PageHero } from "../components/site/shared";
import type { Page } from "../components/site/Navbar";

const segments = [
  {
    icon: <Building2 size={28} />,
    title: "Owner-Managed Businesses & SMEs",
    desc: "The backbone of the South African economy. Owner-managed businesses face unique challenges: wearing multiple hats, managing cash flow, staying compliant and finding time to plan ahead.",
    needs: ["Monthly bookkeeping and management accounts", "Tax compliance and provisional tax", "Payroll for a growing team", "Cash flow planning and advisory", "Year-end financial statements"],
    quote: "We work directly with business owners — not just their files. Your success is our measure.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Professional & Service Firms",
    desc: "Lawyers, architects, engineers, consultants and other professionals need financial support that understands their billing models, practice structures and regulatory environments.",
    needs: ["Trust account accounting (where applicable)", "Practice management reporting", "Tax planning for professionals", "Partnership or director payroll", "Annual compliance and statutory filings"],
    quote: "We understand the financial structures of professional practices and provide support that fits.",
  },
  {
    icon: <Globe size={28} />,
    title: "Public-Sector & Municipal Assignments",
    desc: "We support public-sector entities, municipalities and government-linked organisations with specific accounting, compliance and reporting requirements.",
    needs: ["GRAP-aligned financial reporting support", "Audit preparation and file management", "Procurement compliance", "Payroll and employee benefits", "Statutory returns and regulatory compliance"],
    quote: "We bring the same rigour and accountability to public-sector work that we apply to every engagement.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Membership Organisations & Co-operatives",
    desc: "Non-profits, associations, co-operatives and membership bodies have distinct financial obligations — including donor reporting, member levies and governance requirements.",
    needs: ["Fund accounting and restricted grant reporting", "Annual financial statements", "Compliance with NPO Act and CIPC requirements", "Payroll and staff management", "Board reporting and management accounts"],
    quote: "We understand the governance and reporting requirements of non-profit and member-based structures.",
  },
  {
    icon: <Factory size={28} />,
    title: "Industrial, Transport & Project Businesses",
    desc: "Project-based and industrial businesses need financial systems that track costs, manage contracts and provide visibility across complex operations.",
    needs: ["Job costing and project accounting", "Fleet and asset management", "Subcontractor and supplier payments", "Multi-contract payroll", "CIDB compliance and regulatory support"],
    quote: "We adapt our financial support to the operational realities of project and industrial businesses.",
  },
  {
    icon: <UserCog size={28} />,
    title: "Individuals, Directors & Executives",
    desc: "High-earning individuals, directors and executives have complex personal tax affairs, investment income and multiple income streams that require specialist attention.",
    needs: ["Personal income tax returns", "Investment and rental income reporting", "Director's loan account management", "Estate and trust tax compliance", "Tax planning and structuring"],
    quote: "Your financial affairs deserve the same senior attention as any business — we provide exactly that.",
  },
];

export default function WhoWeServePage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      <PageHero
        label="Who We Serve"
        title={<>Financial Support Built Around <span style={{ color: GOLD }}>Different Realities.</span></>}
        subtitle="We serve a diverse range of clients — each with different structures, obligations and goals. Our integrated approach adapts to all of them."
      />

      {/* Segment grid overview */}
      <section className="py-16 bg-white border-b" style={{ borderColor: BORDER }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {segments.map((s) => (
              <a
                key={s.title}
                href={`#${s.title.toLowerCase().replace(/[^a-z]/g, "-").replace(/-+/g, "-")}`}
                className="border rounded-xl p-4 text-center hover:shadow-md hover:border-current/30 transition-all group"
                style={{ borderColor: BORDER }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform" style={{ background: BACKGROUND_BLUE + "0d", color: NAVY }}>
                  {s.icon}
                </div>
                <p className="text-xs font-bold leading-snug" style={{ color: NAVY }}>{s.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 space-y-16">
          {segments.map((s, i) => (
            <div
              key={s.title}
              id={s.title.toLowerCase().replace(/[^a-z]/g, "-").replace(/-+/g, "-")}
              className={`grid md:grid-cols-2 gap-12 items-start ${i > 0 ? "pt-16 border-t" : ""}`}
              style={{ borderColor: BORDER }}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: BACKGROUND_BLUE + "0d", color: NAVY }}>
                  {s.icon}
                </div>
                <SectionLabel>Who We Serve</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>
                  {s.title}
                </h2>
                <p className="text-black leading-relaxed mb-6 text-sm">{s.desc}</p>
                <blockquote
                  className="border-l-4 pl-4 italic text-sm text-black"
                  style={{ borderColor: GOLD }}
                >
                  "{s.quote}"
                </blockquote>
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="border rounded-2xl p-6" style={{ borderColor: BORDER, background: LIGHT }}>
                  <p className="text-xs font-black tracking-widest uppercase mb-4" style={{ color: GOLD }}>How We Help</p>
                  <ul className="space-y-3">
                    {s.needs.map((need) => (
                      <li key={need} className="flex items-start gap-3">
                        <CheckCircle size={15} className="shrink-0 mt-0.5" style={{ color: GOLD }} />
                        <span className="text-sm text-black">{need}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-5 border-t" style={{ borderColor: BORDER }}>
                    <Btn onClick={() => navigate("contact")}>
                      Talk to Us <ArrowRight size={15} />
                    </Btn>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: LIGHT }}>
        <div className="max-w-3xl mx-auto px-5 text-center">
          <SectionLabel>Not sure if we're the right fit?</SectionLabel>
          <SectionHeading center>Let's have a conversation.</SectionHeading>
          <p className="text-black mb-8 text-sm leading-relaxed">
            We'll take the time to understand your situation and be honest about whether — and how — we can help. No obligation. No pressure.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Btn onClick={() => navigate("contact")}>Book a Free Consultation <ArrowRight size={15} /></Btn>
            <Btn variant="outline" onClick={() => navigate("services")}>View Our Services</Btn>
          </div>
        </div>
      </section>
    </div>
  );
}
