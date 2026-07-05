import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export function Footer() {
  const footerLinks = [
    { label: "Home", href: "#" }, { label: "Services", href: "#services" },
    { label: "About", href: "#stats" }, { label: "Reviews", href: "#reviews" },
    { label: "Book", href: "#book" }, { label: "FAQ", href: "#faq" },
  ];
  const services = ["Wedding & Engagement Shoots", "Natural Family Portraits", "Commercial & Product Photography", "Corporate Event Coverage", "Cinematic Drone Videography", "Premium Photo Albums"];

  return (
    <footer style={{ backgroundColor: "#0D0D0D" }} className="text-gray-400">
      {/* Golden Hour CTA banner */}
      <div style={{ backgroundColor: "#E5A96A" }} className="py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-base">Ready to capture your story?</p>
            <p className="text-white/80 text-sm">Book your session today — we respond within 24 hours with availability and packages.</p>
          </div>
          <a href="#book">
            <button style={{ backgroundColor: "#0D0D0D" }} className="text-white px-6 py-2.5 rounded-sm hover:opacity-90 transition-opacity text-sm font-medium whitespace-nowrap">
              Book a Session
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
              className="w-10 h-10 flex items-center justify-center">
              <img src="./documents/loadingscreen/lensandlightlogoonly.svg" alt="Lens And Light" /> 
            </div>
              <div className="leading-tight">
                <div className="text-white font-semibold text-sm">Lens & Light Studios</div>
                <div style={{ color: "#E5A96A" }} className="text-xs tracking-widest uppercase opacity-80">Moratuwa</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">Award-winning photography studio based in Moratuwa — capturing weddings, families, brands, and everything in between since 2012.</p>
            <div className="flex gap-3">
              {[FaFacebook, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                  <Icon size={15} className="text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 text-sm hover:text-white transition-colors flex items-center gap-1.5">
                    <span style={{ color: "#E5A96A" }}>›</span> {link.label}
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
                  <a href="#services" className="text-gray-500 text-sm hover:text-white transition-colors flex items-center gap-1.5">
                    <span style={{ color: "#E5A96A" }}>›</span> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="https://maps.google.com" className="flex items-start gap-2.5">
                <MapPin size={14} style={{ color: "#E5A96A" }} className="mt-0.5 shrink-0" />
                <span className="text-gray-500 text-sm">12, Rawathawatta, Moratuwa</span>
              </a>
              <a href="tel:+94701112233" className="flex items-center gap-2.5">
                <Phone size={14} style={{ color: "#E5A96A" }} />
                <span className="text-gray-500 text-sm">070 111 2233</span>
              </a>
              <a href="mailto:shoot@lensandlight.lk" className="flex items-center gap-2.5">
                <Mail size={14} style={{ color: "#E5A96A" }} />
                <span className="text-gray-500 text-sm">shoot@lensandlight.lk</span>
              </a>
            </div>
            <div className="mt-5 pt-5 border-t border-white/5">
              <p className="text-gray-600 text-xs">Studio Hours</p>
              <p className="text-gray-400 text-sm mt-1">Mon – Sat: 9:00am – 6:00pm</p>
              <p className="text-gray-400 text-sm">Shoots: By Appointment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t py-5 px-4" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs">© 2026 Lens & Light Studios. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map(item => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
