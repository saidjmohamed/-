
import React from 'react';
import Hero from '../Hero';
import AboutSummary from '../AboutSummary';
import ServicesSummary from '../ServicesSummary';
import Testimonials from '../Testimonials';
import ArticlesSummary from '../ArticlesSummary';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutSummary />
      <ServicesSummary />
      <Testimonials />
      <ArticlesSummary />
    </div>
  );
};

export default HomePage;
