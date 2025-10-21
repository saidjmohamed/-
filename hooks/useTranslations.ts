
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations, TranslationKeys } from '../data/translations';
import { Language } from '../types';

export const useTranslations = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }

  const { language } = context;

  const t = (key: TranslationKeys) => {
    return translations[language][key] || key;
  };

  const getFontClass = () => {
    return language === Language.AR ? 'font-cairo' : 'font-sans';
  }

  return { t, language, setLanguage: context.setLanguage, getFontClass };
};
