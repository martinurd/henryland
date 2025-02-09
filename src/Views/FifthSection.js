import React from 'react';

const FifthSection = () => {
    return (
        <section className="py-12 px-4 md:px-8 bg-[#EEECE3] font-garamond">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-black mb-12 text-center henry-font-bold">What makes Henry Capital different?</h2>
                <div className="bg-white/8 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] mb-12 max-w-4xl mx-auto">
                    <p className="text-black/90 text-center text-lg leading-relaxed">
                    Traditional lending options are often ill-suited for the lower and lower-middle-market-private investment managers. Due to idiosyncratic regulatory constraints and other structural factors, supply has contracted despite strong demand with eligible quality collateral. As an origination platform, Henry bridges this gap with institutional investors seeking exposure to niche, differentiated returns.  
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/8 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]">
                        <h3 className="text-2xl font-semibold text-black mb-4 henry-font">Emerging GPs</h3>
                        <ul className="space-y-4 text-black/90 list-disc pl-6 marker:text-blue-400">
                            <li className="pl-2">Cash drag embedded in life cycle of fund</li>
                            <li className="pl-2">Needs liquidity as base of assets to pledge grows</li>
                            <li className="pl-2">Requires flexibility in structuring</li>
                        </ul>
                    </div>

                    <div className="bg-white/8 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]">
                        <h3 className="text-2xl font-semibold text-black mb-4 henry-font">Henry Capital</h3>
                        <ul className="space-y-4 text-black/90 list-disc pl-6 marker:text-blue-400">
                            <li className="pl-2">Provides flexible credit solutions</li>
                            <li className="pl-2">Structures around GP's needs</li>
                            <li className="pl-2">Deep understanding of GP business model</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FifthSection;
