"use client";

import { useState } from "react";
import { GalleryModal } from "./GalleryModal";
import { Sofa, BedDouble, ChefHat, Building2, Paintbrush, Package, Eye, FileText } from "lucide-react";

const offerings = [
  {
    icon: Sofa,
    title: "Living Room Design",
    description:
      "Transform your living spaces into curated sanctuaries — harmonious layouts, bespoke furniture selection, and lighting that sets the perfect mood.",
    tag: "Most Popular",
  },
  {
    icon: BedDouble,
    title: "Bedroom & Suite Design",
    description:
      "Restful, refined bedroom retreats designed around your lifestyle — from master suites to guest rooms and children's spaces.",
    tag: null,
  },
  {
    icon: ChefHat,
    title: "Kitchen & Dining Design",
    description:
      "Functional, beautiful kitchens and dining spaces with premium cabinetry, stone surfaces, and seamlessly integrated appliances.",
    tag: null,
  },
  {
    icon: Building2,
    title: "Commercial Interiors",
    description:
      "Offices, boutiques, and hospitality spaces designed to reflect your brand identity while maximizing productivity and guest experience.",
    tag: null,
  },
  {
    icon: Paintbrush,
    title: "Color & Material Consulting",
    description:
      "Expert guidance on color palettes, material finishes, and texture layering to create cohesive and timeless interiors.",
    tag: null,
  },
  {
    icon: Package,
    title: "Furniture & Décor Sourcing",
    description:
      "End-to-end procurement of furniture, art, soft furnishings, and accessories from curated local and international suppliers.",
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
              <div className="h-px w-8" style={{ backgroundColor: "#C5A880" }} />
              <span style={{ color: "#C5A880" }} className="text-xs tracking-widest uppercase font-medium">
                What We Do
              </span>
              <div className="h-px w-8" style={{ backgroundColor: "#C5A880" }} />
            </div>
            <h2 style={{ color: "#2C3531" }} className="mb-3">Our Design Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              From a single room refresh to a complete home or commercial transformation — we handle every detail.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow group flex flex-col"
                  style={{ backgroundColor: "#EFF1EE" }}
                >
                  {item.tag && (
                    <span
                      className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: "#C5A880" }}
                    >
                      {item.tag}
                    </span>
                  )}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: "#2C3531" }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 style={{ color: "#2C3531" }} className="mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.description}</p>

                  {/* CTA buttons */}
                  <div className="flex gap-2 mt-5">
                    <button
                      onClick={() => setGalleryCategory(item.title)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs font-semibold border transition-all hover:shadow-sm active:scale-95"
                      style={{ borderColor: "#2C3531", color: "#2C3531", backgroundColor: "transparent" }}
                    >
                      <Eye size={13} />
                      View Gallery
                    </button>
                    <button
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                      style={{ backgroundColor: "#C5A880" }}
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = "#";
                        link.download = `${item.title.replace(/\s+/g, "_")}_Brochure.pdf`;
                        link.click();
                      }}
                    >
                      <FileText size={13} />
                      Download Brochure
                    </button>
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
