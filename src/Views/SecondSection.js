import React from 'react';

const SecondSection = () => {
    return (
        <section id="eligibility-section" className="w-full bg-[#EEECE3] relative">
            {/* Content */}
            <div className="relative py-8 px-4 md:px-8 font-garamond">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium text-black text-center mb-4 mx-auto leading-tight">
                        We work with individual partners, entire partnerships, and anyone with illiquid assets
                    </h2>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] text-black text-center mb-16 leading-snug">
                        {/* Optional subtitle or description */}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
                        {/* Emerging Fund Managers Card */}
                        <div className="bg-white/10 rounded-xl px-8 py-10 hover:bg-white/20 transition-all duration-300 shadow-lg flex flex-col min-h-[320px] w-full md:min-w-[360px]">
                            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium text-black mb-4 leading-tight">
                                Emerging Fund GPs
                            </h3>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-black leading-snug flex-grow">
                                Meet or increase GP commitments starting at Fund I. We can work with individual members of the GP without impacting others.
                            </p>
                            <button 
                                onClick={() => window.location.href = 'mailto:info@henrycap.com?subject=Henry%20Capital%20Inquiry'}
                                className="text-[16px] sm:text-[18px] md:text-[20px] mt-6 inline-flex items-center text-black hover:opacity-75 transition-opacity"
                            >
                                Apply now
                            </button>
                        </div>

                        {/* Independent Sponsors Card */}
                        <div className="bg-white/10 rounded-xl px-8 py-10 hover:bg-white/20 transition-all duration-300 shadow-lg flex flex-col min-h-[320px] w-full md:min-w-[360px]">
                            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium text-black mb-4 leading-tight">
                                Independent Sponsors
                            </h3>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-black leading-snug flex-grow">
                                Independent sponsors choose us to lever past investments and complete new deals or maximize working capital.
                            </p>
                            <button 
                                onClick={() => window.location.href = 'mailto:info@henrycap.com?subject=Henry%20Capital%20Inquiry'}
                                className="text-[16px] sm:text-[18px] md:text-[20px] mt-6 inline-flex items-center text-black hover:opacity-75 transition-opacity"
                            >
                                Apply now
                            </button>
                        </div>

                        {/* Limited Partners & HNWIs Card */}
                        <div className="bg-white/10 rounded-xl px-8 py-10 hover:bg-white/20 transition-all duration-300 shadow-lg flex flex-col min-h-[320px] w-full md:min-w-[390px]">
                            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium text-black mb-4 leading-tight whitespace-nowrap">
                                Limited Partners & HNWIs
                            </h3>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-black leading-snug flex-grow">
                                We can help avoid the costs of refinancing existing debt, selling assets at a discount, and more.
                            </p>
                            <button 
                                onClick={() => window.location.href = 'mailto:info@henrycap.com?subject=Henry%20Capital%20Inquiry'}
                                className="text-[16px] sm:text-[18px] md:text-[20px] mt-6 inline-flex items-center text-black hover:opacity-75 transition-opacity"
                            >
                                Apply now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
