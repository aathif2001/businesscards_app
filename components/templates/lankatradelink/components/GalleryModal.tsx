"use client";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export const galleryData: Record<string, { url: string; caption: string }[]> = {
  "Bulk Baking Ingredients": [
    { url: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Premium flour and sugar in bulk" },
    { url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Freshly baked goods using our ingredients" },
    { url: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Baking essentials — butter, eggs, yeast" },
    { url: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Wholesale baking supplies ready for dispatch" },
  ],
  "Packaging & Containers": [
    { url: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Food-grade packaging solutions" },
    { url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Bakery boxes and containers" },
    { url: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Retail-ready packaging options" },
    { url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Sealing and wrap solutions" },
  ],
  "Spices & Dry Rations": [
    { url: "https://images.unsplash.com/photo-1596591868231-05e808e40fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Import-grade whole spices" },
    { url: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Ground spice selection" },
    { url: "https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Dry rations — lentils, dhal, rice" },
    { url: "https://images.unsplash.com/photo-1506802913710-d752a28c1d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Spice storage and bulk supply" },
  ],
  "Confectionery Supplies": [
    { url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Chocolate compounds and coatings" },
    { url: "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Sprinkles and edible decorations" },
    { url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Fondant and marzipan supplies" },
    { url: "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Confectionery range — full display" },
  ],
  "Beverage Syrups & Powders": [
    { url: "https://images.unsplash.com/photo-1544145945-f90425340c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Flavoured syrups selection" },
    { url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Tea and coffee powder range" },
    { url: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Juice concentrates in bulk" },
    { url: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Milk-based drink powder mixes" },
  ],
  "Island-wide Distribution": [
    { url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Our delivery fleet ready to dispatch" },
    { url: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Loading wholesale orders at Pettah warehouse" },
    { url: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Delivery to retail shops island-wide" },
    { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", caption: "Safe and timely delivery guaranteed" },
  ],
};

export function GalleryModal({ category, onClose }: { category: string; onClose: () => void }) {
  const images = galleryData[category] ?? [];
  const [lightbox, setLightbox] = useState<number | null>(null);
  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + images.length) % images.length : null));
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % images.length : null));

  return (
    <div className="fixed inset-0 flex flex-col z-50" style={{ backgroundColor: "rgba(38,20,10,0.97)", backdropFilter: "blur(6px)" }}>
      <div className="flex items-center justify-between px-5 py-4 shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div>
          <p style={{ color: "#D4A359" }} className="text-xs tracking-widest uppercase font-medium mb-0.5">Gallery</p>
          <h3 className="text-white">{category}</h3>
        </div>
        <button onClick={onClose} className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
          <X size={18} className="text-white" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <button key={i} onClick={() => setLightbox(i)} className="relative group rounded-xl overflow-hidden aspect-square focus:outline-none">
              <Image sizes="(max-width: 768px) 50vw, 25vw" src={img.url} alt={img.caption} fill className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-3">
                <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity leading-snug">{img.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {lightbox !== null && (
        <div className="fixed inset-0 z-60 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.92)" }} onClick={() => setLightbox(null)}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 sm:left-6 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
            <ChevronLeft size={20} className="text-white" />
          </button>
          <div className="max-w-3xl w-full mx-8 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <Image src={images[lightbox].url} alt={images[lightbox].caption} width={1080} height={720} className="w-full max-h-[70vh] object-contain rounded-lg" style={{ height: 'auto' }} sizes="(max-width: 768px) 100vw, 896px" />
            <p className="text-gray-300 text-sm mt-3">{images[lightbox].caption}</p>
            <p className="text-gray-500 text-xs mt-1">{lightbox + 1} / {images.length}</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 sm:right-6 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
            <ChevronRight size={20} className="text-white" />
          </button>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
            <X size={16} className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
