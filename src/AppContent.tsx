import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CustomCursor } from './components/CustomCursor';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { EraJumpOverlay } from './components/EraJumpOverlay';
import { WormholeLoader } from './components/WormholeLoader';

export const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <WormholeLoader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="main-content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-screen bg-background pt-8 text-primary selection:bg-accent/30 hide-cursor-on-desktop"
          >
            <div className="texture-overlay" />
            <EraJumpOverlay />
            <Navigation />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};
