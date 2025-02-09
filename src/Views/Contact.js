import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.send(
                'service_ib5mj0d',
                'template_feaxnpm',
                formData,
                'eoBIIGwXNu1PxDqtR'
            );
            
            setStatus('success');
            setFormData({
                message: ''
            });
            setTimeout(() => setStatus(''), 5000);
        } catch (error) {
            console.error('Failed to send message:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <section id="contact-section" className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-black/20 backdrop-blur-sm p-8 rounded-lg">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-black mb-5 text-center">Send us a message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <textarea
                                    name="message"
                                    rows="7"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-3 py-1 bg-white/15 border border-white/20 rounded-md text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your message"
                                    required
                                    disabled={status === 'sending'}
                                ></textarea>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="px-8 py-2 bg-white/20 hover:bg-white/30 text-black rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 transform disabled:opacity-50 disabled:hover:scale-100"
                                >
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                                
                                {status === 'success' && (
                                    <p className="text-green-900 text-m">Message sent successfully.</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-900 text-m">Failed to send message. Please try again.</p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;