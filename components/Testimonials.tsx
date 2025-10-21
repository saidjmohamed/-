
import React, { useState, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';

const Testimonials: React.FC = () => {
  const { t, getFontClass } = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: t('testimonial_1'),
      author: t('testimonial_1_author'),
    },
    {
      quote: t('testimonial_2'),
      author: t('testimonial_2_author'),
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={`py-20 bg-brand-blue/5 ${getFontClass()}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">{t('testimonials_title')}</h2>
          <div className="w-24 h-1 bg-brand-gold mt-4 mx-auto"></div>
        </div>
        <div className="relative max-w-3xl mx-auto h-56">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-xl italic text-brand-blue/80">
                  {testimonial.quote}
                </p>
                <p className="mt-4 font-bold text-brand-gold text-lg">
                  &mdash; {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-brand-gold' : 'bg-brand-blue/20'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
