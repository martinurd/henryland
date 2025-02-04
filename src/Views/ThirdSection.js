import React from 'react';
import graphImage from '../Assets/Images/cash w henry.png';

const ThirdSection = () => {
    return (
        <section id="eligibility-section" className="py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                    Making markets stronger
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/8 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Borrower profile of Henry:
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white/8 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]">
                                <h4 className="text-xl font-semibold text-white mb-2">
                                    Individual partners
                                </h4>
                                <p className="text-white/90 leading-relaxed">
                                    Entire GP need not participate
                                </p>
                            </div>
                            
                            <div className="bg-white/8 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]">
                                <h4 className="text-xl font-semibold text-white mb-2">
                                    Target strategies
                                </h4>
                                <p className="text-white/90 leading-relaxed">
                                    PE (excl. VC) and RE / Infra
                                </p>
                            </div>
                            
                            <div className="bg-white/8 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]">
                                <h4 className="text-xl font-semibold text-white mb-2">
                                    Wide range of check sizes
                                </h4>
                                <p className="text-white/90 leading-relaxed">
                                    As small as $500k to $5m+
                                </p>
                            </div>
                            
                            <div className="bg-white/8 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]">
                                <h4 className="text-xl font-semibold text-white mb-2">
                                    Current portfolio
                                </h4>
                                <p className="text-white/90 leading-relaxed">
                                    A minimum of 3 or more existing investments
                                </p>
                            </div>
                            
                            <div className="bg-white/8 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]">
                                <h4 className="text-xl font-semibold text-white mb-2">
                                    Industry agnostic
                                </h4>
                                <p className="text-white/90 leading-relaxed">
                                    Strong businesses and in any industry
                                </p>
                            </div>
                            
                            <div className="bg-white/8 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]">
                                <h4 className="text-xl font-semibold text-white mb-2">
                                    NA / UK geographies
                                </h4>
                                <p className="text-white/90 leading-relaxed">
                                    Investments in US, CA or the UK
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white/8 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]">
                        <div className="graph-container">
                            <img src={graphImage} alt="Cumulative cash of GP over fund life" className="graph-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;
