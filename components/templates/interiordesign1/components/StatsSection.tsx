import { Award, Users, Clock, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Award, value: "120+", label: "Spaces Designed", sub: "Residential & commercial" },
  { icon: Users, value: "850+", label: "Happy Clients", sub: "Island-wide" },
  { icon: Clock, value: "15+", label: "Years of Experience", sub: "Est. 2010" },
  { icon: ThumbsUp, value: "4.9/5", label: "Client Rating", sub: "Based on reviews" },
];

export function StatsSection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#2C2416" }} id="stats">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span style={{ color: "#B8935A" }} className="text-xs tracking-widest uppercase font-medium">
            Our Achievements
          </span>
          <h2 className="text-white mt-2">By the Numbers</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(184,147,90,0.15)", border: "1px solid rgba(184,147,90,0.3)" }}
                >
                  <Icon size={22} style={{ color: "#B8935A" }} />
                </div>
                <div
                  style={{ color: "#B8935A", fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}
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
