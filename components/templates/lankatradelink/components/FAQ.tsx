"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the minimum order quantity?",
    a: "Minimum order quantities vary by product category. For most dry rations and spices, MOQ starts from 10 kg. For baking ingredients such as flour and sugar, MOQ starts from 25 kg. Contact our sales team for a full MOQ list.",
  },
  {
    q: "Do you deliver outside of Colombo?",
    a: "Yes — we offer island-wide delivery to all provinces. Orders placed before 2:00 PM are dispatched the same day and arrive the following morning, including the Northern, Eastern, and Uva provinces.",
  },
  {
    q: "Can I get a product catalogue and price list?",
    a: "Absolutely. Submit an order request via the form above or call us directly at 011 4 567 890 and we will send you our full catalogue with wholesale pricing within a few hours.",
  },
  {
    q: "Do you offer credit terms for regular buyers?",
    a: "Yes, established wholesale partners can apply for net-30 credit terms after an initial cash-on-delivery period. Contact our accounts team at sales@lankatradelink.lk to apply.",
  },
  {
    q: "Are your imported products certified safe for food use?",
    a: "All imported products we supply are SLS-certified and comply with Sri Lanka Food Act requirements. We provide full documentation including batch certificates on request.",
  },
  {
    q: "How do I track my delivery?",
    a: "Once your order is dispatched, our logistics team will send you a tracking number via SMS and WhatsApp. You can also call our dispatch team directly on 011 4 567 890.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F7F3EB" }} id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: "#D4A359" }} />
            <span style={{ color: "#D4A359" }} className="text-xs tracking-widest uppercase font-medium">FAQ</span>
            <div className="h-px w-8" style={{ backgroundColor: "#D4A359" }} />
          </div>
          <h2 style={{ color: "#3D2314" }} className="mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-sm">Everything you need to know before partnering with Lanka Trade Link.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: open === i ? "#D4A359" : "#e5e7eb" }}>
              <button className="w-full flex items-center justify-between px-5 py-4 text-left" onClick={() => setOpen(open === i ? null : i)}>
                <span style={{ color: "#3D2314" }} className="text-sm font-medium pr-4">{item.q}</span>
                <ChevronDown size={18} style={{ color: "#D4A359", transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0 }} />
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
