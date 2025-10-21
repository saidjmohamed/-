
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t, getFontClass } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/about", label: t('nav_about') },
    { to: "/services", label: t('nav_services') },
    { to: "/arbitration", label: t('nav_arbitration') },
    { to: "/consultations", label: t('nav_consultations') },
    { to: "/articles", label: t('nav_articles') },
    { to: "/contact", label: t('nav_contact') },
  ];

  const activeLinkClass = "text-brand-gold";
  const inactiveLinkClass = "text-white hover:text-brand-gold transition-colors duration-300";

  return (
    <header className={`sticky top-0 z-50 bg-brand-blue/95 backdrop-blur-sm shadow-lg ${getFontClass()}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-white">
          <span className="text-brand-gold">M</span>OUHOUSS
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} font-semibold`}
            >
              {link.label}
            </NavLink>
          ))}
          <LanguageSwitcher />
        </nav>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none ms-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-blue">
          <nav className="flex flex-col items-center px-4 pt-2 pb-4 space-y-3">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} font-semibold w-full text-center py-2`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
