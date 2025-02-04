import React from 'react';

const SecondSection = () => {
    return (
        <section className="py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                    An old but growing problem in finance
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white/8 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                        The J-Curve impact on growth
                        </h3>
                        <p className="text-white/90 leading-relaxed">
                            The effect is prvalent across market cycles, whether in slow ones as exit are pushed out or in active ones as large upfront commitments pile up. For managers that need to invest siginficant personal capital to demonstrate alingment, this makes growth punitive regardless of performance.  
                        </p>
                        <p className="text-white/90 leading-relaxed">
                            As a result, managers often face over a decade of negative DPI, even while holding high-quality assets on paper. As GP commitments rise and liquidity constraints intensify, solutions that unlock value by monetizing these assets as collateral are essential for an industry dependent on retaining top talent.    
                        </p>
                        <div className="stats-container mt-8">
                            <div className="stat-item">
                                <h3 className="stat-number text-2xl font-semibold text-white mb-2">
                                    10+ years
                                </h3>
                                <p className="stat-description text-white/90 leading-relaxed">
                                    of liquidity shortfall per fund that can multiply as fundraise outpace full realizations
                                </p>
                            </div>
                            
                            <div className="stat-item mt-4">
                                <h3 className="stat-number text-2xl font-semibold text-white mb-2">
                                    1% -> 3-5% of fund
                                </h3>
                                <p className="stat-description text-white/90 leading-relaxed">
                                    GP commitment required by LPs trending up demand more efficient options
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                        <img src={require('../Assets/Images/cash_solo.png')} alt="Cumulative cash of GPs over fund life" className="graph-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondSection;