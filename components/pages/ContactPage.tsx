
import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';

const ContactPage: React.FC = () => {
  const { t, getFontClass } = useTranslations();

  return (
    <div className={`py-20 bg-gray-50 ${getFontClass()}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-blue">{t('contact_title')}</h1>
          <p className="text-lg text-gray-600 mt-2">{t('contact_subtitle')}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-xl">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input type="text" placeholder={t('contact_name')} className="w-full p-3 border rounded-lg focus:ring-brand-gold focus:border-brand-gold" />
                <input type="email" placeholder={t('contact_email')} className="w-full p-3 border rounded-lg focus:ring-brand-gold focus:border-brand-gold" />
              </div>
              <div className="mb-6">
                 <input type="text" placeholder={t('contact_subject')} className="w-full p-3 border rounded-lg focus:ring-brand-gold focus:border-brand-gold" />
              </div>
              <div className="mb-6">
                <textarea placeholder={t('contact_message')} rows={6} className="w-full p-3 border rounded-lg focus:ring-brand-gold focus:border-brand-gold"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-gold text-brand-blue font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors shadow-lg">
                {t('contact_send')}
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="lg:w-1/3">
            <div className="bg-brand-blue text-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-brand-gold mb-4">{t('footer_contact_info')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 me-3 mt-1 text-brand-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>123 Legal Avenue, Algiers, Algeria</span>
                </li>
                 <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 me-3 text-brand-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>contact@mouhouss-law.com</span>
                </li>
                 <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 me-3 text-brand-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>+213 123 456 789</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204529.546377317!2d2.910080644321035!3d36.75995475354929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb21da3903667%3A0x444b752458a74e3b!2sAlgiers!5e0!3m2!1sen!2sdz!4v1620836566085!5m2!1sen!2sdz" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy"
                title="Office Location"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
