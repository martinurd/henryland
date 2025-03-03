import React from 'react';

const SimpleAboutSection = () => {
    return (
        <section id="about-section" className="pt-16 pb-16 px-4 md:px-8 bg-[#2F4C44]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-[34px] font-bold text-white mt-0 mb-3 text-center">
                    About Us
                </h2>
                
                <div className="bg-white/10 rounded-lg p-6 mb-16 max-w-4xl mx-auto shadow-lg">
                    <p className="text-lg leading-relaxed mb-8 text-white">
                        Henry Capital is a pure play liquidity provider for PE professionals and investors. Our goal is to be a strategic partner with our clients by reducing the liquidity mismatch that managers and investors experience as they grow their firms and portfolios.
                    </p>
                    <p className="text-[18px] text-white/90 leading-relaxed">
                        Having experienced this illiquidity ourselves, we understand the pain points and can find creative ways to help you achieve your goals.
                    </p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center gap-16 mb-8">
                    <div className="bg-white/10 p-6 rounded-lg">
                        <h3 className="text-[20px] font-semibold text-white mb-2">
                            Austin Brady
                        </h3>
                        <a 
                            href="mailto:austin@henrycap.com"
                            className="text-[16px] text-white hover:text-gray-300"
                        >
                            austin@henrycap.com
                        </a>
                    </div>
                    
                    <div className="bg-white/10 p-6 rounded-lg">
                        <h3 className="text-[20px] font-semibold text-white mb-2">
                            Martin Urdapilleta
                        </h3>
                        <a 
                            href="mailto:martin@henrycap.com"
                            className="text-[16px] text-white hover:text-gray-300"
                        >
                            martin@henrycap.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimpleAboutSection;