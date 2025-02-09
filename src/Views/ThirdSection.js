import React from 'react';

const ThirdSection = () => {
    return (
        <section className="relative font-garamond">
            <div className="absolute inset-0 bg-[#EEECE3]" />
            <div className="relative py-8 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Left side - Title */}
                        <div>
                            <h2 className="text-4xl font-medium text-black max-w-sm">
                                More flexible and efficient than other traditional lenders 
                            </h2>
                        </div>

                        {/* Right side - Content */}
                        <div className="max-w-xl pl-0 md:pl-4">
                            <p className="text-xl text-black mb-8">
                                The asset-based approach is focused on just the assets, without restrictive covenants on the borrowers or changes of control. This simplifies our underwriting  and allows us to address a variety of use cases and needs.
                            </p>

                            <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 shadow-lg">
                                <ul className="space-y-6">
                                    <li className="text-black">
                                        <span className="font-semibold block mb-2">Check size</span>
                                        Sweet spot in $500k - $3m+, with room to get up to $10-$15m 
                                    </li>
                                    <li className="text-black">
                                        <span className="font-semibold block mb-2">Use case</span>
                                        No restrictions. Common uses include capital calls, new deals & funds, or managing personal liquidity
                                    </li>
                                    <li className="text-black">
                                        <span className="font-semibold block mb-2">Asset class</span>
                                        PE (Buyout, Growth), RE (Core, Core+, Value-Add), Infrastructure and other niche assets 
                                    </li>
                                    <li className="text-black">
                                        <span className="font-semibold block mb-2">Collateral package</span>
                                        3 or more assets, ability to cross-collateralize among funds and asset classes 
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
