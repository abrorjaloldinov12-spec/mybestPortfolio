import React from 'react';
import { ArrowUp, Download } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface FooterProps {
  onOpenZipModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenZipModal }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020408] border-t border-slate-900 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand lockup */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
              <img
                src="/assets/aistudio/image_ffd23804.png"
                alt="Abror Jaloldinov Logo"
                className="w-full h-full object-cover rounded-full bg-[#030712]"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-display">ABROR JALOLDINOV</div>
              <div className="text-[10px] font-mono text-cyan-400">FRONTEND DEVELOPER · 2+ YRS</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              {t.nav.about}
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              {t.nav.projects}
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              {t.nav.skills}
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">
              {t.nav.experience}
            </a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">
              {t.nav.services}
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenZipModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.nav.downloadZip}</span>
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer"
              aria-label={t.footer.backToTop}
            >
              <ArrowUp className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Quiet copyright info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Abror Jaloldinov. {t.footer.rights}
          </div>
          <div className="text-slate-400">
            {t.footer.developedBy} · {t.footer.experienceYears}
          </div>
        </div>
      </div>
    </footer>
  );
};
