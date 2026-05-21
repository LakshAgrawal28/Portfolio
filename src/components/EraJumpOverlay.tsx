import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTimeline } from '../contexts/TimelineContext';
import { timelineData } from '../data/timelineData';

const layers = [
  'bg-accent',
  'bg-surface',
  'bg-black',
];

const wipeEase = [0.83, 0, 0.17, 1] as const;

const labelTimings = {
  slow: {
    origin: 780,
    gap: 1320,
    destination: 1640,
    hide: 2360,
  },
  fast: {
    origin: 500,
    gap: 820,
    destination: 980,
    hide: 1300,
  },
};

export const EraJumpOverlay: React.FC = () => {
  const { isTransitioning, prevEra, nextEra, transitionSpeed } = useTimeline();
  const origin = timelineData[prevEra];
  const destination = nextEra ? timelineData[nextEra] : null;
  const [labelPhase, setLabelPhase] = useState<'origin' | 'destination' | null>(null);

  useEffect(() => {
    if (!isTransitioning) {
      return;
    }

    const timing = labelTimings[transitionSpeed];
    const originTimer = window.setTimeout(() => setLabelPhase('origin'), timing.origin);
    const gapTimer = window.setTimeout(() => setLabelPhase(null), timing.gap);
    const destinationTimer = window.setTimeout(() => setLabelPhase('destination'), timing.destination);
    const hideTimer = window.setTimeout(() => setLabelPhase(null), timing.hide);

    return () => {
      window.clearTimeout(originTimer);
      window.clearTimeout(gapTimer);
      window.clearTimeout(destinationTimer);
      window.clearTimeout(hideTimer);
      setLabelPhase(null);
    };
  }, [isTransitioning, transitionSpeed]);

  const labelData = labelPhase === 'origin' ? origin : destination;
  const labelIntent = labelPhase === 'origin' ? 'Leaving timeline' : 'Entering timeline';

  return (
    <AnimatePresence>
      {isTransitioning && destination && (
        <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden bg-transparent">
          <div className="absolute inset-0">
            {layers.map((layerClassName, index) => (
              <motion.div
                key={index}
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{
                  duration: 0.62,
                  ease: wipeEase,
                  delay: index * 0.075,
                }}
                className={`absolute inset-0 ${layerClassName}`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08),rgba(255,255,255,0)_42%,rgba(255,255,255,0.035))]" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, delay: 0.36 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_56%)] opacity-16"
          />

          <AnimatePresence>
            {labelPhase && labelData && (
              <motion.div
                key={labelPhase}
                initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center px-6 text-center text-white"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="h-px w-20 bg-accent/80" />
                  <p className="font-primary text-xs uppercase text-accent md:text-sm">
                    {labelIntent}
                  </p>
                  <h2 className="font-heading text-5xl uppercase md:text-8xl">
                    {labelData.label}
                  </h2>
                  <p className="max-w-sm font-primary text-sm uppercase text-white/55 md:text-base">
                    {labelData.name}
                  </p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="h-px w-28 origin-center bg-accent/80 md:w-44"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
};
