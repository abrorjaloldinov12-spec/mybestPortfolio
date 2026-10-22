import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { ProjectCardArtwork } from './ProjectCardArtwork';

interface ProjectData {
  id: string;
  number: string;
  title: string;
  url: string;
  type: 'sneaker' | 'racing' | 'ielts' | 'automarket';
  tags: string[];
}

const projectsData: ProjectData[] = [
  {
    id: 'sneakerx',
    number: '01',
    title: 'SNEAKERX',
    url: 'https://pixel-perfect-replica-7875.lovable.app',
    type: 'sneaker',
    tags: ['React', 'E-Commerce', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    id: 'speedverse',
    number: '02',
    title: 'SPEEDVERSE RALLY REALMS',
    url: 'https://speedverse-rally-realms.lovable.app',
    type: 'racing',
    tags: ['Gaming Experience', 'Interactive Animation', 'Modern UI', 'TypeScript'],
  },
  {
    id: 'ielts-mock',
    number: '03',
    title: 'IELTS MOCK',
    url: 'https://conclusionieltscore.netlify.app/',
    type: 'ielts',
    tags: ['EdTech', 'Score Calculator', 'Web App', 'Interactive Logic'],
  },
  {
    id: 'auto-market',
    number: '04',
    title: 'AUTO MARKET',
    url: 'https://abrorcars.netlify.app/',
    type: 'automarket',
    tags: ['Automotive', 'Catalog UI', 'Car Marketplace', 'Modern Frontend'],
  },
];

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-semibold mb-2">
              {t.projects.subtitle}
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase text-chrome text-balance">
              {t.projects.sectionTitle}
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span>SHOWCASING 4 VERIFIED PROJECTS</span>
            <span className="text-cyan-400 font-bold">· 2024–2026</span>
          </div>
        </div>

        {/* 2x2 Responsive Project Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projectsData.map((project, index) => {
            const translatedInfo = t.projects.projectList[index];

            return (
              <div
                key={project.id}
                className="group relative glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-500 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.18)]"
              >
                <div>
                  {/* Top card metadata: clean unboxed typographic labels */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="text-cyan-400 font-bold tracking-wider">PROJECT {project.number}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-300">{translatedInfo.category}</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                      LIVE EXPERIENCE
                    </span>
                  </div>

                  {/* Artwork Preview Card */}
                  <div className="mb-6">
                    <ProjectCardArtwork type={project.type} title={project.title} />
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase tracking-tight mb-3 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 ml-2" />
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {translatedInfo.description}
                  </p>

                  {/* Tech stack tags (clean inline labels) */}
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Button: Explore Project */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold font-display text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>{t.projects.viewProject}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-xs font-mono text-slate-400 truncate max-w-[200px]">
                    {new URL(project.url).hostname}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
