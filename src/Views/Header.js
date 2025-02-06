import React from 'react';
import logo from '../Assets/Images/logo-long-1.png'; // Ensure the path is correct
import styles from './Header.module.css';

const Header = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 80; // Adjust this value based on your header height
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className={styles.headerAbsolute}>
            <div className={`max-w-[1400px] mx-auto md:ml-[80px] lg:ml-[120px] ${styles.headerContent}`}>
                <nav className="flex flex-col">
                    <div className="flex justify-between items-center w-full">
                        <div className={`flex-shrink-0 ${styles.logoContainer}`}>
                            <a href="/" onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}>
                                <img 
                                    src={logo} 
                                    alt="Henry Capital Logo" 
                                    className="h-10 w-auto brightness-0 invert"
                                />
                            </a>
                        </div>
                        
                        <div className="flex-grow" /> {/* Spacer to push buttons right */}
                        
                        <div className={`hidden md:flex items-center justify-end space-x-6 ${styles.buttonContainer}`}>
                            <button 
                                onClick={() => scrollToSection('about-section')}
                                className="text-white text-[17px] hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
                            >
                                About Us
                            </button>
                            <button 
                                onClick={() => scrollToSection('eligibility-section')}
                                className="text-white text-[17px] hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
                            >
                                Eligibility
                            </button>
                            <button 
                                onClick={() => scrollToSection('contact-section')}
                                className="text-white text-[17px] hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
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
