import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { trackEvent } from '../firebase';
import backgroundVideo from '../Assets/Videos/backgroundvideo.mp4';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                className="w-full py-6 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={onClick}
            >
                <span className="text-lg font-normal text-gray-900">{question}</span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </button>
            <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="p-4 pt-0 text-gray-600">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    React.useEffect(() => {
        trackEvent('page_view', {
            page_title: 'FAQs',
            page_location: window.location.href,
        });
    }, []);

    const faqs = [
        {
            question: "Why would a GP want to use this?",
            answer: "The structure provides liquidity without giving up any upside, and with an option to defer all cash interest until there's a liquidity event (e.g. one of the portfolio companies is sold). Currently the discounts on secondary position sales can range from 10% to up to 40% for lesser known fund managers. Traditional debt often comes with personal guarantees, control rights that can conflict with limited partner agreements, and charge cash interest. The intent of our structure is to solely focus on the unrealized value of the shares at exit, with the option to defer payments until then. This financing allows borrowers to maximize liquidity without having to accept discounts and maintain alignment with their LPs."
        },
        {
            question: "What are the main use cases?",
            answer: "Our financing solutions serve various purposes including new investment opportunities, meeting / increasing capital commitments, portfolio rebalancing or managing personal liquidity. We don't have a use case restriction."
        },
        {
            question: "Size of loans can you facilitate?",
            answer: "We provide flexible financing solutions across a range of sizes, tailored to meet the specific needs of the individual or partnership. The smallest loan we've considered is $250k and the largest $15m, our sweet-spot is $500k-$5m but there's room to be flexible on both ends. "
        },
        {
            question: "Is collateral taken in any scenario?",
            answer: "No. There is no transfer of ownership and no event that would trigger a transfer of shares from the personal bank accounts of the borrower. We rely on a pledge on the GP's behalf to secure future distributions from the shares after exit."
        },
        {
            question: "Is there additional collateral outside of GP or LP position?",
            answer: "The collateral requirements are primarily focused on the GP or LP position, but we can consider additional private investments from prior funds or roles in the same basis as long as there's enough concentration."
        },
        {
            question: "Can multiple positions be collateralized?",
            answer: "Yes, we can structure financing solutions that accommodate multiple positions regardless of the fund they came from, providing greater flexibility and higher borrowing capacity."
        },
        {
            question: "Is there a prepayment penalty?",
            answer: "We require a minimum return of one year regardless of when we are repaid. There are no penalties for short-term repaymeents and we are constructive on what's included for repayment if the GP wants to exclude known distributions anticipated."
        },
        {
            question: "What is required for diligence / term sheet?",
            answer: "Our diligence process is streamlined and efficient, requiring standard documentation to ensure proper evaluation and structuring."
        },
        {
            question: "What regions do you focus on?",
            answer: "We focus on North America, the UK and Western Europe."
        },
        {
            question: "At what level are they structured?",
            answer: "The agreement is usually between Henry Capital and the individual owner of the shares. If an entire GP wants to aprticipate we would not be lending to the fund specifially but to the general partnership. Management company fees are eligible for collateral but they are not a requirement."
        },
        {
            question: "Do we need GP or LP consent to take the loan?",
            answer: "We require consent of the general parttnership and compliance with all existing agreements."
        }
    ];

    // Split faqs into two arrays for two columns
    const midpoint = Math.ceil(faqs.length / 2);
    const leftColumnFaqs = faqs.slice(0, midpoint);
    const rightColumnFaqs = faqs.slice(midpoint);

    const handleClick = (index) => {
        trackEvent('faq_item_click', {
            question: faqs[index].question
        });
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-white font-garamond">
            {/* Hero Section with Video */}
            <section className="relative h-[30vh] w-full overflow-hidden bg-[#013220]">
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
                    className="absolute bottom-0 left-0 right-0 h-20" 
                    style={{
                        background: 'linear-gradient(to bottom, rgba(1,50,32,0), #ffffff)'
                    }}
                />
                
                {/* Content overlay */}
                <div className="relative z-10 h-50">
                    <Header />
                    <div className="max-w-[1400px] mx-auto px-4 md:px-6 pt-32 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white font-garamond">
                            Frequently asked questions
                        </h1>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <div className="py-16">
                <div className="max-w-[1400px] mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div>
                            {leftColumnFaqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => handleClick(index)}
                                />
                            ))}
                        </div>
                        {/* Right Column */}
                        <div>
                            {rightColumnFaqs.map((faq, index) => (
                                <FAQItem
                                    key={index + midpoint}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === (index + midpoint)}
                                    onClick={() => handleClick(index + midpoint)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default FAQs;
