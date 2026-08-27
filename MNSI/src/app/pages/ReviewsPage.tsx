import { useState } from "react";
import { Star, ArrowRight, Quote } from "lucide-react";
import { NAVY, GOLD, LIGHT, BORDER, BACKGROUND_BLUE, BACKGROUND_GREEN, SectionLabel, SectionHeading, Btn, PageHero } from "../components/site/shared";
import type { Page } from "../components/site/Navbar";

const reviews = {
  gauteng: [
    { name: "Themba M.", role: "Director, Construction Company", stars: 5, text: "Nozulu Mnisi has transformed how we manage our finances. What used to take weeks now happens seamlessly each month. Riaan and his team are always available and always accurate. I wouldn't trust our accounts to anyone else." },
    { name: "Priya N.", role: "Sole Proprietor, Legal Practice", stars: 5, text: "I came to them with two years of backlogged records and no idea of my tax position. Within three months, we were fully up to date, compliant and had a clear picture of where the practice stood. Exceptional service." },
    { name: "Sandile K.", role: "MD, Engineering Firm", stars: 5, text: "What sets Nozulu Mnisi apart is the senior involvement. I'm not dealing with a different junior every time — I'm dealing with people who know my business inside out. That consistency is invaluable." },
    { name: "Lisa van D.", role: "Owner, Retail Business", stars: 5, text: "Our payroll is complex — different rates, commissions, overtime. They handle it perfectly, every month, on time. The EMP501 this year was stress-free for the first time in years." },
    { name: "Kabelo M.", role: "Director, Property Company", stars: 5, text: "The advisory work they've done for us has been genuinely transformative. Our cash flow planning is now a strategic tool, not just a report. Highly recommend for any growing business." },
    { name: "Andrea S.", role: "MD, Professional Services Firm", stars: 5, text: "Responsive, thorough, and they actually explain things. We finally understand our numbers — not just receive them. That clarity has made us better decision-makers." },
  ],
  durban: [
    { name: "Lungelo Z.", role: "Owner, Transport Business", stars: 5, text: "The KZN team is excellent. I was sceptical about working with a firm based partly in Gauteng, but the service is seamless. They understand the local business environment and deliver consistently." },
    { name: "Nadia P.", role: "Director, Consulting Firm", stars: 5, text: "Nozulu Mnisi took over our accounting from a firm that was missing deadlines regularly. Within two months, we were fully current and I finally felt confident in our compliance position." },
    { name: "Bongani D.", role: "MD, Manufacturing Company", stars: 5, text: "Our statutory compliance is now completely taken care of. CIPC returns, UIF, COIDA — all handled without me having to follow up. That peace of mind is worth more than the fee." },
    { name: "Fahmida A.", role: "Sole Trader, Healthcare Practitioner", stars: 5, text: "As an individual professional, I needed someone who understood my tax situation. They handled my personal income tax, provisional tax and practice accounts — all coordinated seamlessly." },
  ],
};

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={14} fill={GOLD} stroke="none" />
      ))}
    </div>
  );
}

export default function ReviewsPage({ navigate }: { navigate: (p: Page) => void }) {
  const [tab, setTab] = useState<"gauteng" | "durban">("gauteng");
  const current = reviews[tab];

  return (
    <div>
      <style>{`
        @keyframes reviews-loop {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 0.625rem)); }
        }
        .reviews-track {
          width: max-content;
          animation: reviews-loop 38s linear infinite;
        }
        .reviews-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .reviews-track { animation: none !important; }
        }
      `}</style>
      <PageHero
        label="Client Reviews"
        title={<>What Our <span style={{ color: GOLD }}>Clients Say.</span></>}
        subtitle="We measure our success by the confidence, clarity and compliance of the businesses we serve."
      />

      {/* Summary stats */}
      <section className="bg-white border-b" style={{ borderColor: BORDER }}>
        <div className="max-w-7xl mx-auto px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "5.0", label: "Average Google Rating" },
            { value: "100%", label: "Client Retention Rate" },
            { value: "7+", label: "Years of Delivery" },
            { value: "2", label: "Provinces Served" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-black" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>{s.value}</p>
              <p className="text-xs text-black mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Office tabs + reviews */}
      <section className="py-16" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-center mb-10">
            <div className="flex rounded-lg overflow-hidden border" style={{ borderColor: BORDER }}>
              {(["gauteng", "durban"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="px-7 py-3 text-sm font-black capitalize transition-all"
                  style={{
                    background: tab === t ? NAVY : "white",
                    color: tab === t ? "white" : NAVY,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {t === "gauteng" ? "Gauteng Office" : "Durban Office"}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-hidden -mx-5 px-5">
            <div className="reviews-track flex gap-5">
            {[...current, ...current].map((r, index) => (
              <div
                key={`${r.name}-${index}`}
                className="bg-white border rounded-2xl p-6 hover:shadow-md transition-all flex flex-col w-[min(82vw,360px)] shrink-0"
                style={{ borderColor: BORDER }}
              >
                <Quote size={28} className="mb-3 opacity-20" style={{ color: NAVY }} />
                <StarRow count={r.stars} />
                <p className="text-sm text-black leading-relaxed my-4 flex-1 italic">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: BORDER }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black shrink-0"
                    style={{ background: NAVY }}
                  >
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: NAVY }}>{r.name}</p>
                    <p className="text-xs text-black">{r.role}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div
                        className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-white font-black text-[8px]"
                        style={{ background: NAVY }}
                      >
                        G
                      </div>
                      <span className="text-[10px] text-black">Google Review</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <div
            className="rounded-2xl p-10 text-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${BACKGROUND_BLUE} 0%, #1a3a6b 100%)` }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: BACKGROUND_GREEN, transform: "translate(30%,-30%)" }} />
            <Quote size={36} className="mx-auto mb-4 opacity-30 text-white" />
            <StarRow count={5} />
            <p className="text-white text-lg leading-relaxed my-6 italic" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              "What sets Nozulu Mnisi apart is that they actually care about outcomes, not just outputs. They don't just file returns - they make sure we understand our position and have a plan."
            </p>
            <p className="font-black text-sm" style={{ color: GOLD }}>FOUNDER & CEO · Johannesburg</p>
          </div>
        </div>
      </section>

    </div>
  );
}
