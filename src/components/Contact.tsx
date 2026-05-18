import React from 'react';
import { motion } from 'framer-motion';
import { useTimeline } from '../contexts/TimelineContext';
import { Mail, Send, Link, Terminal } from 'lucide-react';
import { timelineData } from '../data/timelineData';

export const Contact: React.FC = () => {
  const { era } = useTimeline();
  const data = timelineData[era];

  const contactOptions = [
    { icon: <Mail />, label: data.uiStrings.emailLabel, val: "laksh.agrawal.ug24@nsut.ac.in", href: "https://mail.google.com/mail/?view=cm&fs=1&to=laksh.agrawal.ug24@nsut.ac.in" },
    { icon: <Terminal />, label: data.uiStrings.githubLabel, val: "github.com/LakshAgrawal28", href: "https://github.com/LakshAgrawal28" },
    { icon: <Link />, label: data.uiStrings.linkedinLabel, val: "linkedin.com/in/laksh-agrawal-873598324", href: "https://linkedin.com/in/laksh-agrawal-873598324" }
  ];

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6 mx-auto">
            <Send size={24} />
          </div>
          <h2 className="text-4xl md:text-6xl font-heading text-primary mb-6">
            {data.uiStrings.contactTitle}
          </h2>
          <p className="text-secondary max-w-lg mb-12 font-primary italic underline decoration-accent/30 underline-offset-4">
            Available for collaborations across all known timelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {contactOptions.map((item, i) => (
            <motion.a
              href={item.href}
              target={item.href.startsWith('mailto') ? undefined : "_blank"}
              rel="noreferrer"
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 border-2 transition-all duration-500 block hide-cursor-on-desktop pointer-events-auto
                ${era === '1800s' ? 'border-accent/40 rounded-none bg-accent/5 font-serif hover:bg-accent/20' : 
                  era === '1900s' ? 'border-primary bg-background shadow-[8px_8px_0_var(--color-primary)] rounded-none hover:shadow-[12px_12px_0_var(--color-accent)]' : 
                  era === 'present' ? 'glass rounded-3xl hover:bg-white/10' : 
                  'border-quantum/40 bg-black/40 text-quantum clip-path-polygon hover:border-quantum hover:shadow-[0_0_20px_var(--color-quantum)]'}
              `}
            >
              <div className="text-accent mb-4 flex justify-center">{item.icon}</div>
              <div className="text-[10px] font-retro uppercase tracking-widest opacity-50 mb-2">{item.label}</div>
              <div className="text-primary font-bold">{item.val}</div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 opacity-20 font-retro text-[10px] tracking-[1em] uppercase"
        >
          {data.uiStrings.footerNote}
        </motion.div>
      </div>
    </section>
  );
};
