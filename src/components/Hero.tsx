import React from 'react';
import { motion } from 'framer-motion';
import { useTimeline } from '../contexts/TimelineContext';
import { timelineData } from '../data/timelineData';

import { cn } from '../utils/cn';

export const Hero: React.FC = () => {
  const { era } = useTimeline();
  const data = timelineData[era];

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 px-6 sm:px-12 md:px-24 overflow-hidden">
      {/* Background Era Text Decoration */}
      <motion.div 
        key={`hero-bg-${era}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: 0.015, 
          y: 0 
        }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-10 left-10 pointer-events-none select-none text-[15vw] font-black uppercase whitespace-nowrap z-0 font-heading line-height-1 leading-none"
      >
        {data.label}
      </motion.div>

      {/* Atmospheric Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {era === '1800s' && (
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 blur-[100px] rounded-full animate-pulse" />
        )}
        {era === 'future' && (
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-quantum/10 blur-[120px] rounded-full animate-pulse" />
        )}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <motion.h1
            key={`title-${era}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className={cn(
               "text-6xl md:text-8xl lg:text-[7vw] xl:text-[6.5vw] font-heading mb-4 leading-[0.85] tracking-tighter shrink-0 lg:max-w-[48%]",
               (era === '1900s' || era === 'future') && "glitch-text text-[6vw] xl:text-[5.5vw]"
            )}
            data-text={data.hero.title}
          >
            {data.hero.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                className="h-[2px] bg-accent" 
              />
              <div className="flex flex-col">
                <p className="text-2xl md:text-4xl text-secondary font-primary italic opacity-90 uppercase tracking-tighter">
                  {data.hero.role}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <p className="text-xs md:text-sm text-primary/60 font-retro tracking-[0.2em] uppercase">
                    Full-Stack • UX Researcher
                  </p>
                </div>
              </div>
            </div>

            <a href="#contact" className="w-fit pointer-events-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "px-10 py-4 font-retro text-[10px] md:text-xs uppercase tracking-[0.3em] mt-4 transition-all duration-300 relative group overflow-hidden hide-cursor-on-desktop",
                  era === '1800s' && "border-2 border-accent text-accent hover:bg-accent/10 shadow-[inner_0_0_10px_rgba(251,191,36,0.2)]",
                  era === '1900s' && "bg-primary text-background border-2 border-primary shadow-[6px_6px_0_var(--color-accent)] hover:shadow-[10px_10px_0_var(--color-alt)]",
                  era === 'present' && "bg-accent text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] rounded-full",
                  era === 'future' && "bg-accent/10 text-accent clip-path-polygon border border-accent/40 hover:border-accent hover:bg-accent/20 hover:shadow-[0_0_25px_var(--color-accent)]"
                )}
              >
                {data.uiStrings.contactButton}
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* User Portrait & 3D Core */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center lg:justify-end lg:ml-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[320px] xl:max-w-[440px] aspect-square"
            >
              {/* The Photo */}
              <div className={cn(
                "relative w-full h-full overflow-hidden border-2 transition-all duration-1000 z-10",
                era === '1800s' && "border-accent/40 rounded-none sepia-[0.3] contrast-125",
                era === '1900s' && "border-white/20 rounded-none grayscale-[0.5] brightness-110 shadow-[8px_8px_0_var(--color-accent)]",
                era === 'present' && "border-white/10 rounded-3xl backdrop-blur-sm",
                era === 'future' && "border-accent/30 rounded-none clip-path-polygon brightness-125 hue-rotate-15"
              )}>
                <img 
                  src={data.hero.image} 
                  alt={data.hero.title}
                  className="w-full h-full object-cover"
                />
              </div>


            </motion.div>
        </div>

      </div>
    </section>
  );
};
