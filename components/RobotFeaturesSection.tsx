
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


const RobotFeaturesSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    const features = [
        {
            title: t('robotFeatures.features.autoGpe.title'),
            description: t('robotFeatures.features.autoGpe.description'),
            points: [
                t('robotFeatures.features.autoGpe.points.0'),
                t('robotFeatures.features.autoGpe.points.1'),
                t('robotFeatures.features.autoGpe.points.2')
            ]
        },
        {
            title: t('robotFeatures.features.zeroRisk.title'),
            description: t('robotFeatures.features.zeroRisk.description'),
            points: [
                t('robotFeatures.features.zeroRisk.points.0'),
                t('robotFeatures.features.zeroRisk.points.1'),
                t('robotFeatures.features.zeroRisk.points.2'),
                t('robotFeatures.features.zeroRisk.points.3')
            ]
        },
        {
            title: t('robotFeatures.features.autoProfitLock.title'),
            description: t('robotFeatures.features.autoProfitLock.description'),
            points: [
                t('robotFeatures.features.autoProfitLock.points.0'),
                t('robotFeatures.features.autoProfitLock.points.1'),
                t('robotFeatures.features.autoProfitLock.points.2'),
                t('robotFeatures.features.autoProfitLock.points.3')
            ]
        },
        {
            title: t('robotFeatures.features.smartLayering.title'),
            description: t('robotFeatures.features.smartLayering.description'),
            points: [
                t('robotFeatures.features.smartLayering.points.0'),
                t('robotFeatures.features.smartLayering.points.1'),
                t('robotFeatures.features.smartLayering.points.2'),
                t('robotFeatures.features.smartLayering.points.3')
            ]
        },
        {
            title: t('robotFeatures.features.spreadFilter.title'),
            description: t('robotFeatures.features.spreadFilter.description'),
            points: [
                t('robotFeatures.features.spreadFilter.points.0'),
                t('robotFeatures.features.spreadFilter.points.1'),
                t('robotFeatures.features.spreadFilter.points.2'),
                t('robotFeatures.features.spreadFilter.points.3')
            ]
        },
        {
            title: t('robotFeatures.features.autoTrendReversal.title'),
            description: t('robotFeatures.features.autoTrendReversal.description'),
            points: [
                t('robotFeatures.features.autoTrendReversal.points.0'),
                t('robotFeatures.features.autoTrendReversal.points.1'),
                t('robotFeatures.features.autoTrendReversal.points.2'),
                t('robotFeatures.features.autoTrendReversal.points.3')
            ]
        },
        {
            title: t('robotFeatures.features.newsProtection.title'),
            description: t('robotFeatures.features.newsProtection.description'),
            points: [
                t('robotFeatures.features.newsProtection.points.0'),
                t('robotFeatures.features.newsProtection.points.1'),
                t('robotFeatures.features.newsProtection.points.2'),
                t('robotFeatures.features.newsProtection.points.3')
            ]
        },
        {
            title: t('robotFeatures.features.manualPanel.title'),
            description: t('robotFeatures.features.manualPanel.description'),
            points: [
                t('robotFeatures.features.manualPanel.points.0'),
                t('robotFeatures.features.manualPanel.points.1'),
                t('robotFeatures.features.manualPanel.points.2'),
                t('robotFeatures.features.manualPanel.points.3')
            ]
        },
        {
            title: t('robotFeatures.features.bonus.title'),
            description: t('robotFeatures.features.bonus.description'),
            points: [
                t('robotFeatures.features.bonus.points.0'),
                t('robotFeatures.features.bonus.points.1'),
                t('robotFeatures.features.bonus.points.2'),
                t('robotFeatures.features.bonus.points.3')
            ]
        },
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
            id="robot-features" 
            ref={sectionRef} 
            className={`py-20 bg-gray-900 fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{t('robotFeatures.title')}</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                        {t('robotFeatures.subtitle')}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg border border-yellow-400/20 shadow-lg flex flex-col">
                            <h3 className="text-xl font-bold text-yellow-400 mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">{feature.description}</p>
                            <ul className="space-y-2">
                                {feature.points.map((point, pIndex) => (
                                    <li key={pIndex} className="flex items-center text-gray-300 text-sm">
                                        <CheckIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RobotFeaturesSection;
