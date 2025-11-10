
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';
import RobotSeriesSection from './components/RobotSeriesSection';
import RobotFeaturesSection from './components/RobotFeaturesSection';
import HowToJoinSection from './components/HowToJoinSection';

const App: React.FC = () => {
  return (
    <div className="bg-black text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <RobotSeriesSection />
        <RobotFeaturesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <HowToJoinSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
