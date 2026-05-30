import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface WormholeLoaderProps {
  onComplete: () => void;
}

const eras = [
  {
    name: 'MAGIC',
    sub: 'Consulting the Arcane Archives...',
    color: '#fbbf24',
    bgGlow: 'rgba(251, 191, 36, 0.15)',
    font: "'Pirata One', serif",
    fontSize: 'text-4xl md:text-5xl'
  },
  {
    name: 'RETRO',
    sub: 'Loading Mainframe Programs...',
    color: '#00ff41',
    bgGlow: 'rgba(0, 255, 65, 0.15)',
    font: "'Press Start 2P', system-ui",
    fontSize: 'text-lg md:text-2xl'
  },
  {
    name: 'MODERN',
    sub: 'Assembling Modern Logic...',
    color: '#6366f1',
    bgGlow: 'rgba(99, 102, 241, 0.15)',
    font: "'Outfit', sans-serif",
    fontSize: 'text-4xl md:text-5xl'
  },
  {
    name: 'ALIEN',
    sub: 'Stabilizing Quantum Singularity...',
    color: '#06b6d4',
    bgGlow: 'rgba(6, 182, 212, 0.2)',
    font: "'Orbitron', sans-serif",
    fontSize: 'text-4xl md:text-5xl'
  }
];

