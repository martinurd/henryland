import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.send(
                'service_ib5mj0d', // Replace with your EmailJS service ID
                'template_feaxnpm', // Replace with your template ID
                {
                    Subject: subject || "No Subject Provided",
                    Email: email || "No Email Provided",
                    message: message,
                    to_email: 'martin@henrycap.com, austin@henrycap.com'
                },
                'eoBIIGwXNu1PxDqtR' // Replace with your public key
            );
            
            setStatus('success');
            setMessage('');
            setSubject('');
            setEmail('');
            setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
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
                        <h2 className="text-2xl font-bold text-white mb-5 text-center">Send us a message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="w-full px-3 py-2 bg-white/15 border border-white/20 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                    placeholder="Subject (optional)"
                                    disabled={status === 'sending'}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 bg-white/15 border border-white/20 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                    placeholder="Your email (optional)"
                                    disabled={status === 'sending'}
                                />
                            </div>
                            <div>
                                <textarea
                                    rows="7"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-3 py-1 bg-white/15 border border-white/20 rounded-md text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your message"
                                    required
                                    disabled={status === 'sending'}
                                ></textarea>
                            </div>             
                        
                            <div className="flex flex-col items-center gap-3">
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="px-8 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 transform disabled:opacity-50 disabled:hover:scale-100"
                                >
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                                
                                {status === 'success' && (
                                    <p className="text-green-400 text-sm">Message sent successfully!</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
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