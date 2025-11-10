
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Icons
const ConsultationIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16h2.5" />
    </svg>
);

const TrainingIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
    </svg>
);

const SupportIcon: React.FC<{className?: string}> = ({className}) => (
     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);


const ServicesSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    const services = [
      {
        icon: ConsultationIcon,
        title: t('services.services.consultation.title'),
        description: t('services.services.consultation.description')
      },
      {
        icon: TrainingIcon,
        title: t('services.services.training.title'),
        description: t('services.services.training.description')
      },
      {
        icon: SupportIcon,
        title: t('services.services.support.title'),
        description: t('services.services.support.description')
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
        id="services" 
        ref={sectionRef} 
        className={`py-20 bg-gray-900 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t('services.title')}</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg border border-yellow-400/20 shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col hover:shadow-xl hover:shadow-yellow-400/10 hover:border-yellow-400/50">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400/10 mb-6 mx-auto">
                <service.icon className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">{service.title}</h3>
              <p className="text-gray-400 text-center flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
