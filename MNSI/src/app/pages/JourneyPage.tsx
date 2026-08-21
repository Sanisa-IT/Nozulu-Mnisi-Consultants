import { ArrowRight } from "lucide-react";
import { NAVY, GOLD, LIGHT, BORDER, SectionLabel, SectionHeading, Btn, PageHero } from "../components/site/shared";
import type { Page } from "../components/site/Navbar";

const milestones = [
  {
    year: "2018",
    label: "The Beginning",
    desc: "Nozulu Mnisi Consultants was established with a clear purpose: to provide senior-led, integrated financial services to businesses that were underserved by large firms and overlooked by solo practitioners.",
    detail: "Founded on the principle that clients deserve direct access to experienced professionals — not junior staff — the firm began with a focused client base in Gauteng.",
    highlight: "Foundation year · Gauteng operations launched",
  },
  {
    year: "2019",
    label: "Building the Base",
    desc: "We refined our service model, deepened our expertise in taxation and compliance, and grew our client relationships through consistent delivery.",
    detail: "The focus in year two was quality over growth. Building reliable systems, establishing repeatable processes and earning the trust of early clients who remain with us today.",
    highlight: "Systems + processes established",
  },
  {
    year: "2020",
    label: "Building the Foundation",
    desc: "Early clients. Services. Team growth. Despite a challenging economic environment, we used the period to invest in our capacity, our team and our systems.",
    detail: "We broadened our service offering to include full payroll administration and statutory compliance — moving from a tax-focused practice to a genuinely integrated firm.",
    highlight: "Full payroll + statutory compliance launched",
  },
  {
    year: "2021",
    label: "Resilience and Growth",
    desc: "We navigated a demanding regulatory environment and expanded our client base across professional service firms and owner-managed businesses.",
    detail: "Demand for integrated financial support was growing. Clients began referring us because of the consistency and reliability of our work — a validation of our service model.",
    highlight: "Referral network grows · Client base expands",
  },
  {
    year: "2022",
    label: "Growing Our Reach",
    desc: "We expanded our presence to KwaZulu-Natal, opening a Durban office to serve clients across two of South Africa's key economic provinces.",
    detail: "The KZN expansion was a significant milestone. It allowed us to serve multi-province clients under one firm — maintaining consistency of service and senior oversight regardless of geography.",
    highlight: "Durban office opened · Multi-regional firm established",
  },
  {
    year: "2023",
    label: "Deepening Expertise",
    desc: "We strengthened our advisory capability — moving beyond compliance and reporting to provide genuine financial insight and planning support.",
    detail: "Clients asked us to do more. We responded by building structured advisory services: budgets, forecasts, cash flow planning and scenario analysis that translate financial data into real decisions.",
    highlight: "Advisory services formalised",
  },
  {
    year: "2024",
    label: "Strengthening Our Services",
    desc: "Integrated services. Senior-led delivery. CIBA Approved Training Office status formalised our commitment to developing the next generation of finance professionals.",
    detail: "Being recognised as a CIBA Approved Training Office was a defining achievement. It reflects our commitment to the profession and to creating structured pathways for emerging practitioners.",
    highlight: "CIBA Approved Training Office · Integrated delivery model",
  },
  {
    year: "2025",
    label: "Where We Are Today",
    desc: "Today Nozulu Mnisi Consultants is a senior-led, integrated accounting, taxation and advisory firm operating across Gauteng and KwaZulu-Natal.",
    detail: "We serve owner-managed businesses, professional firms, public-sector entities, membership organisations, industrial businesses and individual executives — each with a consistent, senior-led approach.",
    highlight: "Two provinces · Six service pillars · Growing team",
  },
  {
    year: "2026+",
    label: "What's Next",
    desc: "We continue to grow — in reach, in depth, and in the value we deliver to clients across South Africa.",
    detail: "Our focus remains on doing excellent work for every client, developing talented professionals through our training programme, and building a firm that stands for quality, integrity and impact.",
    highlight: "Creating value. Building impact.",
    isFuture: true,
  },
];

export default function JourneyPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      <PageHero
        label="Our Journey"
        title={<>Where We Started.<br /><span style={{ color: GOLD }}>Where We're Going.</span></>}
        subtitle="From a focused Gauteng practice in 2018 to a multi-regional, senior-led integrated firm — this is our story."
      />

      {/* Full timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="relative">
            {/* Centre line */}
            <div
              className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px"
              style={{ background: `linear-gradient(to bottom, ${GOLD}, ${NAVY})`, transform: "translateX(-50%)" }}
            />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 top-1.5 z-10 -translate-x-0 md:-translate-x-1/2">
                    <div
                      className="w-9 h-9 rounded-full border-2 flex items-center justify-center font-black text-[10px]"
                      style={{
                        background: m.isFuture ? "transparent" : i === milestones.length - 2 ? GOLD : NAVY,
                        borderColor: GOLD,
                        color: "white",
                        borderStyle: m.isFuture ? "dashed" : "solid",
                      }}
                    >
                      {m.isFuture ? "+" : m.year.slice(2)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`pl-14 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div
                      className="border rounded-xl p-6 hover:shadow-md transition-all"
                      style={{
                        borderColor: m.isFuture ? GOLD + "60" : BORDER,
                        background: m.isFuture ? NAVY + "06" : "white",
                        borderStyle: m.isFuture ? "dashed" : "solid",
                      }}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="text-sm font-black" style={{ color: GOLD, fontFamily: "'Montserrat', sans-serif" }}>{m.year}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: GOLD + "18", color: GOLD }}>{m.label}</span>
                      </div>
                      <p className="text-sm font-bold mb-2" style={{ color: NAVY }}>{m.desc}</p>
                      <p className="text-xs text-gray-500 leading-relaxed mb-3">{m.detail}</p>
                      <p className="text-xs font-bold" style={{ color: GOLD }}>● {m.highlight}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary stats */}
      <section className="py-16" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <SectionLabel>By the numbers</SectionLabel>
            <SectionHeading center>Seven years of consistent delivery.</SectionHeading>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: "2018", label: "Year Founded" },
              { value: "2",    label: "Provinces" },
              { value: "6",    label: "Service Pillars" },
              { value: "Level 1", label: "B-BBEE Status" },
            ].map((s) => (
              <div key={s.label} className="bg-white border rounded-xl p-6 text-center" style={{ borderColor: BORDER }}>
                <p className="text-3xl font-black mb-1" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1a3a6b 100%)` }}
      >
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <p className="text-xs font-black tracking-[0.2em] uppercase mb-3" style={{ color: GOLD }}>Be Part of the Journey</p>
          <h2 className="text-3xl font-black text-white mb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Let's build your financial future together.
          </h2>
          <p className="text-blue-200 mb-8 text-sm">
            Whether you're starting out or scaling up, we have the expertise and the commitment to support your goals.
          </p>
          <Btn variant="gold" onClick={() => navigate("contact")}>Book a Consultation <ArrowRight size={15} /></Btn>
        </div>
      </section>
    </div>
  );
}
