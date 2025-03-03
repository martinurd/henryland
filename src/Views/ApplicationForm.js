import React, {useState} from 'react';
import Header from '../Views/Header';
import Footer from '../Views/Footer';
import {trackEvent} from '../firebase';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      trackEvent('form_submission', {
        form_type: 'application',
        user_type: formData.userType
      });
    }
    const subject = encodeURIComponent('Henry Capital Application');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nUser Type: ${formData.userType}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:info@henrycap.com?subject=${subject}&body=${body}`;
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#013220] text-[16px] text-black";

  return (
    <main className="min-h-screen bg-[#EEECE3] font-garamond">
      <Header />
      <section className="relative w-full">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div data-aos="fade-up">
              <h1 className="text-[32px] md:text-[40px] font-bold text-[#013220] mb-6 text-center">
                Contact Us
              </h1>
              <p className="text-gray-600 text-[18px] md:text-[20px] text-center mb-8">
              Tell us about yourself, and the appropriate member of our team will be in contact shortly.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up" data-aos-delay="150">
              <div>
                <label htmlFor="name" className="block text-[#013220] text-[16px] font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#013220] text-[16px] font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              
              <div>
                <label htmlFor="userType" className="block text-[#013220] text-[16px] font-medium mb-2">
                  Which of the following best describes you?
                </label>
                <select
                  name="userType"
                  id="userType"
                  required
                  value={formData.userType}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="" className="text-gray-400">Select an option</option>
                  <option value="Independent sponsor">Independent sponsor</option>
                  <option value="Sponsor of a fund">Sponsor of a fund</option>
                  <option value="Limited partner">Limited partner</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#013220] text-[16px] font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClasses}
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-[20px] font-medium text-white bg-[#013220] hover:bg-[#024c30] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#013220] transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ApplicationForm;
