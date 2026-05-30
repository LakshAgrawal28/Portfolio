import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTimeline } from '../contexts/TimelineContext';
import { timelineData } from '../data/timelineData';
import { Globe, GitBranch } from 'lucide-react';
import { cn } from '../utils/cn';

export const Projects: React.FC = () => {
  const { era } = useTimeline();
  const data = timelineData[era];
  const sectionRef = React.useRef<HTMLElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="work" ref={sectionRef} className="py-24 px-6 sm:px-12 md:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-retro text-xs tracking-[0.3em] uppercase text-accent">{data.uiStrings.workTitle}</span>
          </motion.div>
          
          <motion.h2 
            key={`projects-title-${era}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading text-primary"
          >
            Temporal Artifacts
          </motion.h2>
        </header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {data.projects.map((project) => (
              <motion.div
                key={`project-${project.id}`}
                layout
                variants={itemVariants}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                className="group relative project-card"
              >
                {/* Card Base */}
                <div className={cn(
                  "h-full bg-surface border-2 transition-all duration-700 overflow-hidden flex flex-col backdrop-blur-sm relative",
                  era === '1800s' && "border-accent/30 rounded-none shadow-[10px_10px_0_rgba(251,191,36,0.15)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px]",
                  era === '1900s' && "border-primary/40 rounded-none shadow-[4px_4px_0_var(--color-accent)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--color-accent)]",
                  era === 'present' && "border-white/5 rounded-3xl hover:border-accent/40 hover:bg-white/[0.04]",
                  era === 'future' && "border-accent/25 rounded-none hover:border-accent/60 hover:bg-accent/5 shadow-[0_0_20px_rgba(6,182,212,0.08)] hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]"
                )}>
                  {/* Cyber Corner Brackets */}
                  {era === 'future' && (
                    <>
                      <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-accent/40 group-hover:border-accent group-hover:w-5 group-hover:h-5 transition-all duration-300 pointer-events-none" />
                      <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-accent/40 group-hover:border-accent group-hover:w-5 group-hover:h-5 transition-all duration-300 pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-accent/40 group-hover:border-accent group-hover:w-5 group-hover:h-5 transition-all duration-300 pointer-events-none" />
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-accent/40 group-hover:border-accent group-hover:w-5 group-hover:h-5 transition-all duration-300 pointer-events-none" />
                    </>
                  )}
                  
                  {/* Visual Header */}
                  <div className="relative aspect-video overflow-hidden bg-background/50 border-b border-white/5">
                    <img 
                      src={project.image}
                      alt={project.name}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-1000 group-hover:scale-110",
                        era === '1800s' && "sepia-[0.7] contrast-125 saturate-[0.8] brightness-90 group-hover:sepia-[0.4]",
                        era === '1900s' && "grayscale-[1] contrast-150 brightness-110 group-hover:grayscale-0",
                        era === 'future' && "hue-rotate-[120deg] brightness-125 saturate-[1.5] group-hover:hue-rotate-0",
                        "opacity-70 group-hover:opacity-100"
                      )}
                    />
                    
                    <div className={cn(
                      "absolute inset-0 pointer-events-none transition-opacity duration-1000",
                      era === '1800s' && "bg-[#5d4037]/20 mix-blend-multiply opacity-60",
                      era === '1900s' && "bg-accent/5 mix-blend-screen opacity-10",
                      era === 'future' && "bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay"
                    )} />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col pointer-events-auto">
                    <h3 className="text-2xl font-heading text-primary mb-3">
                      {project.loreName || project.name}
                    </h3>
                    
                    <p className="text-secondary/80 text-sm leading-relaxed mb-8 flex-1">
                      {project.loreDescription || project.description}
                    </p>

                    {/* Metadata Footer */}
                    <div className="pt-6 border-t border-border/10 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[9px] font-retro text-accent/80 bg-accent/10 px-2 py-1 rounded uppercase tracking-tighter">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                    <div className="flex gap-3">
                      {project.githubLink && (
                        <motion.a 
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.githubLink} 
                          className={cn(
                            "w-10 h-10 flex items-center justify-center transition-all duration-300",
                            era === '1800s' && "border border-accent/40 rounded-full text-accent hover:bg-accent/10",
                            era === '1900s' && "bg-primary text-background shadow-[3px_3px_0_var(--color-accent)] hover:translate-x-[-2px] hover:translate-y-[-2px]",
                            era === 'present' && "bg-white/5 hover:bg-white/10 rounded-xl text-primary",
                            era === 'future' && "border border-accent/40 text-accent hover:bg-accent/15 rounded-none shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                          )}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GitBranch size={16} />
                        </motion.a>
                      )}
                      {project.liveLink && (
                        <motion.a 
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.liveLink} 
                          className={cn(
                            "w-10 h-10 flex items-center justify-center transition-all duration-300",
                            era === '1800s' && "border border-accent/40 rounded-full text-accent hover:bg-accent/10",
                            era === '1900s' && "bg-primary text-background shadow-[3px_3px_0_var(--color-accent)] hover:translate-x-[-2px] hover:translate-y-[-2px]",
                            era === 'present' && "bg-accent text-white rounded-xl shadow-lg shadow-accent/20",
                            era === 'future' && "bg-accent text-background font-bold rounded-none shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
                          )}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Globe size={16} />
                        </motion.a>
                      )}
                    </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  );
};
