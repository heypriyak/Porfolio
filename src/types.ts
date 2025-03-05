export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}