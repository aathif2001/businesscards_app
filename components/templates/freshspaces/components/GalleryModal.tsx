"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export const galleryData: Record<string, { url: string; caption: string }[]> = {
  "Daily Office Cleaning": [
    { url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Professional office cleaning in progress" },
    { url: "https://images.unsplash.com/photo-1527515545081-5db817172677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Surface cleaning and sanitization" },
    { url: "https://images.unsplash.com/photo-1563453392212-326f5e854473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Spotless workstation after daily clean" },
    { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Reception area — pristine finish" },
  ],
  "Deep Cleaning & Sanitization": [
    { url: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Deep sanitization treatment applied" },
    { url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Industrial decontamination process" },
    { url: "https://images.unsplash.com/photo-1563453392212-326f5e854473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Eco-certified sanitization products" },
    { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Post-sanitization inspection" },
  ],
  "Carpet & Upholstery Care": [
    { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Hot-water extraction carpet cleaning" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Stain removal from office carpet" },
    { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Upholstery fabric treatment" },
    { url: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Sofa deep clean completed" },
  ],
  "High-Rise Window Washing": [
    { url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "High-rise window washing team" },
    { url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Commercial tower exterior cleaning" },
    { url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Rope access window washing" },
    { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Crystal-clear floor-to-ceiling windows" },
  ],
  "Post-Construction Cleanup": [
    { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Post-renovation debris removal" },
    { url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Construction dust elimination" },
    { url: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Site cleared and move-in ready" },
    { url: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Final inspection after cleanup" },
  ],
  "Washroom Hygiene Services": [
    { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Washroom deep sanitization" },
    { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Odour control system installation" },
    { url: "https://images.unsplash.com/photo-1563453392212-326f5e854473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Consumables restocking service" },
    { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Spotless facility result" },
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
      style={{ backgroundColor: "rgba(26,32,30,0.97)", backdropFilter: "blur(6px)" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4 shrink-0"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div>
          <p style={{ color: "#C5A880" }} className="text-xs tracking-widest uppercase font-medium mb-0.5">
            Gallery
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
              className="relative group rounded-xl overflow-hidden aspect-square focus:outline-none"
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
              style={{ height: 'auto' }}
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
