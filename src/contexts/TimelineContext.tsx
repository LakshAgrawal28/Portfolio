import React, { createContext, useContext, useState, useEffect } from 'react';

export type Era = '1800s' | '1900s' | 'present' | 'future';

interface TimelineContextType {
  era: Era;
  setEra: (era: Era) => void;
  isTransitioning: boolean;
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

  // Sync to text attributes/classes on the document root for CSS variables
  useEffect(() => {
    document.documentElement.dataset.theme = era;
    localStorage.setItem('chronos-era', era);
  }, [era]);

  const triggerJump = (targetEra: Era) => {
    if (targetEra === era || isTransitioning) return;
    
    setIsTransitioning(true);
    // Let animation play, then switch
    setTimeout(() => {
      setEraState(targetEra);
      setTimeout(() => setIsTransitioning(false), 800); // 800ms to finish entrance animation
    }, 600); // 600ms mid-point of jump
  };

  return (
    <TimelineContext.Provider value={{ era, setEra: setEraState, isTransitioning, triggerJump }}>
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
