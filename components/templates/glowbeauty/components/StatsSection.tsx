import { Clock, Star, Award } from "lucide-react";

const stats = [
  { icon: Clock, value: "10+", label: "Years Styling", sub: "Serving Negombo since 2014" },
  { icon: Star, value: "4.9/5", label: "Client Rating", sub: "Based on 500+ reviews" },
  { icon: Award, value: "Award-Winning", label: "Bridal Team", sub: "Sri Lanka Wedding Awards" },
  { icon: Star, value: "Top-Tier", label: "Global Products", sub: "Internationally sourced" },
];

export function StatsSection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#3A2232" }} id="stats">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span style={{ color: "#D9B48F" }} className="text-xs tracking-widest uppercase font-medium">Why Choose Glow</span>
          <h2 className="text-white mt-2">10 Years of Beauty Excellence</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(217,180,143,0.15)", border: "1px solid rgba(217,180,143,0.3)" }}>
                  <Icon size={22} style={{ color: "#D9B48F" }} />
                </div>
                <div style={{ color: "#D9B48F", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1 }} className="mb-1">{stat.value}</div>
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
