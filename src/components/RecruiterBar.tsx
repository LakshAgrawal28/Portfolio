import React from 'react';
import { motion } from 'framer-motion';

export const RecruiterBar: React.FC = () => {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-black/80 backdrop-blur-lg text-white text-[10px] md:text-xs font-mono uppercase tracking-widest py-2 px-6 md:px-12 flex justify-between items-center border-b border-white/10 shadow-lg pointer-events-auto"
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="opacity-80">Available for Work</span>
        </div>
        <span className="hidden md:inline opacity-30">|</span>
        <span className="hidden md:inline opacity-80">Exp: 3+ Years</span>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="hidden md:inline opacity-80">Stack: React, Node.js, TS</span>
        <span className="hidden md:inline opacity-30">|</span>
        <a 
          href="mailto:laksh@example.com" // Update as needed
          className="hover:text-accent transition-colors opacity-90 font-bold"
        >
          laksh@example.com
        </a>
      </div>
    </motion.div>
  );
};
