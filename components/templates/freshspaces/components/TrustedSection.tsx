import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chaminda Wickramasinghe",
    role: "Facilities Manager, Hemas Holdings",
    rating: 5,
    text: "FreshSpaces has transformed how we manage our office environment. The daily cleaning team is punctual, professional, and incredibly thorough. Our employees have noticed the difference immediately.",
    initials: "CW",
  },
  {
    name: "Dilrukshi Fernando",
    role: "Operations Director, Softlogic IT",
    rating: 5,
    text: "We engaged FreshSpaces for a full post-renovation cleanup and deep sanitization. The results were exceptional — the team finished ahead of schedule with zero mess left behind. Highly recommend.",
    initials: "DF",
  },
  {
    name: "Rajan Subramaniam",
    role: "Property Manager, Commercial Tower, Colombo",
    rating: 5,
    text: "The high-rise window washing service is second to none. Their team is safety-certified, efficient, and the building looks pristine after every session. We've renewed our contract for a third year.",
    initials: "RS",
  },
];

export function TrustedSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#EFF1EE" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: "#C5A880" }} />
            <span style={{ color: "#C5A880" }} className="text-xs tracking-widest uppercase font-medium">
              Client Stories
            </span>
            <div className="h-px w-8" style={{ backgroundColor: "#C5A880" }} />
          </div>
          <h2 style={{ color: "#2C3531" }} className="mb-3">Trusted By Leading Businesses</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Hear what our clients say about partnering with FreshSpaces for their facility management needs.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      fill={s <= t.rating ? "#C5A880" : "none"}
                      style={{ color: "#C5A880" }}
                    />
                  ))}
                </div>
                <Quote size={20} style={{ color: "rgba(197,168,128,0.25)" }} />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                  style={{ background: "linear-gradient(135deg, #C5A880, #C5A880)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ color: "#2C3531" }} className="text-sm font-semibold">{t.name}</div>
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
