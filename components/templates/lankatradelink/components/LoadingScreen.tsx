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
            style={{ backgroundColor: "#FFFDF9" }}
        >
            {/* Center logo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "#3D2314" }}
                >
                    <span style={{ color: "#D4A359" }} className="font-bold text-2xl">LTL</span>
                </div>
                <div className="text-center">
                    <div style={{ color: "#3D2314" }} className="font-semibold text-lg">Lanka Trade Link</div>
                    <div style={{ color: "#D4A359" }} className="text-xs tracking-widest uppercase">Wholesale Importers</div>
                </div>
            </div>

            {/* Bottom-right: Powered By */}
            <div className="absolute bottom-6 right-6">
                <img src="./poweredby.png" alt="Powered by" style={{ height: 50 }} />
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ backgroundColor: "#F7F3EB" }}>
                <div className="h-full" style={{
                    backgroundColor: "#D4A359",
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
