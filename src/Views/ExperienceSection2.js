import React from 'react';

/**
 * Renders the Experience Section of the webpage.
 * 
 * This section is designed with a dark green background and 
 * contains information tailored for the lower-mid-market audience.
 * It features a two-column layout with a prominent heading and 
 * descriptive paragraph explaining the benefits of asset-based loans 
 * with PIK interest, longer terms, and no personal guarantees. 
 * The section is styled with bold typography and a font size 
 * adjustment for responsive design.
 */
const ExperienceSection2 = () => {
    return (
        <section className="w-full bg-[#013220] text-white font-bold text-[60px] py-20 relative font-garamond" style={{fontSize: '54px'}}>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Left Column */}
                    <div className="flex items-center scroll-hidden" data-delay="1">
                        <h2 className="text-5xl font-light leading-tight">
                            Purpose-built for 
                            <br />the private markets.
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div className="flex items-center scroll-hidden" data-delay="2">
                        <p className="text-[22px] font-light leading-relaxed">
                            Loans with PIK interest, longer terms and no personal guarantees. Constructed to give managers liquidity while preserving upside and alingment.    
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection2;
