import React, { useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useTimeline } from '../contexts/TimelineContext';
import { Gauge, Info, Sparkles } from 'lucide-react';
import type { Era } from '../contexts/TimelineContext';
import { timelineData } from '../data/timelineData';

interface NavigationProps {
  onTriggerLoader?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onTriggerLoader }) => {
  const { era, triggerJump, transitionSpeed, setTransitionSpeed, isTransitioning } = useTimeline();
  const { scrollYProgress } = useScroll();
  const [showInfo, setShowInfo] = useState(false);
  const data = timelineData[era];
  
  const navItems = [
    { key: 'work', label: data.uiStrings.nav.work, href: '#work' },
    { key: 'skills', label: data.uiStrings.nav.skills, href: '#skills' },
    { key: 'contact', label: data.uiStrings.nav.contact, href: '#contact' }
  ];

  const eras: Era[] = ['1800s', '1900s', 'present', 'future'];

  return (
    <nav className="fixed top-[32px] left-0 right-0 z-50 px-6 sm:px-12 py-6 flex justify-between items-center bg-transparent pointer-events-none transition-all duration-300">
      {/* Background Glass Plate */}
      <div className="absolute inset-x-0 top-0 h-full glass backdrop-blur-md opacity-90 z-0 border-b border-border/10 pointer-events-auto overflow-hidden">
        {/* Scroll Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-accent z-20"
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        />
      </div>

      {/* Brand Logo */}
      <motion.div 
        key={`logo-${era}`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 flex items-center gap-3 group cursor-default pointer-events-auto"
      >
        <div className={`w-8 h-8 overflow-hidden rounded-lg flex items-center justify-center transition-all duration-700
          ${era === '1800s' ? 'rotate-45 sepia contrast-125' : 
            era === '1900s' ? 'rounded-none shadow-[4px_4px_0_var(--color-alt)] grayscale' : 
            era === 'present' ? 'rounded-xl' : 
            'animate-pulse-glow hue-rotate-15'}
        `}>
          <img 
            src="/logo.jpg" 
            alt="LA Logo" 
            style={{
              transform: era === '1800s' ? 'rotate(-45deg) scale(1.4)' : 'rotate(0deg) scale(1)'
            }}
            className="w-full h-full object-cover transition-transform duration-700"
          />
        </div>
        <span 
          style={{ fontFamily: "'Outfit', sans-serif" }}
          className={`text-xl font-bold tracking-tight transition-all duration-700
          ${era === '1800s' ? 'arcane-glow parchment-text' : 
            era === '1900s' ? 'text-accent' : 
            era === 'present' ? 'text-primary' : 
            'quantum-shimmer'}
        `}>
          Laksh Agrawal
        </span>
      </motion.div>

      {/* Era Switcher Hub */}
      <div className="z-20 fixed bottom-6 left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex flex-col items-center pointer-events-auto">
        {/* The Dock */}
        <div className="flex max-w-[calc(100vw-12px)] items-center gap-1 rounded-full border border-white/15 bg-black/80 p-1.5 backdrop-blur-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          {eras.map((e) => (
            <motion.button
              key={e}
              onClick={() => triggerJump(e)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-2 py-1.5 rounded-full text-[9px] font-retro tracking-widest transition-all duration-500 sm:px-4 sm:text-[10px]
                ${era === e ? 'bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'text-white/40 hover:text-white'}
              `}
            >
              {timelineData[e].label}
            </motion.button>
          ))}

          <div className="w-[1px] h-4 bg-white/20 mx-1" />

          <motion.button
            onClick={() => setTransitionSpeed(transitionSpeed === 'slow' ? 'fast' : 'slow')}
            whileHover={{ scale: isTransitioning ? 1 : 1.04 }}
            whileTap={{ scale: isTransitioning ? 1 : 0.96 }}
            disabled={isTransitioning}
            className={`flex h-9 w-9 items-center justify-center gap-1.5 rounded-full border font-retro text-[9px] uppercase tracking-widest transition-all duration-300 sm:h-10 sm:w-auto sm:px-3
              ${transitionSpeed === 'fast'
                ? 'border-accent/45 bg-accent/12 text-accent shadow-[0_0_18px_rgba(99,102,241,0.24)]'
                : 'border-white/12 bg-white/[0.04] text-white/60 hover:border-white/25 hover:bg-white/[0.08] hover:text-white'}
              ${isTransitioning ? 'opacity-50' : ''}
            `}
            aria-label={`Transition speed: ${transitionSpeed}`}
            title={`Transition speed: ${transitionSpeed}`}
          >
            <Gauge size={14} strokeWidth={2.2} />
            <span className="hidden sm:inline">{transitionSpeed}</span>
          </motion.button>

          <div className="w-[1px] h-4 bg-white/20 mx-1" />

          <motion.button
            onClick={onTriggerLoader}
            whileHover={{ scale: isTransitioning ? 1 : 1.04 }}
            whileTap={{ scale: isTransitioning ? 1 : 0.96 }}
            disabled={isTransitioning}
            className={`flex h-9 w-9 items-center justify-center gap-1.5 rounded-full border font-retro text-[9px] uppercase tracking-widest transition-all duration-300 sm:h-10 sm:w-auto sm:px-3
              border-white/12 bg-white/[0.04] text-white/60 hover:border-accent/45 hover:bg-accent/10 hover:text-accent
              ${isTransitioning ? 'opacity-50' : ''}
            `}
            aria-label="Replay intro animation"
            title="Replay wormhole intro"
          >
            <Sparkles size={14} strokeWidth={2.2} />
            <span className="hidden sm:inline">Intro</span>
          </motion.button>

          <div className="w-[1px] h-4 bg-white/20 mx-1" />

          <div
            className="relative"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <AnimatePresence>
              {showInfo && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none absolute bottom-[calc(100%+14px)] right-0 z-50 w-[280px] rounded-2xl border border-white/10 bg-black/90 p-4 text-left font-primary shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:w-80 lg:bottom-auto lg:left-1/2 lg:right-auto lg:top-[calc(100%+14px)] lg:-translate-x-1/2"
                >
                  <div className="absolute inset-0 rounded-2xl bg-accent/6 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="mb-2 flex items-center gap-2 text-sm font-heading text-accent">
                      <Info size={15} strokeWidth={2.2} />
                      Temporal Dimensions
                    </div>
                    <p className="text-sm leading-relaxed text-secondary">
                      This portfolio exists across 4 distinct timelines. Select an era to shift the fabric of time and explore a new visual dimension.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={() => setShowInfo((prev) => !prev)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10
                ${showInfo
                  ? 'border-accent/45 bg-accent/12 text-accent shadow-[0_0_18px_rgba(99,102,241,0.28)]'
                  : 'border-white/12 bg-white/[0.04] text-white/60 hover:border-white/25 hover:bg-white/[0.08] hover:text-white'}
              `}
              aria-label="Timeline Information"
              aria-expanded={showInfo}
            >
              <Info size={15} strokeWidth={2.2} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <ul className="relative z-10 hidden items-center gap-6 pointer-events-auto lg:flex">
        {navItems.map((item, i) => (
          <motion.li 
            key={item.key}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <a 
              href={item.href} 
              className={`text-xs font-retro uppercase tracking-widest transition-all duration-300 relative group/link
                ${era === '1800s' ? 'text-accent/60 hover:text-accent' : 
                  era === '1900s' ? 'text-primary/60 hover:text-accent' : 
                  'text-white/60 hover:text-white'}
              `}
            >
              {item.label}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover/link:w-full"
                layoutId={`nav-underline-${item.key}`}
              />
            </a>
          </motion.li>
        ))}

      </ul>
    </nav>
  );
};
