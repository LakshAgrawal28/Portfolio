import type { EraData } from '../types';

export const era1900s: EraData = {
  id: "1900s",
  name: "The Neon Arcade Era",
  label: "Retro",
  hero: {
    title: "Laksh Agrawal",
    role: "The Digital Rebel",
    image: "/assets/photos/20251012_172943(1).jpg",
  },
  journey: {
    bio: "I spent my nights in the basement of the Computer Lab at NSUT, surviving on caffeine and the hum of vacuum tubes. I managed to maintain a high-level Priority Queue (8.9 CGPA) while building the first digital interfaces for the next generation.",
    milestones: [
      { year: "1988", title: "Mainframe Access Granted", description: "Entered the NSUT Computing Division to study Data Structures." },
      { year: "1991", title: "Project: Bit-Slinger", description: "Developed low-latency hand-tracking for retro gaming consoles." }
    ]
  },
  skills: [
    { category: "Assembly & Logic", items: ["C with Pointers", "C++ Turbo", "Python Scripter"] },
    { category: "Dev Terminals", items: ["React Term", "CSS CRT", "Node.js Core"] }
  ],
  uiStrings: {
    contactButton: "Dial Bulletin Board",
    workTitle: "Digital Prototypes",
    journeyTitle: "Mainframe History",
    skillsTitle: "Hardware Specs",
    viewProject: "Execute program.exe",
    nav: {
      work: "Programs",
      about: "Logs",
      skills: "Hardware",
      contact: "Dial-up"
    },
    contactTitle: "Initiating Handshake",
    emailLabel: "Electronic Mail",
    githubLabel: "The Digital Basement",
    linkedinLabel: "Terminal Network",
    footerNote: "Carrier Signal Lost"
  },
  projects: [
    {
      id: "leviosa",
      name: "Leviosa",
      description: "Hand gesture detection for system control.",
      loreName: "Gesture-Modem 2000",
      loreDescription: "A breakthrough in human-machine interfacing using optical sensors to bypass the keyboard.",
      tags: ["VGA Output", "Kernel Logic"],
      link: "https://github.com/Laksh",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "consilium",
      name: "Consilium",
      description: "Social media for career development.",
      loreName: "Consilium Bulletin Board",
      loreDescription: "An encrypted BBS where hackers and engineers network to optimize their terminal output.",
      tags: ["TCP/IP", "Shell Scripts"],
      link: "https://consilium.app",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "mental-health",
      name: "MindFlow",
      description: "AI-powered mental health tracking.",
      loreName: "Neuro-Terminal v1.0",
      loreDescription: "A biometric interface designed to track psychological fluctuations in mainframe operators.",
      tags: ["LISP Logic", "Mainframe Sync"],
      link: "#",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "fintwin",
      name: "FinTwin",
      description: "Financial dashboard.",
      loreName: "Wall Street Mainframe",
      loreDescription: "A high-frequency tracking system for assets across the global stock exchange.",
      tags: ["COBOL Finance", "CRT Charts"],
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "hackathon",
      name: "Hackathon Hub",
      description: "Community for coding challenges.",
      loreName: "The Basement LAN Party",
      loreDescription: "A collaborative terminal where pioneers gather to code through the weekend on dial-up.",
      tags: ["Ethernet Hub", "Pascal Jams"],
      link: "#",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2064&auto=format&fit=crop"
    },
    {
      id: "ecommerce",
      name: "E-Commerce Scale",
      description: "Scalable e-commerce architecture.",
      loreName: "The Electronic Directory",
      loreDescription: "A precursors to the world wide web shopping experience using automated credit verification.",
      tags: ["MODEM Pay", "SQL-Lite"],
      link: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
    }
  ]
};

