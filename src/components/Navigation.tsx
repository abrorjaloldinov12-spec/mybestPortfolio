import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../types';

interface NavigationProps {
  onOpenZipModal: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenZipModal }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'services', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'projects', label: t.nav.projects, href: '#projects' },
    { id: 'skills', label: t.nav.skills, href: '#skills' },
    { id: 'experience', label: t.nav.experience, href: '#experience' },
    { id: 'services', label: t.nav.services, href: '#services' },
    { id: 'contact', label: t.nav.contact, href: '#contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#030712]/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with user's custom cyber logo image */}
          <a
            href="#home"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="Abror Jaloldinov Portfolio Home"
          >
            <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <img
                src="/assets/aistudio/image_ffd23804.png"
                alt="Abror Jaloldinov Brand Logo"
                className="w-full h-full object-cover rounded-full bg-[#030712]"
                onError={(e) => {
                  // Fallback letter logo if image path isn't reached
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full rounded-full bg-[#030712] flex items-center justify-center font-bold text-cyan-400 text-sm';
                    fallback.innerText = 'A';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white font-display group-hover:text-cyan-400 transition-colors">
                ABROR JALOLDINOV
              </span>
              <span className="text-[10px] tracking-wider font-mono text-cyan-400/90 -mt-0.5">
                CREATIVE TECH · 2026
              </span>
            </div>
          </a>

          {/* Zone 2: Concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (ZIP Download & Language Switcher) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div 
              className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono"
              role="group"
              aria-label="Language Selector"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400 ml-1.5 mr-1" />
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    language === item.code
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  aria-pressed={language === item.code}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Download ZIP Code Button */}
            <button
              type="button"
              onClick={onOpenZipModal}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-cyan-200 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400/60 shadow-[0_0_18px_rgba(6,182,212,0.2)] transition-all cursor-pointer whitespace-nowrap shrink-0"
              title={t.nav.downloadZip}
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.nav.downloadZip}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#030712]/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8">
          <nav className="flex flex-col gap-4 text-base font-medium">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-slate-200 hover:text-cyan-400 border-b border-slate-900"
            >
              {t.nav.home}
            </a>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-slate-200 hover:text-cyan-400 border-b border-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 flex flex-col gap-4 border-t border-slate-900">
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Language / Til / Язык</span>
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLanguage(item.code);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                      language === item.code
                        ? 'bg-cyan-500 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                        : 'text-slate-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Download ZIP */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenZipModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <Download className="w-4 h-4" />
              <span>{t.nav.downloadZip}</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
