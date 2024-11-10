export interface Contact {
  icon: string;
  url: string;
  title: string;
}

export interface Project {
  title: string;
  url: string;
  description: string;
  links: {
    icon: string;
    url: string;
  }[]
}
