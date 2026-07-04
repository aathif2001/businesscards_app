"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical interior design project take?",
    a: "Project timelines vary based on scope. A single-room design typically takes 4–6 weeks from concept to completion. Full home or commercial projects can range from 3 to 6 months. We provide a detailed timeline during your initial consultation.",
  },
  {
    q: "Do you offer 3D visualizations before work begins?",
    a: "Yes, all our full-service packages include 3D renderings and mood boards. This allows you to visualize the final design before any physical work or purchasing commitments are made, ensuring complete confidence in the outcome.",
  },
  {
    q: "What is included in your full-service design package?",
    a: "Our full-service package covers initial consultation, space planning, concept development, 3D visualization, material & furniture selection, supplier coordination, site supervision, and final styling. It's a truly end-to-end experience.",
  },
  {
    q: "Can you work with furniture I already own?",
    a: "Absolutely. We frequently incorporate existing pieces that hold sentimental or aesthetic value. Our team will assess your current furniture and advise on what works within the new design scheme and what may benefit from replacement.",
  },
  {
    q: "What areas do you serve?",
    a: "We are based in Colombo and primarily serve clients across the Western Province. For larger projects, we also travel island-wide, including the Southern Coast, Hill Country, and the North. Virtual consultations are available for remote clients.",
  },
  {
    q: "How is your pricing structured?",
    a: "We offer three engagement models: Consultation Only (hourly rate), Design & Direction (flat fee per room), and Full Turnkey (project-based pricing including procurement). All pricing is discussed transparently during your free initial consultation.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#FAFAf8" }} id="faq">
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
            Everything you need to know before booking your consultation.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border overflow-hidden"
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
