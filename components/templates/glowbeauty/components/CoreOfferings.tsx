"use client";
import { useState } from "react";
import { GalleryModal } from "./GalleryModal";
import { Scissors, Heart, Smile, Hand, Zap, Palette, Eye, PhoneCall } from "lucide-react";

const offerings = [
  { icon: Scissors, title: "Precision Hair Cuts & Styling", description: "From classic trims to transformative cuts and blowouts — our senior stylists deliver flawless results for every hair type and occasion.", tag: "Most Popular" },
  { icon: Heart, title: "Bridal Dressing & Makeup", description: "Our award-winning bridal team crafts picture-perfect looks — hair, makeup, and everything in between — for your special day.", tag: "Award-Winning" },
  { icon: Smile, title: "Relaxing Facials & Skincare", description: "Restore your skin's natural radiance with our rejuvenating facial treatments using top-tier global skincare brands and techniques.", tag: null },
  { icon: Hand, title: "Manicures & Pedicures", description: "Pamper your hands and feet with our expert nail treatments — from classic polish to gel, nail art, and spa pedicures.", tag: null },
  { icon: Zap, title: "Painless Waxing Services", description: "Smooth, long-lasting results with our gentle and effective waxing services for face and body using premium wax formulations.", tag: null },
  { icon: Palette, title: "Keratin & Color Treatments", description: "Achieve frizz-free, glossy hair with keratin treatments, or refresh your look with expert color, balayage, and highlights.", tag: null },
];

export function CoreOfferings() {
  const [galleryCategory, setGalleryCategory] = useState<string | null>(null);
  return (
    <>
      <section className="py-20 px-4" style={{ backgroundColor: "#FFFBF7" }} id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "#D9B48F" }} />
              <span style={{ color: "#D9B48F" }} className="text-xs tracking-widest uppercase font-medium">Our Services</span>
              <div className="h-px w-8" style={{ backgroundColor: "#D9B48F" }} />
            </div>
            <h2 style={{ color: "#3A2232" }} className="mb-3">What We Offer</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              A full-service beauty lounge dedicated to making you look and feel your absolute best — every single visit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="relative border border-pink-50 rounded-xl p-6 hover:shadow-md transition-all group flex flex-col bg-white">
                  {item.tag && (
                    <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: "#D9B48F" }}>{item.tag}</span>
                  )}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform" style={{ backgroundColor: "#3A2232" }}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 style={{ color: "#3A2232" }} className="mb-2 text-base font-semibold">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.description}</p>
                  <div className="flex gap-2 mt-5">
                    <button onClick={() => setGalleryCategory(item.title)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs font-semibold border transition-all hover:shadow-sm active:scale-95"
                      style={{ borderColor: "#D9B48F", color: "#D9B48F", backgroundColor: "transparent" }}>
                      <Eye size={13} /> Gallery
                    </button>
                    <a href="#book" className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                      style={{ backgroundColor: "#D9B48F" }}>
                      <PhoneCall size={13} /> Book Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {galleryCategory && <GalleryModal category={galleryCategory} onClose={() => setGalleryCategory(null)} />}
    </>
  );
}
