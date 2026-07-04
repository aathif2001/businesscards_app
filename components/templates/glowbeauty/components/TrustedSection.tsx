import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Nadeesha Silva", role: "Bride, Wedding Dec 2025", rating: 5, text: "My bridal look was absolutely perfect. The team at Glow Beauty made me feel like a queen. Everyone at my wedding kept asking who did my hair and makeup!", initials: "NS" },
  { name: "Priya Fernando", role: "Regular Client, Negombo", rating: 5, text: "I've been coming to Glow Beauty Lounge for 5 years for my monthly cut and facial. The service is always consistent and the products they use are genuinely high quality.", initials: "PF" },
  { name: "Amali Rodrigo", role: "Client, Keratin Treatment", rating: 5, text: "My hair has never felt so smooth! The keratin treatment was worth every penny. The stylists were so knowledgeable and professional throughout the entire process.", initials: "AR" },
];

export function TrustedSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F7EFE9" }} id="reviews">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: "#D9B48F" }} />
            <span style={{ color: "#D9B48F" }} className="text-xs tracking-widest uppercase font-medium">Client Stories</span>
            <div className="h-px w-8" style={{ backgroundColor: "#D9B48F" }} />
          </div>
          <h2 style={{ color: "#3A2232" }} className="mb-3">Loved by Our Clients</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">Real stories from real clients — because nothing speaks louder than a genuine glow.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-pink-50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} size={14} fill={s <= t.rating ? "#D9B48F" : "none"} style={{ color: "#D9B48F" }} />)}</div>
                <Quote size={20} style={{ color: "rgba(217,180,143,0.3)" }} />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-semibold" style={{ backgroundColor: "#3A2232" }}>{t.initials}</div>
                <div>
                  <div style={{ color: "#3A2232" }} className="text-sm font-semibold">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
