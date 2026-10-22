import React from 'react';
import { Code2, Smartphone, Sparkles, LayoutGrid, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const serviceIcons = [Code2, Smartphone, Sparkles, LayoutGrid];

  return (
    <section id="services" className="relative py-28 bg-[#02050f] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-semibold mb-2">
            {t.services.subtitle}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase text-chrome mb-4">
            {t.services.sectionTitle}
          </h2>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((service, idx) => {
            const Icon = serviceIcons[idx] || Code2;

            return (
              <div
                key={service.id}
                className="group relative glass-panel glass-panel-hover rounded-3xl p-8 border border-slate-800 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-sm font-mono text-slate-500 group-hover:text-cyan-400 font-bold transition-colors">
                      SERVICE {service.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                        <div className="w-4 h-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-cyan-400" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
                  <span className="uppercase tracking-wider">High Fidelity Delivery</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
