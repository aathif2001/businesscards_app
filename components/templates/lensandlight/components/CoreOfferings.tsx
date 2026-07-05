"use client";
import { useState } from "react";
import { GalleryModal } from "./GalleryModal";
import { Heart, Users, Briefcase, Mic, Video, BookOpen, Eye, PhoneCall } from "lucide-react";

const offerings = [
  { icon: Heart, title: "Wedding & Engagement Shoots", description: "Full-day wedding coverage and romantic engagement sessions. Delivered with our signature 48-hour sneak peek for immediate excitement.", tag: "Most Booked" },
  { icon: Users, title: "Natural Family Portraits", description: "Relaxed, candid family sessions at the location of your choice — capturing genuine laughter, not stiff poses.", tag: null },
  { icon: Briefcase, title: "Commercial & Product Photography", description: "Studio-quality commercial imagery for brands, e-commerce, and advertising — crisp, detailed, and brand-consistent.", tag: null },
  { icon: Mic, title: "Corporate Event Coverage", description: "Professional, unobtrusive event photography for conferences, launches, galas, and corporate milestones.", tag: null },
  { icon: Video, title: "Cinematic Drone Videography", description: "Stunning 4K aerial video for events, real estate, tourism, and brand films — licensed drone operators on every shoot.", tag: "Premium" },
  { icon: BookOpen, title: "Premium Photo Albums", description: "Heirloom-quality lay-flat albums with custom covers, printed on archival paper built to last a lifetime.", tag: null },
];

export function CoreOfferings() {
  const [galleryCategory, setGalleryCategory] = useState<string | null>(null);
  return (
    <>
      <section className="py-20 px-4" style={{ backgroundColor: "#FAFAFA" }} id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "#4c4c4e" }} />
              <span style={{ color: "#4c4c4e" }} className="text-xs tracking-widest uppercase font-medium">Our Services</span>
              <div className="h-px w-8" style={{ backgroundColor: "#4c4c4e" }} />
            </div>
            <h2 style={{ color: "#000000" }} className="mb-3">What We Shoot</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              From intimate weddings to high-end commercial campaigns — every shoot gets the same obsessive attention to light, moment, and story.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="relative border border-gray-100 rounded-sm p-6 hover:shadow-md transition-all group flex flex-col bg-white">
                  {item.tag && (
                    <span className="absolute top-4 right-4 text-xs px-2 py-0.5 text-white font-medium" style={{ backgroundColor: "#4c4c4e" }}>{item.tag}</span>
                  )}
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-4 group-hover:scale-105 transition-transform" style={{ backgroundColor: "#737373" }}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 style={{ color: "#000000" }} className="mb-2 text-base font-semibold">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.description}</p>
                  <div className="flex gap-2 mt-5">
                    <button onClick={() => setGalleryCategory(item.title)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-sm text-xs font-semibold border transition-all hover:shadow-sm active:scale-95"
                      style={{ borderColor: "#4c4c4e", color: "#4c4c4e" }}>
                      <Eye size={13} /> Gallery
                    </button>
                    <a href="#book" className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-sm text-xs font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                      style={{ backgroundColor: "#000000" }}>
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
