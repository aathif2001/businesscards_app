import { Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#stats" },
  { label: "Consult", href: "#consult", highlight: true },
  { label: "FAQ", href: "#faq" },
  { label: "Payment", href: "#billing" },
];

export function Header() {
  return (
    <header style={{ backgroundColor: "#2C3531" }} className="w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-18 h-18 flex items-center justify-center">
              <img src="./documents/loadingscreen/studiointeriorslogoonly.svg" alt="Studio Interiors" /> 
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold text-sm tracking-wide">Studio</div>
              <div style={{ color: "#C5A880" }} className="text-xs tracking-widest uppercase">Interiors</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+94771234567" className="flex items-center gap-2.5 text-gray-300 text-sm">
              <Phone size={14} style={{ color: "#C5A880" }} />
              <span>+94 77 123 4567</span>
            </a>
            <a href="sms:+94771234567?body=Hi,%20I%20would%20like%20to%20book%20a%20consultation.">
              <button
                style={{ backgroundColor: "#C5A880" }}
                className="text-white text-sm px-4 py-2 rounded hover:opacity-90 transition-opacity font-medium"
              >
                Book Now
              </button>
            </a>
          </div>

          {/* Mobile: Book button only */}
          <div className="flex md:hidden items-center">
            <a href="sms:+94771234567?body=Hi,%20I%20would%20like%20to%20book%20a%20consultation.">
              <button
                style={{ backgroundColor: "#C5A880" }}
                className="text-white text-sm px-3 py-1.5 rounded hover:opacity-90 transition-opacity font-medium"
              >
                Book Now
              </button>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
