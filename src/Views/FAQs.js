import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { trackEvent } from '../firebase';
import backgroundVideo from '../Assets/Videos/backgroundvideo.mp4';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={onClick}
            >
                <h3 className="text-[22px] font-semibold text-[#013220] pr-4">{question}</h3>
                <span className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9L12 16L5 9" stroke="#013220" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </button>
            <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
            >
                <p className="px-6 py-4 text-gray-600 text-[18px] leading-relaxed border-t border-gray-100">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        trackEvent('page_view', {
            page_title: 'FAQs',
            page_location: window.location.href,
        });
    }, []);

    const handleClick = (index) => {
        trackEvent('faq_item_click', {
            question: faqs[index].question
        });
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What makes our financing solution unique for GPs?",
            answer: "The structure provides liquidity without giving up any upside, and with an option to defer all cash interest until there's a liquidity event (e.g. one of the portfolio companies is sold). Currently the discounts on secondary position sales can range from 10% to up to 40% for lesser known fund managers. Traditional debt often comes with personal guarantees, control rights that can conflict with limited partner agreements, and cash interest. The intent of our structure is to solely focus on the unrealized value of the shares at exit, with the option to defer payments until then. This helps borrowers maximize liquidity without having to accept discounts and, in the case of GPs, while maintaining alignment with their LPs."
        },
        {
            question: "How can you use our financing?",
            answer: "Our financing solutions serve various purposes including new investment opportunities, meeting / increasing capital commitments, portfolio rebalancing or managing personal liquidity. We don't have a use case restriction."
        },
        {
            question: "What financing amounts do we offer?",
            answer: "We provide flexible financing solutions across a range of sizes, tailored to meet the specific needs of the individual or partnership. The smallest loan we've considered is $250k and the largest $15m, our sweet-spot is $500k-$5m but there's room to be flexible on both ends."
        },
        {
            question: "Do we take ownership of your shares in an event of default?",
            answer: "No, we rely on a pledge on future distributions. Even if we did, there's no secondary market for the typical assets we finance. There is no transfer of ownership and the shares don't leave the personal bank accounts of the borrower."
        },
        {
            question: "Can you use other assets as collateral?",
            answer: "The collateral requirements are primarily focused on the GP or LP position, but we consider additional private investments from prior funds or roles (K1s)."
        },
        {
            question: "How can I meet the 3 asset minimum?",
            answer: "We can structure financing to accommodate positions from multiple funds or different asset clases."
        },
        {
            question: "What are the terms for early repayment?",
            answer: "We require a minimum return of one year regardless of when we are repaid. There are no penalties for short-term repayments and we are constructive on what's included for repayment if the GP wants to exclude known distributions anticipated."
        },
        {
            question: "How is the diligence process?",
            answer: "Our diligence process is streamlined and automated, requiring standard off the shelf documentation. Once provided it takes no longer than 24hs."
        },
        {
            question: "In what countries do we provide financing?",
            answer: "We focus on North America, the UK and Western Europe."
        },
        {
            question: "How is the financing agreement structured?",
            answer: "The agreement is usually between the individual GP and Henry Capital, but we can also structure at the management company level if preferred."
        },
        {
            question: "Do we need GP or LP consent to take the loan?",
            answer: "We require consent of the general partnership and compliance with all existing agreements."
        }
    ];

    return (
        <main className="min-h-screen bg-white font-garamond">
            {/* Video Background */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>

            <Header />

            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-[48px] font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-[22px] text-white/90">
                            Find answers to common questions about our financing solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default FAQs;
