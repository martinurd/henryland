// src/Views/HomePage.js
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Header from './Header';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import AboutSection from './AboutSection';
import Contact from './Contact';
import Footer from './Footer';
import backgroundVideo from '../Assets/Videos/backgroundvideo.mp4';
import ContactModal from '../Components/ContactModal';
import Divider from '../Components/Divider';
import ExperienceSection from './ExperienceSection';
import ExperienceSection2 from './ExperienceSection2';
import { trackEvent } from '../firebase';

const HomePage = () => {
    useScrollAnimation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Track page view
        trackEvent('page_view', {
            page_title: 'Home Page',
            page_location: window.location.href,
        });
    }, []);

    return (
        <main className="min-h-screen bg-white font-garamond">
            {/* Hero Section with Video */}
            <section className="relative h-[calc(100vh-45px)] w-full overflow-hidden bg-[#013220]">
                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: 0.7 }}
                >
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                {/* Gradient overlay at bottom */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-32" 
                    style={{
                        background: 'linear-gradient(to bottom, rgba(1,50,32,0), #4ECEB3)'
                    }}
                />
                
                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col items-start justify-start">
                    <Header />
                    <div className="text-left max-w-[1400px] w-full mx-auto px-4 mt-[100px]">
                        <div className="scroll-hidden p-1" data-delay="1">
                            <h1 className="text-[40px] md:text-[50px] lg:text-[55px] font-bold text-white mb-6 leading-tight" style={{ marginTop: '20px', '@media (min-width: 768px)': { marginTop: '40px' } }}>
                                Liquidity Solutions for Private Equity Investors & Professionals
                            </h1>
                        </div>
                        <div className="scroll-hidden" data-delay="2">
                            <p className="text-[18px] md:text-[18px] lg:text-[22px] text-white max-w-[1200px] leading-relaxed">
                                We help individuals, independent sponsors, emerging & established managers, and limited partners unlock the value of their illiquid investments with flexible, non-dilutive credit.
                            </p>
                        </div>
                        <div className="scroll-hidden mt-8" data-delay="3">
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 transform"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main content with gradient background */}
            <section 
                className="relative w-full" 
                style={{
                    backgroundColor: '#EEECE3'
                }}
            >
                <ExperienceSection />
                <ExperienceSection2 />
                <SecondSection />
                <Divider />
                <ThirdSection />
                <Divider />
                <FourthSection />
                <AboutSection />
                <Contact />
                <Footer />
            </section>

            {/* Modal */}
            <ContactModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
};

export default HomePage;
