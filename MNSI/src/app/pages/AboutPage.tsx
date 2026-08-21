import {
  CheckCircle, ArrowRight, UserCircle, GraduationCap,
  Award, Target, HeartHandshake, Shield,
} from "lucide-react";
import { NAVY, GOLD, LIGHT, BORDER, SectionLabel, SectionHeading, Btn, PageHero } from "../components/site/shared";
import type { Page } from "../components/site/Navbar";

const values = [
  { icon: <Shield size={22} />,        title: "Integrity",     desc: "We hold ourselves to the highest ethical standards in every engagement." },
  { icon: <Target size={22} />,        title: "Accuracy",      desc: "We are precise. Our work is checked, reconciled and reliable." },
  { icon: <HeartHandshake size={22} />, title: "Accountability", desc: "We take ownership of the quality and outcome of everything we deliver." },
  { icon: <Award size={22} />,          title: "Excellence",    desc: "We pursue the best outcome for every client, every time." },
];

const team = [
  {
    name: "Riaan Bright Govender",
    role: "Partner & Managing Director",
    creds: "AGA(SA) | BA(PISA) · Registered Tax Practitioner",
    bio: "Riaan leads the firm with a focus on technical accuracy, client relationships and senior involvement in every engagement. His background spans financial reporting, taxation and advisory work across multiple sectors. Leadership remains close to delivery — that is a non-negotiable principle at Nozulu Mnisi Consultants.",
  },
];

const milestones = [
  { year: "2018", title: "Founded", desc: "Nozulu Mnisi Consultants was established with a clear mandate: provide senior-led, integrated financial services." },
  { year: "2020", desc: "Expanded our service offering to include full payroll and statutory compliance support." },
  { year: "2022", desc: "Opened our second office in KwaZulu-Natal to better serve clients across the country." },
  { year: "2024", desc: "Received CIBA Approved Training Office status-formalising our commitment to developing emerging finance professionals." },
  { year: "2025", desc: "Today we serve owner-managed businesses, professional firms, public-sector entities and executives across Gauteng and KZN." },
];

