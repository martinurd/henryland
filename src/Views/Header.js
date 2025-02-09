import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/Images/lending8.png';
import styles from './Header.module.css';
import { trackEvent } from '../firebase';

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offset = 80;
          const elementPosition = section.getBoundingClientRect().top;
          const elementHeight = sectionId === 'contact-section' ? section.offsetHeight : 0;
          const offsetPosition = elementPosition + window.pageYOffset - offset + elementHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 80;
        const elementPosition = section.getBoundingClientRect().top;
        const elementHeight = sectionId === 'contact-section' ? section.offsetHeight : 0;
        const offsetPosition = elementPosition + window.pageYOffset - offset + elementHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.headerAbsolute} ${scrolled ? 'headerScrolled' : ''}`}>
      {/* Background Blur Layer */}
      <div className={styles.headerBackground}></div>

      {/* Header Content */}
      <div className={`max-w-[1400px] w-full mx-auto px-4 ${styles.headerContent}`}>
        <nav className="flex flex-col font-garamond">
          <div className="flex justify-between items-center w-full">
            <div className={`flex-shrink-0 ${styles.logoContainer}`}>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  trackEvent('logo_click');
                }}
              >
                <img
                  src={logo}
                  alt="Henry Capital"
                  className={`h-12 ${styles.logo}`}
                />
              </Link>
            </div>

            <div className="flex-grow" /> {/* Spacer to push buttons right */}

            <div className={`hidden md:flex items-center justify-end space-x-6 ${styles.buttonContainer}`}>
              <button
                onClick={() => scrollToSection('about-section')}
                className="text-white text-[18px] hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('eligibility-section')}
                className="text-white text-[18px] hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
              >
                Eligibility
              </button>
              <Link
                to="/faqs"
                className="text-white text-[18px] hover:text-gray-300 transition-colors hover:scale-110 transform transition-transform duration-200"
                onClick={() => trackEvent('faq_nav_click')}
              >
                FAQs
              </Link>
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
