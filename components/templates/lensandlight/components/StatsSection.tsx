import { Camera, Clock, Award } from "lucide-react";

const stats = [
  { icon: Camera, value: "150+", label: "Weddings Captured", sub: "Since 2012 across Sri Lanka" },
  { icon: Clock, value: "48-Hour", label: "Sneak Peeks", sub: "Guaranteed on every shoot" },
  { icon: Award, value: "Award-Winning", label: "Post-Production", sub: "International photo awards" },
  { icon: Camera, value: "500+", label: "Sessions Delivered", sub: "Families, brands & events" },
];

export function StatsSection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#000000" }} id="stats">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span style={{ color: "#4c4c4e" }} className="text-xs tracking-widest uppercase font-medium">The Numbers</span>
          <h2 className="text-white mt-2">Our Track Record</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-sm flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(229,169,106,0.12)", border: "1px solid rgba(229,169,106,0.3)" }}>
                  <Icon size={22} style={{ color: "#4c4c4e" }} />
                </div>
                <div style={{ color: "#4c4c4e", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1 }} className="mb-1">{stat.value}</div>
                <div className="text-white text-sm font-medium mb-0.5">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
