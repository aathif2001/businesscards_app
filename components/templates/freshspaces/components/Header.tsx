import { Phone } from "lucide-react";

const PHONE = "0771234567";
const SMS_MSG = "Hi, I would like to book a commercial cleaning service.";

export function Header() {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Stats", href: "#stats" },
    { label: "Quote", href: "#quote", highlight: true },
    { label: "FAQ", href: "#faq" },
    { label: "Payment", href: "#billing" },
  ];

  return (
    <header style={{ backgroundColor: "#1A201E" }} className="w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-15 h-15 flex items-center justify-center pt-3">
              <img src="./documents/loadingscreen/freshspaceslogoonly.svg" alt="Studio Interiors" /> 
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold text-sm tracking-wide">FreshSpaces</div>
              <div style={{ color: "#C5A880" }} className="text-xs tracking-widest uppercase">Sri Lanka</div>
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
            <a href={`tel:${PHONE}`} className="flex items-center gap-2.5">
              <Phone size={14} style={{ color: "#C5A880" }} />
              <span className="text-sm text-gray-300">077 123 4567</span>
            </a>
            <a href={`sms:${PHONE}?body=${encodeURIComponent(SMS_MSG)}`}>
              <button
                style={{ background: "#C5A880" }}
                className="text-white text-sm px-4 py-2 rounded hover:opacity-90 transition-opacity font-medium"
              >
                Message
              </button>
            </a>
          </div>

          {/* Mobile: Message button only */}
          <div className="flex md:hidden items-center">
            <a href={`sms:${PHONE}?body=${encodeURIComponent(SMS_MSG)}`}>
              <button
                style={{ background: "#C5A880" }}
                className="text-white text-sm px-3 py-1 rounded hover:opacity-90 transition-opacity font-medium"
              >
                Message
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
