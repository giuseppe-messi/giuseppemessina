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

export const NavItemIds = {
  Home: 1,
  Projects: 2,
  About: 3,
  Stack: 4,
  Contact: 5,
  LinkedIn: 6,
  GitHub: 7
} as const;

export type NavItemId = (typeof NavItemIds)[keyof typeof NavItemIds];
