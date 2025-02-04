import React from 'react';
import muPic1 from '../Assets/Images/ABpic.PNG';
import muPic2 from '../Assets/Images/MUpic.PNG';

const AboutSection = () => {
    return (
        <section id="about-section" className="py-16 px-4 md:px-8 bg-[#2F4C44]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                    About Us
                </h2>

                <div className="bg-white/8 backdrop-blur-sm rounded-lg p-8 mb-16 max-w-4xl mx-auto shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] hover:bg-white/15 transition-all duration-300">
                    <p className="text-white/90 leading-relaxed mb-6">
                        Henry commits its capital in flexible financings to investment managers against the value of their illiquid assets. Our preferred equity solution offers these professionals cash in exchange for a preferred interest in subsequent distributions. Our hybrid product draws from the latest advancements in finance to fill liquidity gaps and make markets more efficient.
                    </p>
                    <p className="text-white/90 leading-relaxed">
                        Traditional lending options have not been a good fit for the needs of the lower and lower-middl- market.private investment managers. Due to idiosyncratic regulatory constraints and other structural factors, supply has contracted despite strong demand. After observing these inefficiencies first-hand, Henry's founders designed an asset-backed structure that properly captures this value and shares it with borrowers through flexible liquidity arrangements. Henry is an origination platform that bridges investors seeking differentiated exposure to the private markets with a way for GPs to maintain asset ownership and preserve upside with their LPs. We are a business built on trust, collaboraiton and alignment to address complexity.
                    </p>
                </div>
                
                <div className="flex flex-col items-center">
                    <div className="flex flex-col md:flex-row justify-center gap-16 mb-8">
                        {/* First founder */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-[300px] h-[300px]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.2)_100%)] rounded-lg"></div>
                                <img 
                                    src={muPic1} 
                                    alt="Team member 1" 
                                    className="w-[300px] h-[300px] object-cover rounded-lg grayscale"
                                />
                            </div>
                            <div className="mt-4 w-[300px]">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-white">
                                        Austin Brady
                                    </h3>
                                    <div className="flex gap-3">
                                        <a 
                                            href="mailto:austin@henrycap.com?subject=Henry%20Capital%20Inquiry"
                                            className="text-white hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
                                            aria-label="Email Austin Brady"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"/>
                                            </svg>
                                        </a>
                                        <a 
                                            href="https://www.linkedin.com/in/austin-brady/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
                                            aria-label="LinkedIn"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second founder */}
                        <div className="flex flex-col items-center">
                            <img 
                                src={muPic2} 
                                alt="Team member 2" 
                                className="rounded-lg w-[300px] h-[300px] object-cover grayscale"
                            />
                            <div className="mt-4 w-[300px]">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-white">
                                        Martin Urdapilleta
                                    </h3>
                                    <div className="flex gap-3">
                                        <a 
                                            href="mailto:martin@henrycap.com?subject=Henry%20Capital%20Inquiry"
                                            className="text-white hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
                                            aria-label="Email Martin Urdapilleta"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"/>
                                            </svg>
                                        </a>
                                        <a 
                                            href="https://www.linkedin.com/in/martin-urdapilleta/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
                                            aria-label="LinkedIn"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
