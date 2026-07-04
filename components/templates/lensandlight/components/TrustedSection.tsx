import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Thilini & Ruwan", role: "Wedding Couple, March 2025", rating: 5, text: "Lens & Light captured every single moment perfectly. The 48-hour sneak peek had us in tears — we couldn't believe how beautiful the shots were. Absolutely world-class work.", initials: "TR" },
  { name: "Sandaruwan Perera", role: "Brand Manager, FMCG", rating: 5, text: "We hired them for our product launch campaign. The commercial shots were crisp, on-brand, and delivered exactly on time. We've since booked them for three more campaigns.", initials: "SP" },
  { name: "Aishani Fernando", role: "Family Portrait Client", rating: 5, text: "We had our family portrait session at Galle Face and the photos turned out magical. The team made our kids laugh and feel comfortable — you can see it in every photo.", initials: "AF" },
];

export function TrustedSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F3F3F4" }} id="reviews">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: "#E5A96A" }} />
            <span style={{ color: "#E5A96A" }} className="text-xs tracking-widest uppercase font-medium">Client Stories</span>
            <div className="h-px w-8" style={{ backgroundColor: "#E5A96A" }} />
          </div>
          <h2 style={{ color: "#1A1A1A" }} className="mb-3">What Our Clients Say</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">Real words from the people we&apos;ve had the honour of working with.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="bg-white rounded-sm p-6 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} size={14} fill={s <= t.rating ? "#E5A96A" : "none"} style={{ color: "#E5A96A" }} />)}</div>
                <Quote size={20} style={{ color: "rgba(229,169,106,0.25)" }} />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#1A1A1A" }}>{t.initials}</div>
                <div>
                  <div style={{ color: "#1A1A1A" }} className="text-sm font-semibold">{t.name}</div>
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
