'use client';
import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Phone, Mail } from "lucide-react";
import Image from "next/image";

const PHONE = "+94772223344";
const EMAIL = "bookings@glowbeauty.lk";
const WHATSAPP = "94772223344";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tag: "Hair Styling",
    title: "Precision Cuts &\nBeautiful Styling",
    description: "From everyday blowouts to special occasion updos — our stylists bring out the best in your hair.",
  },
  {
    url: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tag: "Bridal Packages",
    title: "Unforgettable\nBridal Looks",
    description: "Our award-winning bridal team creates timeless looks for your most important day.",
  },
  {
    url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tag: "Skincare",
    title: "Radiant Facials &\nSkincare Rituals",
    description: "Relax and restore with our premium facial treatments using top-tier global skincare products.",
  },
  {
    url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tag: "Nails",
    title: "Luxurious Manicures\n& Pedicures",
    description: "Indulge in perfectly finished nails with our expert nail technicians and premium polish range.",
  },
  {
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tag: "Keratin & Color",
    title: "Keratin Treatments\n& Color Services",
    description: "Frizz-free, salon-smooth hair with our professional keratin and expert color services.",
  },
];

interface BannerCarouselProps { onLoaded?: () => void; }

export function BannerCarousel({ onLoaded }: BannerCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const hasNotified = useRef(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent((index + slides.length) % slides.length);
    setTimeout(() => setAnimating(false), 600);
  }, [animating]);

  useEffect(() => {
    const t = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(t);
  }, [current, goTo]);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "clamp(280px, 55vw, 540px)" }}>
      {slides.map((slide, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}>
          <Image fill unoptimized src={slide.url} alt={slide.title.replace("\n", " ")} className="object-cover" priority={i === 0}
            onLoad={i === 0 ? () => { if (!hasNotified.current) { hasNotified.current = true; onLoaded?.(); } } : undefined} />
          {/* Velvet Midnight overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(36,19,30,0.65)" }} />
          <div className="absolute inset-0 flex items-end pb-12 px-6 sm:px-10 lg:px-16" style={{ zIndex: 2 }}>
            <div className="max-w-lg">
              <span className="inline-block text-white text-xs px-3 py-1 rounded-full mb-3 font-medium tracking-wide" style={{ backgroundColor: "#D9B48F" }}>
                {slide.tag}
              </span>
              <h2 className="text-white mb-2 leading-tight" style={{ fontSize: "clamp(1.1rem, 3.5vw, 1.75rem)", fontWeight: 700, whiteSpace: "pre-line" }}>
                {slide.title}
              </h2>
              <p className="text-gray-200 text-sm leading-relaxed hidden sm:block">{slide.description}</p>
              <div className="flex items-center gap-2 mt-4">
                <span style={{ color: "#D9B48F" }} className="text-sm font-semibold">{String(current + 1).padStart(2, "0")}</span>
                <div className="h-px w-8 bg-gray-400" />
                <span className="text-gray-400 text-sm">{String(slides.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Desktop CTAs */}
      <div className="absolute right-8 lg:right-14 top-1/2 -translate-y-1/2 flex-col gap-3 hidden md:flex" style={{ zIndex: 20 }}>
        {[
          { href: `tel:${PHONE}`, label: "Call Now", Icon: Phone, bg: "#D9B48F" },
          { href: `mailto:${EMAIL}`, label: "Email Us", Icon: Mail, bg: "#3A2232" },
          { href: `https://wa.me/${WHATSAPP}`, label: "WhatsApp", Icon: null, bg: "#25D366" },
        ].map(({ href, label, Icon, bg }, idx) => (
          <a key={idx} href={href} target={idx === 2 ? "_blank" : undefined} rel={idx === 2 ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2.5 pl-3 pr-5 py-2.5 rounded-full text-white text-xs font-semibold shadow-lg transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: "rgba(36,19,30,0.88)", border: "1px solid rgba(217,180,143,0.35)", backdropFilter: "blur(8px)" }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: bg }}>
              {idx === 2
                ? <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                : Icon && <Icon size={13} className="text-white" />
              }
            </div>
            {label}
          </a>
        ))}
      </div>

      <button onClick={() => goTo(current - 1)} className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", zIndex: 10 }}>
        <ChevronLeft size={18} className="text-white" />
      </button>
      <button onClick={() => goTo(current + 1)} className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", zIndex: 10 }}>
        <ChevronRight size={18} className="text-white" />
      </button>

      <div className="absolute bottom-4 right-6 sm:right-10 flex items-center gap-2" style={{ zIndex: 10 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className="rounded-full transition-all duration-300"
            style={{ width: i === current ? 24 : 6, height: 6, backgroundColor: i === current ? "#D9B48F" : "rgba(255,255,255,0.4)" }} />
        ))}
      </div>
    </div>
  );
}
