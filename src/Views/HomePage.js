// src/Views/HomePage.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
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

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        selection: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_ib5mj0d',
            'template_h26dwm4',
            formData,
            'eoBIIGwXNu1PxDqtR'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.error('FAILED...', err);
        });
    };

    return (
        <main className="w-full font-garamond">
            {/* Hero Section with Video */}
            <section className="relative h-[80dvh] w-full overflow-hidden bg-[#013220]">
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
                <div className="relative z-10 h-full flex flex-col items-start justify-center">
                    <Header />
                    <div className="text-left -mt-60 md:-mt-40 max-w-[1400px] mx-auto w-full md:ml-[80px] lg:ml-[120px] px-3" style={{ marginTop: '-60px' }}>
                        <h1 className="text-[50px] md:text-[60px] lg:text-[68px] font-bold text-white mb-6 leading-tight" style={{ marginTop: '120px', '@media (min-width: 768px)': { marginTop: '160px' } }}>
                            Liquidity Solutions for Private Equity Investors & Professionals
                        </h1>
                        <p className="text-[20px] md:text-[24px] lg:text-[26px] text-white max-w-[1500px] leading-relaxed">
                            We help individuals, independent sponsors, emerging & established managers, and limited partners unlock the value of their illiquid investments with flexible, non-dilutive credit.
                        </p>
                    </div>
                    <div className="flex gap-4 max-w-[1400px] mx-auto w-full md:ml-[80px] lg:ml-[120px] px-3">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="mt-8 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 transform"
                        >
                            Get Started
                        </button>
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
