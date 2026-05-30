import type { EraData } from '../types';

export const era1800s: EraData = {
  id: "1800s",
  name: "The Celestial Magic Era",
  label: "Magic",
  hero: {
    title: "Laksh Agrawal",
    role: "The Arcane Archivist",
    subRole1: "Arcane Artificer",
    subRole2: "Aetheric Architect",
    image: "/assets/photos/1800.jpg",
  },
  skills: [
    { category: "Enchanted Scrolls", items: ["React Summoning", "Next.js Tomes", "Tailwind Illusions", "Celestial Canvas", "Motion Alchemy"] },
    { category: "Arcane Infrastructure", items: ["Ghost-Node", "Express Runes", "Mongo-Vault", "PostgreSQL Tomes", "C++ Logic"] },
    { category: "Visionary Oracles", items: ["Pythian Scripts", "OpenCV Sight", "Media-Prophecy", "Tensor-Sorcery"] }
  ],
  uiStrings: {
    contactButton: "Send a Raven",
    workTitle: "Arcane Artifacts",
    skillsTitle: "Mystical Disciplines",
    viewProject: "Scry Artifact",
    nav: {
      work: "Artifacts",
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
      description: "Python-based hand gesture controller using OpenCV and MediaPipe. Command your OS through gesture recognition.",
      loreName: "The Leviosa Talisman",
      loreDescription: "A kinetic conduit that allows one to command the winds of the machine through mere hand gestures.",
      tags: ["Pythian Spirit", "OpenCV Sight"],
      liveLink: "https://leviosa.lakshdoes.tech/",
      githubLink: "https://github.com/LakshAgrawal28/Leviosa",
      image: "/assets/projects/leviosa.jpeg"
    },
    {
      id: "inkdrop",
      name: "InkDrop",
      description: "Minimalist markdown editor with live preview, folder organization, and local storage sync.",
      loreName: "The InkDrop Quill",
      loreDescription: "A magical parchment scribe that records spells and keeps notes without blotting the page.",
      tags: ["Scribe Alchemy", "Spells Ledger"],
      liveLink: "https://inkdrop.lakshdoes.tech/",
      githubLink: "https://github.com/LakshAgrawal28/InkDrop",
      image: "/assets/projects/inkdrop.png"
    },
    {
      id: "fes-site",
      name: "FES Site",
      description: "Official web portal for the Federation of Engineering Students at NSUT, showcasing society events and resources.",
      loreName: "The FES Guild Portal",
      loreDescription: "A registrar and celestial registry linking young mages and academy scholars across the domains.",
      tags: ["Guild Registry", "Arcane Alliance"],
      liveLink: "https://www.fesnsut.com/",
      image: "/assets/projects/fes.png"
    },
    {
      id: "consilium-site",
      name: "Consilium Site",
      description: "Social networking platform focused on peer mentorship, career path building, and project coordination.",
      loreName: "The Consilium Scroll",
      loreDescription: "A shared ledger where apprentices find mentors, map out their masteries, and plot their ascent.",
      tags: ["Mentorship Scroll", "Guild Ledger"],
      liveLink: "https://consilium-webapp-fesnsuts-projects.vercel.app/",
      image: "/assets/projects/consilium.png"
    },
    {
      id: "portfolio",
      name: "Portfolio",
      description: "Interactive timeline portfolio application featuring animated era transitions and style variations.",
      loreName: "The Portfolio Chronicles",
      loreDescription: "An ancient parchment chronometer that shifts its layout across the streams of history.",
      tags: ["Temporal Codex", "Chronometer"],
      liveLink: "https://lakshdoes.tech/",
      githubLink: "https://github.com/LakshAgrawal28/Portfolio",
      image: "/assets/projects/portfolio.png"
    },
    {
      id: "mini-projects",
      name: "Mini Projects",
      description: "Curated compilation of interactive web applications, tools, and responsive mini-games.",
      loreName: "The Mini Projects Cabinet",
      loreDescription: "A collection of small magical devices, minor relics, and pocket astrolabes for daily wizardry.",
      tags: ["Minor Relics", "Pocket Charms"],
      liveLink: "https://mini-projects.lakshdoes.tech/",
      githubLink: "https://github.com/LakshAgrawal28/Mini-Projects",
      image: "/assets/projects/mini.png"
    },
    {
      id: "fintwin",
      name: "FinTwin",
      description: "Financial visualization dashboard featuring asset allocation charts, splits, and analytics metrics.",
      loreName: "The FinTwin Ledger",
      loreDescription: "A master calculation of one's gold coins and treasures across all realms, updated by invisible scribes.",
      tags: ["Gold Metric", "Vault Ledgers"],
      liveLink: "https://fin-twin.lakshdoes.tech/",
      githubLink: "https://github.com/LakshAgrawal28/FinTwin",
      image: "/assets/projects/fintwin.png"
    },
    {
      id: "tafl-project",
      name: "TAFL Project",
      description: "Automata theory simulator visualizing state transitions, regex parsing, and language logic.",
      loreName: "The TAFL Clockwork Speculum",
      loreDescription: "A device that simulates clockwork patterns and deciphering runes through finite states of the mind.",
      tags: ["Clockwork Logic", "Rune Decipherer"],
      liveLink: "https://tafl-by.lakshdoes.tech/",
      githubLink: "https://github.com/LakshAgrawal28/TAFL",
      image: "/assets/projects/tafl.png"
    }
  ]
};
