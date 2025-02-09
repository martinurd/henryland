import React, { useState } from 'react';
import ContactModal from '../Components/ContactModal';

const SecondSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="eligibility-section" className="w-full bg-[#EEECE3] relative">
            {/* Content */}
            <div className="relative py-24 px-4 md:px-8 font-garamond">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-medium text-black text-center mb-4 max-w-[70%] mx-auto">
                        We work with individual partners or entire partnerships, and any holder that could benefit from our solution 
                    </h2>
                    <p className="text-xl text-black text-center mb-16">
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Emerging Fund Managers Card */}
                        <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 shadow-lg flex flex-col min-h-[320px]">
                            <h3 className="text-2xl font-medium text-black mb-4">
                                Emerging Fund GPs
                            </h3>
                            <p className="text-black leading-relaxed flex-grow">
                                Henry Capital helps GPs meet or increase commitments more by levering past and new investments starting at Fund I. We can work with individual members of the GP without impacting others.
                            </p>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="mt-6 inline-flex items-center text-black hover:opacity-75 transition-opacity"
                            >
                                Apply now
                            </button>
                        </div>

                        {/* Independent Sponsors Card */}
                        <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 shadow-lg flex flex-col min-h-[320px]">
                            <h3 className="text-2xl font-medium text-black mb-4">
                                Independent Sponsors
                            </h3>
                            <p className="text-black leading-relaxed flex-grow">
                                Independent sponsors have to invest significant amounts of personal capital to prove alignemnt in deals. Sponsor choose us to lever past investments and complete new deals or maximize working capital.  
                            </p>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="mt-6 inline-flex items-center text-black hover:opacity-75 transition-opacity"
                            >
                                Apply now
                            </button>
                        </div>

                        {/* Individual members of GP Card */}
                        <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 shadow-lg flex flex-col min-h-[320px]">
                            <h3 className="text-2xl font-medium text-black mb-4">
                                Limited Partners, Family Offices, & HNWIs
                            </h3>
                            <p className="text-black leading-relaxed flex-grow">
                            We provide credit against illiquid investments even if you are not a GP or if your investments are not in a fund. We can help avoid the costs of refinancing existing debt, selling assets out of necessity, and more.  
                            </p>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="mt-6 inline-flex items-center text-black hover:opacity-75 transition-opacity"
                            >
                                Apply now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Modal */}
            {isModalOpen && (
                <ContactModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </section>
    );
};

export default SecondSection;