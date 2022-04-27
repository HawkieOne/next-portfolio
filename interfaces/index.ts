// import { User } from 'path/to/interfaces';
import { IconType } from 'react-icons/';
import React, { FC } from 'react';

export type User = {
  id: number
  name: string
}

export type HeaderItem = {
  text: string,
  link: string
}

export type FooterItem = {
  icon: FC,
  link: string,
}

export type Link = {
  link: string,
}

export type ResumeItem = {
  title: string,
  location: string,
  year: number,
  description: string,
}

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