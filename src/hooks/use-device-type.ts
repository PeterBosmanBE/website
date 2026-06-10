'use client';
import { useEffect, useState } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

export default function useDeviceType(): DeviceType | null {
    const [type, setType] = useState<DeviceType | null>(null);

    useEffect(() => {
        const detect = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;

            // Use the smaller dimension so rotation doesn't change device class
            const short = Math.min(w, h);
            const long  = Math.max(w, h);

            if (short <= 480 || long <= 768) return setType('mobile');
            if (short <= 768 || long <= 1024) return setType('tablet');
            return setType('desktop');
        };

        detect();
        window.addEventListener('resize', detect);
        return () => window.removeEventListener('resize', detect);
    }, []);

    return type;
}