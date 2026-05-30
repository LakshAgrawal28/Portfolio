import React, { createContext, useContext, useState, useEffect } from 'react';

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

  // Sync to text attributes/classes on the document root for CSS variables
  useEffect(() => {
    document.documentElement.dataset.theme = era;
    localStorage.setItem('chronos-era', era);
  }, [era]);

  useEffect(() => {
    localStorage.setItem('chronos-transition-speed', transitionSpeed);
  }, [transitionSpeed]);

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
    
    // Swap the era only after the curtain has fully covered the page.
    setTimeout(() => {
      setEraState(targetEra);

      setTimeout(() => {
        setIsTransitioning(false);

        setTimeout(() => {
          setNextEra(null);
        }, timing.exitClear);
      }, timing.hold);
    }, timing.cover);
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
