
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';

const Footer: React.FC = () => {
  const { t, getFontClass } = useTranslations();

  return (
    <footer className={`bg-brand-blue text-white ${getFontClass()}`}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About/Logo Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-brand-gold">M</span>OUHOUSS
            </h3>
            <p className="text-gray-300">
              {t('hero_subtitle')}
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-gold">{t('footer_quick_links')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">{t('nav_about')}</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">{t('nav_services')}</Link></li>
              <li><Link to="/consultations" className="hover:text-brand-gold transition-colors">{t('nav_consultations')}</Link></li>
              <li><Link to="/articles" className="hover:text-brand-gold transition-colors">{t('nav_articles')}</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">{t('nav_contact')}</Link></li>
            </ul>
          </div>
          
          {/* Contact & Social Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-gold">{t('footer_contact_info')}</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 me-3 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                contact@mouhouss-law.com
              </li>
              <li className="flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 me-3 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +213 123 456 789
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-brand-gold">{t('footer_social_media')}</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-brand-gold transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg></a>
                <a href="mailto:contact@mouhouss-law.com" className="text-gray-300 hover:text-brand-gold transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M2.003 5.884L10 11.882l7.997-5.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 6-8-6V16a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mouhouss Ibtissem. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
