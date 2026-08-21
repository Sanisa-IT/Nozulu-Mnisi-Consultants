import {
  BarChart3, Receipt, Users, ShieldCheck, Lightbulb,
  Briefcase, CheckCircle, ArrowRight,
} from "lucide-react";
import { NAVY, GOLD, LIGHT, BORDER, SectionLabel, SectionHeading, Btn, PageHero } from "../components/site/shared";
import type { Page } from "../components/site/Navbar";

const services = [
  {
    num: "01", icon: <BarChart3 size={28} />, title: "Financial Reporting",
    tagline: "Accurate records. Clear picture.",
    intro: "Your financial records are the foundation of every decision you make. Without accurate, up-to-date information, you're navigating blind. We build and maintain that foundation for you.",
    items: [
      "Bookkeeping and transaction processing",
      "Monthly and quarterly reconciliations",
      "Management accounts and reporting packs",
      "Annual financial statements",
      "Audit support and audit file preparation",
      "Record reconstruction and backlog clearing",
    ],
    who: "Owner-managed businesses, SMEs, professional firms and any organisation that needs reliable monthly financial information.",
  },
  {
    num: "02", icon: <Receipt size={28} />, title: "Taxation",
    tagline: "Compliant. Efficient. Defensible.",
    intro: "Tax compliance is not just about submitting returns — it's about understanding your obligations, managing your exposure and making sure your affairs are structured correctly.",
    items: [
      "Income tax (individuals, trusts, companies, close corporations)",
      "Value Added Tax (VAT) — registration, returns and disputes",
      "Provisional tax calculations and submissions",
      "Payroll tax management (PAYE, SDL, UIF)",
      "Tax Compliance Status (TCS) applications",
      "SARS dispute resolution and audit representation",
      "Tax clearance and registration",
    ],
    who: "Individuals, sole traders, companies, trusts and any entity with SARS obligations.",
  },
  {
    num: "03", icon: <Users size={28} />, title: "Payroll",
    tagline: "Accurate. On time. Every month.",
    intro: "Payroll is one of the most compliance-intensive functions in any business. Errors create trust issues, penalties and legal exposure. We manage the full cycle so you don't have to.",
    items: [
      "Monthly payroll processing for all employee categories",
      "Payslip generation and distribution",
      "Statutory deductions: PAYE, UIF, SDL",
      "EMP201 monthly submissions to SARS",
      "EMP501 bi-annual reconciliations",
      "IRP5/IT3(a) tax certificate generation",
      "Leave and benefit administration",
      "New employee onboarding and termination processing",
    ],
    who: "Businesses with one or more employees — from small teams to organisations with complex payroll structures.",
  },
  {
    num: "04", icon: <ShieldCheck size={28} />, title: "Statutory Compliance",
    tagline: "Registered. Current. Protected.",
    intro: "Statutory compliance covers the full range of regulatory obligations that businesses must maintain — beyond just tax. We manage the registrations, returns and filings that keep you legally current.",
    items: [
      "CIPC annual returns and company secretarial",
      "Beneficial ownership registers and submissions",
      "COIDA (Compensation for Occupational Injuries and Diseases)",
      "Return of Earnings submissions",
      "UIF registration and compliance",
      "Regulatory administration and deadline management",
    ],
    who: "All registered companies, close corporations, trusts and non-profits with statutory filing requirements.",
  },
  {
    num: "05", icon: <Lightbulb size={28} />, title: "Advisory",
    tagline: "Insight that drives decisions.",
    intro: "Good advisory work connects financial information to the real-world decisions you face. We don't just produce numbers — we help you understand what they mean and what you should do next.",
    items: [
      "Budgeting and forecasting",
      "Cash flow planning and monitoring",
      "Financial performance analysis",
      "Scenario modelling and stress testing",
      "Tax planning and structuring advice",
      "Business valuation support",
      "Growth and expansion financial planning",
    ],
    who: "Business owners, directors and executives who want financial insight, not just financial reporting.",
  },
  {
    num: "06", icon: <Briefcase size={28} />, title: "Finance Operations",
    tagline: "Control your financial function.",
    intro: "Finance operations covers the day-to-day financial management activities that keep your business running smoothly. We implement the structures and processes that give you control.",
    items: [
      "Debtors management and collections tracking",
      "Creditors processing and payment scheduling",
      "Invoicing and billing management",
      "Inventory and stock accounting",
      "Fixed asset register maintenance",
      "Internal finance controls and policies",
      "Bank reconciliations and cash management",
    ],
    who: "Businesses that need structured financial operations — whether as a standalone function or as support for an existing team.",
  },
];

export default function ServicesPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      <PageHero
        label="Our Services"
        title={<>One Firm. Six Connected <span style={{ color: GOLD }}>Service Pillars.</span></>}
        subtitle="Every service we offer is designed to work together — coordinated by the same senior team, built on the same reliable records."
      />

      {/* Connected by design */}
      <section className="bg-white border-b" style={{ borderColor: BORDER }}>
        <div className="max-w-7xl mx-auto px-5 py-6">
          <div
            className="rounded-xl px-6 py-5 flex flex-wrap items-center gap-3"
            style={{ background: NAVY }}
          >
            <span className="text-xs font-black tracking-widest text-white mr-2">CONNECTED BY DESIGN</span>
            {["Capture", "Reconcile", "Comply", "Report", "Advise"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 rounded px-3 py-1.5" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <span className="text-xs font-bold text-white">{step}</span>
                </div>
                {i < arr.length - 1 && <ArrowRight size={13} className="text-white/40" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All 6 services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 space-y-10">
          {services.map((s, i) => (
            <div
              key={s.num}
              id={s.title.toLowerCase().replace(/\s+/g, "-")}
              className={`grid md:grid-cols-2 gap-12 items-start py-10 ${i > 0 ? "border-t" : ""}`}
              style={{ borderColor: BORDER }}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-3xl font-black" style={{ color: GOLD, fontFamily: "'Montserrat', sans-serif" }}>{s.num}</span>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: NAVY + "0d", color: NAVY }}>
                    {s.icon}
                  </div>
                </div>
                <SectionLabel>{s.tagline}</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>
                  {s.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{s.intro}</p>
                <div className="rounded-xl p-4 text-sm" style={{ background: LIGHT, border: `1px solid ${BORDER}` }}>
                  <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: GOLD }}>Who this is for</p>
                  <p className="text-gray-600 text-sm">{s.who}</p>
                </div>
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="border rounded-2xl p-6" style={{ borderColor: BORDER, background: LIGHT }}>
                  <p className="text-xs font-black tracking-widest uppercase mb-4" style={{ color: NAVY }}>What's included</p>
                  <ul className="space-y-3">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={15} className="shrink-0 mt-0.5" style={{ color: GOLD }} />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: LIGHT }}>
        <div className="max-w-3xl mx-auto px-5 text-center">
          <SectionLabel>Get Started</SectionLabel>
          <SectionHeading center>Not sure which service you need?</SectionHeading>
          <p className="text-gray-600 mb-8 text-sm leading-relaxed">
            We'll help you identify exactly what's required based on your current position, obligations and goals. Book a no-obligation consultation and let's talk.
          </p>
          <Btn onClick={() => navigate("contact")}>Book a Free Consultation <ArrowRight size={15} /></Btn>
        </div>
      </section>
    </div>
  );
}
