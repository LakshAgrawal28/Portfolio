export type Project = {
  id: string;
  name: string;
  description: string;
  loreName: string;
  loreDescription: string;
  tags: string[];
  link?: string;
  image: string;
};

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export type EraData = {
  id: string;
  name: string;
  label: string;
  hero: {
    title: string;
    role: string;
    image: string;
  };
  journey: {
    bio: string;
    milestones: Milestone[];
  };
  skills: { category: string; items: string[] }[];
  uiStrings: {
    contactButton: string;
    workTitle: string;
    journeyTitle: string;
    skillsTitle: string;
    viewProject: string;
    nav: {
      work: string;
      about: string;
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
