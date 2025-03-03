import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import {trackEvent} from '../firebase';
import './FAQs.css';

const FAQItem = ({id, question, answer}) => (
  <div id={id} className="faq-item bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6">
    <div className="faq-question">
      <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#013220] mb-4">{question}</h3>
    </div>
    <div className="faq-answer">
      <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-700 leading-relaxed">{answer}</p>
    </div>
  </div>
);

const FAQs = () => {
  const faqs = [
    {
      id: 'faq1',
      question: 'What types of assets do you accept as collateral?',
      answer: 'We accept a wide range of private equity assets including fund interests, GP commitments, management company interests, and carried interest. We focus on high-quality PE, RE, and Infrastructure assets.'
    },
    {
      id: 'faq2',
      question: 'What is your typical check size?',
      answer: 'Our typical check size ranges from $250,000 to $15 million, though we can be flexible based on the specific situation and assets involved.'
    },
    {
      id: 'faq3',
      question: 'How long does the process take?',
      answer: 'Once we receive all necessary documentation, we can typically close within 2-3 weeks. We pride ourselves on being responsive and efficient throughout the process.'
    },
    {
      id: 'faq4',
      question: 'Do you require personal guarantees?',
      answer: 'No, we do not require personal guarantees. Our lending is based on the quality and value of the underlying assets.'
    },
    {
      id: 'faq5',
      question: 'What are your typical terms?',
      answer: 'Our terms are flexible and tailored to each situation. We typically offer 2-5 year terms with interest-only payments and no amortization requirements.'
    },
    {
      id: 'faq6',
      question: 'Do you require board or LP approval?',
      answer: 'No, our structures are typically designed to work within existing LPA frameworks without requiring special approvals.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#EEECE3] font-garamond">
      <Header />
      <div className="max-w-[1400px] mx-auto px-4 py-24">
        <div data-aos="fade-up" className="text-center mb-12">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#013220] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-700">
            Find answers to common questions about our terms and process
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {faqs.map((faq) => (
            <div key={faq.id} data-aos="fade-up" data-aos-delay="100">
              <FAQItem {...faq} />
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="text-center">
          <p className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-700 mb-6">
            Don't see your question here? Feel free to reach out to us directly.
          </p>
          <Link
            to="/application"
            onClick={() => {
              if (typeof window !== 'undefined') {
                trackEvent('contact_click', {
                  location: 'faqs_page',
                  action: 'application_form'
                });
              }
            }}
            className="inline-block px-6 py-3 bg-[#013220] text-white text-[16px] sm:text-[18px] rounded-lg hover:bg-[#024c30] transition-all duration-300 hover:scale-110 transform"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default FAQs;
