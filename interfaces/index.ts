// import { User } from 'path/to/interfaces';
import { FC } from "react";

export type User = {
  id: number;
  name: string;
};

export type HeaderItem = {
  text: string;
  link: string;
};

export type FooterItem = {
  icon: FC;
  link: string;
};

export type Link = {
  link: string;
};

export type ResumeItem = {
  title: string;
  location: string;
  year: number;
  description: string;
  innerHtml?: boolean;
};

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export interface IProject {
  frontmatter: {
    built: BuildLibrary[];
    cover_image: string;
    date: string;
    demo?: string;
    link?: string;
    github?: string;
    description: string;
    excerpt: string;
    features: string;
    limitations: string;
    title: string;
    when: string;
  };
  slug: string;
}

export interface BuildLibrary {
  name: string;
  link: string;
}
