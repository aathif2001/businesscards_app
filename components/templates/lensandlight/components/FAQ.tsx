"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How do I book a photography session?", a: "Simply fill out our booking form or send us a WhatsApp message. We'll respond within 24 hours with our availability, packages, and pricing tailored to your specific requirements." },
  { q: "What is the 48-hour sneak peek?", a: "After every shoot, we deliver a curated selection of 5–10 edited images within 48 hours so you can start sharing with family and friends immediately while we finish the full gallery (typically 2–4 weeks)." },
  { q: "Do you travel for destination weddings?", a: "Yes! We regularly shoot weddings across Sri Lanka and accept select international destination bookings. Travel and accommodation costs are billed transparently and discussed upfront." },
  { q: "What's included in a wedding package?", a: "Our wedding packages include full-day coverage, a second photographer, the 48-hour sneak peek, a curated online gallery with download rights, and optional add-ons like drone footage, engagement sessions, and premium albums." },
  { q: "How long until we receive all our photos?", a: "Full edited gallery delivery takes 3–6 weeks for weddings and 1–2 weeks for portrait or commercial sessions. Rush delivery (within 5 business days) is available at an additional fee." },
  { q: "Do you offer drone videography for events?", a: "Yes — our licensed drone operator provides cinematic aerial footage for weddings, events, real estate, and commercial projects. All drone shoots are CAA-compliant with full liability coverage." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F3F3F4" }} id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: "#E5A96A" }} />
            <span style={{ color: "#E5A96A" }} className="text-xs tracking-widest uppercase font-medium">FAQ</span>
            <div className="h-px w-8" style={{ backgroundColor: "#E5A96A" }} />
          </div>
          <h2 style={{ color: "#1A1A1A" }} className="mb-3">Common Questions</h2>
          <p className="text-gray-500 text-sm">Everything you need to know before booking your session.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className="bg-white rounded-sm border overflow-hidden" style={{ borderColor: open === i ? "#E5A96A" : "#e5e7eb" }}>
              <button className="w-full flex items-center justify-between px-5 py-4 text-left" onClick={() => setOpen(open === i ? null : i)}>
                <span style={{ color: "#1A1A1A" }} className="text-sm font-medium pr-4">{item.q}</span>
                <ChevronDown size={18} style={{ color: "#E5A96A", transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0 }} />
              </button>
              {open === i && <div className="px-5 pb-4"><p className="text-gray-500 text-sm leading-relaxed">{item.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
