import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { trackEvent } from '../firebase';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Sending...');
    console.log('Form values:', Object.fromEntries(new FormData(e.target)));
    setIsSubmitting(true);
    setStatus('');

    emailjs
      .sendForm(
        'service_ib5mj0d', 
        'template_h26dwm4', 
        e.target,
        'eoBIIGwXNu1PxDqtR'
      )
      .then((result) => {
        console.log(result.text);
        console.log('SUCCESS!', result.text);
        setStatus('success');
        form.current.reset();
        trackEvent('contact_form_submit_success');
      })
      .catch((error) => {
        console.log(error.text);
        console.log('FAILED...', error);
        setStatus('error');
        trackEvent('contact_form_submit_error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact-section" className="py-8 px-4 md:px-8 bg-[#EEECE3] font-garamond">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[32px] sm:text-[40px] font-bold text-black mb-8 text-center">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-[16px] sm:text-[20px] text-black mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4ECEB3] text-black"
              />
            </div>
            <div>
              <label className="block text-[16px] sm:text-[20px] text-black mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4ECEB3] text-black"
              />
            </div>
            <div>
              <label className="block text-[16px] sm:text-[20px] text-black mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4ECEB3] text-black resize-none"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-[#013220] text-white rounded-lg text-[16px] sm:text-[20px] hover:bg-[#024c30] transition-colors duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {status === 'success' && (
              <p className="text-[#013220] font-bold text-center text-[16px] sm:text-[18px]">
                Thank you for your message. We'll get back to you soon!
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center text-[16px] sm:text-[18px]">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
