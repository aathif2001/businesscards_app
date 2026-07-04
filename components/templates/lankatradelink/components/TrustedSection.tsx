import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Suresh Perera",
    role: "Owner, Perera's Bakery, Moratuwa",
    rating: 5,
    text: "Lanka Trade Link has been supplying our bakery for 12 years. Their baking ingredients are consistent quality and the next-day delivery means we never run out of stock. Highly trusted.",
    initials: "SP",
  },
  {
    name: "Fathima Rizwan",
    role: "Proprietor, Rizwan Grocery, Wellawatte",
    rating: 5,
    text: "We source all our dry rations and spices from Lanka Trade Link. The pricing is the best in Pettah and their delivery team is always on time. Our shop has never looked better stocked.",
    initials: "FR",
  },
  {
    name: "Kannan Selvam",
    role: "Manager, Star Confectionery, Jaffna",
    rating: 5,
    text: "Even being in Jaffna, we get next-day delivery without any issues. The confectionery supplies are excellent — chocolate compounds and decorations arrive fresh and well-packed every time.",
    initials: "KS",
  },
];

export function TrustedSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F7F3EB" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: "#D4A359" }} />
            <span style={{ color: "#D4A359" }} className="text-xs tracking-widest uppercase font-medium">
              Partner Stories
            </span>
            <div className="h-px w-8" style={{ backgroundColor: "#D4A359" }} />
          </div>
          <h2 style={{ color: "#3D2314" }} className="mb-3">Trusted By 5,000+ Businesses</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            From corner bakeries to established grocery chains — our partners keep coming back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill={s <= t.rating ? "#D4A359" : "none"} style={{ color: "#D4A359" }} />
                  ))}
                </div>
                <Quote size={20} style={{ color: "rgba(212,163,89,0.3)" }} />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                  style={{ backgroundColor: "#3D2314" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ color: "#3D2314" }} className="text-sm font-semibold">{t.name}</div>
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
