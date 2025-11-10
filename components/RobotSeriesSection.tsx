
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const RobotIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25H18.75M12 11.25H18.75M12 14.25H18.75M5.25 8.25V17.25M5.25 17.25H9M5.25 17.25L3 15.75M9 17.25L10.5 15.75M5.25 5.25V8.25M5.25 5.25H9M5.25 5.25L3 6.75M9 5.25L10.5 6.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 3.75H9V2.25H15V3.75Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12.75H1.5V11.25H3.75V12.75Z" />
    </svg>
);


const RobotSeriesSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    const series = [
        {
            name: "GPE V3",
            description: t('robotSeries.series.gpev3.description')
        },
        {
            name: "GPE V4",
            description: t('robotSeries.series.gpev4.description')
        },
        {
            name: "Titan Edition",
            description: t('robotSeries.series.titan.description')
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
            id="robots" 
            ref={sectionRef} 
            className={`py-20 bg-black fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{t('robotSeries.title')}</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{t('robotSeries.subtitle')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {series.map((item, index) => (
                        <div key={index} className="bg-gray-900 p-8 rounded-lg border border-yellow-400/20 shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                             <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400/10 mb-6 mx-auto">
                                <RobotIcon className="h-8 w-8 text-yellow-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">{item.name}</h3>
                            <p className="text-gray-300">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RobotSeriesSection;
