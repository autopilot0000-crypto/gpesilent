
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AffiliateSection: React.FC = () => {
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
            id="affiliate" 
            ref={sectionRef} 
            className={`py-20 bg-black text-white fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t('affiliate.title.part1')} <span className="text-yellow-400">{t('affiliate.title.part2')}</span>
                </h2>
                <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                    {t('affiliate.subtitle')}
                </p>
                <div className="bg-gray-900 max-w-2xl mx-auto p-8 rounded-lg border border-yellow-400/20 shadow-lg">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">{t('affiliate.whyJoin.title')}</h3>
                    <ul className="text-gray-300 space-y-3 text-left list-disc list-inside">
                        <li>{t('affiliate.whyJoin.points.0')}</li>
                        <li>{t('affiliate.whyJoin.points.1')}</li>
                        <li>{t('affiliate.whyJoin.points.2')}</li>
                        <li>{t('affiliate.whyJoin.points.3')}</li>
                    </ul>
                    <a
                        href="https://ultgo.com/6bumIb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20"
                    >
                        {t('affiliate.buttonText')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AffiliateSection;
