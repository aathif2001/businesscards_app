import { ChevronRight, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative w-full py-20 px-4 overflow-hidden"
      style={{ background: "linear-gradient(#1A201E 0%, #2C3531 50%, #1A201E 100%)" }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#C5A880" }} />
            <span style={{ color: "#C5A880" }} className="text-xs tracking-widest uppercase font-medium">
              Award-Winning Interior Design
            </span>
          </div>

          <h1 className="text-white mb-4" style={{ fontSize: "2.5rem", lineHeight: "1.2", fontWeight: 700 }}>
            We Design Spaces That
            <br />
            <span style={{ color: "#C5A880" }}>Tell Your Story</span>
          </h1>

          <p className="text-gray-300 mb-8 text-base leading-relaxed max-w-lg">
            Studio Interiors crafts bespoke living and working spaces tailored to your vision.
            From concept to completion, we bring warmth, elegance, and function together seamlessly.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#services">
              <button
                style={{ backgroundColor: "#C5A880" }}
                className="text-white px-6 py-3 rounded flex items-center gap-2 hover:opacity-90 transition-opacity font-medium"
              >
                View Our Services
                <ChevronRight size={16} />
              </button>
            </a>
            <a href="#consult">
              <button className="border border-gray-500 text-white px-6 py-3 rounded hover:border-white transition-colors font-medium text-sm">
                Book a Consultation
              </button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} fill="#C5A880" style={{ color: "#C5A880" }} />
              ))}
              <span className="text-gray-400 text-xs ml-2">4.9/5 Client Rating</span>
            </div>
            <div className="h-4 w-px bg-gray-600" />
            <span className="text-gray-400 text-xs">120+ Spaces Designed</span>
            <div className="h-4 w-px bg-gray-600" />
            <span className="text-gray-400 text-xs">Est. 2010 · 15+ Years</span>
          </div>
        </div>
      </div>
    </section>
  );
}
