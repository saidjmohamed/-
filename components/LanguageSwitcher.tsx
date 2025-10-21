
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { Language } from '../types';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslations();

  const languages: { code: Language; label: string }[] = [
    { code: Language.AR, label: 'AR' },
    { code: Language.FR, label: 'FR' },
    { code: Language.EN, label: 'EN' },
  ];

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
            language === lang.code
              ? 'bg-brand-gold text-brand-blue'
              : 'text-white hover:bg-brand-gold/20'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
