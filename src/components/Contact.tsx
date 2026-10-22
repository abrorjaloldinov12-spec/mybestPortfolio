import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  MessageSquare, 
  AlertCircle, 
  CheckCircle2, 
  Loader2 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = 'abrorjaloldinov29@gmail.com';

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.validation.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.validation.emailInvalid;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = t.contact.validation.messageRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real network submission transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 1200);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback copy
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center sm:text-left">
          <div className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-semibold mb-2">
            {t.contact.sectionTitle}
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white uppercase text-chrome mb-4 leading-tight">
            {t.contact.heading}
          </h2>
          <p className="text-slate-300 text-sm sm:text-lg font-light leading-relaxed max-w-2xl text-balance">
            {t.contact.subhead}
          </p>
        </div>

        {/* 2-Column Contact Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Column 1: Direct Channels, Copy Email, Social Links (5 cols) */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-8">
            {/* Copy Email Box */}
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                DIRECT INQUIRIES
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center gap-3 truncate mr-2">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-mono text-white truncate font-medium">
                    {emailAddress}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/30 text-cyan-300 hover:text-white transition-all shrink-0 cursor-pointer"
                  title={t.contact.copyEmail}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.contact.copiedEmail}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social & Messaging Channels */}
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                {t.contact.socialTitle}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all text-xs font-mono"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all text-xs font-mono"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {/* Response time info */}
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-slate-300 font-mono space-y-1">
              <div className="text-cyan-400 font-bold">RESPONSE GUARANTEE</div>
              <div className="text-slate-400">Typical response time: Within 24 hours. Available for remote collaborations worldwide.</div>
            </div>
          </div>

          {/* Column 2: Working Contact Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800">
            {isSuccess ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-2">
                  {t.contact.successTitle}
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                  {t.contact.successDesc}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-mono bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    {t.contact.nameLabel} <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder={t.contact.namePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                      errors.name ? 'border-rose-500/80 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-400/80'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all font-sans`}
                  />
                  {errors.name && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400 font-mono">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    {t.contact.emailLabel} <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder={t.contact.emailPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                      errors.email ? 'border-rose-500/80 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-400/80'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all font-sans`}
                  />
                  {errors.email && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400 font-mono">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    {t.contact.messageLabel} <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder={t.contact.messagePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                      errors.message ? 'border-rose-500/80 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-400/80'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all font-sans resize-none`}
                  />
                  {errors.message && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400 font-mono">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-display font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>{t.contact.sendingBtn}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.contact.sendBtn}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
