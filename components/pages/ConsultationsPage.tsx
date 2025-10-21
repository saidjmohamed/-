
import React, { useState } from 'react';
import { useTranslations } from '../../hooks/useTranslations';

type FormData = {
  consultationType: string;
  name: string;
  email: string;
  topic: string;
};

const ConsultationsPage: React.FC = () => {
  const { t, getFontClass } = useTranslations();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    consultationType: '',
    name: '',
    email: '',
    topic: '',
  });

  const handleNextStep = () => {
    // Add validation here if needed
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const consultationTypes = [
      t('consultation_type_1'),
      t('consultation_type_2'),
      t('consultation_type_3'),
  ];

  return (
    <div className={`py-20 bg-gray-50 ${getFontClass()}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-brand-blue text-center mb-6">{t('consultation_title')}</h1>

          {/* Step 1: Choose Consultation Type */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">{t('consultation_step_1')}</h2>
              <select name="consultationType" value={formData.consultationType} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-brand-gold focus:border-brand-gold">
                <option value="">Select a type...</option>
                {consultationTypes.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
              <button onClick={handleNextStep} disabled={!formData.consultationType} className="w-full mt-6 bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors disabled:bg-gray-400">
                {t('consultation_next_step')}
              </button>
            </div>
          )}

          {/* Step 2: User Information */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">{t('consultation_step_2')}</h2>
              <div className="space-y-4">
                <input type="text" name="name" placeholder={t('contact_name')} value={formData.name} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-brand-gold focus:border-brand-gold" />
                <input type="email" name="email" placeholder={t('contact_email')} value={formData.email} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-brand-gold focus:border-brand-gold" />
                <textarea name="topic" placeholder={t('consultation_topic')} value={formData.topic} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:ring-brand-gold focus:border-brand-gold" rows={4}></textarea>
              </div>
              <div className="flex justify-between mt-6">
                <button onClick={handlePrevStep} className="bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-400 transition-colors">Back</button>
                <button onClick={handleNextStep} disabled={!formData.name || !formData.email || !formData.topic} className="bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors disabled:bg-gray-400">
                  {t('consultation_next_step')}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Preview */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">{t('consultation_step_3')}</h2>
              <div className="bg-gray-100 p-6 rounded-lg space-y-3">
                <h3 className="text-lg font-bold text-brand-blue">{t('consultation_preview_title')}</h3>
                <p><strong>{t('consultation_preview_type')}</strong> {formData.consultationType}</p>
                <p><strong>{t('consultation_preview_name')}</strong> {formData.name}</p>
                <p><strong>{t('consultation_preview_email')}</strong> {formData.email}</p>
                <p><strong>{t('consultation_preview_topic')}</strong> {formData.topic}</p>
              </div>
              <div className="flex justify-between mt-6">
                <button onClick={handlePrevStep} className="bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-400 transition-colors">Back</button>
                <button onClick={handleNextStep} className="bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
                  {t('consultation_next_step')}
                </button>
              </div>
            </div>
          )}
          
          {/* Step 4: Payment */}
          {step === 4 && (
            <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">{t('consultation_step_4')}</h2>
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg mb-6" role="alert">
                  <p className="font-bold">{t('consultation_payment_alert')}</p>
                </div>
                <button onClick={() => alert("Redirecting to payment gateway...")} className="w-full bg-brand-gold text-brand-blue font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors shadow-lg">
                  {t('consultation_payment_cta')}
                </button>
                 <button onClick={handlePrevStep} className="mt-4 text-gray-600 hover:underline">Back</button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ConsultationsPage;
