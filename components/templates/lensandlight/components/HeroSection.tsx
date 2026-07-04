import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden"
      style={{ background: "linear-gradient(#0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)" }}>
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#E5A96A" }} />
            <span style={{ color: "#E5A96A" }} className="text-xs tracking-widest uppercase font-medium">
              Award-Winning Photography Studio — Moratuwa
            </span>
          </div>
          <h1 className="text-white mb-4" style={{ fontSize: "2.5rem", lineHeight: "1.2", fontWeight: 700 }}>
            Capturing the Moments<br />
            <span style={{ color: "#E5A96A" }}>You&apos;ll Remember Forever.</span>
          </h1>
          <p className="text-gray-400 mb-8 text-base leading-relaxed max-w-lg">
            Lens & Light Studios delivers cinematic wedding photography, natural family portraits, and sharp commercial imagery — all with our signature 48-hour sneak peek guarantee.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services">
              <button style={{ backgroundColor: "#E5A96A" }} className="text-white px-6 py-3 rounded-sm flex items-center gap-2 hover:opacity-90 transition-opacity font-medium">
                View Services <ChevronRight size={16} />
              </button>
            </a>
            <a href="#book">
              <button className="border text-white px-6 py-3 rounded-sm hover:border-white transition-colors font-medium text-sm" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
                Book a Session
              </button>
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#E5A96A" }} />
              <span className="text-gray-400 text-xs">150+ Weddings Captured</span>
            </div>
            <div className="h-4 w-px bg-gray-700" />
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#E5A96A" }} />
              <span className="text-gray-400 text-xs">48-Hour Sneak Peeks</span>
            </div>
            <div className="h-4 w-px bg-gray-700" />
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#E5A96A" }} />
              <span className="text-gray-400 text-xs">Award-Winning Editing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
