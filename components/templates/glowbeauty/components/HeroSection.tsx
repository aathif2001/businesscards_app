import { ChevronRight, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden"
      style={{ background: "linear-gradient(#24131E 0%, #3A2232 50%, #24131E 100%)" }}>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
        backgroundSize: "20px 20px",
      }} />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#D9B48F" }} />
            <span style={{ color: "#D9B48F" }} className="text-xs tracking-widest uppercase font-medium">
              Award-Winning Salon — Negombo
            </span>
          </div>
          <h1 className="text-white mb-4" style={{ fontSize: "2.5rem", lineHeight: "1.2", fontWeight: 700 }}>
            Relax, Refresh &<br />
            <span style={{ color: "#D9B48F" }}>Let Your Natural Glow Shine.</span>
          </h1>
          <p className="text-gray-300 mb-8 text-base leading-relaxed max-w-lg">
            Glow Beauty Lounge brings 10+ years of expert styling, premium bridal packages, and top-tier skincare to Negombo. Every visit is a treat for your senses.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services">
              <button style={{ backgroundColor: "#D9B48F" }} className="text-white px-6 py-3 rounded flex items-center gap-2 hover:opacity-90 transition-opacity font-medium">
                Explore Services <ChevronRight size={16} />
              </button>
            </a>
            <a href="#book">
              <button className="border text-white px-6 py-3 rounded hover:border-white transition-colors font-medium text-sm" style={{ borderColor: "rgba(255,255,255,0.4)" }}>
                Book an Appointment
              </button>
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#D9B48F" style={{ color: "#D9B48F" }} />)}
              <span className="text-gray-400 text-xs ml-2">4.9/5 Client Rating</span>
            </div>
            <div className="h-4 w-px bg-gray-600" />
            <span className="text-gray-400 text-xs">10+ Years Styling</span>
            <div className="h-4 w-px bg-gray-600" />
            <span className="text-gray-400 text-xs">Award-Winning Bridal Team</span>
          </div>
        </div>
      </div>
    </section>
  );
}
