
import React, { useState } from 'react';

const LocationMarkerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const CtaSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Reach out and we'll get back to you shortly.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="text-white flex flex-col justify-center space-y-8">
                        <div className="flex items-start">
                            <LocationMarkerIcon className="w-8 h-8 text-yellow-400 mr-4 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold">Address</h3>
                                <p className="text-gray-400">123 Jalan Teknologi, Cyberjaya, Malaysia</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <PhoneIcon className="w-8 h-8 text-yellow-400 mr-4 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold">Phone</h3>
                                <p className="text-gray-400">+603-1234-5678</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MailIcon className="w-8 h-8 text-yellow-400 mr-4 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold">Email</h3>
                                <p className="text-gray-400">contact@silentprofit.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-300 font-bold mb-2">Your Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:border-yellow-400" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-300 font-bold mb-2">Your Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:border-yellow-400" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-300 font-bold mb-2">Message</label>
                                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:border-yellow-400"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-md hover:bg-yellow-300 transition-colors duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
