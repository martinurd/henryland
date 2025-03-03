import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        // Only run on client side
        if (typeof window === 'undefined') return;

        // Wait for hydration
        const timer = setTimeout(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                        }
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -10% 0px'
                }
            );

            observerRef.current = observer;

            // Use try-catch to handle potential DOM issues during SSR
            try {
                const elements = document.querySelectorAll('.scroll-hidden');
                elements.forEach((el) => observer.observe(el));

                return () => {
                    elements.forEach((el) => observer.unobserve(el));
                };
            } catch (error) {
                console.warn('ScrollAnimation: DOM not available', error);
            }
        }, 100); // Small delay to ensure hydration

        return () => {
            clearTimeout(timer);
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return observerRef;
};
