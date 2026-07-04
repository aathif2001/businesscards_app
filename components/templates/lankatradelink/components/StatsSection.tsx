import { CalendarDays, Users, Zap, Star } from "lucide-react";

const stats = [
  { icon: CalendarDays, value: "20+", label: "Years in Pettah", sub: "Established since 2004" },
  { icon: Users, value: "5,000+", label: "Retail Partners", sub: "Across Sri Lanka" },
  { icon: Zap, value: "Next-Day", label: "Delivery", sub: "Island-wide guaranteed" },
  { icon: Star, value: "4.9/5", label: "Partner Rating", sub: "Based on reviews" },
];

export function StatsSection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#3D2314" }} id="stats">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span style={{ color: "#D4A359" }} className="text-xs tracking-widest uppercase font-medium">
            Why Lanka Trade Link
          </span>
          <h2 className="text-white mt-2">20 Years of Wholesale Excellence</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(212,163,89,0.15)", border: "1px solid rgba(212,163,89,0.3)" }}
                >
                  <Icon size={22} style={{ color: "#D4A359" }} />
                </div>
                <div
                  style={{ color: "#D4A359", fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}
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
