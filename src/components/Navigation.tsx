import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useTimeline } from '../contexts/TimelineContext';
import type { Era } from '../contexts/TimelineContext';
import { timelineData } from '../data/timelineData';

export const Navigation: React.FC = () => {
  const { era, triggerJump } = useTimeline();
  const { scrollYProgress } = useScroll();
  const data = timelineData[era];
  
  const navItems = [
    { key: 'work', label: data.uiStrings.nav.work, href: '#work' },
    { key: 'about', label: data.uiStrings.nav.about, href: '#about' },
    { key: 'skills', label: data.uiStrings.nav.skills, href: '#skills' },
    { key: 'contact', label: data.uiStrings.nav.contact, href: '#contact' }
  ];

  const eras: Era[] = ['1800s', '1900s', 'present', 'future'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-6 flex justify-between items-center bg-transparent pointer-events-none">
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
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black transition-all duration-700
          ${era === '1800s' ? 'bg-accent text-primary rotate-45' : 
            era === '1900s' ? 'bg-accent text-primary rounded-none shadow-[4px_4px_0_var(--color-alt)]' : 
            era === 'present' ? 'bg-accent text-white rounded-full' : 
            'bg-accent text-primary animate-pulse-glow'}
        `}>
          L
        </div>
        <span className={`font-heading text-xl tracking-tighter transition-all duration-700
          ${era === '1800s' ? 'arcane-glow parchment-text' : 
            era === '1900s' ? 'text-accent' : 
            era === 'present' ? 'text-primary' : 
            'quantum-shimmer'}
        `}>
          LAKSH
        </span>
      </motion.div>

      {/* Era Switcher Hub */}
      <div className="z-10 hidden lg:flex bg-black/40 p-1 rounded-full border border-white/5 backdrop-blur-xl pointer-events-auto">
        {eras.map((e) => (
          <motion.button
            key={e}
            onClick={() => triggerJump(e)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-1.5 rounded-full text-[10px] font-retro tracking-widest transition-all duration-500
              ${era === e ? 'bg-white text-black' : 'text-white/40 hover:text-white'}
            `}
          >
            {timelineData[e].label}
          </motion.button>
        ))}
      </div>

      {/* Stability Indicator */}
      <div className="hidden xl:flex flex-col items-end opacity-40 group hover:opacity-100 transition-opacity z-10 mr-4 pointer-events-auto">
        <span className="text-[8px] font-retro uppercase tracking-[0.2em] text-secondary">Stability Control</span>
        <div className="flex items-center gap-2">
          <motion.div 
            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
            transition={{ duration: 0.15, repeat: Infinity, repeatType: "mirror" }}
            className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]"
          />
          <span className="font-retro text-[10px] tracking-tighter">98.4%</span>
        </div>
      </div>

      {/* Nav Links */}
      <ul className="relative z-10 flex items-center gap-6 pointer-events-auto">
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
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className={`text-[10px] md:text-xs font-retro uppercase tracking-widest transition-all duration-300 relative group/link px-3 py-1.5 border rounded-sm ml-2 hide-cursor-on-desktop
              ${era === '1800s' ? 'border-accent text-accent hover:bg-accent hover:text-[#2d1b10]' : 
                era === '1900s' ? 'border-primary text-primary hover:bg-primary hover:text-background border-2 shadow-[2px_2px_0_var(--color-accent)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_var(--color-accent)]' : 
                era === 'present' ? 'border-accent/40 text-accent hover:bg-accent/10 rounded-full' : 
                'border-accent/50 text-accent hover:bg-accent/20 clip-path-polygon hover:shadow-[0_0_15px_var(--color-accent)]'}
            `}
          >
            Download CV
          </a>
        </motion.li>
      </ul>
    </nav>
  );
};
