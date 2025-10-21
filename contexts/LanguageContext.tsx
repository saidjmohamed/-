
import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(Language.AR);

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    if (lang === Language.AR) {
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
    } else if (lang === Language.FR) {
        document.documentElement.lang = 'fr';
        document.documentElement.dir = 'ltr';
    } else {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    }
  }, []);

  useEffect(() => {
    handleSetLanguage(Language.AR);
  }, [handleSetLanguage]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
