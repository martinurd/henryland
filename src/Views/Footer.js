import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Images/lending8.png';

const Footer = () => {
    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#013220] text-white py-8">
            <div className="max-w-screen-xl mx-auto px-3 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link 
                            to="/" 
                            onClick={handleLogoClick}
                        >
                            <img 
                                src={logo} 
                                alt="Henry Capital Logo" 
                                className="h-8 w-auto mb-4 brightness-0 invert cursor-pointer"
                            />
                        </Link>
                        <p className="text-white text-sm">
                            <span className="henry-font">
                                {new Date().getFullYear()} Henry Capital Solutions Inc. All rights reserved.
                            </span>
                        </p>
                    </div>
                    
                    <div className="flex space-x-6 md:-mt-4">
                        <a href="/terms" className="text-white text-[19px] hover:text-white transition-colors">
                            Terms
                        </a>
                        <a href="/privacy" className="text-white text-[19px] hover:text-white transition-colors">
                            Privacy
                        </a>
                    </div>
                </div>
                <div className="footer-divider"></div>
                <div className="mt-6">
                    <p className="text-white text-sm font-medium mb-2">Disclosures</p>
                    <p className="text-xs text-white-500 mt-4">
                        Past performance is not a guide to future results. The products, services, information and/or materials contained within this web page may not be available for residents of certain jurisdictions. Information on this site is proprietary and may not to be reproduced, transferred, or distributed in any form without prior written permission from <span className="henry-font">Henry Capital</span>. It is delivered on an "as is" basis without warranty or liability.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;