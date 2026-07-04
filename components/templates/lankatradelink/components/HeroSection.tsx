import { ChevronRight, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative w-full py-20 px-4 overflow-hidden"
      style={{ background: "linear-gradient(#26140A 0%, #3D2314 50%, #26140A 100%)" }}
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
            <div className="h-px w-8" style={{ backgroundColor: "#D4A359" }} />
            <span style={{ color: "#D4A359" }} className="text-xs tracking-widest uppercase font-medium">
              Wholesale Importers — Pettah, Colombo
            </span>
          </div>

          <h1 className="text-white mb-4" style={{ fontSize: "2.5rem", lineHeight: "1.2", fontWeight: 700 }}>
            Your Trusted Partner
            <br />
            <span style={{ color: "#D4A359" }}>in Wholesale.</span>
          </h1>

          <p className="text-gray-300 mb-8 text-base leading-relaxed max-w-lg">
            Quality supplies, delivered right on time. Lanka Trade Link has been the backbone of Sri Lanka&apos;s retail shops and bakeries for over 20 years — operating from the heart of Pettah.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#products">
              <button
                style={{ backgroundColor: "#D4A359" }}
                className="text-white px-6 py-3 rounded flex items-center gap-2 hover:opacity-90 transition-opacity font-medium"
              >
                Browse Our Products
                <ChevronRight size={16} />
              </button>
            </a>
            <a href="#quote">
              <button className="border text-white px-6 py-3 rounded hover:border-white transition-colors font-medium text-sm" style={{ borderColor: "rgba(255,255,255,0.4)" }}>
                Place a Bulk Order
              </button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} fill="#D4A359" style={{ color: "#D4A359" }} />
              ))}
              <span className="text-gray-400 text-xs ml-2">4.9/5 Partner Rating</span>
            </div>
            <div className="h-4 w-px bg-gray-600" />
            <span className="text-gray-400 text-xs">20+ Years in Pettah</span>
            <div className="h-4 w-px bg-gray-600" />
            <span className="text-gray-400 text-xs">5,000+ Retail Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
}
