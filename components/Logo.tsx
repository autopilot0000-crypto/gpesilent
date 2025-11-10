
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Logo: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="flex items-center space-x-3">
        <svg
            className="w-10 h-10 text-yellow-400"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FBBF24', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#D97706', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <path
                d="M12 2L4.5 5V11C4.5 16.5 7.7 21.7 12 23C16.3 21.7 19.5 16.5 19.5 11V5L12 2Z"
                className="fill-red-700"
                stroke="url(#goldGradient)"
                strokeWidth="1.5"
            />
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="10"
                fontWeight="bold"
                className="fill-yellow-400"
                dy=".3em"
            >
                $
            </text>
        </svg>
        <div className="flex flex-col">
            <span className="font-bold text-xl tracking-wider text-white">SILENT PROFIT</span>
            <span className="text-xs text-yellow-400 tracking-widest uppercase">{t('logo.tagline')}</span>
        </div>
    </div>
  );
};

export default Logo;
