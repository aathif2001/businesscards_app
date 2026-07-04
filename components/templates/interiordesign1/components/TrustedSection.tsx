import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dilini Jayawardena",
    role: "Homeowner, Colombo 3",
    rating: 5,
    text: "Studio Interiors completely transformed our apartment. The attention to detail was extraordinary — every piece of furniture, every colour choice felt intentional and personal. We couldn't be happier.",
    initials: "DJ",
  },
  {
    name: "Pradeep Senarath",
    role: "Villa Owner, Weligama",
    rating: 5,
    text: "We hired Studio Interiors for our coastal villa and they exceeded every expectation. They understood our love for natural materials and delivered a space that feels both luxurious and effortlessly relaxed.",
    initials: "PS",
  },
  {
    name: "Amara Silva",
    role: "Hotel GM, Galle Fort",
    rating: 5,
    text: "Our boutique hotel lobby redesign drew immediate praise from guests. The team managed the entire project — from concept to sourcing — with professionalism and creativity that truly set them apart.",
    initials: "AS",
  },
];

export function TrustedSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#FAFAf8" }}>
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
          <h2 style={{ color: "#2C3531" }} className="mb-3">What Our Clients Say</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Hear from the homeowners, developers, and hospitality brands who trusted us to design their spaces.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
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
                <Quote size={20} style={{ color: "#C5A88040" }} />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                  style={{ backgroundColor: "#2C3531" }}
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
