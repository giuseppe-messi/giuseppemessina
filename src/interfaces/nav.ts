import type { JSX } from "react";

type Section = "main" | "resources" | "contacts";

export type NavItem = {
  label: string;
  icon: JSX.Element;
  url: string;
  isExternal: boolean;
  section: Section;
  id: NavItemId;
};

export const NAV_IDS = {
  home: 1,
  projects: 2,
  about: 3,
  stack: 4,
  contact: 5,
  linkedIn: 6,
  gitHub: 7
} as const;

export type NavItemId = (typeof NAV_IDS)[keyof typeof NAV_IDS];
