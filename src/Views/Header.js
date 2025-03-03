import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/Images/lending8.png';
import styles from './Header.module.css';
import { trackEvent } from '../firebase';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  // Determine if we are on the HomePage ("/")
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom scroll function that applies an 80px offset
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this offset as needed
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  // When not on home, use absolute hash links (e.g. "/#about-section")
  const linkPrefix = isHomePage ? "" : "/";

  return (
    <header className={`${styles.headerAbsolute} ${scrolled ? 'headerScrolled' : ''}`}>
      {/* Background Blur Layer */}
      <div className={styles.headerBackground}></div>
      {/* Header Content */}
      <div className={`max-w-[1400px] w-full mx-auto px-4 ${styles.headerContent}`}>
        <nav className="flex flex-col font-garamond">
          <div className="flex justify-between items-center w-full">
            <div className={styles.logoContainer}>
              <HashLink smooth to={`${linkPrefix}#top`} onClick={() => trackEvent('logo_click')}>
                <img src={logo} alt="Henry Capital" className={`h-10 ${styles.logo}`} />
              </HashLink>
            </div>
            {/* Desktop Menu */}
            <div className={`hidden md:flex items-center justify-end space-x-6 ${styles.buttonContainer}`}>
              <HashLink
                smooth
                to={`${linkPrefix}#about-section`}
                scroll={scrollWithOffset}
                className="text-white text-[22px] hover:text-gray-300 transition-colors hover:scale-110 transform duration-200"
              >
                About Us
              </HashLink>
              <HashLink
                smooth
                to={`${linkPrefix}#eligibility-section`}
                scroll={scrollWithOffset}
                className="text-white text-[22px] hover:text-gray-300 transition-colors hover:scale-110 transform duration-200"
              >
                Eligibility
              </HashLink>
              <Link
                to="/faqs"
                className="text-white text-[22px] hover:text-gray-300 transition-colors hover:scale-110 transform duration-200"
                onClick={() => trackEvent('faq_nav_click')}
              >
                FAQs
              </Link>
              <HashLink
                smooth
                to={`${linkPrefix}#contact-section`}
                scroll={scrollWithOffset}
                className="text-white text-[22px] hover:text-gray-300 transition-colors hover:scale-110 transform duration-200"
              >
                Contact Us
              </HashLink>
            </div>
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className={styles.headerLine}></div>
          {/* Mobile Menu Items */}
          {mobileMenuOpen && (
            <div className={`${styles.mobileMenu} md:hidden flex flex-col space-y-4 mt-4 items-center`}>
              <HashLink
                smooth
                to={`${linkPrefix}#about-section`}
                scroll={scrollWithOffset}
                className="text-white hover:text-gray-300 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </HashLink>
              <HashLink
                smooth
                to={`${linkPrefix}#eligibility-section`}
                scroll={scrollWithOffset}
                className="text-white hover:text-gray-300 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Eligibility
              </HashLink>
              <Link
                to="/faqs"
                className="text-white hover:text-gray-300 transition-colors text-center"
                onClick={() => {
                  trackEvent('faq_nav_click');
                  setMobileMenuOpen(false);
                }}
              >
                FAQs
              </Link>
              <HashLink
                smooth
                to={`${linkPrefix}#contact-section`}
                scroll={scrollWithOffset}
                className="text-white hover:text-gray-300 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </HashLink>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
