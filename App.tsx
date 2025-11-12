
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import { LanguageProvider } from './contexts/LanguageContext';
import RobotSeriesSection from './components/RobotSeriesSection';
import RobotFeaturesSection from './components/RobotFeaturesSection';
import FeaturesSection from './components/FeaturesSection';
import AffiliateSection from './components/AffiliateSection';
import TestimonialsSection from './components/TestimonialsSection';
import HowToJoinSection from './components/HowToJoinSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-black text-gray-200 font-sans antialiased">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <RobotSeriesSection />
          <RobotFeaturesSection />
          <FeaturesSection />
          <AffiliateSection />
          <TestimonialsSection />
          <HowToJoinSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
