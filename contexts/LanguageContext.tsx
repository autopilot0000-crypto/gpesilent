
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from '../translations';

type LanguageCode = 'en' | 'ms' | 'id' | 'vi' | 'zh' | 'ja' | 'ru' | 'hi';

interface Language {
    code: LanguageCode;
    name: string;
}

interface LanguageContextType {
    language: LanguageCode;
    setLanguage: (language: LanguageCode) => void;
    t: (key: string) => string;
    languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<LanguageCode>('en');

    const languages: Language[] = [
        { code: 'en', name: 'English' },
        { code: 'ms', name: 'Bahasa Melayu' },
        { code: 'id', name: 'Bahasa Indonesia' },
        { code: 'vi', name: 'Tiếng Việt' },
        { code: 'zh', name: '中文' },
        { code: 'ja', name: '日本語' },
        { code: 'ru', name: 'Русский' },
        { code: 'hi', name: 'हिन्दी' },
    ];

    const t = (key: string): string => {
        const keys = key.split('.');
        let result: any = translations;
        for (const k of keys) {
            result = result?.[k];
            if (result === undefined) {
                return key; // Return key if not found
            }
        }
        return result?.[language] || result?.['en'] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, languages }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
