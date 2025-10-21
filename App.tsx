
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import ArbitrationPage from './components/pages/ArbitrationPage';
import ConsultationsPage from './components/pages/ConsultationsPage';
import ArticlesPage from './components/pages/ArticlesPage';
import ContactPage from './components/pages/ContactPage';
import AboutPage from './components/pages/AboutPage';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="bg-white text-brand-blue">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/arbitration" element={<ArbitrationPage />} />
              <Route path="/consultations" element={<ConsultationsPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <FloatingWhatsApp />
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
