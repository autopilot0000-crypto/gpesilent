
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HowToJoinSection: React.FC = () => {
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

    return (
        <section 
            id="join" 
            ref={sectionRef} 
            className={`py-20 bg-black fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('join.title')}</h2>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">{t('join.subtitle')}</p>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {/* Step 1 */}
                    <div className="relative p-6 bg-gray-900 rounded-lg border border-gray-800">
                        <div className="absolute -top-5 -left-5 bg-yellow-400 text-black rounded-full h-12 w-12 flex items-center justify-center font-bold text-2xl">01</div>
                        <h3 className="mt-6 text-xl font-bold text-white">{t('join.steps.1.title')}</h3>
                        <p className="text-gray-400 mt-2">{t('join.steps.1.description')}</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative p-6 bg-gray-900 rounded-lg border border-gray-800">
                        <div className="absolute -top-5 -left-5 bg-yellow-400 text-black rounded-full h-12 w-12 flex items-center justify-center font-bold text-2xl">02</div>
                        <h3 className="mt-6 text-xl font-bold text-white">{t('join.steps.2.title')}</h3>
                        <p className="text-gray-400 mt-2">{t('join.steps.2.description')}</p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative p-6 bg-gray-900 rounded-lg border border-gray-800">
                        <div className="absolute -top-5 -left-5 bg-yellow-400 text-black rounded-full h-12 w-12 flex items-center justify-center font-bold text-2xl">03</div>
                        <h3 className="mt-6 text-xl font-bold text-white">{t('join.steps.3.title')}</h3>
                        <p className="text-gray-400 mt-2">{t('join.steps.3.description')}</p>
                    </div>
                </div>

                <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6">
                    <a
                        href="https://t.me/fiyzahbot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20"
                    >
                        {t('join.buttons.contactAdmin')}
                    </a>
                    <a
                        href="https://t.me/SILENTPROFITOFFICIAL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-400 hover:text-black transition-colors duration-300"
                    >
                        {t('join.buttons.joinChannel')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowToJoinSection;
