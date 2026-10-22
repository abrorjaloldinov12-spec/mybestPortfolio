import React from 'react';
import { 
  Code2, 
  Palette, 
  Sparkles, 
  Smartphone, 
  Boxes, 
  Gauge, 
  Layers
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const interestIcons = [
    Code2,
    Palette,
    Sparkles,
    Smartphone,
    Boxes,
    Gauge,
  ];

  return (
    <section id="about" className="relative py-28 bg-[#02050f] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center sm:text-left">
          <div className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-semibold mb-2">
            {t.about.subtitle}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase text-chrome text-balance">
            {t.about.sectionTitle}
          </h2>
        </div>

        {/* Asymmetrical 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Column 1: Brand Emblem Hologram & Personal Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/20 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
            <div>
              {/* Logo Emblem Presentation */}
              <div className="relative mb-6 rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-cyan-500/30 via-slate-800 to-indigo-500/20 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                <img
                  src="/assets/aistudio/image_ffd23804.png"
                  alt="Abror Jaloldinov Futuristic 3D Cyber Emblem"
                  className="w-full h-72 sm:h-80 object-cover rounded-xl bg-black/60 hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-lg border border-cyan-500/30 flex items-center justify-between text-xs font-mono text-cyan-300">
                  <span>ABROR JALOLDINOV</span>
                  <span>2+ YRS EXP</span>
                </div>
              </div>

              {/* Personal Narrative */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
                {t.about.intro}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 italic border-l-2 border-cyan-500/50 pl-3.5">
                "{t.about.philosophy}"
              </p>
            </div>

            {/* Quick Verified Facts */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-800">
              {t.about.quickFacts.map((fact, idx) => (
                <div key={idx} className="bg-slate-900/60 rounded-xl p-3 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">{fact.label}</div>
                  <div className="text-sm font-bold text-white font-display mt-0.5">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: 6 Core Areas of Focus / Interests (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Layers className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold font-display text-white">
                  {t.about.coreInterestsTitle}
                </h3>
              </div>

              {/* 6 Core Interests Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.about.interests.map((interest, idx) => {
                  const Icon = interestIcons[idx] || Code2;
                  return (
                    <div
                      key={idx}
                      className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800/80 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-base font-bold font-display text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {interest.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-light">
                          {interest.desc}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500 group-hover:text-cyan-400">
                        <span>FOCUS 0{idx + 1}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→ ACTIVE</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Statement */}
            <div className="mt-6 p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between text-xs text-slate-300">
              <span className="font-mono text-cyan-400">ABROR JALOLDINOV · ARCHITECTURE & DESIGN</span>
              <span className="font-mono text-slate-400">EST. 2024–2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
