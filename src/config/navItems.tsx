import {
  Github,
  House,
  Layers2,
  Linkedin,
  Pencil,
  Send,
  UserSearch
} from "lucide-react";
import type { JSX } from "react";
import { ROUTE_IDS, ROUTES } from "./routes";

type Section = "main" | "resources" | "contacts";

export type NavItemId = (typeof ROUTE_IDS)[keyof typeof ROUTE_IDS];

export type NavItem = {
  label: string;
  icon: JSX.Element;
  url: string;
  isExternal: boolean;
  section: Section;
  id: NavItemId;
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    icon: <House size={20} />,
    url: "/",
    isExternal: false,
    section: "main",
    id: ROUTE_IDS.home
  },
  {
    label: "Projects",
    icon: <Pencil size={20} />,
    url: "/projects",
    isExternal: false,
    section: "main",
    id: ROUTE_IDS.projects
  },
  {
    label: "About",
    icon: <UserSearch size={20} />,
    url: "/about",
    isExternal: false,
    section: "main",
    id: ROUTE_IDS.about
  },
  {
    label: "Stack",
    icon: <Layers2 size={20} />,
    url: "/stack",
    isExternal: false,
    section: "resources",
    id: ROUTE_IDS.stack
  },

  {
    label: "Contact",
    icon: <Send size={20} />,
    url: "/contact",
    isExternal: false,
    section: "contacts",
    id: ROUTE_IDS.contact
  },
  {
    label: "LinkedIn",
    icon: <Linkedin size={20} />,
    url: "https://www.linkedin.com/in/giuseppe-messina/",
    isExternal: true,
    section: "contacts",
    id: ROUTE_IDS.linkedIn
  },
  {
    label: "GitHub",
    icon: <Github size={20} />,
    url: "https://github.com/giuseppe-messi",
    isExternal: true,
    section: "contacts",
    id: ROUTE_IDS.gitHub
  }
];

export const getActiveNavItemId = (pathname: string) =>
  Object.values(ROUTES).find((r) => r.path === `/${pathname.split("/")[1]}`)
    ?.id ?? 0;
