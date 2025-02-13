import React from 'react';

const FourthSection = () => {
    return (
        <section className="relative font-garamond">
            <div className="absolute inset-0 bg-[#EEECE3]" />
            <div className="relative py-8 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-36 items-start">
                        {/* Left side - Content */}
                        <div className="max-w-xl">
                            <p className="text-[26px] text-black mb-8">
                            Our asset-based approach allows us to offer greater flexiblity and liquidity without giving up any upside                              
                            </p>

                            <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 shadow-lg">
                                <ul className="space-y-6">
                                    <li className="text-black">
                                        <span className="text-[22px] font-semibold block mb-2">Flexible</span>
                                        <p className="text-[20px]">LPA-friendly, covenant-light agreements</p>
                                    </li>
                                    <li className="text-black">
                                        <span className="text-[22px] font-semibold block mb-2">Non-dilutive</span>
                                        <p className="text-[20px]">Ownership stays with GPs, maintianing upside and alignment</p>
                                    </li>
                                    <li className="text-black">
                                        <span className="text-[22px] font-semibold block mb-2">No personal guaranty</span>
                                        <p className="text-[20px]">Focus is solely on the economics of the assets</p>
                                    </li>
                                    <li className="text-black">
                                        <span className="text-[22px] font-semibold block mb-2">Flexible repayment</span>
                                        <p className="text-[20px]">No amortization and option to accrue interest until the next distribution</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right side - Title */}
                        <div>
                            <h2 className="text-[56px] font-medium text-black max-w-[480px] leading-tight">
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