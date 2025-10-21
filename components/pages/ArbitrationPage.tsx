
import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';

const ArbitrationPage: React.FC = () => {
  const { t, getFontClass } = useTranslations();

  return (
    <div className={`py-20 bg-white ${getFontClass()}`}>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">{t('nav_arbitration')}</h1>
        <p className="text-lg text-gray-600">Information about international commercial arbitration services and a downloadable CV will be here.</p>
         <button className="mt-8 bg-brand-gold text-brand-blue font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg">
            Download Arbitration CV (PDF)
        </button>
      </div>
    </div>
  );
};

export default ArbitrationPage;
