import { ArrowRight, Clock, Tag } from "lucide-react";
import { NAVY, GOLD, LIGHT, BORDER, SectionLabel, SectionHeading, Btn, PageHero } from "../components/site/shared";

const articles = [
  {
    category: "Taxation",
    title: "What Every Small Business Owner Should Know About Provisional Tax",
    excerpt: "Provisional tax is one of the most commonly misunderstood obligations for small business owners. Here's a clear breakdown of who it applies to, when payments are due, and how to avoid penalties.",
    date: "15 July 2025",
    readTime: "6 min read",
    color: NAVY,
  },
  {
    category: "Compliance",
    title: "CIPC Annual Returns: Why Missing the Deadline Could Cost Your Business",
    excerpt: "Many businesses overlook CIPC annual return filing until it's too late. We explain the consequences of non-compliance and what you need to do to stay in good standing.",
    date: "28 June 2025",
    readTime: "4 min read",
    color: GOLD,
  },
  {
    category: "Payroll",
    title: "The EMP501 Reconciliation: A Step-by-Step Guide for Employers",
    excerpt: "The bi-annual EMP501 reconciliation is a critical SARS submission. This guide walks through what's required, common errors to avoid and how to ensure your IRP5s are accurate.",
    date: "10 June 2025",
    readTime: "7 min read",
    color: "#2563eb",
  },
  {
    category: "Advisory",
    title: "Cash Flow vs Profit: Why You Can Be Profitable and Still Run Out of Money",
    excerpt: "One of the biggest financial blindspots for growing businesses is the gap between profit on paper and actual cash in the bank. We break down why this happens and how to fix it.",
    date: "22 May 2025",
    readTime: "5 min read",
    color: "#059669",
  },
  {
    category: "Financial Reporting",
    title: "Why Your Management Accounts Are More Valuable Than Your Annual Statements",
    excerpt: "Annual financial statements are important — but they're backwards-looking. Monthly management accounts give you the forward-looking insight you actually need to run your business.",
    date: "8 May 2025",
    readTime: "5 min read",
    color: "#7c3aed",
  },
  {
    category: "Taxation",
    title: "VAT Registration: When You Must Register and What Happens If You Don't",
    excerpt: "Missing the R1 million turnover threshold for VAT registration is a costly mistake. We cover the rules, the timing and the consequences of late or non-registration.",
    date: "18 April 2025",
    readTime: "6 min read",
    color: "#dc2626",
  },
  {
    category: "Statutory Compliance",
    title: "Beneficial Ownership: What the New CIPC Requirements Mean for Your Company",
    excerpt: "CIPC's beneficial ownership register requirements are now in effect. Here's what information must be disclosed, who qualifies as a beneficial owner and how to stay compliant.",
    date: "3 April 2025",
    readTime: "5 min read",
    color: NAVY,
  },
  {
    category: "Payroll",
    title: "Understanding the COIDA Return of Earnings: A Practical Guide",
    excerpt: "Every employer is required to submit a Return of Earnings to the Compensation Fund annually. We explain what's required, how to calculate your assessment and what the funds cover.",
    date: "17 March 2025",
    readTime: "4 min read",
    color: GOLD,
  },
  {
    category: "Advisory",
    title: "5 Financial KPIs Every Business Owner Should Track Monthly",
    excerpt: "You don't need a full-time CFO to have financial visibility. These five key performance indicators give you a clear picture of your business's financial health — every single month.",
    date: "28 February 2025",
    readTime: "5 min read",
    color: "#2563eb",
  },
];

const categories = ["All", "Taxation", "Compliance", "Payroll", "Advisory", "Financial Reporting", "Statutory Compliance"];

export default function InsightsPage() {
  const featured = articles[0];

  return (
    <div>
      <PageHero
        label="Insights"
        title={<>Financial Knowledge,<br /><span style={{ color: GOLD }}>Practical Guidance.</span></>}
        subtitle="Clear, honest insights on accounting, tax, compliance and financial management for South African businesses."
      />

      {/* Category filter */}
      <section className="bg-white border-b" style={{ borderColor: BORDER }}>
        <div className="max-w-7xl mx-auto px-5 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((c, i) => (
            <button
              key={c}
              className="shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all"
              style={{
                background: i === 0 ? NAVY : LIGHT,
                color: i === 0 ? "white" : NAVY,
                border: `1px solid ${i === 0 ? NAVY : BORDER}`,
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Featured article */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <SectionLabel>Featured Article</SectionLabel>
          <div
            className="rounded-2xl overflow-hidden border grid md:grid-cols-2 gap-0"
            style={{ borderColor: BORDER }}
          >
            <div
              className="min-h-[220px] flex items-center justify-center p-10"
              style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1a3a6b 100%)` }}
            >
              <div className="text-center">
                <span
                  className="inline-block text-xs font-black px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase"
                  style={{ background: GOLD + "30", color: GOLD }}
                >
                  {featured.category}
                </span>
                <p className="text-white font-black text-lg leading-snug" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {featured.title}
                </p>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between" style={{ background: LIGHT }}>
              <div>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{featured.excerpt}</p>
              </div>
              <div>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
                  <span className="flex items-center gap-1"><Clock size={13} /> {featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <Btn>Read Article <ArrowRight size={15} /></Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="pb-20" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="pt-12 mb-8">
            <SectionLabel>All Articles</SectionLabel>
            <SectionHeading>Latest Insights</SectionHeading>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.slice(1).map((a) => (
              <div
                key={a.title}
                className="bg-white border rounded-xl overflow-hidden hover:shadow-md transition-all group cursor-pointer"
                style={{ borderColor: BORDER }}
              >
                <div
                  className="h-3"
                  style={{ background: a.color }}
                />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: a.color + "18", color: a.color }}
                    >
                      <Tag size={10} className="inline mr-1" />{a.category}
                    </span>
                  </div>
                  <h3
                    className="font-black text-sm leading-snug mb-3 group-hover:text-amber-700 transition-colors"
                    style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">{a.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t" style={{ borderColor: BORDER }}>
                    <span className="flex items-center gap-1"><Clock size={12} /> {a.readTime}</span>
                    <span>{a.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Btn variant="outline">Load More Articles</Btn>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1a3a6b 100%)` }}
      >
        <div className="relative max-w-xl mx-auto px-5 text-center">
          <p className="text-xs font-black tracking-[0.2em] uppercase mb-3" style={{ color: GOLD }}>Stay Informed</p>
          <h2 className="text-2xl font-black text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Get insights delivered to your inbox.
          </h2>
          <p className="text-blue-200 text-sm mb-6">Practical guidance on tax, compliance and financial management — no noise, just value.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded text-sm focus:outline-none"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
            />
            <button
              className="font-black px-5 py-3 rounded text-white text-sm hover:opacity-90 transition-all shrink-0"
              style={{ background: GOLD }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
