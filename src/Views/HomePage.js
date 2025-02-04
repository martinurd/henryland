// src/Views/HomePage.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from './Header';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import AboutSection from './AboutSection';
import Contact from './Contact';
import Footer from './Footer';
import backgroundVideo from '../Assets/Videos/backgroundvideo.mp4';
import ContactModal from '../Components/ContactModal';
import Divider from '../Components/Divider';

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
        <main className="w-full">
            {/* Hero Section with Video */}
            <section className="relative h-screen w-full overflow-hidden">
                <video 
                    autoPlay 
                    muted 
                    loop 
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                {/* Gradient overlay at bottom */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-32" 
                    style={{
                        background: 'linear-gradient(to bottom, transparent, #4ECEB3)'
                    }}
                />
                
                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                    <Header />
                    <div className="text-center -mt-52 px-4">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Flexible liquidity for emerging managers
                        </h1>
                        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
                            Our credit solutions are designed for rising sponsors, supporting their growth while promoting alignment
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="mt-8 px-8 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 transform"
                        >
                            Contact Henry Capital
                        </button>
                    </div>
                </div>
            </section>

            {/* Main content with gradient background */}
            <section 
                className="relative w-full" 
                style={{
                    backgroundColor: '#4ECEB3'
                }}
            >
                <div className="w-full">
                    <SecondSection />
                    <Divider />
                    <ThirdSection />
                    <Divider />
                    <FourthSection />
                    <Divider />
                    <FifthSection />
                    <Divider />
                    <AboutSection />
                    <Divider />
                    <Contact />
                    <Footer />
                </div>
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
