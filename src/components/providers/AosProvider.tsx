'use client';

import { useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';

export default function AosProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    useEffect(() => {
        // Refresh AOS animations and event listeners on route changes / hydration
        setTimeout(() => {
            AOS.refreshHard();
        }, 100);
    }, [pathname]);

    return <>{children}</>;
}
