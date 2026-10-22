import React from 'react';
import { 
  FileCode, 
  Paintbrush, 
  Code, 
  Cpu, 
  Atom, 
  Globe, 
  Wind, 
  GitBranch, 
  Github, 
  Smartphone, 
  Layers,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface TechItem {
  name: string;
  category: string;
  icon: React.ElementType;
  color: string;
  role: string;
}

const techArsenal: TechItem[] = [
  { name: 'JavaScript', category: 'Language', icon: Code, color: 'text-amber-400', role: 'Modern ESNext syntax & async logic' },
  { name: 'TypeScript', category: 'Language', icon: Cpu, color: 'text-blue-400', role: 'Strict static typing & interfaces' },
  { name: 'React', category: 'Framework', icon: Atom, color: 'text-cyan-400', role: 'Component architectures & state hooks' },
  { name: 'Next.js', category: 'Framework', icon: Globe, color: 'text-white', role: 'Modern routing & hybrid rendering' },
  { name: 'Tailwind CSS', category: 'Styling', icon: Wind, color: 'text-sky-400', role: 'Utility-first modern design systems' },
  { name: 'HTML5', category: 'Standard', icon: FileCode, color: 'text-orange-400', role: 'Semantic markup & web accessibility' },
  { name: 'CSS3', category: 'Styling', icon: Paintbrush, color: 'text-blue-500', role: 'Grid, Flexbox & smooth keyframes' },
  { name: 'Git', category: 'Tooling', icon: GitBranch, color: 'text-red-400', role: 'Distributed version control' },
  { name: 'GitHub', category: 'Tooling', icon: Github, color: 'text-slate-200', role: 'Collaborative code hosting' },
  { name: 'Responsive Design', category: 'Architecture', icon: Smartphone, color: 'text-emerald-400', role: 'Fluid layouts for mobile & desktop' },
  { name: 'UI/UX Implementation', category: 'Design', icon: Layers, color: 'text-purple-400', role: 'Pixel-perfect translation of designs' },
];

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-28 bg-[#02050f] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-36 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-36 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-semibold mb-2">
            {t.skills.subtitle}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase text-chrome mb-4">
            {t.skills.sectionTitle}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            {t.skills.intro}
          </p>
        </div>

        {/* 11 Skills Interactive Cyber Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {techArsenal.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={index}
                className="group relative glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800/80 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      <Icon className={`w-6 h-6 ${tech.color}`} />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-400 border border-slate-800">
                      {tech.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {tech.role}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500 group-hover:text-cyan-400">
                  <span>ACTIVE STACK</span>
                  <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
