import React from 'react';

interface ProjectCardArtworkProps {
  type: 'sneaker' | 'racing' | 'ielts' | 'automarket';
  title: string;
}

export const ProjectCardArtwork: React.FC<ProjectCardArtworkProps> = ({ type, title }) => {
  if (type === 'sneaker') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#0c1222] via-[#050811] to-[#020408] rounded-2xl overflow-hidden flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-400/50 transition-colors duration-500">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-cyber opacity-40" />
        
        {/* Glowing atmospheric orb */}
        <div className="absolute w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/25 transition-all duration-500" />
        
        {/* Sneaker SVG Artwork */}
        <svg viewBox="0 0 320 180" className="w-56 h-auto drop-shadow-[0_15px_30px_rgba(6,182,212,0.35)] transform group-hover:scale-105 group-hover:-translate-y-2 group-hover:rotate-[-2deg] transition-all duration-500">
          <defs>
            <linearGradient id="sneakerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="soleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          {/* Futuristic Sneaker Silhouette */}
          <path d="M 50 120 C 70 120, 90 125, 120 125 C 160 125, 200 128, 260 128 C 275 128, 280 120, 275 110 C 270 100, 260 85, 240 75 C 225 68, 200 65, 185 75 C 175 80, 160 85, 145 92 C 120 95, 95 105, 55 108 C 45 108, 40 114, 50 120 Z" fill="url(#sneakerGrad)" />
          {/* Sneaker Collar & Tongue */}
          <path d="M 185 75 C 190 60, 210 50, 225 55 C 235 60, 245 70, 240 75 Z" fill="#1e293b" />
          <path d="M 160 80 C 170 65, 190 60, 205 65" stroke="#38bdf8" strokeWidth="3" fill="none" />
          {/* Cyber Sole Cushion Air Unit */}
          <path d="M 45 122 C 70 122, 100 126, 140 126 C 180 126, 220 129, 268 129 C 278 129, 280 135, 272 138 C 255 142, 210 144, 160 144 C 110 144, 60 142, 42 138 C 35 135, 38 122, 45 122 Z" fill="url(#soleGrad)" opacity="0.95" />
          {/* Glowing Traction Pods */}
          <rect x="75" y="132" width="22" height="4" rx="2" fill="#e0f2fe" opacity="0.8" />
          <rect x="110" y="132" width="25" height="4" rx="2" fill="#e0f2fe" opacity="0.8" />
          <rect x="150" y="132" width="28" height="4" rx="2" fill="#e0f2fe" opacity="0.8" />
          <rect x="195" y="132" width="25" height="4" rx="2" fill="#e0f2fe" opacity="0.8" />
          <rect x="235" y="132" width="20" height="4" rx="2" fill="#e0f2fe" opacity="0.8" />
          {/* Neon Cyber Accent Swoosh */}
          <path d="M 95 110 C 130 110, 170 100, 220 85 C 200 95, 160 118, 115 118 Z" fill="#00f2fe" opacity="0.9" />
        </svg>

        {/* Floating editorial tags */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
          CYBER SNEAKER
        </div>
        <div className="absolute bottom-3 right-3 text-[11px] font-mono text-slate-400">
          EDITION · 2026
        </div>
      </div>
    );
  }

  if (type === 'racing') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#130d22] via-[#090614] to-[#020205] rounded-2xl overflow-hidden flex items-center justify-center border border-purple-500/20 group-hover:border-purple-400/50 transition-colors duration-500">
        <div className="absolute inset-0 bg-grid-cyber opacity-30" />
        <div className="absolute w-52 h-52 bg-purple-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/25 transition-all duration-500" />
        
        {/* Speedverse Racing SVG Artwork */}
        <svg viewBox="0 0 320 180" className="w-60 h-auto drop-shadow-[0_15px_30px_rgba(168,85,247,0.35)] transform group-hover:scale-105 group-hover:translate-x-2 transition-all duration-500">
          <defs>
            <linearGradient id="raceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="speedLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
          {/* Speed Streaks */}
          <line x1="20" y1="60" x2="110" y2="60" stroke="#a855f7" strokeWidth="2" strokeDasharray="8 6" opacity="0.6" />
          <line x1="10" y1="85" x2="80" y2="85" stroke="#ec4899" strokeWidth="3" opacity="0.8" />
          <line x1="30" y1="110" x2="140" y2="110" stroke="#38bdf8" strokeWidth="2" strokeDasharray="12 4" opacity="0.7" />
          {/* Cyber Supercar Silhouette */}
          <path d="M 60 120 C 75 110, 100 95, 130 90 C 160 85, 200 85, 230 100 C 265 110, 280 115, 285 125 C 275 130, 250 132, 220 132 C 180 132, 120 132, 70 132 C 60 132, 55 125, 60 120 Z" fill="url(#raceGrad)" />
          {/* Cockpit Canopy */}
          <path d="M 135 90 C 150 72, 185 70, 205 85 C 190 87, 160 88, 135 90 Z" fill="#0f172a" stroke="#c084fc" strokeWidth="1.5" />
          {/* High-speed wheels with glowing rim */}
          <circle cx="105" cy="128" r="16" fill="#09090b" stroke="#a855f7" strokeWidth="3" />
          <circle cx="105" cy="128" r="8" fill="#38bdf8" opacity="0.8" />
          <circle cx="240" cy="128" r="16" fill="#09090b" stroke="#ec4899" strokeWidth="3" />
          <circle cx="240" cy="128" r="8" fill="#f43f5e" opacity="0.8" />
          {/* Rear Spoiler / Aero Wing */}
          <path d="M 55 105 L 75 105 L 82 115 L 60 115 Z" fill="#c084fc" />
          {/* Headlamp Laser Beam */}
          <polygon points="275,115 315,105 315,130 278,125" fill="url(#speedLight)" opacity="0.4" />
        </svg>

        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-purple-500/30 text-[10px] font-mono text-purple-300">
          RACING EXPERIENCE
        </div>
        <div className="absolute bottom-3 right-3 text-[11px] font-mono text-slate-400">
          SPEEDVERSE · 2026
        </div>
      </div>
    );
  }

  if (type === 'ielts') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#0c1829] via-[#060e1a] to-[#02050a] rounded-2xl overflow-hidden flex items-center justify-center border border-sky-500/20 group-hover:border-sky-400/50 transition-colors duration-500">
        <div className="absolute inset-0 bg-grid-cyber opacity-35" />
        <div className="absolute w-48 h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/25 transition-all duration-500" />
        
        {/* IELTS Score Dashboard UI Artwork */}
        <div className="relative z-10 w-full max-w-[280px] bg-slate-900/90 backdrop-blur-md rounded-xl p-4 border border-sky-500/30 shadow-2xl group-hover:scale-105 transition-transform duration-500">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
            <span className="text-xs font-mono font-bold text-sky-400">IELTS MOCK ENGINE</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">CALCULATOR</span>
          </div>

          <div className="flex items-center justify-between mb-3.5">
            <div>
              <div className="text-[10px] font-mono text-slate-400">OVERALL BAND</div>
              <div className="text-2xl font-black font-display text-white tracking-tight">8.5 / 9.0</div>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-sky-400 flex items-center justify-center font-display font-bold text-sky-300 bg-sky-500/10 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              94%
            </div>
          </div>

          {/* 4 Skill Metric Bars */}
          <div className="space-y-1.5 text-[11px] font-mono">
            <div className="flex justify-between items-center text-slate-300">
              <span>Listening: 8.5</span>
              <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-sky-400" />
              </div>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>Reading: 8.5</span>
              <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[88%] h-full bg-cyan-400" />
              </div>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>Writing: 8.0</span>
              <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[82%] h-full bg-indigo-400" />
              </div>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>Speaking: 8.5</span>
              <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-teal-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-sky-500/30 text-[10px] font-mono text-sky-300">
          EDTECH CALCULATOR
        </div>
        <div className="absolute bottom-3 right-3 text-[11px] font-mono text-slate-400">
          IELTS MOCK · 2026
        </div>
      </div>
    );
  }

  // Automarket type
  return (
    <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#181118] via-[#0d0910] to-[#040205] rounded-2xl overflow-hidden flex items-center justify-center border border-rose-500/20 group-hover:border-rose-400/50 transition-colors duration-500">
      <div className="absolute inset-0 bg-grid-cyber opacity-30" />
      <div className="absolute w-52 h-52 bg-rose-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-rose-600/25 transition-all duration-500" />
      
      {/* Auto Market Automotive SVG Artwork */}
      <svg viewBox="0 0 320 180" className="w-60 h-auto drop-shadow-[0_15px_30px_rgba(244,63,94,0.35)] transform group-hover:scale-105 group-hover:translate-x-1 transition-all duration-500">
        <defs>
          <linearGradient id="autoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="45%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </linearGradient>
        </defs>
        {/* Luxury Coupe Body Line */}
        <path d="M 45 125 C 60 115, 95 98, 125 92 C 160 86, 215 88, 245 102 C 275 112, 288 118, 290 126 C 275 132, 230 134, 170 134 C 110 134, 60 132, 45 125 Z" fill="url(#autoGrad)" />
        {/* Glasshouse Window Arch */}
        <path d="M 125 92 C 145 74, 195 72, 225 90 C 200 91, 160 92, 125 92 Z" fill="#09090b" stroke="#fb7185" strokeWidth="1.5" />
        {/* Front & Rear Wheels with Alloy Spokes */}
        <circle cx="90" cy="128" r="17" fill="#09090b" stroke="#f43f5e" strokeWidth="3" />
        <circle cx="90" cy="128" r="8" fill="#fda4af" opacity="0.9" />
        <circle cx="235" cy="128" r="17" fill="#09090b" stroke="#f43f5e" strokeWidth="3" />
        <circle cx="235" cy="128" r="8" fill="#fda4af" opacity="0.9" />
        {/* Xenon Headlamp Glow */}
        <path d="M 275 118 C 285 116, 290 120, 288 124 Z" fill="#38bdf8" />
        <line x1="288" y1="120" x2="315" y2="116" stroke="#38bdf8" strokeWidth="2" opacity="0.8" />
        <line x1="288" y1="123" x2="315" y2="124" stroke="#38bdf8" strokeWidth="2" opacity="0.6" />
        {/* Rear LED Light Strip */}
        <line x1="45" y1="120" x2="60" y2="118" stroke="#f43f5e" strokeWidth="3" />
      </svg>

      <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-rose-500/30 text-[10px] font-mono text-rose-300">
        AUTOMOTIVE SHOWROOM
      </div>
      <div className="absolute bottom-3 right-3 text-[11px] font-mono text-slate-400">
        AUTO MARKET · 2026
      </div>
    </div>
  );
};
