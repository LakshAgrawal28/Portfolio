import type { EraData } from '../types';

export const era1900s: EraData = {
  id: "1900s",
  name: "The Neon Arcade Era",
  label: "Retro",
  hero: {
    title: "Laksh Agrawal",
    role: "The Digital Rebel",
    subRole1: "Mainframe Operator",
    subRole2: "Circuit Designer",
    image: "/assets/photos/1900.png",
  },
  skills: [
    { category: "Display Interfaces", items: ["React Term", "Next.js Framework", "CSS CRT", "3D Wireframes", "Framer Pixels"] },
    { category: "Mainframe Core", items: ["Node.js Core", "Express API", "Mongo Database", "SQL Server", "C++ Assembly"] },
    { category: "Machine Intelligence", items: ["Python Scripter", "Optical CV", "Media Pipe", "Tensor Flow"] }
  ],
  uiStrings: {
    contactButton: "Dial Bulletin Board",
    workTitle: "Digital Prototypes",
    skillsTitle: "Hardware Specs",
    viewProject: "Execute program.exe",
    nav: {
      work: "Programs",
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
      description: "Python-based hand gesture controller using OpenCV and MediaPipe. Command your OS through gesture recognition.",
      loreName: "Leviosa Gesture-Modem",
      loreDescription: "A high-tech optical tracking terminal bypassing physical controls with early computer vision commands.",
      tags: ["VGA Optical", "Kernel Control"],
      liveLink: "https://leviosa.lakshdoes.tech/",
      githubLink: "https://github.com/LakshAgrawal28/Leviosa",
      image: "/assets/projects/leviosa.jpeg"
    },
    {
      id: "inkdrop",
      name: "InkDrop",
      description: "Minimalist markdown editor with live preview, folder organization, and local storage sync.",
      loreName: "InkDrop WordProcessor",
      loreDescription: "A monospaced terminal editor supporting clean markdown-to-ASCII rendering and fast note archives.",
      tags: ["Word Processor", "ASCII Text"],
      liveLink: "https://inkdrop.lakshdoes.tech/",
      githubLink: "https://github.com/LakshAgrawal28/InkDrop",
      image: "/assets/projects/inkdrop.png"
    },
    {
      id: "fes-site",
      name: "FES Site",
      description: "Official web portal for the Federation of Engineering Students at NSUT, showcasing society events and resources.",
      loreName: "FES Mainframe BBS",
      loreDescription: "A dial-up network linking engineering students across the mainframe network and institutional nodes.",
      tags: ["BBS Node", "Student Grid"],
      liveLink: "https://www.fesnsut.com/",
      image: "/assets/projects/fes.png"
    },
    {
      id: "consilium-site",
      name: "Consilium Site",
      description: "Social networking platform focused on peer mentorship, career path building, and project coordination.",
      loreName: "Consilium Bulletin Board",
      loreDescription: "An encrypted BBS network where hackers and engineers dial in to exchange mentorship logs and boot disks.",
      tags: ["Mentorship BBS", "P2P Network"],
      liveLink: "https://consilium-webapp-fesnsuts-projects.vercel.app/",
      image: "/assets/projects/consilium.png"
    },
    {
      id: "portfolio",
      name: "Portfolio",
      description: "Interactive timeline portfolio application featuring animated era transitions and style variations.",
      loreName: "Portfolio Chrono-Terminal",
      loreDescription: "A retro terminal console allowing users to select timelines and view local storage logs from various eras.",
      tags: ["BBS Dial-in", "Terminal Era"],
      liveLink: "https://lakshdoes.tech/",
      githubLink: "https://github.com/LakshAgrawal28/Portfolio",
      image: "/assets/projects/portfolio.png"
    },
    {
      id: "mini-projects",
      name: "Mini Projects",
      description: "Curated compilation of interactive web applications, tools, and responsive mini-games.",
      loreName: "Mini Projects Arcade",
      loreDescription: "A suite of 8-bit utility programs, basic text adventures, and CLI games running on custom firmware.",
      tags: ["Assembly Scripts", "Micro-Games"],
      liveLink: "https://mini-projects.lakshdoes.tech/",
      githubLink: "https://github.com/LakshAgrawal28/Mini-Projects",
      image: "/assets/projects/mini.png"
    },
    {
      id: "fintwin",
      name: "FinTwin",
      description: "Financial visualization dashboard featuring asset allocation charts, splits, and analytics metrics.",
      loreName: "FinTwin Wall Street",
      loreDescription: "A CRT-style stock monitor designed to track investment assets and multi-currency exchange databases.",
      tags: ["COBOL Finance", "CRT Charts"],
      liveLink: "https://fin-twin.lakshdoes.tech/",
      githubLink: "https://github.com/LakshAgrawal28/FinTwin",
      image: "/assets/projects/fintwin.png"
    },
    {
      id: "tafl-project",
      name: "TAFL Project",
      description: "Automata theory simulator visualizing state transitions, regex parsing, and language logic.",
      loreName: "TAFL Turing Simulator",
      loreDescription: "A retro state machine calculator to parse formal languages, grammar inputs, and raw tape heads.",
      tags: ["Tape Automata", "Logic Gates"],
      liveLink: "https://tafl-by.lakshdoes.tech/",
      githubLink: "https://github.com/LakshAgrawal28/TAFL",
      image: "/assets/projects/tafl.png"
    }
  ]
};
