import React from 'react';
import { motion } from 'framer-motion';
import { useTimeline } from '../contexts/TimelineContext';
import { timelineData } from '../data/timelineData';
import { cn } from '../utils/cn';

export const Hero: React.FC = () => {
  const { era } = useTimeline();
  const data = timelineData[era];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-12 sm:py-28 md:px-24 lg:py-32">
      {/* Atmospheric Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {era === '1800s' && (
          <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-[100px] animate-pulse" />
        )}
        {era === 'future' && (
          <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-quantum/10 blur-[120px] animate-pulse" />
        )}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-y-14 lg:grid-cols-2 lg:gap-x-14">
        {/* Text Content */}
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-primary/60 sm:text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_var(--color-accent)]" />
            <span className="font-primary">{data.name}</span>
          </motion.div>

          <motion.h1
            key={`title-${era}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className={cn(
              'mt-4 text-[clamp(3.75rem,8.2vw,6.75rem)] font-modern font-semibold leading-[0.92] tracking-[-0.045em] text-primary',
              era === '1900s' && 'glitch-text text-[clamp(3.4rem,7.7vw,6.2rem)]',
              era === 'future' && 'text-[clamp(3.5rem,7.9vw,6.4rem)]',
              'lg:whitespace-nowrap'
            )}
            data-text={data.hero.title}
          >
            {data.hero.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex max-w-xl flex-col gap-6"
          >
            <div className="space-y-4">
              <p className="max-w-[18ch] text-2xl uppercase tracking-[-0.04em] text-secondary opacity-90 md:text-[2.35rem] md:leading-[1.02]">
                <span className={cn('font-primary italic', era === 'present' && 'not-italic')}>
                  {data.hero.role}
                </span>
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.22em] text-primary/60 md:text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <p className="font-retro">Full-Stack Developer</p>
                <span className="hidden text-primary/30 md:inline">/</span>
                <p className="font-retro text-primary/55 md:whitespace-nowrap">UX Researcher</p>
              </div>
            </div>

            <a href="#contact" className="pointer-events-auto w-fit">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'relative mt-4 overflow-hidden px-10 py-4 font-retro text-[10px] uppercase tracking-[0.3em] transition-all duration-300 group hide-cursor-on-desktop md:text-xs',
                  era === '1800s' && 'border-2 border-accent text-accent hover:bg-accent/10 shadow-[inner_0_0_10px_rgba(251,191,36,0.2)]',
                  era === '1900s' && 'border-2 border-primary bg-primary text-background shadow-[6px_6px_0_var(--color-accent)] hover:shadow-[10px_10px_0_var(--color-alt)]',
                  era === 'present' && 'rounded-full bg-accent text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]',
                  era === 'future' && 'clip-path-polygon border border-accent/40 bg-accent/10 text-accent hover:border-accent hover:bg-accent/20 hover:shadow-[0_0_25px_var(--color-accent)]'
                )}
              >
                {data.uiStrings.contactButton}
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* User Portrait & 3D Core */}
        <div className="order-1 relative flex items-center justify-center lg:order-2 lg:ml-auto lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative aspect-square w-full max-w-[320px] xl:max-w-[440px]"
          >
            {/* The Photo */}
            <div
              className={cn(
                'relative z-10 h-full w-full overflow-hidden border-2 transition-all duration-1000',
                era === '1800s' && 'rounded-none border-accent/40 sepia-[0.3] contrast-125',
                era === '1900s' && 'rounded-none border-white/20 grayscale-[0.5] brightness-110 shadow-[8px_8px_0_var(--color-accent)]',
                era === 'present' && 'rounded-3xl border-white/10 backdrop-blur-sm',
                era === 'future' && 'clip-path-polygon rounded-none border-accent/30 brightness-125 hue-rotate-15'
              )}
            >
              <img
                src={data.hero.image}
                alt={data.hero.title}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
