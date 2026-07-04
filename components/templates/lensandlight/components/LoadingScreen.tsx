'use client';
import { useState, useEffect } from "react";

interface LoadingScreenProps { carouselReady: boolean; }

export function LoadingScreen({ carouselReady }: LoadingScreenProps) {
  const [minTimerDone, setMinTimerDone] = useState(false);
  const [visible, setVisible] = useState(true);
  const fading = minTimerDone && carouselReady;

  useEffect(() => {
    const t = window.setTimeout(() => setMinTimerDone(true), 2000);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    let ft: number | undefined;
    if (fading) ft = window.setTimeout(() => setVisible(false), 600);
    return () => { if (ft) window.clearTimeout(ft); };
  }, [fading]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#1A1A1A" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#E5A96A" strokeWidth="2" className="w-7 h-7">
            <circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9" strokeOpacity="0.3"/>
            <path d="M9 2h6l1 3H8L9 2z"/><circle cx="4" cy="6" r="1" fill="#E5A96A" stroke="none"/>
          </svg>
        </div>
        <div className="text-center">
          <div style={{ color: "#1A1A1A" }} className="font-bold text-lg tracking-tight">Lens & Light Studios</div>
          <div style={{ color: "#E5A96A" }} className="text-xs tracking-widest uppercase mt-0.5">Moratuwa</div>
        </div>
      </div>
      <div className="absolute bottom-6 right-6">
        <img src="./poweredby.png" alt="Powered by" style={{ height: 50 }} />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ backgroundColor: "#F3F3F4" }}>
        <div className="h-full" style={{ backgroundColor: "#E5A96A", animation: "ls-progress 2s ease-out forwards" }} />
      </div>
      <style>{`@keyframes ls-progress { 0%{width:0%} 60%{width:75%} 100%{width:100%} }`}</style>
    </div>
  );
}
