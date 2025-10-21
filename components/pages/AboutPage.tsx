
import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';

const AboutPage: React.FC = () => {
  const { t, getFontClass } = useTranslations();

  return (
    <div className={`py-20 bg-white ${getFontClass()}`}>
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-brand-blue text-center mb-4">{t('nav_about')}</h1>
        <div className="w-24 h-1 bg-brand-gold mb-12 mx-auto"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="md:w-1/3">
                <img 
                src="https://i.ibb.co/7j29x7M/professional-avatar.jpg" 
                alt="Mouhouss Ibtissem" 
                className="rounded-full shadow-2xl mx-auto"
                />
            </div>
            <div className="md:w-2/3">
                <p className="text-lg text-gray-700 leading-relaxed">
                {t('about_summary_text')} This section will be expanded with a full professional biography, detailing the academic background, key career milestones, significant cases, publications, and professional affiliations. It will highlight the depth of experience in international trade law, arbitration, and investment law.
                </p>
            </div>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-brand-blue border-b-2 border-brand-gold/50 pb-2">Our Philosophy</h2>
            <p>
                We believe in a client-centric approach, where understanding the unique challenges and objectives of each client is paramount. Our philosophy is built on three pillars: integrity, diligence, and strategic thinking. We are committed to providing not just legal answers, but comprehensive solutions that align with your long-term goals.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue border-b-2 border-brand-gold/50 pb-2">Areas of Expertise</h2>
            <ul className="list-disc list-inside space-y-2 ps-4">
                <li>International Commercial Arbitration</li>
                <li>Cross-Border Litigation and Dispute Resolution</li>
                <li>Foreign Direct Investment Law</li>
                <li>Corporate and Commercial Contracts</li>
                <li>Intellectual Property Protection</li>
                <li>International Trade & Customs Law</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
