import React from 'react';
import { ScrollReveal } from '../Components/ScrollReveal';
import muPic1 from '../Assets/Images/credit.PNG';
import muPic2 from '../Assets/Images/leverage.PNG';

const AboutSection = () => {
    return (
        <section id="about-section" className="pt-16 pb-16 px-4 md:px-8 bg-[#013220]">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <h2 className="text-[40px] font-bold text-white mt-0 mb-3 text-center">
                        About Us
                    </h2>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="bg-white/10 rounded-lg p-6 mb-16 max-w-4xl mx-auto shadow-lg hover:bg-white/20 transition-all duration-300">
                        <p className="text-[20px] leading-relaxed mb-8">
                            <span className="henry-font">Henry Capital</span> is a pure play liquidity provider for PE professionals and investors. Our goal is to be a strategic partner with our clients by reducing the liquidity mismatch that managers and investors experience as they grow their firms and portfolios. Accordingly, we are backed by permanent capital to provide liquidity regardless of the fundraising market.
                        </p>
                        <p className="text-[20px] text-white/90 leading-relaxed">
                        Having experienced this illiquidity ourselves, we understand the pain points and can find creative ways to help you achieve your goals. The loans have the option to accrue the interest until there are underlying distributions. We draw from asset-backed lending and hybrid practices to best tailor our products.
                        </p>
                    </div>
                </ScrollReveal>
                
                <div className="flex flex-col items-center">
                    <div className="flex flex-col md:flex-row justify-center gap-16 mb-8">
                        {/* First founder */}
                        <ScrollReveal>
                            <div className="flex flex-col items-center">
                                <div className="w-[300px] h-[300px] overflow-hidden rounded-lg">
                                    <img 
                                        src={muPic1} 
                                        alt="Austin Brady" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="mt-4 w-[300px]">
                                    <h3 className="text-[24px] font-semibold text-white mb-2">
                                        Austin Brady
                                    </h3>
                                    <div className="flex gap-4">
                                        <a 
                                            href="mailto:austin@henrycap.com?subject=Henry%20Capital%20Inquiry"
                                            className="text-[19px] text-white hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
                                            aria-label="Email Austin Brady"
                                        >
                                            austin@henrycap.com
                                        </a>
                                        <a 
                                            href="https://www.linkedin.com/in/austin-brady/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
                                            aria-label="LinkedIn"
                                        >
                                            <svg className="w-[28px] h-[28px]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Second founder */}
                        <ScrollReveal>
                            <div className="flex flex-col items-center">
                                <div className="w-[300px] h-[300px] overflow-hidden rounded-lg">
                                    <img 
                                        src={muPic2} 
                                        alt="Martin Urdapilleta" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="mt-4 w-[300px]">
                                    <h3 className="text-[24px] font-semibold text-white mb-2">
                                        Martin Urdapilleta
                                    </h3>
                                    <div className="flex gap-4">
                                        <a 
                                            href="mailto:martin@henrycap.com?subject=Henry%20Capital%20Inquiry"
                                            className="text-[19px] text-white hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
                                            aria-label="Email Martin Urdapilleta"
                                        >
                                            martin@henrycap.com
                                        </a>
                                        <a 
                                            href="https://www.linkedin.com/in/martin-urdapilleta/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
                                            aria-label="LinkedIn"
                                        >
                                            <svg className="w-[28px] h-[28px]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
