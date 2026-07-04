// Lanka Trade Link — Color Palette
// Primary Dark:    Dark Chocolate  #4A3728
// Primary Accent:  Warm Croissant  #D4A373
// Secondary Acc:   Olive Leaf      #CCD5AE
// Light BG:        Creamy Vanilla  #FAEDCD
// Body:            Pure White      #FFFFFF

import { Phone } from "lucide-react";

const PHONE = "0114567890";
const SMS_MSG = "Hi, I would like to enquire about wholesale supplies from Lanka Trade Link.";

export function Header() {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#products" },
    { label: "Trust", href: "#stats" },
    { label: "Order", href: "#quote", highlight: true },
    { label: "FAQ", href: "#faq" },
    { label: "Payment", href: "#billing" },
  ];

  return (
    <header style={{ backgroundColor: "#3d2314" }} className="w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
         <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 flex items-center justify-center">
              <img src="./documents/loadingscreen/LankaTradeLinklogoonly.svg" alt="Studio Interiors" /> 
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold text-sm tracking-wide">LANKA TRADE</div>
              <div style={{ color: "#C5A880" }} className="text-xs tracking-widest uppercase">LINK</div>
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
              <Phone size={14} style={{ color: "#D4A359" }} />
              <span className="text-sm text-gray-300">011 4 567 890</span>
            </a>
            <a href={`sms:${PHONE}?body=${encodeURIComponent(SMS_MSG)}`}>
              <button
                style={{ backgroundColor: "#d4a359" }}
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
                style={{ backgroundColor: "#D4A373" }}
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
