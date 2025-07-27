import { useState, useEffect } from 'react';

interface UseIsMobileOptions {
    breakpoint?: number;
}

interface UseIsMobileReturn {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

export const useIsMobile = ({ breakpoint = 768 }: UseIsMobileOptions = {}): UseIsMobileReturn => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isTablet, setIsTablet] = useState<boolean>(false);
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            const mobile = width < breakpoint;
            const tablet = width >= breakpoint && width < 1024;
            const desktop = width >= 1024;

            setIsMobile(mobile);
            setIsTablet(tablet);
            setIsDesktop(desktop);
        };

        // Check on mount
        checkScreenSize();

        // Add event listener for resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [breakpoint]);

    return {
        isMobile,
        isTablet,
        isDesktop,
    };
}; 