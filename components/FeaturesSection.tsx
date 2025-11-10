
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LightbulbIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const UsersIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A4 4 0 019 10.354M12 4.354a4 4 0 010 5.292" />
    </svg>
);

const HeartIcon: React.FC<{className?: string}> = ({className}) => (
     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

const FeaturesSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    const features = [
      {
        icon: LightbulbIcon,
        title: t('whyUs.features.innovative.title'),
        description: t('whyUs.features.innovative.description')
      },
      {
        icon: UsersIcon,
        title: t('whyUs.features.expert.title'),
        description: t('whyUs.features.expert.description')
      },
      {
        icon: HeartIcon,
        title: t('whyUs.features.customerCentric.title'),
        description: t('whyUs.features.customerCentric.description')
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
        id="why-us" 
        ref={sectionRef} 
        className={`py-20 bg-gray-900 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t('whyUs.title')}</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{t('whyUs.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg border border-yellow-400/20 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400/10 mb-6">
                <feature.icon className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
