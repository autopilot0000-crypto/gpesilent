
import React, { useState } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Robots', href: '#robots' },
    { name: 'Features', href: '#robot-features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Join', href: '#join' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm">
              {link.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
            <a href="#join" className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-300 transition-all duration-300">
                Get Started
            </a>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
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
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">
                {link.name}
              </a>
            ))}
             <a href="#join" onClick={() => setIsOpen(false)} className="bg-yellow-400 text-black font-bold py-2 px-4 my-2 rounded-md hover:bg-yellow-300 transition-all duration-300">
                Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
