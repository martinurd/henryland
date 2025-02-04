import React from 'react';
import logo from '../Assets/Images/logo-long-1.png';

const Footer = () => {
    return (
        <footer className="py-8 px-4 bg-black/20 backdrop-blur-sm">
            <div className="max-w-screen-xl mx-auto px-3 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <img 
                            src={logo} 
                            alt="Henry Capital Logo" 
                            className="h-8 w-auto mb-4"
                        />
                        <p className="text-white/80 text-sm">
                            {new Date().getFullYear()} Henry Capital. All rights reserved.
                        </p>
                    </div>
                    
                    <div className="flex space-x-6 md:-mt-4">
                        <a href="/terms" className="text-white/80 hover:text-white transition-colors">
                            Terms
                        </a>
                        <a href="/privacy" className="text-white/80 hover:text-white transition-colors">
                            Privacy
                        </a>
                    </div>
                </div>
                <div className="footer-divider"></div>
                <div className="mt-6">
                    <p className="text-white/90 text-sm font-medium mb-2">Disclosures</p>
                    <p className="text-white/70 text-xs leading-relaxed">
                        Past performance is not a guide to future results. The products, services, information and/or materials contained within this web page may not be available for residents of certain jurisdictions. Information on this site is proprietary and may not to be reproduced, transferred, or distributed in any form without prior written permission from Henry Capital. It is delivered on an "as is" basis without warranty or liability.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;