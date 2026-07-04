"use client";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export const galleryData: Record<string, { url: string; caption: string }[]> = {
  "Wedding & Engagement Shoots": [
    { url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Candid wedding ceremony moments" },
    { url: "https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Golden hour couple portrait" },
    { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Romantic engagement session" },
    { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Wedding party group shot" },
  ],
  "Natural Family Portraits": [
    { url: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Outdoor family portrait session" },
    { url: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Candid family moments" },
    { url: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Parent and children portrait" },
    { url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Beach family session" },
  ],
  "Commercial & Product Photography": [
    { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Professional product flatlay" },
    { url: "https://images.unsplash.com/photo-1498049794561-7780e7231661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Lifestyle product photography" },
    { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "E-commerce product shoot" },
    { url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Brand hero imagery" },
  ],
  "Corporate Event Coverage": [
    { url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Corporate conference coverage" },
    { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Panel and keynote speakers" },
    { url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Networking event candids" },
    { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Product launch event" },
  ],
  "Cinematic Drone Videography": [
    { url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Aerial coastal landscape" },
    { url: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Drone cityscape footage" },
    { url: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Aerial real estate shot" },
    { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Mountain aerial footage" },
  ],
  "Premium Photo Albums": [
    { url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Lay-flat premium album" },
    { url: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Wedding album spread" },
    { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Family portrait album" },
    { url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", caption: "Archival-quality photo book" },
  ],
};

export function GalleryModal({ category, onClose }: { category: string; onClose: () => void }) {
  const images = galleryData[category] ?? [];
  const [lightbox, setLightbox] = useState<number | null>(null);
  const prev = () => setLightbox(l => l !== null ? (l - 1 + images.length) % images.length : null);
  const next = () => setLightbox(l => l !== null ? (l + 1) % images.length : null);

  return (
    <div className="fixed inset-0 flex flex-col z-50" style={{ backgroundColor: "rgba(13,13,13,0.97)", backdropFilter: "blur(6px)" }}>
      <div className="flex items-center justify-between px-5 py-4 shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div>
          <p style={{ color: "#E5A96A" }} className="text-xs tracking-widest uppercase font-medium mb-0.5">Gallery</p>
          <h3 className="text-white">{category}</h3>
        </div>
        <button onClick={onClose} className="w-9 h-9 rounded-sm flex items-center justify-center hover:bg-white/10 transition-colors">
          <X size={18} className="text-white" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <button key={i} onClick={() => setLightbox(i)} className="relative group rounded-sm overflow-hidden aspect-square focus:outline-none">
              <Image sizes="(max-width: 768px) 50vw, 25vw" src={img.url} alt={img.caption} fill className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end p-3">
                <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity leading-snug">{img.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {lightbox !== null && (
        <div className="fixed inset-0 z-60 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.95)" }} onClick={() => setLightbox(null)}>
          <button onClick={e => { e.stopPropagation(); prev(); }} className="absolute left-3 sm:left-6 w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
            <ChevronLeft size={20} className="text-white" />
          </button>
          <div className="max-w-3xl w-full mx-8 flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <Image src={images[lightbox].url} alt={images[lightbox].caption} width={1080} height={720} className="w-full max-h-[70vh] object-contain" style={{ height: 'auto' }} sizes="(max-width: 768px) 100vw, 896px" />
            <p className="text-gray-300 text-sm mt-3">{images[lightbox].caption}</p>
            <p className="text-gray-600 text-xs mt-1">{lightbox + 1} / {images.length}</p>
          </div>
          <button onClick={e => { e.stopPropagation(); next(); }} className="absolute right-3 sm:right-6 w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
            <ChevronRight size={20} className="text-white" />
          </button>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-9 h-9 rounded-sm flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
            <X size={16} className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
