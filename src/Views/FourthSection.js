import React from 'react';

const FourthSection = () => {
    return (
        <section className="relative font-garamond">
            <div className="absolute inset-0 bg-[#EEECE3]" />
            <div className="relative z-10 py-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Left side - Content */}
                        <div className="max-w-xl">
                            <p className="text-xl text-black mb-8">
                            Our asset-backed structure enables us to address gaps left by traditional lenders, allowing us to offer tailored terms unbound by standard fund mandates and regulatory limitations.                                
                            </p>

                            <div className="bg-white/8 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]">
                                <ul className="space-y-6">
                                    <li className="text-black">
                                        <span className="font-semibold block mb-2">Flexible</span>
                                        LPA-friendly, covenant-light agreements 
                                    </li>
                                    <li className="text-black">
                                        <span className="font-semibold block mb-2">Non-dilutive</span>
                                        Ownership stays with GPs, maintianing upside and alignment 
                                    </li>
                                    <li className="text-black">
                                        <span className="font-semibold block mb-2">No personal guaranty</span>
                                        Focus is solely on the economics of the assets
                                    </li>
                                    <li className="text-black">
                                        <span className="font-semibold block mb-2">PIK interest</span>
                                        Option to accrue interest and maximize liquidity until the next distribution
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right side - Title */}
                        <div>
                            <h2 className="text-4xl font-medium text-black max-w-sm md:pl-4">
                                A new value proposition for GPs
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FourthSection;