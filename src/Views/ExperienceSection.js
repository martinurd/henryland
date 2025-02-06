import React from 'react';

/**
 * Renders the Experience Section of the webpage.
 * 
 * This section is designed with a green gradient background and 
 * contains information tailored for the lower-mid-market audience.
 * It features a two-column layout with a prominent heading and 
 * descriptive paragraph explaining the benefits of asset-based loans 
 * with PIK interest, longer terms, and no personal guarantees. 
 * The section is styled with bold typography and a font size 
 * adjustment for responsive design.
 */
const ExperienceSection = () => {
    return (
        <section className="w-full bg-[#4ECEB3] text-green-900 font-bold text-[60px] py-20 relative font-garamond" style={{fontSize: '54px'}}>
            <div 
                className="absolute bottom-0 left-0 right-0 h-64" 
                style={{ 
                    background: `linear-gradient(to bottom,
                        rgba(78, 206, 179, 1) 0%,
                        rgba(238, 236, 227, 0.2) 40%,
                        rgba(238, 236, 227, 0.4) 60%,
                        rgba(238, 236, 227, 0.6) 70%,
                        rgba(238, 236, 227, 0.8) 85%,
                        rgba(238, 236, 227, 1) 100%)`
                }}
            />
            
            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Left Column */}
                    <div className="flex items-center">
                        <h2 className="text-5xl font-light leading-tight opacity-0">
                            Purpose-built for 
                            <br />lower-mid-market.
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div className="flex items-center">
                        <p className="text-[22px] font-light leading-relaxed opacity-0">
                            NAV loans with PIK interest, longer terms and no personal guarantees. Constructed to give managers liquidity while preserving upside and alingment.    
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
