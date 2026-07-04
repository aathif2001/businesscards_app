"use client";
import { Home, Camera, CalendarCheck, HelpCircle, CreditCard } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Camera, label: "Services", href: "#services" },
  { icon: CalendarCheck, label: "Book", href: "#book", highlight: true },
  { icon: HelpCircle, label: "FAQ", href: "#faq" },
  { icon: CreditCard, label: "Payment", href: "#billing" },
];

export function FloatingNav() {
  const [active, setActive] = useState(0);
  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center px-4 md:hidden">
      <div className="flex items-center gap-1 px-3 py-2 rounded-sm shadow-2xl"
        style={{ backgroundColor: "#1A1A1A", boxShadow: "0 8px 32px rgba(13,13,13,0.8), 0 2px 8px rgba(0,0,0,0.3)" }}>
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = active === i;
          if (item.highlight) return (
            <a key={item.label} href={item.href} onClick={() => setActive(i)} className="flex flex-col items-center justify-center mx-1">
              <div className="w-12 h-12 rounded-sm flex items-center justify-center shadow-lg" style={{ backgroundColor: "#E5A96A" }}>
                <Icon size={20} className="text-white" />
              </div>
            </a>
          );
          return (
            <a key={item.label} href={item.href} onClick={() => setActive(i)}
              className="flex flex-col items-center justify-center px-3 py-1.5 rounded-sm transition-all"
              style={{ backgroundColor: isActive ? "rgba(229,169,106,0.12)" : "transparent", minWidth: 52 }}>
              <Icon size={18} style={{ color: isActive ? "#E5A96A" : "rgba(255,255,255,0.4)" }} />
              <span className="text-[10px] mt-0.5 leading-none" style={{ color: isActive ? "#E5A96A" : "rgba(255,255,255,0.35)" }}>{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
