import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  const footerItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Stats", href: "#stats" },
    { label: "Quote", href: "#quote" },
    { label: "FAQ", href: "#faq" },
    { label: "Payment", href: "#billing" },
  ];

  const services = [
    "Daily Office Cleaning",
    "Deep Cleaning & Sanitization",
    "Carpet & Upholstery Care",
    "High-Rise Window Washing",
    "Post-Construction Cleanup",
    "Washroom Hygiene Services",
  ];

  return (
    <footer style={{ backgroundColor: "#1A201E" }} className="text-gray-300">

      {/* CTA banner */}
      <div style={{ background: "linear-gradient(135deg, #C5A880, #C5A880)" }} className="py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-base">Ready for a spotless workplace?</p>
            <p className="text-white/80 text-sm">Get a free quote and we&apos;ll be in touch within 24 hours.</p>
          </div>
          <a href="#quote">
            <button
              style={{ backgroundColor: "#1A201E" }}
              className="text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium whitespace-nowrap"
            >
              Get a Free Quote
            </button>
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #C5A880, #C5A880)" }}
              >
                <span className="text-white font-bold text-xs">FS</span>
              </div>
              <div className="leading-tight">
                <div className="text-white font-semibold text-sm">FreshSpaces</div>
                <div style={{ color: "#C5A880" }} className="text-xs tracking-widest uppercase">Sri Lanka</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Sri Lanka&apos;s trusted commercial cleaning and facility management partner for medium-to-large businesses.
            </p>
            <div className="flex gap-3">
              {[FaFacebook, FaLinkedin, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerItems.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span style={{ color: "#C5A880" }}>›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span style={{ color: "#C5A880" }}>›</span> {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <a href="https://maps.google.com" className="flex items-start gap-2.5">
                  <MapPin size={14} style={{ color: "#C5A880" }} className="mt-0.5 shrink-0" />
                  <span className="text-gray-400 text-sm">
                    12/A, High Level Road, Nugegoda
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <a href="tel:+94771234567" className="flex items-center gap-2.5">
                  <Phone size={14} style={{ color: "#C5A880" }} />
                  <span className="text-gray-400 text-sm">077 123 4567</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <a href="mailto:clean@freshspaces.lk" className="flex items-center gap-2.5">
                  <Mail size={14} style={{ color: "#C5A880" }} />
                  <span className="text-gray-400 text-sm">clean@freshspaces.lk</span>
                </a>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-gray-500 text-xs">Support Hours</p>
              <p className="text-gray-300 text-sm mt-1">24/7 Support Team Available</p>
              <p className="text-gray-300 text-sm">Call or WhatsApp Anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-5 px-4" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            © 2026 FreshSpaces Sri Lanka. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
