import React, { useEffect, useRef } from 'react';

export const ScrollReveal = ({ children, className = '' }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-reveal');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const element = elementRef.current;
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div 
            ref={elementRef} 
            className={`opacity-0 transition-all duration-1000 ease-out ${className}`}
            style={{ transform: 'translateY(20px)' }}
        >
            {children}
        </div>
    );
};
