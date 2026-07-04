"use client";

import { useState } from "react";
import { GalleryModal } from "./GalleryModal";
import { Sparkles, Wind, Layers, Building2, HardHat, Droplets, Eye, PhoneCall } from "lucide-react";

const offerings = [
  {
    icon: Sparkles,
    title: "Daily Office Cleaning",
    description:
      "Consistent, professional daily cleaning to keep your workspace fresh, hygienic, and ready for productivity every single morning.",
    tag: "Most Popular",
  },
  {
    icon: Wind,
    title: "Deep Cleaning & Sanitization",
    description:
      "Comprehensive deep cleaning and certified sanitization treatments to eliminate bacteria, allergens, and pollutants from every surface.",
    tag: null,
  },
  {
    icon: Layers,
    title: "Carpet & Upholstery Care",
    description:
      "Professional hot-water extraction, stain removal, and fabric treatment to restore and maintain carpets and office furniture.",
    tag: null,
  },
  {
    icon: Building2,
    title: "High-Rise Window Washing",
    description:
      "Specialist rope-access and platform window cleaning for multi-storey commercial buildings — crystal-clear results, safely delivered.",
    tag: null,
  },
  {
    icon: HardHat,
    title: "Post-Construction Cleanup",
    description:
      "Rapid, thorough post-renovation cleanup removing debris, dust, and residue so your new space is occupancy-ready from day one.",
    tag: null,
  },
  {
    icon: Droplets,
    title: "Washroom Hygiene Services",
    description:
      "Scheduled washroom sanitization, consumable restocking, and odour control — maintaining impeccable hygiene standards all day long.",
    tag: null,
  },
];

export function CoreOfferings() {
  const [galleryCategory, setGalleryCategory] = useState<string | null>(null);

  return (
    <>
      <section className="py-20 px-4 bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "#22C55E" }} />
              <span style={{ color: "#22C55E" }} className="text-xs tracking-widest uppercase font-medium">
                What We Offer
              </span>
              <div className="h-px w-8" style={{ backgroundColor: "#22C55E" }} />
            </div>
            <h2 style={{ color: "#0F2A1E" }} className="mb-3">Our Cleaning Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Tailored facility management solutions for businesses that demand excellence, consistency, and a truly clean environment.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all group flex flex-col"
                  style={{ backgroundColor: "#FAFFFE" }}
                >
                  {item.tag && (
                    <span
                      className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full text-white"
                      style={{ background: "#059669" }}
                    >
                      {item.tag}
                    </span>
                  )}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
                    style={{ background: "#059669" }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 style={{ color: "#0F2A1E" }} className="mb-2 text-base font-semibold">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.description}</p>

                  {/* CTA buttons */}
                  <div className="flex gap-2 mt-5">
                    <button
                      onClick={() => setGalleryCategory(item.title)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs font-semibold border transition-all hover:shadow-sm active:scale-95"
                      style={{ borderColor: "#22C55E", color: "#22C55E", backgroundColor: "transparent" }}
                    >
                      <Eye size={13} />
                      View
                    </button>
                    <a
                      href="#quote"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                      style={{ background: "#059669" }}
                    >
                      <PhoneCall size={13} />
                      Book Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {galleryCategory && (
        <GalleryModal
          category={galleryCategory}
          onClose={() => setGalleryCategory(null)}
        />
      )}
    </>
  );
}
