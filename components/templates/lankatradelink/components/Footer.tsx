import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  const footerItems = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#products" },
    { label: "Trust", href: "#stats" },
    { label: "Order", href: "#quote" },
    { label: "FAQ", href: "#faq" },
    { label: "Payment", href: "#billing" },
  ];

  const products = [
    "Bulk Baking Ingredients",
    "Packaging & Containers",
    "Spices & Dry Rations",
    "Confectionery Supplies",
    "Beverage Syrups & Powders",
    "Island-wide Distribution",
  ];

  return (
    <footer style={{ backgroundColor: "#26140A" }} className="text-gray-300">
      {/* Honey Gold CTA banner */}
      <div style={{ backgroundColor: "#D4A359" }} className="py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-base">Ready to stock your shelves?</p>
            <p className="text-white/80 text-sm">Place a wholesale order and get next-day island-wide delivery.</p>
          </div>
          <a href="#quote">
            <button style={{ backgroundColor: "#26140A" }} className="text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium whitespace-nowrap">
              Place a Bulk Order
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
              className="w-12 h-12 flex items-center justify-center">
              <img src="./documents/loadingscreen/LankaTradeLinklogoonly.svg" alt="Studio Interiors" /> 
            </div>
              <div className="leading-tight">
                <div className="text-white font-semibold text-sm">Lanka Trade Link</div>
                <div style={{ color: "#D4A359" }} className="text-xs tracking-widest uppercase opacity-80">Wholesale Importers</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Sri Lanka&apos;s trusted wholesale supplier for retail shops and bakeries — operating from Pettah since 2004.
            </p>
            <div className="flex gap-3">
              {[FaFacebook, FaLinkedin, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
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
                  <a href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5">
                    <span style={{ color: "#D4A359" }}>›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p}>
                  <a href="#products" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5">
                    <span style={{ color: "#D4A359" }}>›</span> {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="https://maps.google.com" className="flex items-start gap-2.5">
                <MapPin size={14} style={{ color: "#D4A359" }} className="mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">150, 4th Cross Street, Pettah, Colombo 11</span>
              </a>
              <a href="tel:+94114567890" className="flex items-center gap-2.5">
                <Phone size={14} style={{ color: "#D4A359" }} />
                <span className="text-gray-400 text-sm">011 4 567 890</span>
              </a>
              <a href="mailto:sales@lankatradelink.lk" className="flex items-center gap-2.5">
                <Mail size={14} style={{ color: "#D4A359" }} />
                <span className="text-gray-400 text-sm">sales@lankatradelink.lk</span>
              </a>
            </div>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-gray-500 text-xs">Business Hours</p>
              <p className="text-gray-300 text-sm mt-1">Mon – Fri: 7:30am – 5:30pm</p>
              <p className="text-gray-300 text-sm">Saturday: 7:30am – 1:00pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-5 px-4" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">© 2026 Lanka Trade Link (Pvt) Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
