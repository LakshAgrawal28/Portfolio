import type { Era } from '../contexts/TimelineContext';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface EraContent {
  headline: string;
  subheadline: string;
  bio: string;
  role: string;
  navMap: {
    home: string;
    work: string;
    about: string;
    contact: string;
  };
  projectsTitle: string;
  skillsTitle: string;
  skills: string[];
  projects: ProjectData[];
  contactText: string;
}

export const contentData: Record<Era, EraContent> = {
  '1800s': {
    headline: "The Archivist",
    subheadline: "Specializing in Chronological Curations & Steam-Powered Interface Logic",
    bio: "Born into the soot-stained corridors of the industrial revolution, my focus has ever remained on the preservation of visual dignity through meticulous craft. Each pixel is treated as an ink drop, carefully placed upon the digital fiber to ensure maximum legibility for the modern gentry. My tenure at the Royal Academy of Interface Mechanics granted me the foresight to bridge the gap between mechanical utility and aesthetic grace.",
    role: "The Archivist",
    navMap: { home: "Prologue", work: "Published Works", about: "The Author", contact: "Correspond" },
    projectsTitle: "Published Works",
    skillsTitle: "Techniques Mastered",
    skills: ["Classical Calligraphy", "Bookbinding", "Cartographic Projection", "Indexing", "Lithographic Study"],
    projects: [
      { id: "042", title: "The Steam Calculator", description: "A triumph of mechanical computation for the modern merchant. Tactile brass levers and ivory-inlaid dials.", tags: ["Mechanical", "Brass", "Ivory"], link: "#", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDlQbREUE0F2mTAk4T0CEk7TR-wAG7sR_HfwDZ428iqUOCF9i57OQZy2_FvGfJgqjNJQcfdyCdy--x5vZrYhZiGtwxk7iP-E26fn9NIciR8i4_6K-FethP4NNDrIdctUoW3X-pmtw5kahIQnHr7yrphiax1oFudK7omfU25itDiZmqMOAqKNT-YeseXc8XTGxbwNx_8T25UuSRoEgFSnChbpyoxMZjAp9jC0wg5nah2PM08AUvS3CbAK8mOpCSp8Fdkf-W38Psn0ES" },
      { id: "043", title: "The Telegraph Dispatch", description: "A swift messaging system utilizing the new electric fire to bridge continents. Focused on signal clarity.", tags: ["Electric", "Telegraphy", "Signals"], link: "#", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFFLcJfZ2HG2BeVwi9yDF36eAB0ft-eFmMHO-Dc02HndBVUScoLfKODQ40l2RHqq7xQ-r73Vc0fCGMgPlpbTkNbdhFjvWI9zxyqtiEtOk7wbaDu7JFWH2hEmJRtCvBIK6EzjB_EYyaHoEfpbI_oOUVBAQxZiHw8HPzVp4iAWwef5xhAV8kNOl_bovjqZhZ4OeCKUVFxMnRxLRThBs2sFNOsOoJ97M8nuv9hmM_rQlbIEQ1FT8l9h8cEVPNZLre_ubToMIX-xNqU5-4" },
      { id: "044", title: "Maritime Logistics", description: "A comprehensive visual system for tracking vessels across the Atlantic passage using new cartographic techniques.", tags: ["Cartography", "Maritime", "Logistics"], link: "#", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwYco3X6BXKM0ruZSaaFfXDtcmUdMaakbr_JrX7FidWJ0U-wb4khR2wcGBlQVEKioq7vd6ypBIjS2dhtYjwByIz3_pG7X6bhdwA6Ydzvk8eHcjCe5xDuhdRhjcUFbasmqI9Ko4RMpDV5MRNhkFN26NLGLu1Y4vRINkAYh0xbF676yzZXzpvlVvFN0e4heYH_BoCyA8DUteurHE7xgescra476Thy-eepvDZ67Ami9IDrrkNTm8yL6qb0I8zbvRu_LwfpECcsNro1GW" }
    ],
    contactText: "Send a Courier"
  },
  '1900s': {
    headline: "The Kinetic Engineer",
    subheadline: "Forging the future with steel, steam, and electricity.",
    bio: "I design the mechanisms that drive progress forward. From massive steam engines to delicate electrical relays, my work exists at the intersection of raw power and precise control.",
    role: "Industrial Engineer",
    navMap: { home: "Blueprint", work: "Prototypes", about: "The Engineer", contact: "Telegraph" },
    projectsTitle: "Fabrications",
    skillsTitle: "Machinery & Tools",
    skills: ["Drafting", "Metallurgy", "Circuit Design", "Thermodynamics", "Logistics"],
    projects: [
      { id: "1", title: "Locomotive Engine 04", description: "High-pressure boiler design for extended transit.", image: "https://images.unsplash.com/photo-1549419131-0df0b5555466?auto=format&fit=crop&q=80&w=800", tags: ["Steam", "Steel"], link: "#" },
      { id: "2", title: "Telegraph Relay Array", description: "Automated signal boosting station.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", tags: ["Electrical", "Brass"], link: "#" },
      { id: "3", title: "Assembly Line Mechanism", description: "Pneumatic sorting apparatus.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800", tags: ["Pneumatics", "Iron"], link: "#" },
    ],
    contactText: "Wire a Message"
  },
  'present': {
    headline: "Archiving the Present",
    subheadline: "Building digital experiences for the modern web.",
    bio: "I am a frontend developer and designer crafting clean, accessible, and performant user interfaces. Transforming complex problems into elegant digital solutions.",
    role: "Frontend Developer",
    navMap: { home: "Home", work: "Projects", about: "About", contact: "Contact" },
    projectsTitle: "Selected Works",
    skillsTitle: "Tech Stack",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "UI/UX Design"],
    projects: [
      { id: "1", title: "Chronos Dashboard", description: "A data visualization interface for temporal analytics.", image: "https://images.unsplash.com/photo-1551288049-bbda4e32f71d?auto=format&fit=crop&q=80&w=800", tags: ["React", "D3.js"], link: "#" },
      { id: "2", title: "E-Commerce Platform", description: "Modern storefront with seamless checkout.", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800", tags: ["Next.js", "Stripe"], link: "#" },
      { id: "3", title: "Design System", description: "A comprehensive component library for enterprise use.", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800", tags: ["Storybook", "Tailwind"], link: "#" },
    ],
    contactText: "Send an Email"
  },
  'future': {
    headline: "Architecting Futures",
    subheadline: "Optimizing synaptic interfaces and neural networks.",
    bio: "OPERATIVE // SECTOR 7. Specializing in advanced predictive modeling, holographic UI construction, and sub-light data transmission protocols. System status: OPTIMAL.",
    role: "Neural Architect",
    navMap: { home: "SYS.INIT", work: "DATABANKS", about: "PROFILE", contact: "PING" },
    projectsTitle: "ACTIVE MODULES",
    skillsTitle: "PROTOCOLS",
    skills: ["Quantum Computing", "Neural Linking", "Holo-Design", "Zero-G Formatting", "Cybernetics"],
    projects: [
      { id: "1", title: "Neon City Grid", description: "Traffic optimization for multi-level flying vehicles.", image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=800", tags: ["AI", "Simulation"], link: "#" },
      { id: "2", title: "Memory Construct", description: "Digital backup interface for human memory.", image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800", tags: ["Neural", "Storage"], link: "#" },
      { id: "3", title: "Orbital Defense UI", description: "Targeting systems for deep-space monitoring.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", tags: ["HUD", "Security"], link: "#" },
    ],
    contactText: "TRANSMIT DATA"
  }
};
