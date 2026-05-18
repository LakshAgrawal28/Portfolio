import type { EraData } from '../types';

export const eraPresent: EraData = {
  id: "present",
  name: "The Balanced Growth Era",
  label: "Modern",
  hero: {
    title: "Laksh Agrawal",
    role: "Full-Stack Magician / Coder",
    image: "/assets/photos/20241111_154255(1).jpg",
  },
  skills: [
    { category: "Frontend Mastery", items: ["React.js", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"] },
    { category: "Backend & Systems", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "C++ (DSA)"] },
    { category: "AI & Vision", items: ["Python", "OpenCV", "MediaPipe", "Tensorflow"] }
  ],
  uiStrings: {
    contactButton: "Let's Connect",
    workTitle: "Featured Projects",
    skillsTitle: "Core Competencies",
    viewProject: "Launch Demo",
    nav: {
      work: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    contactTitle: "Let's Build Something",
    emailLabel: "Drop a Message",
    githubLabel: "Code & Logic",
    linkedinLabel: "Professional Network",
    footerNote: "Made with passion & curiosity"
  },
  projects: [
    {
      id: "leviosa",
      name: "Leviosa",
      description: "Python-based hand gesture controller using OpenCV. Control your OS with hands.",
      loreName: "Leviosa (Hand Controller)",
      loreDescription: "A revolutionary way to interact with your machine, bypassing physical peripherals through computer vision.",
      tags: ["Python", "OpenCV", "MediaPipe"],
      link: "https://github.com/Laksh",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "consilium",
      name: "Consilium",
      description: "Full-scale social media platform for career development and networking.",
      loreName: "Consilium Platform",
      loreDescription: "A professional hub designed for cross-institutional mentorship and career tracking.",
      tags: ["React", "Firebase", "Node.js"],
      link: "https://consilium.app",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "mental-health",
      name: "MindFlow",
      description: "AI-powered mental health tracking and advisory platform.",
      loreName: "MindFlow Synthesis",
      loreDescription: "Using sentiment analysis to provide personalized wellness insights and daily flow states.",
      tags: ["Next.js", "OpenAI", "Prisma"],
      link: "#",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "fintwin",
      name: "FinTwin",
      description: "Financial dashboard for tracking multi-asset portfolios.",
      loreName: "FinTwin Analytics",
      loreDescription: "Aggregating global market data into a cohesive, high-fidelity visualization suite.",
      tags: ["D3.js", "Tailwind", "Supabase"],
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "hackathon",
      name: "Hackathon Hub",
      description: "Community for coding challenges.",
      loreName: "Hackathon Hub",
      loreDescription: "A centralized portal for managing, discovering, and winning national-level hackathons.",
      tags: ["TypeScript", "MongoDB"],
      link: "#",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "ecommerce",
      name: "E-Commerce Scale",
      description: "Scalable e-commerce architecture.",
      loreName: "E-Commerce Scaled",
      loreDescription: "A high-traffic marketplace infrastructure optimized for sub-second response times globally.",
      tags: ["Stripe", "Next.js 15"],
      link: "#",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop"
    }
  ]
};
