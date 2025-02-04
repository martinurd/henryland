import React from 'react';
import logo from '../Assets/Images/logo-long-1.png'; // Ensure the path is correct
import styles from './Header.module.css';

const Header = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="absolute top-0 left-0 right-0 z-50">
            <div className="max-w-screen-2xl mx-auto px-3 py-4">
                <nav className="flex flex-col">
                    <div className="flex justify-between items-center w-full">
                        <div className={`flex-shrink-0 ${styles.logoContainer}`}>
                            <a href="/">
                                <img 
                                    src={logo} 
                                    alt="Henry Capital Logo" 
                                    className="h-10 w-auto"
                                />
                            </a>
                        </div>
                        
                        <div className="flex-grow" /> {/* Spacer to push buttons right */}
                        
                        <div className={`hidden md:flex items-center justify-end space-x-6 ${styles.buttonContainer}`}>
                            <button 
                                onClick={() => scrollToSection('about-section')}
                                className="text-white hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
                            >
                                About Us
                            </button>
                            <button 
                                onClick={() => scrollToSection('eligibility-section')}
                                className="text-white hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
                            >
                                Eligibility
                            </button>
                            <button 
                                onClick={() => scrollToSection('contact-section')}
                                className="text-white hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className={styles.headerLine}></div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
