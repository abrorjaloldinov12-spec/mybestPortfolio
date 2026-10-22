import React, { useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ZipDownloadModal } from './components/ZipDownloadModal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isZipModalOpen, setIsZipModalOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Custom Interactive Cursor */}
        <CustomCursor />

        {/* Floating Futuristic Navigation */}
        <Navigation onOpenZipModal={() => setIsZipModalOpen(true)} />

        <main>
          {/* Hero Section */}
          <Hero onOpenZipModal={() => setIsZipModalOpen(true)} />

          {/* About Me Section ("BEYOND THE CODE.") */}
          <About />

          {/* Real 4 Projects Section */}
          <Projects />

          {/* Skills & Technologies */}
          <Skills />

          {/* Experience & 2-Year Journey */}
          <Experience />

          {/* Premium Services */}
          <Services />

          {/* Contact Section ("LET'S BUILD SOMETHING EXTRAORDINARY.") */}
          <Contact />
        </main>

        {/* Minimal Luxury Footer */}
        <Footer onOpenZipModal={() => setIsZipModalOpen(true)} />

        {/* Download Project ZIP Modal */}
        <ZipDownloadModal
          isOpen={isZipModalOpen}
          onClose={() => setIsZipModalOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}
