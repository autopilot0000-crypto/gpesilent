
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LocationMarkerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.17.91-.494 1.208-.822 1.23-.696.047-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.04-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.034-.276.352-.566.94-.862 3.407-1.734 5.838-2.98 6.929-3.456.995-.429 1.86-.81 2.299-.813zm.022 1.023c-.224 0-.442.02-.652.054-2.433.393-6.143 2.596-7.098 3.232-.34.227-.414.435-.436.528-.024.1.03.204.138.27.107.065.234.096.348.096.402 0 .79-.14 1.228-.41 3.483-2.2 4.92-3.13 5.093-3.136.173-.008.276.045.276.16 0 .09-.048.192-.108.243-.058.05-.756.634-2.288 1.89-1.952 1.6-2.565 2.1-2.45 2.68.076.39.317.514.652.514.43 0 .86-.217 1.396-.59 1.15-.81 1.813-1.28 2.052-1.46.592-.447.99-.74 1.135-.74.225 0 .49.117.49.266 0 .185-.018.48-.054.742-.143 1.02-.634 3.93-1.01 6.13-.105.62.107.82.26.84.093.012.24-.012.407-.09.255-.12.47-.26.636-.42.22-.21.39-.42.51-.64.22-.4.41-.83.56-1.28l.45-1.31c.32-1.02.51-2.02.51-2.02.04-.24-.04-.48-.22-.6z"/>
    </svg>
);


const CtaSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert(t('contact.form.alert'));
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section 
            id="contact" 
            ref={sectionRef}
            className={`py-20 bg-gray-900 fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{t('contact.title')}</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="text-white flex flex-col justify-center space-y-8">
                        <div className="flex items-start">
                            <LocationMarkerIcon className="w-8 h-8 text-yellow-400 mr-4 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold">{t('contact.address.title')}</h3>
                                <p className="text-gray-400">{t('contact.address.value')}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MailIcon className="w-8 h-8 text-yellow-400 mr-4 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold">{t('contact.email.title')}</h3>
                                <p className="text-gray-400">{t('contact.email.value')}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <TelegramIcon className="w-8 h-8 text-yellow-400 mr-4 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold">{t('contact.telegram.title')}</h3>
                                <a href="https://t.me/fiyzahbot" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">@fiyzahbot</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-300 font-bold mb-2">{t('contact.form.name')}</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:border-yellow-400" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-300 font-bold mb-2">{t('contact.form.email')}</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:border-yellow-400" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-300 font-bold mb-2">{t('contact.form.message')}</label>
                                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:border-yellow-400"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-md hover:bg-yellow-300 transition-colors duration-300">
                                {t('contact.form.send')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
