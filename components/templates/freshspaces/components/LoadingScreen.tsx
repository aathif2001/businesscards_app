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
            className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}
            style={{ backgroundColor: "#ffffff" }}
        >
            {/* Center logo / brand mark */}
            <div className="absolute inset-0 flex items-center justify-center">
                <img src="./documents/loadingscreen/freshspaces.svg" alt="Colombo Building Supplies" style={{ width: 125 }} />
            </div>

            {/* Bottom-right: Powered By */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 opacity-100">
                <img src="./poweredby.png" alt="Powered by" style={{ height: 50 }} />
            </div>

            {/* Bottom: Progress bar */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-100">
                <div className="h-full" style={{
                    background: "linear-gradient(to right, #C5A880, #C5A880)",
                    animation: "ls-progress 2s ease-out forwards",
                }} />
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
