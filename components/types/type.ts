export type FormValuesType = {
  from_name: string;
  company: string;
  email: string;
  position?: string;
  message?: string;
};

export type ProjectType = {
  type: string;
  projects: [
    {
      name: string;
      gitHubLink: string;
      livePageLink: string;
      description: string;
      technologies: string[];
      type: string;
      imgLink: string;
      id: number;
    }
  ];
};

export type ProjectsItemType = {
  name: string;
  gitHubLink: string;
  livePageLink: string;
  description: string;
  technologies: string[];
  type: string;
  imgLink: string;
  id: number;
};
