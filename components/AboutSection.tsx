
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const AboutSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    const coreValues = [
        {
            name: t('about.values.innovation.name'),
            description: t('about.values.innovation.description')
        },
        {
            name: t('about.values.integrity.name'),
            description: t('about.values.integrity.description')
        },
        {
            name: t('about.values.excellence.name'),
            description: t('about.values.excellence.description')
        }
    ];

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
            id="about" 
            ref={sectionRef} 
            className={`py-20 bg-black fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('about.title.part1')} <span className="text-yellow-400">{t('about.title.part2')}</span></h2>
                        <p className="text-lg text-gray-400 mb-6">
                           {t('about.paragraph1')}
                        </p>
                        <p className="text-lg text-gray-400">
                           {t('about.paragraph2')}
                        </p>
                    </div>
                    <div>
                        <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400/20">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('about.values.title')}</h3>
                            <ul className="space-y-5">
                                {coreValues.map(value => (
                                    <li key={value.name} className="flex items-start">
                                        <CheckCircleIcon className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-white">{value.name}</h4>
                                            <p className="text-gray-400">{value.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
