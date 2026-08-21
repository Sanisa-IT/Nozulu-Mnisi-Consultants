import {
  ArrowRight, MapPin, BarChart3, Receipt, Users, ShieldCheck,
  Lightbulb, Briefcase, UserCircle, Globe, Star, CheckCircle,
} from "lucide-react";
import { NAVY, GOLD, LIGHT, BORDER, SectionLabel, SectionHeading, Btn } from "../components/site/shared";
import type { Page } from "../components/site/Navbar";
import ReviewsPage from "./ReviewsPage";
import FaqsPage from "./FaqsPage";

const services = [
  { icon: <BarChart3 size={20} />, title: "Financial Reporting", desc: "Bookkeeping, reconciliations, management accounts and annual financial statements." },
  { icon: <Receipt size={20} />,   title: "Taxation",            desc: "Income tax, VAT, provisional tax, payroll taxes and Tax Compliance Status." },
  { icon: <Users size={20} />,     title: "Payroll",             desc: "Payroll processing, statutory deductions and EMP501 reconciliations." },
  { icon: <ShieldCheck size={20}/>, title: "Statutory Compliance", desc: "CIPC, beneficial ownership, annual returns, COIDA and UIF administration." },
  { icon: <Lightbulb size={20} />, title: "Advisory",            desc: "Budgets, forecasts, cash flow planning and scenario modelling." },
  { icon: <Briefcase size={20} />, title: "Finance Operations",  desc: "Debtors, creditors, invoicing, fixed assets and finance controls." },
];

const steps = [
  { num: "01", title: "Understand", desc: "Objectives, obligations, systems and existing records." },
  { num: "02", title: "Stabilise",  desc: "Address backlogs and establish a reliable opening position." },
  { num: "03", title: "Operate",    desc: "Recurring processing, payroll, compliance and reporting." },
  { num: "04", title: "Review",     desc: "Accuracy, completeness and technical compliance checked." },
  { num: "05", title: "Advise",     desc: "Results, risks and actions communicated to management." },
];

