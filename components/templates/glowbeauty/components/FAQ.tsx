"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Do I need to book in advance?", a: "We recommend booking at least 2–3 days in advance, especially for bridal and keratin services. Walk-ins are welcome based on availability. You can book via our form, WhatsApp, or call us directly." },
  { q: "What bridal packages do you offer?", a: "We offer full-day bridal packages that include trial sessions, day-of hair and makeup, bridesmaids styling, and post-ceremony touch-up kits. Contact us for customised packages and pricing." },
  { q: "Which product brands do you use?", a: "We exclusively use top-tier international brands including Kerastase, L'Oréal Professional, OPI, and Dermalogica — sourced directly through authorised Sri Lanka distributors." },
  { q: "How long does a keratin treatment take?", a: "A full keratin treatment typically takes 2.5 to 4 hours depending on hair length and thickness. We recommend planning for a half-day appointment. Results last 3–5 months with proper care." },
  { q: "Do you offer packages for groups or events?", a: "Yes! We cater to bridal parties, hen nights, corporate events, and special occasions. Group bookings receive a complimentary welcome drink and a dedicated stylist team." },
  { q: "What are your salon hours?", a: "We are open Monday to Saturday from 9:00 AM to 7:00 PM, and Sunday from 10:00 AM to 4:00 PM. Last appointments are booked one hour before closing." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F7EFE9" }} id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: "#D9B48F" }} />
            <span style={{ color: "#D9B48F" }} className="text-xs tracking-widest uppercase font-medium">FAQ</span>
            <div className="h-px w-8" style={{ backgroundColor: "#D9B48F" }} />
          </div>
          <h2 style={{ color: "#3A2232" }} className="mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-sm">Everything you need to know before your first visit to Glow Beauty Lounge.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: open === i ? "#D9B48F" : "#e5e7eb" }}>
              <button className="w-full flex items-center justify-between px-5 py-4 text-left" onClick={() => setOpen(open === i ? null : i)}>
                <span style={{ color: "#3A2232" }} className="text-sm font-medium pr-4">{item.q}</span>
                <ChevronDown size={18} style={{ color: "#D9B48F", transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0 }} />
              </button>
              {open === i && <div className="px-5 pb-4"><p className="text-gray-500 text-sm leading-relaxed">{item.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
