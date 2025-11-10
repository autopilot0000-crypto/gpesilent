
import React, { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
    </svg>
);


const LanguageSelector: React.FC = () => {
    const { language, setLanguage, languages } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    const selectedLanguage = languages.find(lang => lang.code === language);

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-1 text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                <GlobeIcon className="w-5 h-5" />
                <span className="text-sm font-medium">{selectedLanguage?.code.toUpperCase()}</span>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50">
                    <ul className="py-1">
                        {languages.map(lang => (
                             <li key={lang.code}>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setLanguage(lang.code);
                                        setIsOpen(false);
                                    }}
                                    className={`block px-4 py-2 text-sm ${language === lang.code ? 'text-yellow-400 bg-gray-800' : 'text-gray-300'} hover:bg-gray-800 hover:text-yellow-400`}
                                >
                                    {lang.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t('header.home'), href: '#home' },
    { name: t('header.about'), href: '#about' },
    { name: t('header.services'), href: '#services' },
    { name: t('header.robots'), href: '#robots' },
    { name: t('header.features'), href: '#robot-features' },
    { name: t('header.affiliate'), href: '#affiliate' },
    { name: t('header.testimonials'), href: '#testimonials' },
    { name: t('header.join'), href: '#join' },
    { name: t('header.contact'), href: '#contact' },
  ];

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <Logo />
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm transform hover:-translate-y-0.5 whitespace-nowrap">
              {link.name}
            </a>
          ))}
          <LanguageSelector />
        </div>
        <div className="hidden lg:block ml-4">
            <a href="#join" className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                {t('header.getStarted')}
            </a>
        </div>
        <div className="lg:hidden flex items-center space-x-4">
           <LanguageSelector />
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none transform hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-105">
                {link.name}
              </a>
            ))}
             <a href="#join" onClick={() => setIsOpen(false)} className="bg-yellow-400 text-black font-bold py-2 px-4 my-2 rounded-md hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                {t('header.getStarted')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
