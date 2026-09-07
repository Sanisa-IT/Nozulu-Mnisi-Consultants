import { ArrowRight } from "lucide-react";
import { NAVY, GOLD, LIGHT, BORDER, BACKGROUND_BLUE, BACKGROUND_GREEN, SectionLabel, SectionHeading, Btn, PageHero } from "../components/site/shared";
import type { Page } from "../components/site/Navbar";

const milestones = [
  {
    year: "2022",
    label: "The Beginning",
    desc: "Nozulu Mnisi Consultants began with a clear purpose: give businesses direct access to senior-led accounting, taxation and advisory support.",
    detail: "The first chapter was built around trust, technical accuracy and a simple promise - understand the client, take ownership and make the numbers useful.",
    highlight: "Foundation year · Gauteng operations launched",
  },
  {
    year: "2023",
    label: "Building the Base",
    desc: "We strengthened the systems behind the service - refining processes, expanding the client base and turning early momentum into dependable delivery.",
    detail: "Accounting, tax and compliance work became more connected, giving clients one coordinated team and a clearer view of their financial obligations.",
    highlight: "Integrated service model established",
  },
  {
    year: "2024",
    label: "Deepening Expertise",
    desc: "As client needs became more complex, we expanded beyond compliance and reporting into practical financial insight and planning.",
    detail: "Budgets, forecasts, cash flow planning and scenario analysis gave clients a stronger basis for making decisions with confidence.",
    highlight: "Advisory services formalised",
  },
  {
    year: "2025",
    label: "Growing Our Reach",
    desc: "We expanded our presence to KwaZulu-Natal, opening a Durban office and strengthening our ability to serve clients across two provinces.",
    detail: "The regional expansion brought the same senior oversight and connected service model to a wider client base.",
    highlight: "Durban office opened · Multi-regional firm established",
  },
  {
    year: "2026",
    label: "Where We Are Today",
    desc: "Today Nozulu Mnisi Consultants is a senior-led, integrated accounting, taxation and advisory firm serving clients across Gauteng and KwaZulu-Natal.",
    detail: "We serve owner-managed businesses, professional firms, public-sector entities, membership organisations, industrial businesses and individual executives with the same focused approach.",
    highlight: "Two provinces · Six service pillars · Growing team",
  },
  {
    year: "2026+",
    label: "What's Next",
    desc: "We continue to grow - in reach, in depth, and in the value we deliver to clients across South Africa.",
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
        title={<>Where We Started.<br /><span className="text-white">Where We're Going.</span></>}
        subtitle="From a focused Gauteng practice in 2022 to a multi-regional, senior-led integrated firm - this is our story."
      />

      {/* Full timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="relative">
            {/* Centre line */}
            <div
              className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px"
              style={{ background: NAVY, transform: "translateX(-50%)" }}
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
                        background: m.isFuture ? "transparent" : NAVY,
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
                        background: m.isFuture ? BACKGROUND_BLUE + "06" : "white",
                        borderStyle: m.isFuture ? "dashed" : "solid",
                      }}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="text-sm font-black" style={{ color: GOLD, fontFamily: "'Roboto', sans-serif" }}>{m.year}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: BACKGROUND_GREEN + "18", color: GOLD }}>{m.label}</span>
                      </div>
                      <p className="text-sm font-bold mb-2" style={{ color: NAVY }}>{m.desc}</p>
                      <p className="text-xs text-black leading-relaxed mb-3">{m.detail}</p>
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
            <SectionHeading center>Four years of focused, consistent delivery.</SectionHeading>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: "2022", label: "Year Founded" },
              { value: "2",    label: "Provinces" },
              { value: "6",    label: "Service Pillars" },
              { value: "Level 1", label: "B-BBEE Status" },
            ].map((s) => (
              <div key={s.label} className="bg-white border rounded-xl p-6 text-center" style={{ borderColor: BORDER }}>
                <p className="text-3xl font-black mb-1" style={{ color: NAVY, fontFamily: "'Roboto', sans-serif" }}>{s.value}</p>
                <p className="text-xs text-black">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="blue-section py-16 relative overflow-hidden"
        style={{ background: NAVY }}
      >
        <div className="relative max-w-3xl mx-auto px-5 text-center">
<<<<<<< HEAD
          <p className="text-xs font-black tracking-[0.2em] uppercase mb-3 text-white">Be Part of the Journey</p>
          <h2 className="text-3xl font-black text-white mb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
=======
          <p className="text-xs font-black tracking-[0.2em] uppercase mb-3" style={{ color: GOLD }}>Be Part of the Journey</p>
          <h2 className="text-3xl font-black text-white mb-5" style={{ fontFamily: "'Roboto', sans-serif" }}>
>>>>>>> 1dc695a7fef91810484ad5fb05651d965c2994fa
            Let's build your financial future together.
          </h2>
          <p className="text-white mb-8 text-sm">
            Whether you're starting out or scaling up, we have the expertise and the commitment to support your goals.
          </p>
          <button
              onClick={() => navigate("contact")}
              className="font-black px-8 py-3.5 rounded text-white text-sm hover:opacity-90 transition-all border-2"
              style={{ borderColor: "white", color: "white", fontFamily: "'Montserrat', sans-serif" }}
            >
              Book a Free Consultation
            </button>
        </div>
      </section>
    </div>
  );
}
