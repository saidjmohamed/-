
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';

const AboutSummary: React.FC = () => {
  const { t, getFontClass } = useTranslations();

  return (
    <section className={`py-20 bg-gray-50 ${getFontClass()}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://i.ibb.co/dK5vV1b/legal-office.jpg" 
              alt="Legal consultancy office"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-start rtl:md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              {t('about_summary_title')}
            </h2>
            <div className="w-24 h-1 bg-brand-gold mb-6 mx-auto md:mx-0"></div>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('about_summary_text')}
            </p>
            <Link
              to="/about"
              className="text-brand-gold font-semibold hover:underline"
            >
              {t('about_summary_cta')} &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
