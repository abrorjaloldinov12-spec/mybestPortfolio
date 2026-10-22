import React from 'react';
import { ArrowDown, Sparkles, Send, Download } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Hero3DCanvas } from './Hero3DCanvas';

interface HeroProps {
  onOpenZipModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenZipModal }) => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#030712] bg-grid-cyber bg-radial-vignette"
    >
      {/* 3D WebGL Canvas Layer */}
      <Hero3DCanvas />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        {/* Availability status + 2+ Years Exp Bar (Clean unboxed text metadata) */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 mb-8 shadow-[0_0_20px_rgba(6,182,212,0.15)] animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
          </span>
          <span className="text-xs font-mono text-cyan-300 tracking-wider uppercase">
            {t.hero.statusAvailable}
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-xs font-mono text-slate-300 font-semibold tracking-wider">
            {t.hero.experienceBadge}
          </span>
        </div>

        {/* Name and Professional Title */}
        <div className="mb-4">
          <h2 className="text-sm sm:text-base font-mono tracking-[0.25em] text-cyan-400 uppercase font-semibold mb-2">
            {t.hero.name}
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white uppercase text-balance max-w-5xl leading-[1.05]">
            <span className="text-chrome block">{t.hero.headline}</span>
          </h1>
        </div>

        {/* Professional Title & Subtitle */}
        <p className="text-lg sm:text-2xl font-display font-medium text-cyan-200/90 mb-5 max-w-3xl">
          {t.hero.title}
        </p>

        {/* Narrative Description */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-10 text-balance">
          {t.hero.description}
        </p>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          {/* Explore Projects Button */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-display font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>{t.hero.exploreBtn}</span>
            <Sparkles className="w-4 h-4 text-cyan-100 group-hover:rotate-12 transition-transform" />
          </a>

          {/* Connect Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-slate-200 glass-panel hover:bg-slate-800/80 hover:text-white hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Send className="w-4 h-4 text-cyan-400" />
            <span>{t.hero.connectBtn}</span>
          </a>

          {/* ZIP Code Download Button */}
          <button
            type="button"
            onClick={onOpenZipModal}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-medium text-cyan-300 bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>{t.hero.downloadZipBtn}</span>
          </button>
        </div>

        {/* Holographic Spec Strip with Brand Insignia */}
        <div className="w-full max-w-4xl glass-panel rounded-2xl p-5 sm:p-6 border border-cyan-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-center">
            {/* User Custom Cyber Logo preview */}
            <div className="flex items-center gap-3.5 sm:col-span-1 justify-center sm:justify-start border-b sm:border-b-0 sm:border-r border-slate-800 pb-4 sm:pb-0 sm:pr-4">
              <div className="relative w-12 h-12 rounded-xl p-[2px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <img
                  src="/assets/aistudio/image_ffd23804.png"
                  alt="Abror Jaloldinov Futuristic Logo"
                  className="w-full h-full object-cover rounded-[10px] bg-[#030712]"
                />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white font-display">ABROR.DEV</div>
                <div className="text-[10px] font-mono text-cyan-400">2026 EDITION</div>
              </div>
            </div>

            {/* Spec 1 */}
            <div className="text-center sm:text-left">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                {t.hero.specs.focus}
              </div>
              <div className="text-sm font-semibold text-slate-100 font-display">
                {t.hero.specs.focusVal}
              </div>
            </div>

            {/* Spec 2 */}
            <div className="text-center sm:text-left">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                {t.hero.specs.speed}
              </div>
              <div className="text-sm font-semibold text-cyan-300 font-display">
                60 FPS WebGL · Smooth
              </div>
            </div>

            {/* Spec 3 */}
            <div className="text-center sm:text-left">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                {t.hero.specs.stack}
              </div>
              <div className="text-sm font-semibold text-slate-100 font-display truncate">
                {t.hero.specs.stackVal}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors">
          <span className="text-[11px] font-mono tracking-widest uppercase">
            {t.hero.scrollDown}
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </div>
      </div>
    </section>
  );
};
