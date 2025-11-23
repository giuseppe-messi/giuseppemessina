import { create } from "zustand";
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

type Section = "main" | "resources" | "contacts";

export type NavItem = {
  label: string;
  icon: JSX.Element;
  url: string;
  isExternal: boolean;
  section: Section;
  id: number;
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    icon: <House size={20} />,
    url: "/",
    isExternal: false,
    section: "main",
    id: 1
  },
  {
    label: "Projects",
    icon: <Pencil size={20} />,
    url: "/projects",
    isExternal: false,
    section: "main",
    id: 2
  },
  {
    label: "About",
    icon: <UserSearch size={20} />,
    url: "/about",
    isExternal: false,
    section: "main",
    id: 3
  },
  {
    label: "Stack",
    icon: <Layers2 size={20} />,
    url: "/stack",
    isExternal: false,
    section: "resources",
    id: 4
  },

  {
    label: "Contact",
    icon: <Send size={20} />,
    url: "/contact",
    isExternal: false,
    section: "contacts",
    id: 5
  },
  {
    label: "LinkedIn",
    icon: <Linkedin size={20} />,
    url: "https://www.linkedin.com/in/giuseppe-messina/",
    isExternal: true,
    section: "contacts",
    id: 6
  },
  {
    label: "GitHub",
    icon: <Github size={20} />,
    url: "https://github.com/giuseppe-messi",
    isExternal: true,
    section: "contacts",
    id: 7
  }
];

type useNavState = {
  activeId: number;
  setActiveId: (id: number) => void;
};

const getInitialItemFromUrl = () => {
  const currentPageOnLoad = window.location.pathname.split("/")[1];
  if (currentPageOnLoad === "") return 1; // Home

  const navItem = navItems.find(
    (item) => item.label.toLowerCase() === currentPageOnLoad
  );

  if (!navItem) return 1; // safe default
  return navItem.id;
};

export const useNav = create<useNavState>((set) => ({
  activeId: getInitialItemFromUrl(),
  setActiveId: (id: number) => set({ activeId: id })
}));
