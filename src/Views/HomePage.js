import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from './Header';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import Contact from './Contact';
import Footer from './Footer';
import ExperienceSection from './ExperienceSection';
import SimpleAboutSection from './SimpleAboutSection';
import Divider from '../Components/Divider';
import { trackEvent } from '../firebase';
import backgroundVideo from '../Assets/Videos/backgroundvideo.mp4';

const HomePage = () => {
  const [isClient, setIsClient] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      trackEvent('page_view', {
        page_title: 'Home Page',
        page_location: window.location.href
      });
    }
  }, []);

  useEffect(() => {
    if (location.hash && typeof window !== 'undefined') {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <main className="min-h-screen bg-white font-garamond">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-[#013220]">
        {isClient ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.3 }}
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="absolute inset-0 w-full h-full bg-[#013220]" style={{ opacity: 0.7 }} />
        )}

        {/* Gradient at the bottom now ends with #4ECEB3 instead of #EEECE3 */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to bottom, rgba(1,50,32,0), #4ECEB3)'
          }}
        />

        <div className="relative z-10 h-full flex flex-col items-start justify-start">
          <Header />
          <div className="text-left max-w-[1400px] w-full mx-auto px-4 mt-24">
            <div data-aos="fade-up">
              <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[55px] font-bold text-white mb-6 leading-tight mt-5 md:mt-10">
                Liquidity Solutions for Private Equity Investors & Professionals
              </h1>
            </div>
            <div data-aos="fade-up" data-aos-delay="150">
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white max-w-[1200px] leading-relaxed">
                We help PE sponsors, professionals, and limited partners unlock the value of their illiquid investments with flexible, non-dilutive credit.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="mt-8">
              <Link
                to="/application"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    trackEvent('get_started_click', {
                      location: 'hero_section',
                      action: 'application_form'
                    });
                  }
                }}
                className="inline-block mt-0 px-6 py-3 bg-white/20 hover:bg-white/30 text-white text-[16px] sm:text-[18px] md:text-[20px] rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 transform"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative w-full" style={{ backgroundColor: '#EEECE3' }}>
        <ExperienceSection />
        <SecondSection />
        <Divider />
        <ThirdSection />
        <Divider />
        <FourthSection />
        <SimpleAboutSection />
        <Contact />
        <Footer />
      </section>
    </main>
  );
};

export default HomePage;
