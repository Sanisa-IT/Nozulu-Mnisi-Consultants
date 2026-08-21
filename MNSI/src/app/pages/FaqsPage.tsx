import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { NAVY, GOLD, LIGHT, BORDER, SectionLabel, SectionHeading, Btn, PageHero } from "../components/site/shared";
import type { Page } from "../components/site/Navbar";

const faqCategories = [
  {
    category: "General",
    faqs: [
      {
        q: "What services does Nozulu Mnisi Consultants provide?",
        a: "We offer six integrated service pillars: Financial Reporting, Taxation, Payroll, Statutory Compliance, Advisory and Finance Operations. Our services are designed to work together — managed by a single coordinated team so nothing falls through the cracks.",
      },
      {
        q: "Do you work with small and medium-sized businesses?",
        a: "Absolutely. SMEs and owner-managed businesses are a core part of our client base. We understand the unique challenges of running a growing business — from cash flow management to compliance — and we provide support that's proportionate to your size and stage.",
      },
      {
        q: "Where are you based and who do you serve?",
        a: "We have offices in Gauteng (Boksburg) and KwaZulu-Natal (Durban). We serve clients across both provinces and, in some cases, nationally for specialist tax and advisory work.",
      },
      {
        q: "What makes Nozulu Mnisi different from other accounting firms?",
        a: "Three things: senior involvement, integration and context. You deal with experienced professionals — not juniors — from day one. All your financial functions are coordinated by one team. And we connect compliance requirements to how your business actually operates, not just the letter of the regulation.",
      },
    ],
  },
  {
    category: "Accounting & Reporting",
    faqs: [
      {
        q: "Can you take over our existing accounting function?",
        a: "Yes. We regularly take over from other providers or bring order to self-managed accounting functions. We'll assess your current records, identify gaps and put together a plan to bring you fully up to date — before establishing an ongoing service structure.",
      },
      {
        q: "Can you assist if our accounting records are behind?",
        a: "This is one of the most common situations we deal with. Whether you're one month behind or three years behind, we can reconstruct your records, reconcile your accounts and get you back on track. We've done this across all sizes of business.",
      },
      {
        q: "What does your monthly accounting service include?",
        a: "Our monthly service typically includes bookkeeping and transaction processing, bank reconciliations, supplier and customer account management, monthly management accounts and VAT return preparation. The exact scope is tailored to your business.",
      },
    ],
  },
  {
    category: "Taxation",
    faqs: [
      {
        q: "Do you assist with tax compliance?",
        a: "Yes. Tax compliance is central to what we do — income tax, VAT, provisional tax, payroll taxes, SARS registrations, Tax Compliance Status (TCS) applications and dispute resolution. We manage your full tax calendar so you're never caught off-guard.",
      },
      {
        q: "Can you help if we're in dispute with SARS?",
        a: "Yes. We handle SARS queries, audits and dispute resolution. We'll review the basis of the dispute, engage with SARS on your behalf, prepare any required documentation and work toward a resolution that's technically sound and defensible.",
      },
      {
        q: "Do you do personal income tax returns for individuals?",
        a: "Yes. We assist individuals, including directors, executives and professionals, with personal income tax returns — including investment income, rental income and complex income structures. We ensure your return is accurate and your tax position is optimised legally.",
      },
    ],
  },
  {
    category: "Payroll",
    faqs: [
      {
        q: "Do you provide payroll services?",
        a: "Yes. We manage the full payroll cycle - from monthly processing and payslip generation to statutory deductions, EMP201 submissions, EMP501 reconciliations and IRP5 certificates. We handle one employee or one hundred.",
      },
      {
        q: "Can you help with the EMP501 bi-annual reconciliation?",
        a: "Absolutely. The EMP501 reconciliation is a critical SARS submission that many businesses struggle with. We prepare and submit it on your behalf, ensuring your PAYE, UIF and SDL figures reconcile correctly to the IRP5 values issued to employees.",
      },
    ],
  },
  {
    category: "Statutory Compliance",
    faqs: [
      {
        q: "Do you handle CIPC annual returns and company secretarial work?",
        a: "Yes. We manage CIPC annual returns, beneficial ownership register submissions and general company secretarial compliance — keeping your entity in good standing with the Companies and Intellectual Property Commission.",
      },
      {
        q: "What is beneficial ownership and do I need to comply?",
        a: "Beneficial ownership refers to the individuals who ultimately own or control a company. CIPC now requires companies to maintain and submit a beneficial ownership register. We assist with identifying the relevant beneficial owners, maintaining the register and making required submissions.",
      },
    ],
  },
  {
    category: "Getting Started",
    faqs: [
      {
        q: "How do I get started with Nozulu Mnisi Consultants?",
        a: "The first step is a no-obligation consultation — either by phone, video or in person. We'll listen to your situation, ask the right questions and give you an honest assessment of how we can help and what it would cost. From there, we agree on a scope and get started.",
      },
      {
        q: "How long does it take to onboard a new client?",
        a: "For straightforward ongoing engagements, onboarding typically takes one to two weeks. For clients with backlogs or complex situations, we'll agree on a phased approach with clear milestones. We'll always be transparent about the timeline before we begin.",
      },
      {
        q: "Do you work with individuals as well as businesses?",
        a: "Yes. We assist individuals with personal income tax, provisional tax, trust tax compliance and financial planning. We also work with directors and executives who need dedicated personal financial support alongside their business accounts.",
      },
    ],
  },
];

export default function FaqsPage({ navigate }: { navigate: (p: Page) => void }) {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div>
      <PageHero
        label="FAQs"
        title={<>Questions?<br /><span style={{ color: GOLD }}>We've Got Answers.</span></>}
        subtitle="Everything you need to know about working with Nozulu Mnisi Consultants."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 space-y-12">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-3 mb-5">
                <h2 className="text-lg font-black" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>
                  {cat.category}
                </h2>
                <div className="flex-1 h-px" style={{ background: BORDER }} />
              </div>
              <div className="space-y-2">
                {cat.faqs.map((faq, i) => {
                  const key = `${cat.category}-${i}`;
                  const isOpen = !!openMap[key];
                  return (
                    <div
                      key={i}
                      className="border rounded-xl overflow-hidden transition-all"
                      style={{ borderColor: isOpen ? GOLD + "60" : BORDER }}
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-start justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors gap-4"
                      >
                        <span className="text-sm font-bold leading-snug" style={{ color: NAVY }}>{faq.q}</span>
                        <span className="shrink-0 mt-0.5">
                          {isOpen
                            ? <ChevronUp size={16} style={{ color: GOLD }} />
                            : <ChevronDown size={16} className="text-gray-400" />}
                        </span>
                      </button>
                      {isOpen && (
                        <div
                          className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t"
                          style={{ borderColor: BORDER }}
                        >
                          <p className="pt-4">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16" style={{ background: LIGHT }}>
        <div className="max-w-3xl mx-auto px-5 text-center">
          <SectionLabel>Still have a question?</SectionLabel>
          <SectionHeading center>Let's talk.</SectionHeading>
          <p className="text-gray-600 mb-8 text-sm leading-relaxed">
            If your question isn't answered above, we'd be glad to discuss your specific situation directly. There's no obligation — just a straightforward conversation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Btn onClick={() => navigate("contact")}>Get in Touch <ArrowRight size={15} /></Btn>
            <Btn variant="outline" onClick={() => navigate("services")}>View Our Services</Btn>
          </div>
        </div>
      </section>
    </div>
  );
}