export default function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="text-4xl md:text-5xl lg:text-[3.2rem] font-black leading-[1.1] mb-6 uppercase"
              style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}
            >
              Your Partner in<br />Personal and<br />Business <span style={{ color: GOLD }}>Wellbeing.</span>
            </h1>
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
              Accounting, taxation and advisory support built around accurate information, disciplined compliance and practical insight.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Btn onClick={() => navigate("contact")}>Let's Work Together</Btn>
              <Btn variant="outline" onClick={() => navigate("services")}>Explore Our Services</Btn>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin size={15} style={{ color: GOLD }} />
              <span>Gauteng | KwaZulu-Natal | South Africa</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden md:block">
            <div className="relative">
              <div
                className="rounded-2xl p-8 border"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1a3a6b 100%)`, borderColor: NAVY }}
              >
                <p className="text-xs font-black tracking-[0.2em] uppercase mb-6" style={{ color: GOLD }}>
                  Our Core Services
                </p>
                {services.map((s) => (
                  <div key={s.title} className="flex items-center gap-3 mb-3 last:mb-0">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(200,150,46,0.2)", color: GOLD }}>
                      {s.icon}
                    </div>
                    <span className="text-sm font-semibold text-white">{s.title}</span>
                  </div>
                ))}
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-4 border" style={{ borderColor: BORDER }}>
                <p className="text-2xl font-black" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>Level 1</p>
                <p className="text-xs text-gray-500">B-BBEE Contributor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust pillars */}
        <div className="border-t" style={{ borderColor: BORDER }}>
          <div className="max-w-7xl mx-auto px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <UserCircle size={26} />, title: "Senior-Led",     desc: "Direct leadership involvement" },
              { icon: <ShieldCheck size={26} />, title: "Integrated",    desc: "Accounting | Tax | Advisory" },
              { icon: <Globe size={26} />,        title: "Multi-Regional", desc: "Gauteng & KwaZulu-Natal" },
              { icon: <Star size={26} />,          title: "Level 1",      desc: "B-BBEE Contributor" },
            ].map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ background: NAVY + "0f", color: GOLD }}>
                  {p.icon}
                </div>
                <div>
                  <p className="font-black text-sm" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>{p.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About snippet ── */}
      <section className="py-20" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">
          <div
            className="aspect-[4/3] rounded-2xl flex flex-col items-center justify-center gap-4 border-2 border-dashed"
            style={{ background: "#E8ECF5", borderColor: BORDER }}
          >
            <div className="grid grid-cols-3 gap-3 p-8 w-full">
              {["Financial Reporting", "Taxation", "Payroll", "Statutory Compliance", "Advisory", "Finance Operations"].map((s, i) => (
                <div key={s} className="aspect-square rounded-xl flex items-center justify-center text-center p-2" style={{ background: i % 2 === 0 ? NAVY : GOLD }}>
                  <p className="text-[9px] font-bold text-white leading-tight">{s}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <SectionHeading>Built for clarity, compliance and confident decisions.</SectionHeading>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              Nozulu Mnisi Consultants is an accounting, taxation and advisory firm that combines technical discipline with active, senior-led client support.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7 text-sm">
              We do more than complete submissions. We help clients build reliable records, meet regulatory obligations, understand performance and make better financial decisions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Btn onClick={() => navigate("about")}>
                Learn More About Us <ArrowRight size={15} />
              </Btn>
              <Btn variant="outline" onClick={() => navigate("services")}>Our Services</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <SectionLabel>Our Services</SectionLabel>
            <SectionHeading center>One Firm. Six Connected Service Pillars.</SectionHeading>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="border rounded-xl p-6 hover:shadow-md transition-all group cursor-pointer"
                style={{ borderColor: BORDER }}
                onClick={() => navigate("services")}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-black tracking-widest" style={{ color: GOLD }}>0{i + 1}</span>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: NAVY + "0d", color: NAVY }}>
                    {s.icon}
                  </div>
                </div>
                <h3 className="font-black text-sm mb-2 group-hover:text-amber-700 transition-colors" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>
                  {s.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Btn onClick={() => navigate("services")}>View All Services <ArrowRight size={15} /></Btn>
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="py-20" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <SectionLabel>Our Approach</SectionLabel>
            <SectionHeading center>From onboarding to ongoing insight.</SectionHeading>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {steps.map((s, i) => (
              <div key={s.num} className="flex md:flex-col items-start md:items-stretch gap-4 md:gap-0 flex-1">
                <div className="border bg-white rounded-xl p-5 flex-1" style={{ borderColor: BORDER }}>
                  <span className="text-xs font-black tracking-widest mb-3 block" style={{ color: GOLD }}>{s.num}</span>
                  <h4 className="font-black text-sm mb-2" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>{s.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center w-6 shrink-0 mt-8">
                    <ArrowRight size={16} style={{ color: GOLD }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us stats ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1a3a6b 100%)` }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: GOLD, transform: "translate(30%,-30%)" }} />
        <div className="relative max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="text-xs font-black tracking-[0.2em] uppercase mb-3" style={{ color: GOLD }}>Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              The Value We Create
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Reliable Records",       desc: "Complete, reconciled and ready for reporting at all times." },
              { title: "Compliance Confidence",  desc: "Accurate submissions, managed deadlines and reduced exposure." },
              { title: "Financial Visibility",   desc: "Management information that explains performance, cash flow and risk." },
              { title: "Operational Control",    desc: "Clearer processes across debtors, suppliers, payroll and fixed assets." },
              { title: "Proactive Support",      desc: "Issues identified early and addressed before they become larger problems." },
              { title: "Senior Involvement",     desc: "Leadership remains close to the work and every client relationship." },
            ].map((v) => (
              <div key={v.title} className="rounded-xl p-5 flex items-start gap-3" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: GOLD }} />
                <div>
                  <p className="font-black text-sm text-white mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{v.title}</p>
                  <p className="text-xs text-blue-200 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("contact")}
              className="font-black px-8 py-3.5 rounded text-white text-sm hover:opacity-90 transition-all border-2"
              style={{ borderColor: GOLD, color: GOLD, fontFamily: "'Montserrat', sans-serif" }}
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>

      <ReviewsPage navigate={navigate} />
      <FaqsPage navigate={navigate} />
    </div>
  );
}
