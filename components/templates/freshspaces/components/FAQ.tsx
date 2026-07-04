"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of businesses do you service?",
    a: "We specialize in medium-to-large commercial spaces including corporate offices, co-working spaces, retail stores, hotels, healthcare facilities, and industrial warehouses across Sri Lanka.",
  },
  {
    q: "Are your cleaning products eco-friendly?",
    a: "Yes — 100%. All our cleaning solutions are certified eco-friendly, biodegradable, and safe for people, pets, and the environment. We do not use harsh chemicals that leave harmful residues.",
  },
  {
    q: "Can you handle high-rise window cleaning?",
    a: "Absolutely. Our team is trained and certified for rope-access and elevated platform window washing. We comply with all Sri Lankan workplace safety regulations for high-rise operations.",
  },
  {
    q: "How quickly can you start after signing a contract?",
    a: "We can typically mobilize within 48–72 hours of contract signing for regular cleaning services. Post-construction and specialized services may require a brief site assessment first.",
  },
  {
    q: "Do you offer customized cleaning schedules?",
    a: "Yes. Every client receives a tailored cleaning plan based on their facility size, usage hours, and specific requirements. You choose the frequency — daily, weekly, or custom schedules.",
  },
  {
    q: "What is included in post-construction cleanup?",
    a: "Post-construction cleanup includes removal of construction dust, debris, and adhesive residues; deep cleaning of floors, windows, and surfaces; restroom sanitization; and final inspection to ensure the space is move-in ready.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#EFF1EE" }} id="faq">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: "#C5A880" }} />
            <span style={{ color: "#C5A880" }} className="text-xs tracking-widest uppercase font-medium">
              FAQ
            </span>
            <div className="h-px w-8" style={{ backgroundColor: "#C5A880" }} />
          </div>
          <h2 style={{ color: "#2C3531" }} className="mb-3">Common Questions</h2>
          <p className="text-gray-500 text-sm">
            Everything you need to know before partnering with FreshSpaces.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border overflow-hidden"
              style={{ borderColor: open === i ? "#C5A880" : "#e5e7eb" }}
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span style={{ color: "#2C3531" }} className="text-sm font-medium pr-4">
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  style={{
                    color: "#C5A880",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                    flexShrink: 0,
                  }}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
