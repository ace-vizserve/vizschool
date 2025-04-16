export type PopularArticlesType = {
  image: string;
  title: string;
  description: string;
  duration: number;
};

export type TestimonialsType = {
  image: string;
  testimony: string;
  name: string;
  status: string;
};

export type OurStatsType = {
  icon: unknown;
  stats: string;
  description: string;
};

export type OurProgramsType = {
  image: string;
  instructor: string;
  courseTitle: string;
};

export type SpecialCoursesType = {
  image: string;
  instructor: string;
  courseTitle: string;
};

export type FreeCoursesType = {
  image: string;
  instructor: string;
  courseTitle: string;
};

export type FooterLink = {
  title: string;
  items: {
    name: string;
    link?: string;
    icon?: unknown;
  }[];
};
