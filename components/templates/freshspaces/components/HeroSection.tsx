import { ChevronRight, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative w-full py-20 px-4 overflow-hidden"
      style={{ backgroundColor: "#0F2A1E" }}
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
            <div className="h-px w-8" style={{ backgroundColor: "#22C55E" }} />
            <span style={{ color: "#22C55E" }} className="text-xs tracking-widest uppercase font-medium">
              Commercial Cleaning Services
            </span>
          </div>

          <h1 className="text-white mb-4" style={{ fontSize: "2.5rem", lineHeight: "1.2", fontWeight: 700 }}>
            A Spotless Workplace,
            <br />
            <span style={{ color: "#22C55E" }}>A Happier</span>{" "}
            <span style={{ color: "#059669" }}>Team.</span>
          </h1>

          <p className="text-gray-300 mb-8 text-base leading-relaxed max-w-lg">
            We handle the mess so you don&apos;t have to. FreshSpaces delivers reliable, eco-friendly facility
            management to medium-to-large businesses across Sri Lanka.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#services">
              <button
                style={{ backgroundColor: "#22C55E" }}
                className="text-white px-6 py-3 rounded flex items-center gap-2 hover:opacity-90 transition-opacity font-medium"
              >
                Explore Our Services
                <ChevronRight size={16} />
              </button>
            </a>
            <a href="#quote">
              <button className="border border-gray-500 text-white px-6 py-3 rounded hover:border-white transition-colors font-medium text-sm">
                Get a Free Quote
              </button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} fill="#22C55E" style={{ color: "#22C55E" }} />
              ))}
              <span className="text-gray-400 text-xs ml-2">5.0/5 Client Rating</span>
            </div>
            <div className="h-4 w-px bg-gray-600" />
            <span className="text-gray-400 text-xs">500+ Offices Cleaned</span>
            <div className="h-4 w-px bg-gray-600" />
            <span className="text-gray-400 text-xs">100% Eco-Friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
