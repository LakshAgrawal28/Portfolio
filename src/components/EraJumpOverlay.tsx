import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTimeline } from '../contexts/TimelineContext';

export const EraJumpOverlay: React.FC = () => {
  const { isTransitioning, prevEra, nextEra } = useTimeline();

  return (
    <AnimatePresence>
      {isTransitioning && nextEra && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center bg-black overflow-hidden"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            exit={{ clipPath: "circle(0% at 50% 50%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_60%)] opacity-10" />

            {/* Spinning Rings */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute w-[30vw] min-w-[300px] aspect-square border-[1px] border-accent rounded-full border-dashed" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute w-[45vw] min-w-[450px] aspect-square border-[2px] border-white/20 rounded-full" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-[60vw] min-w-[600px] aspect-square border-[1px] border-accent/40 rounded-full border-dotted" />
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center text-white">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs md:text-sm font-primary tracking-[0.5em] uppercase text-accent mb-6"
              >
                Temporal Shift Sequence
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 }}
                className="flex items-center gap-6 md:gap-12 font-heading text-4xl md:text-7xl tracking-widest uppercase"
              >
                <span className="opacity-40 blur-[2px]">{prevEra}</span>
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], rotate: [0, 90, 180] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="text-accent text-3xl md:text-5xl"
                >
                  ✧
                </motion.div>
                <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">{nextEra}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
