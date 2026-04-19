import React from 'react';
import { motion } from 'framer-motion';
import { useTimeline } from '../contexts/TimelineContext';
import { timelineData } from '../data/timelineData';

export const Skills: React.FC = () => {
  const { era } = useTimeline();
  const data = timelineData[era];

  return (
    <section id="skills" className="relative z-20 py-24 px-6 sm:px-12 md:px-24 bg-background border-y border-border/10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={`inline-block px-4 py-1 mb-4 rounded-full border text-[10px] font-retro tracking-[0.3em] uppercase
              ${era === '1800s' ? 'border-accent text-accent' : 
                era === '1900s' ? 'border-primary text-primary' : 
                era === 'present' ? 'border-white/20' : 
                'border-quantum text-quantum'}
            `}
          >
            {data.uiStrings.skillsTitle}
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading text-primary">Masteries & Scripts</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data.skills.map((category, idx) => (
            <motion.div
              key={`${era}-${category.category}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-8 transition-all duration-700
                ${era === '1800s' ? 'border-l-4 border-accent bg-accent/5 font-serif italic' : 
                  era === '1900s' ? 'bg-[#111] border-2 border-border/40 shadow-[8px_8px_0_var(--color-border)]' : 
                  era === 'present' ? 'glass rounded-3xl' : 
                  'bg-black/50 border-r-4 border-quantum clip-path-polygon'}
              `}
            >
              <h3 className="text-xl font-heading text-accent mb-8 tracking-widest uppercase">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2 text-xs font-retro tracking-wider transition-all
                      ${era === '1800s' ? 'border-b border-accent/30 text-primary' : 
                        era === '1900s' ? 'bg-primary text-background font-bold uppercase' : 
                        era === 'present' ? 'bg-white/5 border border-white/10 rounded-full text-secondary hover:text-accent' : 
                        'text-quantum border-l-2 border-quantum/40 hover:border-quantum pl-2'}
                    `}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
