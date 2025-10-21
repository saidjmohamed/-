
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';

const Hero: React.FC = () => {
  const { t, getFontClass } = useTranslations();

  return (
    <section className={`relative hero-bg text-white ${getFontClass()}`}>
      <div className="absolute inset-0 bg-brand-blue opacity-80"></div>
      <div className="relative container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 text-center md:text-start rtl:md:text-right">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {t('hero_title')}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0">
            {t('hero_subtitle')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 rtl:sm:space-x-reverse">
            <Link
              to="/consultations"
              className="bg-brand-gold text-brand-blue font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('hero_cta_consult')}
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-lg hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 shadow-lg"
            >
              {t('hero_cta_contact')}
            </Link>
          </div>
        </div>
        <div className="md:w-2/5 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                 <div className="absolute inset-0 border-4 border-brand-gold rounded-full transform rotate-45"></div>
                 <img 
                    src="https://i.ibb.co/7j29x7M/professional-avatar.jpg" 
                    alt="Mouhouss Ibtissem" 
                    className="relative w-full h-full object-cover rounded-full shadow-2xl"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
