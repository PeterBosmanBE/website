'use client';
import { useEffect, useState } from 'react';
import '@/src/styles/rotationguard.css';

export default function RotationGuard({ children }: { children: React.ReactNode }) {
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        const check = () => setIsLandscape(
            window.innerWidth > window.innerHeight
        );
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    if (!isLandscape) return <>{children}</>;

    return (
        <>
            <div className="rotate-root">
                <div className="corner tl" /><div className="corner tr" />
                <div className="corner bl" /><div className="corner br" />
                <div className="rotate-icon" />
                <div className="rotate-text">
                    <span className="rotate-title">Rotate device</span>
                    <span className="rotate-sub">Portrait mode required</span>
                </div>
            </div>
        </>
    );
}