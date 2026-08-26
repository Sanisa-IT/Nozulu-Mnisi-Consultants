import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { NAVY, GOLD, LIGHT, BORDER, BACKGROUND_BLUE, BACKGROUND_GREEN, SectionLabel, SectionHeading, PageHero } from "../components/site/shared";

const offices = [
  {
    name: "Gauteng — Head Office",
    address: ["10 Edgar Road", "Benista Office Park", "Janssen Park", "Boksburg, 1459"],
    phone: "011 568 7121",
    email: "admin@nozulumnisi.co.za",
    hours: "Mon - Fri: 08:00 - 17:00",
  },
  {
    name: "KwaZulu-Natal — Durban Office",
    address: ["9 Linden Road", "Eschenwood", "Durban, 4001"],
    phone: "031 100 0320",
    email: "admin@nozulumnisi.co.za",
    hours: "Mon - Fri: 08:00 - 17:00",
  },
];

const services = [
  "Financial Reporting & Bookkeeping",
  "Taxation (Income Tax, VAT, Provisional Tax)",
  "Payroll Administration",
  "Statutory Compliance (CIPC, COIDA, UIF)",
  "Advisory & Financial Planning",
  "Finance Operations",
  "Record Reconstruction / Backlog Clearing",
  "SARS Dispute Resolution",
  "General Enquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", service: "", message: "", office: "gauteng",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all bg-white";
  const inputStyle = { borderColor: BORDER };
  const focusStyle = { focusRingColor: GOLD };

  return (
    <div>
      <PageHero
        label="Contact Us"
        title={<>Let's Work <span style={{ color: GOLD }}>Together.</span></>}
        subtitle="We're ready to support your financial goals. Reach out and let's have a conversation."
      />

      {/* Office cards */}
      <section className="bg-white border-b" style={{ borderColor: BORDER }}>
        <div className="max-w-7xl mx-auto px-5 py-10 grid md:grid-cols-2 gap-5">
          {offices.map((o) => (
            <div key={o.name} className="border rounded-xl p-6 hover:shadow-md transition-all" style={{ borderColor: BORDER }}>
              <p className="text-xs font-black tracking-[0.2em] uppercase mb-4" style={{ color: GOLD }}>{o.name}</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-black">
                  <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <div>{o.address.map((l) => <p key={l}>{l}</p>)}</div>
                </div>
                <div className="flex items-center gap-3 text-sm text-black">
                  <Phone size={15} style={{ color: GOLD }} />
                  <a href={`tel:${o.phone}`} className="hover:underline">{o.phone}</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-black">
                  <Mail size={15} style={{ color: GOLD }} />
                  <a href={`mailto:${o.email}`} className="hover:underline">{o.email}</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-black">
                  <Clock size={15} style={{ color: GOLD }} />
                  <span>{o.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + info */}
      <section className="py-16" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-3 gap-10">
          {/* Left: info */}
          <div className="lg:col-span-1">
            <SectionLabel>Get in Touch</SectionLabel>
            <SectionHeading>Book a Free Consultation</SectionHeading>
            <p className="text-black text-sm leading-relaxed mb-6">
              There's no obligation and no pressure. We'll listen, ask the right questions, and give you an honest view of how we can help - and what it would cost.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Initial consultation at no charge",
                "Response within one business day",
                "Senior professional involvement from day one",
                "Transparent, fixed-fee pricing",
                "No lock-in contracts",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: GOLD }} />
                  <span className="text-sm text-black">{item}</span>
                </div>
              ))}
            </div>
            <div
              className="rounded-xl p-5 border"
              style={{ background: `linear-gradient(135deg, ${BACKGROUND_BLUE} 0%, #1a3a6b 100%)`, borderColor: NAVY }}
            >
              <p className="text-xs font-black tracking-widest uppercase mb-3" style={{ color: GOLD }}>Direct Contact</p>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <Phone size={13} style={{ color: GOLD }} /> 011 568 7121 (Gauteng)
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <Phone size={13} style={{ color: GOLD }} /> 031 100 0320 (KZN)
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <Mail size={13} style={{ color: GOLD }} /> admin@nozulumnisi.co.za
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white border rounded-2xl p-12 flex flex-col items-center justify-center text-center h-full" style={{ borderColor: BORDER }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: BACKGROUND_GREEN + "18" }}>
                  <CheckCircle size={32} style={{ color: GOLD }} />
                </div>
                <h3 className="text-xl font-black mb-2" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>Message Received</h3>
                <p className="text-black text-sm mb-2">Thank you for reaching out. A member of our team will be in touch within one business day.</p>
                <p className="text-xs text-black">If your matter is urgent, please call us directly on 011 568 7121 (Gauteng) or 031 100 0320 (KZN).</p>
              </div>
            ) : (
              <div className="bg-white border rounded-2xl p-7" style={{ borderColor: BORDER }}>
                <h3 className="font-black text-lg mb-5" style={{ color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>
                  Tell us about your needs
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Office */}
                  <div>
                    <label className="text-xs font-bold block mb-1.5" style={{ color: NAVY }}>Preferred Office</label>
                    <div className="flex gap-2">
                      {[{ value: "gauteng", label: "Gauteng" }, { value: "kzn", label: "KwaZulu-Natal" }].map((o) => (
                        <button
                          key={o.value}
                          type="button"
                          onClick={() => setForm({ ...form, office: o.value })}
                          className="flex-1 py-2.5 rounded-lg text-sm font-bold border-2 transition-all"
                          style={{
                            background: form.office === o.value ? BACKGROUND_BLUE : "white",
                            borderColor: form.office === o.value ? NAVY : BORDER,
                            color: form.office === o.value ? "white" : NAVY,
                          }}
                        >
                          {o.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold block mb-1.5" style={{ color: NAVY }}>Full Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold block mb-1.5" style={{ color: NAVY }}>Email Address *</label>
                      <input
                        required type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.co.za"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold block mb-1.5" style={{ color: NAVY }}>Phone Number</label>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="011 000 0000"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold block mb-1.5" style={{ color: NAVY }}>Company / Organisation</label>
                      <input
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Your business name"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold block mb-1.5" style={{ color: NAVY }}>Service Required</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold block mb-1.5" style={{ color: NAVY }}>Tell us about your situation</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Brief description of your needs, current challenges or questions..."
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-black py-3.5 rounded-lg text-white text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    style={{ background: NAVY, fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Send Message <ArrowRight size={16} />
                  </button>
                  <p className="text-center text-xs text-black">
                    By submitting this form you agree to our Privacy Policy and POPIA obligations.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
