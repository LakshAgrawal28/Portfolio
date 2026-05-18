import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface WormholeLoaderProps {
  onComplete: () => void;
}

const eras = ['1800s', '1900s', 'PRESENT', 'FUTURE'];

export const WormholeLoader: React.FC<WormholeLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);

  const currentEra = useMemo(() => {
    const scaledIndex = Math.floor((progress / 100) * eras.length);
    return Math.min(scaledIndex, eras.length - 1);
  }, [progress]);

  useEffect(() => {
    const totalDuration = 2600;
    const settleDuration = 320;
    let frameId = 0;
    let finishTimeout: number | undefined;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(elapsed / totalDuration, 1);
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
      const nextProgress = Math.round(easedProgress * 100);

      setProgress((prev) => (prev === nextProgress ? prev : nextProgress));

      if (rawProgress < 1) {
        frameId = window.requestAnimationFrame(animate);
        return;
      }

      setProgress(100);
      setIsFinishing(true);
      finishTimeout = window.setTimeout(onComplete, settleDuration);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      if (finishTimeout) {
        window.clearTimeout(finishTimeout);
      }
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between overflow-hidden bg-black px-8 py-12 text-white md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, filter: 'blur(14px)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex w-full items-start justify-between font-primary text-xs uppercase tracking-widest text-white/50 md:text-sm">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Laksh Agrawal
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="tabular-nums"
        >
          {progress}%
        </motion.div>
      </div>

      {/* Ambient background rings */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-20">
        <motion.div
          animate={{ scale: isFinishing ? 1.15 : [1, 1.1, 1], rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="h-[40vw] w-[40vw] min-h-[300px] min-w-[300px] max-h-[500px] max-w-[500px] rounded-full border border-white/20 border-dashed"
        />
        <motion.div
          animate={{ scale: isFinishing ? 1.05 : [1.1, 1, 1.1], rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute h-[55vw] w-[55vw] min-h-[400px] min-w-[400px] max-h-[650px] max-w-[650px] rounded-full border border-accent/30 border-dotted"
        />
        <motion.div
          animate={{ scale: isFinishing ? 1.2 : 1, opacity: isFinishing ? 0.5 : 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute h-[30vw] w-[30vw] min-h-[200px] min-w-[200px] max-h-[400px] max-w-[400px] rounded-full bg-accent/20 blur-[80px]"
        />
      </div>

      <div className="z-10 flex w-full flex-1 flex-col items-center justify-center">
        <div className="relative flex h-24 w-full items-center justify-center overflow-hidden md:h-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentEra}
              initial={{ y: 44, opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
              animate={{ y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ y: -44, opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute font-heading text-5xl font-light uppercase tracking-[0.2em] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] md:text-8xl"
            >
              {eras[currentEra]}
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isFinishing ? 0.9 : 0.55, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-6 text-[10px] uppercase tracking-[0.4em] text-white/60 md:text-xs"
        >
          Traversing the archive
        </motion.p>
      </div>

      <div className="relative mx-auto h-[2px] w-full max-w-4xl overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="absolute inset-y-0 left-0 bg-white"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.2 }}
        />
      </div>
    </motion.div>
  );
};
