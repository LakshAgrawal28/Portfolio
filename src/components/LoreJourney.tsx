import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTimeline } from '../contexts/TimelineContext';
import { timelineData } from '../data/timelineData';
import { lifeEvents } from '../data/loreData';
import { cn } from '../utils/cn';

export const LoreJourney: React.FC = () => {
  const { era } = useTimeline();
  const data = timelineData[era];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="about" className="relative py-48 px-6 sm:px-12 md:px-24 z-10">
      {/* Dynamic Background Gradient */}
      <div className={cn(
        "absolute inset-0 opacity-10 transition-colors duration-1000 z-0",
        era === '1800s' && "bg-[#2d1b10]",
        era === '1900s' && "bg-accent",
        era === 'present' && "bg-primary",
        era === 'future' && "bg-quantum"
      )} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header: Leclerc Inspired Bold Typography */}
        <div className="mb-40 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[2px] bg-accent mb-8 origin-left"
          />
          
          <motion.span 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="font-retro text-[10px] md:text-xs tracking-[0.5em] uppercase text-accent font-bold mb-4"
          >
             {data.uiStrings.journeyTitle}
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-heading text-primary leading-[0.8] tracking-tighter"
          >
            THE <br />
            <span className="text-accent underline decoration-white/10 underline-offset-8">CHRONICLE</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          {/* Left Column: Premium Sticky Media Frame */}
          <div className="hidden lg:block lg:col-span-6 sticky top-48 h-[75vh] perspective-2000">
            <div className="relative w-full h-full">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeIndex}
                   initial={{ opacity: 0, y: 30, rotateX: 15 }}
                   animate={{ opacity: 1, y: 0, rotateX: 0 }}
                   exit={{ opacity: 0, y: -30, rotateX: -15 }}
                   transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                   className="absolute inset-0"
                 >
                   {/* Cinematic Frame */}
                   <div className={cn(
                     "relative w-full h-full overflow-hidden transition-all duration-1000 group",
                     era === '1800s' && "border border-accent/20 rounded-none sepia-[0.2]",
                     era === '1900s' && "border-2 border-primary rounded-none shadow-[24px_24px_0_var(--color-accent)]",
                     era === 'present' && "rounded-[4rem] shadow-2xl glass",
                     era === 'future' && "clip-path-polygon border border-accent/40 brightness-110"
                   )}>
                     <img 
                        src={lifeEvents[activeIndex].image} 
                        alt={lifeEvents[activeIndex].title}
                        className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                     />
                     
                     {/* Depth Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                     
                     {/* Quick Stats Overlay */}
                     <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                        <div className="space-y-1">
                           <p className="font-retro text-[8px] tracking-widest text-accent uppercase">Current Event</p>
                           <h4 className="text-4xl font-heading text-white tracking-widest leading-none">{lifeEvents[activeIndex].year}</h4>
                        </div>
                        <div className="h-12 w-[1px] bg-accent/30" />
                        <p className="text-[10px] font-retro tracking-widest text-white/40 uppercase rotate-90 origin-bottom-right translate-y-[-100%] translate-x-[50%]">
                           {lifeEvents[activeIndex].category}
                        </p>
                     </div>
                   </div>
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Narrative Milestones */}
          <div className="lg:col-span-6 space-y-64 py-20 lg:py-0">
            {lifeEvents.map((event, i) => (
              <motion.div
                key={`${event.title}-${i}`}
                onViewportEnter={() => setActiveIndex(i)}
                viewport={{ amount: 0.6 }}
                className="relative"
              >
                {/* Visual Line Segment */}
                <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/40 via-accent/5 to-transparent hidden lg:block" />

                <div className={cn(
                  "transition-all duration-700",
                  activeIndex === i ? "opacity-100 translate-x-4" : "opacity-20 translate-x-0"
                )}>
                  {/* Category Chip */}
                   <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-retro text-[8px] tracking-widest uppercase mb-6 rounded-sm">
                      {event.category}
                   </span>

                  <h3 className="text-4xl md:text-5xl font-heading text-primary mb-6 leading-none">
                    {event.title}
                  </h3>

                  {/* Mobile Mobile Inlined Media */}
                  <div className="lg:hidden w-full aspect-square mb-8 overflow-hidden rounded-xl border border-white/10">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>

                  <p className="text-lg md:text-xl text-secondary leading-relaxed font-primary max-w-lg mb-8">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {event.tags.map(tag => (
                      <span 
                        key={tag}
                        className="text-[9px] uppercase font-retro tracking-[0.2em] px-3 py-1 bg-white/[0.03] text-white/40 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {event.location && (
                    <div className="flex items-center gap-2 group/loc cursor-default">
                       <div className="w-4 h-4 rounded-full border border-accent/40 flex items-center justify-center">
                          <div className="w-1 h-1 bg-accent rounded-full" />
                       </div>
                       <span className="text-[10px] font-retro tracking-widest text-accent/60 uppercase group-hover/loc:text-accent transition-colors">
                          {event.location}
                       </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            
            {/* The Endspacer */}
            <div className="h-64 flex items-center justify-center opacity-10">
               <div className="w-[1px] h-full bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
