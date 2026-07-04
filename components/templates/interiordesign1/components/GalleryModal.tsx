"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export const galleryData: Record<string, { url: string; caption: string }[]> = {
  "Living Room Design": [
    { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Modern minimalist living room — Colombo 7" },
    { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Warm-toned open-plan lounge" },
    { url: "https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Scandinavian-inspired sitting room" },
    { url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Luxury sofa & bespoke coffee table" },
  ],
  "Bedroom & Suite Design": [
    { url: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Luxury master suite — Mount Lavinia" },
    { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Soft neutral bedroom with layered textures" },
    { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Walk-in wardrobe with bespoke joinery" },
    { url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Guest suite with natural linen accents" },
  ],
  "Kitchen & Dining Design": [
    { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Contemporary handleless kitchen — Negombo" },
    { url: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Stone island with pendant lighting" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Open-plan kitchen & dining area" },
    { url: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Marble countertop with integrated sink" },
  ],
  "Commercial Interiors": [
    { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Boutique office — Port City Colombo" },
    { url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Biophilic workspace with natural greenery" },
    { url: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Premium hotel lobby design" },
    { url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Retail boutique interior" },
  ],
  "Color & Material Consulting": [
    { url: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Paint palette curation session" },
    { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Texture & fabric swatches selection" },
    { url: "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Natural stone tile samples" },
    { url: "https://images.unsplash.com/photo-1594498257604-bf89c66a906e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Wood grain & veneer finishes" },
  ],
  "Furniture & Décor Sourcing": [
    { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Curated furniture showroom selection" },
    { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Artisan accent pieces & sculptures" },
    { url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Premium cushions & throws sourcing" },
    { url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Statement lighting & décor accessories" },
  ],
};

interface GalleryModalProps {
  category: string;
  onClose: () => void;
}

export function GalleryModal({ category, onClose }: GalleryModalProps) {
  const images = galleryData[category] ?? [];
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + images.length) % images.length : null));
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % images.length : null));

  return (
    <div
      className="fixed inset-0 flex flex-col z-50"
      style={{ backgroundColor: "rgba(30,20,10,0.96)", backdropFilter: "blur(6px)" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4 shrink-0"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div>
          <p style={{ color: "#C5A880" }} className="text-xs tracking-widest uppercase font-medium mb-0.5">
            Portfolio Gallery
          </p>
          <h3 className="text-white">{category}</h3>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
        >
          <X size={18} className="text-white" />
        </button>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="relative group rounded-lg overflow-hidden aspect-square focus:outline-none"
            >
              <Image
                sizes="(max-width: 768px) 50vw, 25vw"
                src={img.url}
                alt={img.caption}
                fill
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-3">
                <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity leading-snug">
                  {img.caption}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          <div
            className="max-w-3xl w-full mx-8 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].url}
              alt={images[lightbox].caption}
              width={1080}
              height={720}
              className="w-full max-h-[70vh] object-contain rounded-lg"
              style={{ height: "auto" }}
              sizes="(max-width: 768px) 100vw, 896px"
            />
            <p className="text-gray-300 text-sm mt-3">{images[lightbox].caption}</p>
            <p className="text-gray-500 text-xs mt-1">
              {lightbox + 1} / {images.length}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          >
            <ChevronRight size={20} className="text-white" />
          </button>

          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          >
            <X size={16} className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
