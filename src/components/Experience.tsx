import React from 'react';
import { Calendar, CheckCircle, ChevronRight, Milestone } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-semibold mb-2">
            {t.experience.subtitle}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase text-chrome mb-4">
            {t.experience.sectionTitle}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            {t.experience.intro}
          </p>
        </div>

        {/* Futuristic Timeline Structure */}
        <div className="relative border-l border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {t.experience.timeline.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Pin */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#030712] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.6)] group-hover:scale-125 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
              </div>

              {/* Timeline Card */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-slate-800/80">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {step.period}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-cyan-950/50 text-cyan-300 border border-cyan-500/30">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-300 font-light leading-relaxed mb-5">
                  {step.desc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  {step.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-mono">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
