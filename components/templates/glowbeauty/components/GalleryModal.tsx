"use client";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export const galleryData: Record<string, { url: string; caption: string }[]> = {
  "Precision Hair Cuts & Styling": [
    { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Precision cut and blowout styling" },
    { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Elegant updo for special occasions" },
    { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Salon styling in progress" },
    { url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Fresh cut finished look" },
  ],
  "Bridal Dressing & Makeup": [
    { url: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Bridal look — hair and makeup" },
    { url: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Bridal makeup close-up" },
    { url: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Elegant bridal updo" },
    { url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Full bridal party styling" },
  ],
  "Relaxing Facials & Skincare": [
    { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Luxury facial treatment" },
    { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Deep cleansing facial" },
    { url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Skincare ritual and mask" },
    { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Radiant skin results" },
  ],
  "Manicures & Pedicures": [
    { url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Gel manicure — finished look" },
    { url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Nail art designs" },
    { url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Spa pedicure treatment" },
    { url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Premium nail polish collection" },
  ],
  "Painless Waxing Services": [
    { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Waxing treatment in progress" },
    { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Premium wax formulations" },
    { url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Smooth results after waxing" },
    { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Skin-friendly wax products" },
  ],
  "Keratin & Color Treatments": [
    { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Keratin smoothing treatment" },
    { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Balayage color treatment" },
    { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Highlights and color finish" },
    { url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Glossy, frizz-free keratin result" },
  ],
};

export function GalleryModal({ category, onClose }: { category: string; onClose: () => void }) {
  const images = galleryData[category] ?? [];
  const [lightbox, setLightbox] = useState<number | null>(null);
  const prev = () => setLightbox(l => l !== null ? (l - 1 + images.length) % images.length : null);
  const next = () => setLightbox(l => l !== null ? (l + 1) % images.length : null);

  return (
    <div className="fixed inset-0 flex flex-col z-50" style={{ backgroundColor: "rgba(36,19,30,0.97)", backdropFilter: "blur(6px)" }}>
      <div className="flex items-center justify-between px-5 py-4 shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div>
          <p style={{ color: "#D9B48F" }} className="text-xs tracking-widest uppercase font-medium mb-0.5">Gallery</p>
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
          <button onClick={e => { e.stopPropagation(); prev(); }} className="absolute left-3 sm:left-6 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
            <ChevronLeft size={20} className="text-white" />
          </button>
          <div className="max-w-3xl w-full mx-8 flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <Image src={images[lightbox].url} alt={images[lightbox].caption} width={1080} height={720} className="w-full max-h-[70vh] object-contain rounded-lg" style={{ height: 'auto' }} sizes="(max-width: 768px) 100vw, 896px" />
            <p className="text-gray-300 text-sm mt-3">{images[lightbox].caption}</p>
            <p className="text-gray-500 text-xs mt-1">{lightbox + 1} / {images.length}</p>
          </div>
          <button onClick={e => { e.stopPropagation(); next(); }} className="absolute right-3 sm:right-6 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
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
