import React, { useState } from 'react';
import { X, Download, Archive, CheckCircle2, FileCode2, Sparkles, Loader2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { generateProjectZip, triggerDownload } from '../utils/zipExporter';

interface ZipDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ZipDownloadModal: React.FC<ZipDownloadModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [isPackaging, setIsPackaging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentFile, setCurrentFile] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      setIsPackaging(true);
      setIsCompleted(false);
      setProgress(5);
      setCurrentFile('Initializing archive builder...');

      const blob = await generateProjectZip((p, file) => {
        setProgress(p);
        setCurrentFile(file);
      });

      triggerDownload(blob, 'abror-jaloldinov-portfolio.zip');
      setIsCompleted(true);
      setIsPackaging(false);
    } catch (err) {
      console.error('ZIP generation failed:', err);
      setIsPackaging(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.18)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="zip-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isPackaging}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg transition-colors disabled:opacity-50"
          aria-label={t.zipModal.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <Archive className="w-6 h-6" />
          </div>
          <div>
            <h2 id="zip-modal-title" className="text-xl font-bold font-display text-white">
              {t.zipModal.title}
            </h2>
            <p className="text-xs text-cyan-400 font-mono tracking-wider mt-0.5">
              ZIP ARCHIVE EXPORTER · 2026 EDITION
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {t.zipModal.desc}
        </p>

        {/* Manifest items list */}
        <div className="bg-[#050914]/90 rounded-xl p-4 border border-slate-800/80 mb-6">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3 pb-2 border-b border-slate-800">
            <span>{t.zipModal.filesListTitle}</span>
            <span className="text-cyan-400">Complete Codebase</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
            <div className="flex items-center gap-2">
              <FileCode2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>/src/components/*</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCode2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>/src/i18n/*</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCode2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Three.js 3D Engine</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCode2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tailwind v4 & Assets</span>
            </div>
          </div>
        </div>

        {/* Progress or Completion state */}
        {isPackaging && (
          <div className="mb-6 space-y-2">
            <div className="flex justify-between text-xs font-mono text-cyan-300">
              <span className="truncate max-w-[280px]">{currentFile}</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {isCompleted && (
          <div className="mb-6 flex items-center gap-3 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>{t.zipModal.readyText}</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isPackaging}
            className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            {t.zipModal.close}
          </button>
          <button
            type="button"
            onClick={handleDownload}
            disabled={isPackaging}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
          >
            {isPackaging ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>{t.zipModal.downloading}</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>{t.zipModal.downloadBtn}</span>
                <Sparkles className="w-3.5 h-3.5 opacity-70" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
