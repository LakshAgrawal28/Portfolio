import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useTimeline } from '../contexts/TimelineContext';

export const CustomCursor: React.FC = () => {
  const { era } = useTimeline();
  const [isPointer, setIsPointer] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const isClickable = target?.closest('button, a, input, [role="button"]');
      setIsPointer(!!isClickable);
    };

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const isClickable = target?.closest('button, a, input, [role="button"]');
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', checkPointer);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', checkPointer);
    };
  }, [cursorX, cursorY]);

  // Era-specific cursor styles
  const getCursorStyles = () => {
    switch (era) {
      case '1800s':
        return {
          width: isPointer ? 40 : 24,
          height: isPointer ? 40 : 24,
          borderRadius: '50% 50% 50% 10%',
          backgroundColor: 'transparent',
          border: '2px solid var(--color-accent)',
          rotate: -45,
          boxShadow: 'var(--magic-glow)',
        };
      case '1900s':
        return {
          width: isPointer ? 32 : 16,
          height: isPointer ? 32 : 16,
          borderRadius: 0,
          backgroundColor: isPointer ? 'var(--color-accent)' : 'var(--text-primary)',
          mixBlendMode: 'difference' as const,
          boxShadow: '4px 4px 0 var(--color-alt)',
        };
      case 'future':
        return {
          width: isPointer ? 60 : 30,
          height: isPointer ? 60 : 30,
          borderRadius: '50%',
          border: '1px solid var(--color-accent)',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          backdropFilter: 'blur(4px)',
        };
      default: // present
        return {
          width: isPointer ? 40 : 20,
          height: isPointer ? 40 : 20,
          borderRadius: '50%',
          backgroundColor: 'white',
          mixBlendMode: 'difference' as const,
        };
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] show-custom-cursor"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={getCursorStyles()}
        transition={{ type: 'spring', ...springConfig }}
      >
        {era === 'future' && (
          <motion.div 
            className="absolute inset-0 rounded-full border border-accent/30"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
        {era === '1800s' && (
          <motion.div 
            className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Trailing effect for future */}
      {era === 'future' && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998] show-custom-cursor w-4 h-4 rounded-full bg-accent/20 blur-sm"
          style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          transition={{ type: 'spring', damping: 40, stiffness: 200 }}
        />
      )}
    </>
  );
};