export const WormholeLoader: React.FC<WormholeLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentEraIndex, setCurrentEraIndex] = useState(0);

  // Keep onComplete reference stable to avoid recreating the effect loop on every render
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const totalDuration = 4000; // 4.0s total loading time
    const intervalTime = 30; // ~33 fps
    const startTime = Date.now(); // Date.now() is 100% stable across background tabs and environments

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(elapsed / totalDuration, 1);
      
      // Calculate active era index linearly so each gets exactly equal time on screen
      const eraIdx = Math.min(Math.floor(rawProgress * eras.length), eras.length - 1);
      setCurrentEraIndex(eraIdx);

      // Eased progress for the loading bar slide and number count
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
      const nextProgress = Math.round(easedProgress * 100);

      setProgress(nextProgress);

      if (rawProgress >= 1) {
        clearInterval(interval);
        setTimeout(() => {
          onCompleteRef.current();
        }, 400); // Settle duration before unmounting
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, []); // Run exactly once on mount to guarantee instant and reliable execution

  // Circular progress math
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between overflow-hidden px-8 py-12 text-white md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, filter: 'blur(14px)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: `radial-gradient(circle at center, ${eras[currentEraIndex].bgGlow} 0%, #030303 70%, #000000 100%)`,
        transition: 'background 1s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Era-specific texture overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay transition-all duration-1000"
        style={{
          backgroundImage: 
            currentEraIndex === 0 ? "url('https://www.transparenttextures.com/patterns/old-map.png')" :
            currentEraIndex === 1 ? "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)" :
            currentEraIndex === 3 ? "radial-gradient(circle, rgba(6, 182, 212, 0.05) 1px, transparent 1px)" : "none",
          backgroundSize: 
            currentEraIndex === 0 ? "auto" :
            currentEraIndex === 1 ? "100% 4px" :
            currentEraIndex === 3 ? "24px 24px" : "auto",
        }}
      />

      {/* Top Header Section */}
      <div className="z-10 flex w-full items-start justify-between font-primary text-xs uppercase tracking-widest text-white/40 md:text-sm">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          System Initialization
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="tabular-nums font-bold tracking-wider"
          style={{ color: eras[currentEraIndex].color, transition: 'color 0.8s' }}
        >
          {progress}%
        </motion.div>
      </div>

      {/* Center SVG Orbital Rings */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <svg className="w-[85vw] h-[85vw] max-w-[480px] max-h-[480px] drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]" viewBox="0 0 200 200">
          {/* Outer Rotating Ring */}
          <motion.circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke={eras[currentEraIndex].color}
            strokeWidth={currentEraIndex === 1 ? "1.5" : "0.5"}
            strokeDasharray={
              currentEraIndex === 0 ? "6 6" :
              currentEraIndex === 1 ? "20 6" :
              currentEraIndex === 2 ? "120 15" :
              "15 5 2 5"
            }
            animate={{ rotate: currentEraIndex === 1 ? -360 : 360 }}
            transition={{ duration: currentEraIndex === 3 ? 10 : 25, repeat: Infinity, ease: "linear" }}
            style={{ 
              transformOrigin: "center",
              transition: "stroke 0.8s, stroke-width 0.8s, stroke-dasharray 0.8s",
              opacity: 0.35
            }}
          />
          
          {/* Middle Counter-Rotating Ring */}
          <motion.circle
            cx="100"
            cy="100"
            r="77"
            fill="none"
            stroke={eras[currentEraIndex].color}
            strokeWidth={currentEraIndex === 1 ? "2" : "0.5"}
            strokeDasharray={
              currentEraIndex === 0 ? "12 4 4 4" :
              currentEraIndex === 1 ? "10 10" :
              currentEraIndex === 2 ? "none" :
              "40 20"
            }
            animate={{ rotate: currentEraIndex === 1 ? 360 : -360 }}
            transition={{ duration: currentEraIndex === 3 ? 8 : 20, repeat: Infinity, ease: "linear" }}
            style={{ 
              transformOrigin: "center",
              transition: "stroke 0.8s, stroke-width 0.8s, stroke-dasharray 0.8s",
              opacity: 0.25
            }}
          />

          {/* Inner Rotating Dashed Orbit */}
          <motion.circle
            cx="100"
            cy="100"
            r="55"
            fill="none"
            stroke={eras[currentEraIndex].color}
            strokeWidth="0.75"
            strokeDasharray={
              currentEraIndex === 0 ? "30 8" :
              currentEraIndex === 1 ? "4 12" :
              currentEraIndex === 2 ? "8 8" :
              "100 10 20 10"
            }
            animate={{ rotate: 360 }}
            transition={{ duration: currentEraIndex === 3 ? 5 : 12, repeat: Infinity, ease: "linear" }}
            style={{ 
              transformOrigin: "center",
              transition: "stroke 0.8s, stroke-dasharray 0.8s",
              opacity: 0.4
            }}
          />

          {/* SVG Circular Progress Gauge (Tied to state percentage) */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={eras[currentEraIndex].color}
            strokeWidth={currentEraIndex === 1 ? "3" : "1.75"}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap={currentEraIndex === 1 ? "butt" : "round"}
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "center",
              transition: "stroke 0.8s, stroke-dashoffset 0.15s ease-out, stroke-width 0.8s",
              opacity: 0.85
            }}
          />

          {/* Era Specific HUD Enhancements */}
          {currentEraIndex === 3 && (
            <g stroke={eras[currentEraIndex].color} strokeWidth="0.75" opacity="0.6" style={{ transition: 'stroke 0.8s' }}>
              <line x1="100" y1="12" x2="100" y2="22" />
              <line x1="100" y1="178" x2="100" y2="188" />
              <line x1="12" y1="100" x2="22" y2="100" />
              <line x1="178" y1="100" x2="188" y2="100" />
            </g>
          )}
          
          {currentEraIndex === 0 && (
            <g fill={eras[currentEraIndex].color} opacity="0.5" style={{ transition: 'fill 0.8s' }}>
              <circle cx="100" cy="18" r="1.5" />
              <circle cx="100" cy="182" r="1.5" />
              <circle cx="18" cy="100" r="1.5" />
              <circle cx="182" cy="100" r="1.5" />
            </g>
          )}
        </svg>
      </div>

      {/* Center Text Section */}
      <div className="z-10 flex w-full flex-1 flex-col items-center justify-center">
        <div className="relative flex flex-col items-center justify-center w-full max-w-[280px]">
          
          {/* Era Title Name */}
          <div className="relative flex h-20 w-full items-center justify-center md:h-24">
            <AnimatePresence>
              <motion.div
                key={currentEraIndex}
                initial={{ y: 25, opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
                animate={{ y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ y: -25, opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                  fontFamily: eras[currentEraIndex].font, 
                  color: eras[currentEraIndex].color,
                  textShadow: 
                    currentEraIndex === 0 ? '0 0 15px rgba(251, 191, 36, 0.6)' :
                    currentEraIndex === 1 ? '3px 0 rgba(0,255,65,0.7), -3px 0 rgba(236,72,153,0.7), 0 0 8px rgba(0,255,65,0.5)' :
                    currentEraIndex === 2 ? '0 0 12px rgba(99, 102, 241, 0.5)' :
                    '0 0 15px rgba(6, 182, 212, 0.8), 0 0 25px rgba(6, 182, 212, 0.4)'
                }}
                className={`absolute font-bold uppercase tracking-[0.15em] text-center w-full ${eras[currentEraIndex].fontSize}`}
              >
                {eras[currentEraIndex].name}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Central Pulsating Percentage Counter */}
          <motion.div 
            className="text-xs font-retro opacity-60 mt-2 tracking-widest tabular-nums"
            style={{ color: eras[currentEraIndex].color, transition: 'color 0.8s' }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
          >
            {progress}%
          </motion.div>
        </div>
        
        {/* Dynamic Subtitle Description */}
        <div className="relative h-6 w-full max-w-lg overflow-hidden text-center mt-6">
          <AnimatePresence>
            <motion.p
              key={`sub-${currentEraIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 text-[9px] uppercase tracking-[0.25em] text-white/50 text-center px-4"
            >
              {eras[currentEraIndex].sub}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Anchored Progress Bar */}
      <div className="z-10 relative mx-auto h-[1px] w-full max-w-2xl overflow-hidden bg-white/5">
        <motion.div
          className="absolute inset-y-0 left-0 transition-colors duration-500"
          style={{ backgroundColor: eras[currentEraIndex].color, transition: 'background-color 0.8s, width 0.15s ease-out' }}
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};
