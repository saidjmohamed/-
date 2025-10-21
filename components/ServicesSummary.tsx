
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="mx-auto mb-6 bg-brand-gold/10 text-brand-gold w-20 h-20 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-blue mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSummary: React.FC = () => {
  const { t, getFontClass } = useTranslations();

  const services = [
    {
      title: t('service_1_title'),
      description: t('service_1_desc'),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h4.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V8z" /></svg>,
    },
    {
      title: t('service_2_title'),
      description: t('service_2_desc'),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    },
    {
      title: t('service_3_title'),
      description: t('service_3_desc'),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.894 6.096l.707.707M15.4 6.096l-.707.707M6 11h12a6 6 0 00-12 0z" /></svg>,
    },
    {
      title: t('service_4_title'),
      description: t('service_4_desc'),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    },
    {
      title: t('service_5_title'),
      description: t('service_5_desc'),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    },
  ];

  return (
    <section className={`py-20 bg-white ${getFontClass()}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">{t('services_summary_title')}</h2>
          <div className="w-24 h-1 bg-brand-gold mt-4 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* We only show 5 services, so let's adjust grid for a better layout if needed. Using 3 columns is fine. */}
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;
