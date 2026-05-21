import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

export type Era = '1800s' | '1900s' | 'present' | 'future';
export type TransitionSpeed = 'slow' | 'fast';

const jumpTiming: Record<TransitionSpeed, { cover: number; hold: number; exitClear: number }> = {
  slow: { cover: 1500, hold: 1050, exitClear: 920 },
  fast: { cover: 900, hold: 450, exitClear: 700 },
};

interface TimelineContextType {
  era: Era;
  setEra: (era: Era) => void;
  transitionSpeed: TransitionSpeed;
  setTransitionSpeed: (speed: TransitionSpeed) => void;
  isTransitioning: boolean;
  prevEra: Era;
  nextEra: Era | null;
  triggerJump: (targetEra: Era) => void;
}

const TimelineContext = createContext<TimelineContextType | undefined>(undefined);

export const TimelineProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to load from localStorage, default to 'present'
  const [era, setEraState] = useState<Era>(() => {
    const saved = localStorage.getItem('chronos-era') as Era;
    return saved || 'present';
  });
  
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevEra, setPrevEra] = useState<Era>(era);
  const [nextEra, setNextEra] = useState<Era | null>(null);
  const [transitionSpeed, setTransitionSpeedState] = useState<TransitionSpeed>(() => {
    const saved = localStorage.getItem('chronos-transition-speed') as TransitionSpeed;
    return saved === 'fast' ? 'fast' : 'slow';
  });

  const timersRef = useRef<number[]>([]);

  // Sync to text attributes/classes on the document root for CSS variables
  useEffect(() => {
    document.documentElement.dataset.theme = era;
    localStorage.setItem('chronos-era', era);
  }, [era]);

  useEffect(() => {
    localStorage.setItem('chronos-transition-speed', transitionSpeed);
  }, [transitionSpeed]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach(timer => window.clearTimeout(timer));
      timersRef.current = [];
    };
  }, []);

  const setTransitionSpeed = (speed: TransitionSpeed) => {
    if (!isTransitioning) {
      setTransitionSpeedState(speed);
    }
  };

  const triggerJump = (targetEra: Era) => {
    if (targetEra === era || isTransitioning) return;
    const timing = jumpTiming[transitionSpeed];
    
    setPrevEra(era);
    setNextEra(targetEra);
    setIsTransitioning(true);
    
    timersRef.current.forEach(timer => window.clearTimeout(timer));
    timersRef.current = [];

    // Swap the era only after the curtain has fully covered the page.
    const coverTimer = window.setTimeout(() => {
      setEraState(targetEra);

      const holdTimer = window.setTimeout(() => {
        setIsTransitioning(false);

        const exitClearTimer = window.setTimeout(() => {
          setNextEra(null);
        }, timing.exitClear);
        timersRef.current.push(exitClearTimer);
      }, timing.hold);
      timersRef.current.push(holdTimer);
    }, timing.cover);
    timersRef.current.push(coverTimer);
  };

  return (
    <TimelineContext.Provider value={{ era, setEra: setEraState, transitionSpeed, setTransitionSpeed, isTransitioning, prevEra, nextEra, triggerJump }}>
      {children}
    </TimelineContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (context === undefined) {
    throw new Error('useTimeline must be used within a TimelineProvider');
  }
  return context;
};
