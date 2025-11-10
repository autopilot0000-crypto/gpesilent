
import React from 'react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 mb-8 md:mb-0">
            <div className="inline-block transform hover:scale-105 transition-transform duration-300">
              <Logo />
            </div>
            <p className="mt-4 text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">{t('footer.quickLinks.title')}</h3>
            <ul>
              <li className="mb-2"><a href="#home" className="hover:text-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5 inline-block">{t('footer.quickLinks.home')}</a></li>
              <li className="mb-2"><a href="#about" className="hover:text-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5 inline-block">{t('footer.quickLinks.about')}</a></li>
              <li className="mb-2"><a href="#services" className="hover:text-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5 inline-block">{t('footer.quickLinks.services')}</a></li>
              <li className="mb-2"><a href="#robots" className="hover:text-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5 inline-block">{t('footer.quickLinks.robots')}</a></li>
              <li className="mb-2"><a href="#affiliate" className="hover:text-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5 inline-block">{t('footer.quickLinks.affiliate')}</a></li>
              <li className="mb-2"><a href="#join" className="hover:text-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5 inline-block">{t('footer.quickLinks.join')}</a></li>
              <li className="mb-2"><a href="#" className="hover:text-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5 inline-block">{t('footer.quickLinks.privacy')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">{t('footer.contact.title')}</h3>
            <ul>
              <li className="mb-2">{t('footer.contact.address')}</li>
              <li className="mb-2">contact@silentprofit.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">{t('footer.follow.title')}</h3>
            <div className="flex space-x-4">
               <a href="https://t.me/SILENTPROFITOFFICIAL" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.17.91-.494 1.208-.822 1.23-.696.047-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.04-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.034-.276.352-.566.94-.862 3.407-1.734 5.838-2.98 6.929-3.456.995-.429 1.86-.81 2.299-.813zm.022 1.023c-.224 0-.442.02-.652.054-2.433.393-6.143 2.596-7.098 3.232-.34.227-.414.435-.436.528-.024.1.03.204.138.27.107.065.234.096.348.096.402 0 .79-.14 1.228-.41 3.483-2.2 4.92-3.13 5.093-3.136.173-.008.276.045.276.16 0 .09-.048.192-.108.243-.058.05-.756.634-2.288 1.89-1.952 1.6-2.565 2.1-2.45 2.68.076.39.317.514.652.514.43 0 .86-.217 1.396-.59 1.15-.81 1.813-1.28 2.052-1.46.592-.447.99-.74 1.135-.74.225 0 .49.117.49.266 0 .185-.018.48-.054.742-.143 1.02-.634 3.93-1.01 6.13-.105.62.107.82.26.84.093.012.24-.012.407-.09.255-.12.47-.26.636-.42.22-.21.39-.42.51-.64.22-.4.41-.83.56-1.28l.45-1.31c.32-1.02.51-2.02.51-2.02.04-.24-.04-.48-.22-.6z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          <div className="mt-6 max-w-4xl mx-auto text-gray-500 text-xs px-4">
            <p className="font-bold mb-2 uppercase tracking-wider">{t('footer.disclaimer.title')}</p>
            <p>
              {t('footer.disclaimer.text')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
