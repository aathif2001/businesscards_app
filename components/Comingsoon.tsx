'use client';

import { useEffect, useState } from 'react';

const LAUNCH_DATE = new Date('December 31, 2026 23:59:59').getTime();

interface TimeLeft {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

function getTimeLeft(): TimeLeft {
    const distance = LAUNCH_DATE - new Date().getTime();

    if (distance < 0) {
        return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    return {
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
        minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
        seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'),
    };
}

export default function Comingsoon() {
    // null on server → static placeholder rendered, avoids hydration mismatch
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        const compute = () => getTimeLeft();

        // Set initial value immediately on mount (client only)
        setTimeLeft(compute());

        const interval = setInterval(() => {
            const distance = LAUNCH_DATE - new Date().getTime();
            if (distance < 0) {
                clearInterval(interval);
                setIsLive(true);
            } else {
                setTimeLeft(compute());
            }
        }, 1000);

        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
            <div className="text-center p-8 max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">Coming Soon</h1>
                <p className="text-xl md:text-2xl mb-8">We&apos;re working hard to bring you something amazing!</p>

                {isLive ? (
                    <p className="text-4xl font-bold">We&apos;re Live!</p>
                ) : (
                    <div id="countdown" className="flex justify-center items-center space-x-4 text-4xl md:text-6xl font-mono">
                        <div className="text-center">
                            <span className="block">{timeLeft?.days ?? '00'}</span>
                            <span className="text-xl">Days</span>
                        </div>
                        <div className="text-center">
                            <span className="block">{timeLeft?.hours ?? '00'}</span>
                            <span className="text-xl">Hours</span>
                        </div>
                        <div className="text-center">
                            <span className="block">{timeLeft?.minutes ?? '00'}</span>
                            <span className="text-xl">Minutes</span>
                        </div>
                        <div className="text-center">
                            <span className="block">{timeLeft?.seconds ?? '00'}</span>
                            <span className="text-xl">Seconds</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}