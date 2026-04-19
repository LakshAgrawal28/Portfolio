import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTimeline } from '../contexts/TimelineContext';

export const EraJumpOverlay: React.FC = () => {
  const { era } = useTimeline();
  const [show, setShow] = useState(false);
  const [prevEra, setPrevEra] = useState(era);

  useEffect(() => {
    if (era !== prevEra) {
      setTimeout(() => setShow(true), 0);
      const timer = setTimeout(() => {
        setShow(false);
        setPrevEra(era);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [era, prevEra]);

  const [lines, setLines] = React.useState<Array<{id: number, top: string, delay: number}>>([]);

  React.useEffect(() => {
    setLines(Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 0.5
    })));
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
        >
          {/* Glitch Slices */}
          <div className="absolute inset-0 bg-black" />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-4 relative z-10"
          >
            <div className="text-white font-retro text-2xl tracking-[0.5em] uppercase">
              Shift Detected
            </div>
            <div className="flex items-center gap-6">
              <span className="text-secondary/50 font-retro text-sm uppercase">{prevEra}</span>
              <motion.div 
                animate={{ x: [0, 10, 0] }} 
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-accent"
              >
                &gt;&gt;&gt;
              </motion.div>
              <span className="text-accent font-retro text-sm uppercase">{era}</span>
            </div>
          </motion.div>

          {/* Random Glitch Lines */}
          {lines.map((line) => (
            <motion.div
              key={line.id}
              className="absolute bg-white/20 h-[1px] w-full"
              style={{ top: line.top }}
              animate={{ 
                x: [-100, 100],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 0.2, 
                repeat: Infinity,
                delay: line.delay
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
