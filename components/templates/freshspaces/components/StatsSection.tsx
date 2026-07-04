import { Building2, Leaf, HeadphonesIcon, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Building2, value: "500+", label: "Offices Cleaned", sub: "Across Sri Lanka" },
  { icon: Leaf, value: "100%", label: "Eco-Friendly Products", sub: "Certified green cleaning" },
  { icon: HeadphonesIcon, value: "24/7", label: "Support Team", sub: "Always here for you" },
  { icon: ThumbsUp, value: "5.0/5", label: "Client Rating", sub: "Based on reviews" },
];

export function StatsSection() {
  return (
    <section className="py-16 px-4" style={{ background: "linear-gradient(135deg, #0B1F15 0%, #0F2A1E 100%)" }} id="stats">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span style={{ color: "#22C55E" }} className="text-xs tracking-widest uppercase font-medium">
            Why Choose FreshSpaces
          </span>
          <h2 className="text-white mt-2">Numbers That Speak</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)" }}
                >
                  <Icon size={22} style={{ color: "#22C55E" }} />
                </div>
                <div
                  style={{ color: "#22C55E", fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}
                  className="mb-1"
                >
                  {stat.value}
                </div>
                <div className="text-white text-sm font-medium mb-0.5">{stat.label}</div>
                <div className="text-gray-400 text-xs">{stat.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
