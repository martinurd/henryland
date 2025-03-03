import React from 'react';

const ThirdSection = () => {
    return (
        <section className="relative font-garamond">
            <div className="absolute inset-0 bg-[#EEECE3]" />
            <div className="relative py-8 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Left side - Title */}
                        <div>
                            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium text-black max-w-[510px] leading-tight">
                                We leverage your assets to help accomplish your goals. No use case restrictions or unnecessary covenants 
                            </h2>
                        </div>

                        {/* Right side - Content */}
                        <div className="max-w-xl pl-0 md:pl-4">
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-black mb-8">
                                We waive restrictive covenants and streamline execution, regardless of check size, enabling us to address a wide range of use cases and needs.
                            </p>

                            <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 shadow-lg">
                                <ul className="space-y-6">
                                    <li className="text-black">
                                        <span className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold block mb-2">Check size</span>
                                        <p className="text-[14px] sm:text-[16px] md:text-[18px]">$250k - $15m</p>
                                    </li>
                                    <li className="text-black">
                                        <span className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold block mb-2">Use case</span>
                                        <p className="text-[14px] sm:text-[16px] md:text-[18px]">
                                            No restrictions. Common uses include capital calls, new deals & funds, or managing personal liquidity
                                        </p>
                                    </li>
                                    <li className="text-black">
                                        <span className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold block mb-2">Asset class</span>
                                        <p className="text-[14px] sm:text-[16px] md:text-[18px]">
                                            PE (Buyout, Growth), RE (Core, Core+, Value-Add), Infrastructure, secondaries & other nice assets
                                        </p>
                                    </li>
                                    <li className="text-black">
                                        <span className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold block mb-2">Collateral package</span>
                                        <p className="text-[14px] sm:text-[16px] md:text-[18px]">
                                            3 or more assets, ability to cross-collateralize among funds and assets
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;
