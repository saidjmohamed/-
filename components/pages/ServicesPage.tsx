
import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';

const ServicesPage: React.FC = () => {
  const { t, getFontClass } = useTranslations();

  return (
    <div className={`py-20 bg-white ${getFontClass()}`}>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">{t('nav_services')}</h1>
        <p className="text-lg text-gray-600">Detailed information about our services will be available here.</p>
      </div>
    </div>
  );
};

export default ServicesPage;
