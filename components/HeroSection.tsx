
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
            <source src="https://picsum.photos/id/12/1920/1080.mp4" type="video/mp4" />
             Your browser does not support the video tag. I am a cool video.
        </video>
        <div className="relative z-20 container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
                Revolutionize <span className="text-yellow-400">Your Investments</span> with Silent Profit.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300 mb-8" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
                Harness the power of AI and our advanced systems to drive growth, efficiency, and innovation.
            </p>
            <a href="#contact" className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20">
                Get Started
            </a>
        </div>
    </section>
  );
};

export default HeroSection;
