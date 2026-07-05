"use client";
import { Phone } from "lucide-react";
import { useState } from "react";

const PHONE = "+94701112233";
const SMS_MSG = "Hi, I would like to book a photography session with Lens & Light Studios.";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#stats" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book", href: "#book" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header style={{ backgroundColor: "#1A1A1A" }} className="w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 flex items-center justify-center">
              <img src="./documents/loadingscreen/lensandlightlogoonly.svg" alt="Lens And Light" /> 
            </div>

            <div className="leading-tight">
              <div className="text-white font-semibold text-sm tracking-wide">Lens & Light</div>
              <div style={{ color: "#E5A96A" }} className="text-xs tracking-widest uppercase opacity-80">Studios</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">{link.label}</a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2.5">
              <Phone size={14} style={{ color: "#E5A96A" }} />
              <span className="text-sm text-gray-300">070 111 2233</span>
            </a>
            <a href={`sms:${PHONE}?body=${encodeURIComponent(SMS_MSG)}`}>
              <button style={{ backgroundColor: "#E5A96A" }} className="text-white text-sm px-4 py-2 rounded hover:opacity-90 transition-opacity font-medium">
                Book Session
              </button>
            </a>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <a href={`sms:${PHONE}?body=${encodeURIComponent(SMS_MSG)}`}>
              <button style={{ backgroundColor: "#E5A96A" }} className="text-white text-sm px-3 py-1.5 rounded font-medium">Book</button>
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300 hover:text-white p-1">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-4 border-t mt-1 pt-3 flex flex-col gap-2" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            {navLinks.map(link => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="text-gray-300 text-sm py-1.5 px-2 hover:text-white transition-colors">{link.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
