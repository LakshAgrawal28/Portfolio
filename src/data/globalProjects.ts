import type { Project } from './types';

export const globalProjects: Project[] = [
  {
    id: "leviosa",
    name: "Leviosa",
    description: "Python-based hand gesture controller using OpenCV and MediaPipe. Command your OS through gesture recognition.",
    loreName: "Leviosa",
    loreDescription: "A computer vision tool enabling users to control their operating system via gestures using camera inputs.",
    tags: ["Python", "OpenCV", "MediaPipe"],
    liveLink: "https://leviosa.lakshdoes.tech/",
    githubLink: "https://github.com/LakshAgrawal28/Leviosa",
    image: "/assets/projects/leviosa.jpeg"
  },
  {
    id: "inkdrop",
    name: "InkDrop",
    description: "Minimalist markdown editor with live preview, folder organization, and local storage sync.",
    loreName: "InkDrop",
    loreDescription: "A distraction-free markdown text editor with instantaneous preview, auto-save, and customizable themes.",
    tags: ["React", "Markdown Parser", "CSS"],
    liveLink: "https://inkdrop.lakshdoes.tech/",
    githubLink: "https://github.com/LakshAgrawal28/InkDrop",
    image: "/assets/projects/inkdrop.png"
  },
  {
    id: "fes-site",
    name: "FES Site",
    description: "Official web portal for the Federation of Engineering Students at NSUT, showcasing society events and resources.",
    loreName: "FES Site",
    loreDescription: "A central hub for engineering students to register, access information, and coordinate academic events.",
    tags: ["React", "University Node", "Tailwind"],
    liveLink: "https://www.fesnsut.com/",
    image: "/assets/projects/fes.png"
  },
  {
    id: "consilium-site",
    name: "Consilium Site",
    description: "Social networking platform focused on peer mentorship, career path building, and project coordination.",
    loreName: "Consilium Site",
    loreDescription: "A modern networking space facilitating peer mentorship, career roadmap generation, and project collaboration.",
    tags: ["React", "Firebase", "Node.js"],
    liveLink: "https://consilium-webapp-fesnsuts-projects.vercel.app/",
    image: "/assets/projects/consilium.png"
  },
  {
    id: "portfolio",
    name: "Portfolio",
    description: "Interactive timeline portfolio application featuring animated era transitions and style variations.",
    loreName: "Portfolio",
    loreDescription: "An interactive Single Page Application taking visitors on a journey across four historical timelines to view my work.",
    tags: ["React 19", "Framer Motion", "Tailwind v4"],
    liveLink: "https://lakshdoes.tech/",
    githubLink: "https://github.com/LakshAgrawal28/Portfolio",
    image: "/assets/projects/portfolio.png"
  },
  {
    id: "mini-projects",
    name: "Mini Projects",
    description: "Curated compilation of interactive web applications, tools, and responsive mini-games.",
    loreName: "Mini Projects",
    loreDescription: "A repository of lightweight web applications, frontend games, and developer utilities showcasing various micro-features.",
    tags: ["Vite", "Tailwind CSS", "React"],
    liveLink: "https://mini-projects.lakshdoes.tech/",
    githubLink: "https://github.com/LakshAgrawal28/Mini-Projects",
    image: "/assets/projects/mini.png"
  },
  {
    id: "fintwin",
    name: "FinTwin",
    description: "Financial visualization dashboard featuring asset allocation charts, splits, and analytics metrics.",
    loreName: "FinTwin",
    loreDescription: "A multi-asset dashboard allowing users to visualize investments, portfolio splits, and high-fidelity market metrics.",
    tags: ["D3.js", "Supabase", "React"],
    liveLink: "https://fin-twin.lakshdoes.tech/",
    githubLink: "https://github.com/LakshAgrawal28/FinTwin",
    image: "/assets/projects/fintwin.png"
  },
  {
    id: "tafl-project",
    name: "TAFL Project",
    description: "Automata theory simulator visualizing state transitions, regex parsing, and language logic.",
    loreName: "TAFL Project",
    loreDescription: "A theoretical computer science parser simulating Finite Automata, Pushdown Automata, and Turing Machines.",
    tags: ["React", "Automata theory", "Graph theory"],
    liveLink: "https://tafl-by.lakshdoes.tech/",
    githubLink: "https://github.com/LakshAgrawal28/TAFL",
    image: "/assets/projects/tafl.png"
  }
];
