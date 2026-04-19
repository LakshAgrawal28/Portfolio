import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { LoreJourney } from './components/LoreJourney';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { EraJumpOverlay } from './components/EraJumpOverlay';
import { WormholeLoader } from './components/WormholeLoader';

export const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <WormholeLoader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <main key="main-content" className="min-h-screen bg-background text-primary selection:bg-accent/30 hide-cursor-on-desktop relative">
            <div className="texture-overlay" />
            <EraJumpOverlay />
            <Navigation />
            <Hero />
            <LoreJourney />
            <Skills />
            <Projects />
            <Contact />
          </main>
        )}
      </AnimatePresence>
    </>
  );
};
