export type Project = {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  link: string;
  img: string
};

export type Technology = {
  name: string;
  icon: string;
};

export type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type FormData = {
  name: string,
  email: string,
  message: string
}