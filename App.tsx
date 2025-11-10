
import React, { Suspense } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import { LanguageProvider } from './contexts/LanguageContext';
import LazyLoad from './components/LazyLoad';

// Lazy load components that are typically below the fold
const RobotSeriesSection = React.lazy(() => import('./components/RobotSeriesSection'));
const RobotFeaturesSection = React.lazy(() => import('./components/RobotFeaturesSection'));
const FeaturesSection = React.lazy(() => import('./components/FeaturesSection'));
const AffiliateSection = React.lazy(() => import('./components/AffiliateSection'));
const TestimonialsSection = React.lazy(() => import('./components/TestimonialsSection'));
const HowToJoinSection = React.lazy(() => import('./components/HowToJoinSection'));
const CtaSection = React.lazy(() => import('./components/CtaSection'));
const Footer = React.lazy(() => import('./components/Footer'));

// A placeholder to show while lazy components are loading their code
const SectionLoader: React.FC = () => (
    <div className="w-full h-screen flex justify-center items-center bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-400"></div>
    </div>
);


const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-black text-gray-200 font-sans antialiased">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />

          <Suspense fallback={<SectionLoader />}>
            <LazyLoad>
              <RobotSeriesSection />
            </LazyLoad>
            <LazyLoad>
              <RobotFeaturesSection />
            </LazyLoad>
            <LazyLoad>
              <FeaturesSection />
            </LazyLoad>
            <LazyLoad>
              <AffiliateSection />
            </LazyLoad>
            <LazyLoad>
              <TestimonialsSection />
            </LazyLoad>
            <LazyLoad>
              <HowToJoinSection />
            </LazyLoad>
            <LazyLoad>
              <CtaSection />
            </LazyLoad>
          </Suspense>
        </main>
        
        <Suspense fallback={null}>
            <LazyLoad placeholderHeight="250px">
                <Footer />
            </LazyLoad>
        </Suspense>
      </div>
    </LanguageProvider>
  );
};

export default App;
