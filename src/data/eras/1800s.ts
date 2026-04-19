import type { EraData } from '../types';

export const era1800s: EraData = {
  id: "1800s",
  name: "The Celestial Magic Era",
  label: "Magic",
  hero: {
    title: "Laksh Agrawal",
    role: "The Arcane Archivist",
    image: "/assets/photos/IMG_20231227_155735_827.jpg",
  },
  journey: {
    bio: "An apprentice of the NSUT Academy of Mystical Engineering (est. 1824). I specialize in the transcription of human intent into kinetic energy, managing a vast library of arcane scrolls while maintaining a purity of 8.9 CGPA.",
    milestones: [
      { year: "1823", title: "Apprenticeship at NSUT", description: "Commenced studies in the Alchemy of Logic and Mathematical Runes." },
      { year: "1826", title: "The Leviosa Talisman", description: "First successful demonstration of non-contact kinetic manipulation." }
    ]
  },
  skills: [
    { category: "Arcane Runes", items: ["Celestial C++", "Logical Alchemy", "Pythian Scripts"] },
    { category: "Enchanted Scrolls", items: ["React Summoning", "CSS Illusions", "Ghost-Node"] }
  ],
  uiStrings: {
    contactButton: "Send a Raven",
    workTitle: "Arcane Artifacts",
    journeyTitle: "The Ancient Record",
    skillsTitle: "Mystical Disciplines",
    viewProject: "Scry Artifact",
    nav: {
      work: "Artifacts",
      about: "Chronicle",
      skills: "Runes",
      contact: "Raven"
    },
    contactTitle: "Establish Arcane Link",
    emailLabel: "Dispatch by Owl",
    githubLabel: "The Great Archive",
    linkedinLabel: "Guild Network",
    footerNote: "Thus Concludes the Ancient Record"
  },
  projects: [
    {
      id: "leviosa",
      name: "Leviosa",
      description: "Hand gesture detection for system control.",
      loreName: "The Leviosa Talisman",
      loreDescription: "A kinetic conduit that allows one to command the winds of the machine through mere hand gestures.",
      tags: ["Pythian Spirit", "OpenCV Sight"],
      link: "https://github.com/Laksh",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2088&auto=format&fit=crop"
    },
    {
      id: "consilium",
      name: "Consilium",
      description: "Social media for career development.",
      loreName: "The Consilium Scroll",
      loreDescription: "A shared ledger where apprentices find mentors and plot their ascent to Mastery.",
      tags: ["Summoning (React)", "Spirit-Web (Firebase)"],
      link: "https://consilium.app",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "mental-health",
      name: "MindFlow",
      description: "AI-powered mental health tracking.",
      loreName: "The Mind-Mirror",
      loreDescription: "A scrying glass that reflects the inner soul, offering guidance through the mists of the mind.",
      tags: ["Visionary AI", "Scroll-Sync"],
      link: "#",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "fintwin",
      name: "FinTwin",
      description: "Financial dashboard.",
      loreName: "The Gringotts Ledger",
      loreDescription: "A master calculation of one's treasures across all realms, updated by invisible scribes.",
      tags: ["Gold-Metric", "Vault-D3"],
      link: "#",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "hackathon",
      name: "Hackathon Hub",
      description: "Community for coding challenges.",
      loreName: "The Sorcerer's Tournament",
      loreDescription: "A guild hall where young mages compete in 48-hour rituals of rapid spellcasting.",
      tags: ["Guild-Sync", "Ritual-React"],
      link: "#",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "ecommerce",
      name: "E-Commerce Scale",
      description: "Scalable e-commerce architecture.",
      loreName: "The Grand Bazaar Scroll",
      loreDescription: "An automated marketplace capable of handling a thousand merchant wagons at once.",
      tags: ["Alchemy-Stripe", "Market-Metric"],
      link: "#",
      image: "https://images.unsplash.com/photo-1519074063912-ad2fe3f51984?q=80&w=2070&auto=format&fit=crop"
    }
  ]
};

