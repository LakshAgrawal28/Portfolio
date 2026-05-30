export type Project = {
  id: string;
  name: string;
  description: string;
  loreName: string;
  loreDescription: string;
  tags: string[];
  liveLink: string;
  githubLink?: string;
  image: string;
};



export type EraData = {
  id: string;
  name: string;
  label: string;
  hero: {
    title: string;
    role: string;
    subRole1: string;
    subRole2: string;
    image: string;
  };
  skills: { category: string; items: string[] }[];
  uiStrings: {
    contactButton: string;
    workTitle: string;
    skillsTitle: string;
    viewProject: string;
    nav: {
      work: string;
      skills: string;
      contact: string;
    };
    contactTitle: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    footerNote: string;
  };
  projects: Project[];
};
