import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export function Footer() {
  const footerLinks = [
    { label: "Home", href: "#" }, { label: "Services", href: "#services" },
    { label: "About", href: "#stats" }, { label: "Reviews", href: "#reviews" },
    { label: "Book", href: "#book" }, { label: "FAQ", href: "#faq" },
  ];
  const services = ["Precision Hair Cuts & Styling", "Bridal Dressing & Makeup", "Relaxing Facials & Skincare", "Manicures & Pedicures", "Painless Waxing Services", "Keratin & Color Treatments"];

  return (
    <footer style={{ backgroundColor: "#24131E" }} className="text-gray-300">
      {/* Rose Gold Champagne CTA banner */}
      <div style={{ backgroundColor: "#D9B48F" }} className="py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-base">Ready to glow?</p>
            <p className="text-white/80 text-sm">Book your appointment today and experience the Glow Beauty difference.</p>
          </div>
          <a href="#book">
            <button style={{ backgroundColor: "#24131E" }} className="text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium whitespace-nowrap">
              Book an Appointment
            </button>
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
              className="w-12 h-12 flex items-center justify-center">
              <img src="./documents/loadingscreen/glowbeautylogoonly1.svg" alt="Glow Beauty Lounge" /> 
            </div>
              <div className="leading-tight">
                <div className="text-white font-semibold text-sm">Glow Beauty Lounge</div>
                <div style={{ color: "#D9B48F" }} className="text-xs tracking-widest uppercase opacity-80">Negombo</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">Your premium beauty destination in Negombo — 10 years of expert styling, award-winning bridal packages, and top-tier skincare.</p>
            <div className="flex gap-3">
              {[FaFacebook, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5">
                    <span style={{ color: "#D9B48F" }}>›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s}>
                  <a href="#services" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5">
                    <span style={{ color: "#D9B48F" }}>›</span> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="https://maps.google.com" className="flex items-start gap-2.5">
                <MapPin size={14} style={{ color: "#D9B48F" }} className="mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">67, Lewis Place, Negombo</span>
              </a>
              <a href="tel:+94772223344" className="flex items-center gap-2.5">
                <Phone size={14} style={{ color: "#D9B48F" }} />
                <span className="text-gray-400 text-sm">077 222 3344</span>
              </a>
              <a href="mailto:bookings@glowbeauty.lk" className="flex items-center gap-2.5">
                <Mail size={14} style={{ color: "#D9B48F" }} />
                <span className="text-gray-400 text-sm">bookings@glowbeauty.lk</span>
              </a>
            </div>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-gray-500 text-xs">Salon Hours</p>
              <p className="text-gray-300 text-sm mt-1">Mon – Sat: 9:00am – 7:00pm</p>
              <p className="text-gray-300 text-sm">Sunday: 10:00am – 4:00pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t py-5 px-4" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">© 2026 Glow Beauty Lounge. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map(item => (
              <a key={item} href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
