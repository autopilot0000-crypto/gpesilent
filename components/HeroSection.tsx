
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AnimatedCounter: React.FC<{ end: number; duration?: number; isVisible: boolean; suffix?: string; label: string; }> = ({ end, duration = 2000, isVisible, suffix = '', label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const totalFrames = Math.round(duration / (1000 / 60)); // 60fps
        const increment = end / totalFrames;

        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(counter);
            } else {
                setCount(Math.ceil(start));
            }
        }, 1000 / 60);

        return () => clearInterval(counter);
    }, [isVisible, end, duration]);

    return (
        <div className="text-center">
            <span className="text-4xl md:text-5xl font-bold text-yellow-400">
                {count.toLocaleString()}
                {suffix}
            </span>
            <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">{label}</p>
        </div>
    );
};

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  const stats = [
    { end: 5, suffix: '+', label: t('hero.stats.experience') },
    { end: 1000, suffix: '+', label: t('hero.stats.clients') },
    { end: 98, suffix: '%', label: t('hero.stats.success') }
  ];

  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
            <source src="https://picsum.photos/id/12/1920/1080.mp4" type="video/mp4" />
             Your browser does not support the video tag. I am a cool video.
        </video>
        <div className={`relative z-20 container mx-auto px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
                    {t('hero.title.part1')} <span className="text-yellow-400">{t('hero.title.part2')}</span> {t('hero.title.part3')}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300 mb-8" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
                    {t('hero.subtitle')}
                </p>
                <a href="#contact" className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20">
                    {t('hero.getStarted')}
                </a>

                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <AnimatedCounter key={index} {...stat} isVisible={isVisible} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
