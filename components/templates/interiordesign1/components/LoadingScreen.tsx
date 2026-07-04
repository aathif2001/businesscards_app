'use client';
import { useState, useEffect } from "react";

interface LoadingScreenProps {
    carouselReady: boolean;
}

export function LoadingScreen({ carouselReady }: LoadingScreenProps) {
    const [minTimerDone, setMinTimerDone] = useState(false);
    const [visible, setVisible] = useState(true);

    const fading = minTimerDone && carouselReady;

    useEffect(() => {
        const timer = window.setTimeout(() => setMinTimerDone(true), 2000);
        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        let fadeTimer: number | undefined;
        if (fading) {
            fadeTimer = window.setTimeout(() => setVisible(false), 600);
        }
        return () => {
            if (fadeTimer) window.clearTimeout(fadeTimer);
        };
    }, [fading]);

    if (!visible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-600 ${fading ? 'opacity-0' : 'opacity-100'}`}
            style={{ backgroundColor: "#FAF8F5" }}
        >
            {/* Center — brand mark */}
             <div className="absolute inset-0 flex items-center justify-center">
                <img src="./documents/loadingscreen/studiointeriors.svg" alt="Colombo Building Supplies" style={{ width: 125}} />    
            </div>  


            {/* Powered by */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 opacity-70">
                <img src="./poweredby.png" alt="Powered by" style={{ height: 50 }} />
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ backgroundColor: "#F0EDE8" }}>
                <div
                    className="h-full"
                    style={{
                        background: "linear-gradient(to right, #B8935A, #2C2416)",
                        animation: "ls-progress 2s ease-out forwards",
                    }}
                />
            </div>
            <style>{`
            @keyframes ls-progress {
            0%   { width: 0% }
            60%  { width: 75% }
            100% { width: 100% }
            }`}</style>
        </div>
    );
}