export default function AboutPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      <PageHero
        label="About Us"
        title={<>Built for Clarity,<br />Compliance &amp; <span style={{ color: GOLD }}>Confident Decisions.</span></>}
        subtitle="Nozulu Mnisi Consultants combines technical discipline with active, senior-led client support across accounting, taxation and advisory."
      />

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Our Purpose</SectionLabel>
            <SectionHeading>Why we exist.</SectionHeading>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm">
              We exist to help individuals and businesses make confident financial decisions - not just to complete submissions, but to build the foundations for sustainable growth and compliance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm">
              Too many businesses carry unnecessary risk because their financial records are incomplete, their compliance is reactive, and their reporting doesn't give them clear visibility of their position. We fix that.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7 text-sm">
              Our integrated approach means your accountant, tax practitioner and compliance team are coordinated — working from the same information, toward the same goals. That's the Nozulu Mnisi difference.
            </p>
            <Btn onClick={() => navigate("services")}>Explore Our Services <ArrowRight size={15} /></Btn>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Years in Practice", value: "7+" },
              { label: "Provinces Served",  value: "2" },
              { label: "Service Pillars",   value: "6" },
              { label: "B-BBEE Level",      value: "1" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-6 text-center border"
                style={{ borderColor: BORDER, background: LIGHT }}
              >
                <p className="text-4xl font-black mb-1" style={{ color: GOLD, fontFamily: "'Montserrat', sans-serif" }}>{s.value}</p>
                <p className="text-xs text-gray-500 font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <SectionLabel>Our Values</SectionLabel>
            <SectionHeading center>What guides us every day.</SectionHeading>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white border rounded-xl p-6 text-center hover:shadow-md transition-all" style={{ borderColor: BORDER }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: NAVY + "0d", color: NAVY }}>
                  {v.icon}
                </div>
                <h3 className="font-black text-sm mb-2" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>Why Nozulu Mnisi?</SectionLabel>
            <SectionHeading>Four reasons clients stay with us.</SectionHeading>
            <div className="space-y-6">
              {[
                { num: "01", title: "Direct Senior Involvement",  desc: "Leadership remains close to the work, the decisions and the client relationship. You don't get handed to a junior after the first meeting." },
                { num: "02", title: "One Integrated Team",        desc: "Accounting, tax, payroll, compliance and advisory are coordinated - not handled in silos by different providers." },
                { num: "03", title: "Compliance With Context",    desc: "We connect technical requirements to the way your organisation actually operates - not just the letter of the regulation." },
                { num: "04", title: "Support That Can Scale",     desc: "Whether you need recurring monthly support or a specialist project, our structure adapts to your stage of growth." },
              ].map((r) => (
                <div key={r.num} className="flex gap-5">
                  <span className="text-2xl font-black shrink-0" style={{ color: GOLD, fontFamily: "'Montserrat', sans-serif" }}>{r.num}</span>
                  <div>
                    <h4 className="font-black text-sm mb-1.5" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>{r.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>The Value We Create</SectionLabel>
            <SectionHeading>What our clients gain.</SectionHeading>
            <div className="space-y-4">
              {[
                { title: "Reliable Records",      desc: "Complete, reconciled and ready for reporting." },
                { title: "Compliance Confidence", desc: "Accurate submissions, managed deadlines and reduced exposure." },
                { title: "Financial Visibility",  desc: "Management information that explains performance, cash flow and risk." },
                { title: "Operational Control",   desc: "Clearer processes across debtors, suppliers, payroll, inventory and fixed assets." },
                { title: "Proactive Support",     desc: "Issues identified early and addressed before they become larger problems." },
              ].map((v) => (
                <div key={v.title} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: BORDER }}>
                  <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <div>
                    <span className="font-bold text-sm" style={{ color: NAVY }}>{v.title}</span>
                    <p className="text-sm text-gray-500 mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-5">
          <SectionLabel>Leadership</SectionLabel>
          <SectionHeading>The people behind the work.</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((m) => (
              <div key={m.name} className="bg-white border rounded-2xl p-7 flex items-start gap-6" style={{ borderColor: BORDER }}>
                <div
                  className="w-24 h-24 rounded-xl shrink-0 flex items-center justify-center border-2 border-dashed"
                  style={{ background: "#E8ECF5", borderColor: BORDER }}
                >
                  <UserCircle size={36} className="text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-black" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>{m.name}</h3>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: GOLD }}>{m.role}</p>
                  <p className="text-xs text-gray-400 mb-3">{m.creds}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIBA Training */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-7" style={{ borderColor: BORDER }}>
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: NAVY + "0d" }}
            >
              <GraduationCap size={32} style={{ color: NAVY }} />
            </div>
            <div>
              <SectionLabel>Developing Tomorrow's Professionals</SectionLabel>
              <h3 className="text-xl font-black mb-3" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>
                CIBA Approved Training Office
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Nozulu Mnisi Consultants is an approved CIBA Training Office. This means we are formally recognised to provide structured, supervised work experience for trainee accountants - supporting their path to professional designation while contributing meaningfully to their development.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                We believe in growing the next generation of finance professionals. Our training environment is hands-on, values-driven and focused on producing technically capable practitioners.
              </p>
              <Btn>Learn More About Training Opportunities <ArrowRight size={15} /></Btn>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline snippet */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1a3a6b 100%)` }}
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="text-xs font-black tracking-[0.2em] uppercase mb-3" style={{ color: GOLD }}>Our Story</p>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Where we started. Where we're going.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-1">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex-1 relative">
                <div className="flex md:flex-col items-start gap-4 md:gap-0 pb-6 md:pb-0 md:pr-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-black text-xs" style={{ background: i === milestones.length - 1 ? GOLD : "rgba(255,255,255,0.1)", borderColor: GOLD, color: "white" }}>
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="hidden md:block h-px w-full mt-5 mb-4" style={{ background: "rgba(200,150,46,0.3)" }} />
                    )}
                  </div>
                  <div className="mt-0 md:mt-4">
                    <p className="text-xs font-black mb-1" style={{ color: GOLD }}>{m.year}{m.title ? ` — ${m.title}` : ""}</p>
                    <p className="text-xs text-blue-200 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("journey")}
              className="font-black px-6 py-3 rounded text-sm border-2 hover:bg-white/10 transition-all"
              style={{ borderColor: GOLD, color: GOLD, fontFamily: "'Montserrat', sans-serif" }}
            >
              View Full Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
