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
      
      {/* Center — brand mark */}
             <div className="absolute inset-0 flex items-center justify-center">
                <img src="./documents/loadingscreen/lensandlight.svg" alt="Lens And light" style={{ width: 125}} />    
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
