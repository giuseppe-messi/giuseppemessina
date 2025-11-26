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
import { NavItemIds, type NavItem } from "../interfaces/nav";

export const navItems: NavItem[] = [
  {
    label: "Home",
    icon: <House size={20} />,
    url: "/",
    isExternal: false,
    section: "main",
    id: NavItemIds.Home
  },
  {
    label: "Projects",
    icon: <Pencil size={20} />,
    url: "/projects",
    isExternal: false,
    section: "main",
    id: NavItemIds.Projects
  },
  {
    label: "About",
    icon: <UserSearch size={20} />,
    url: "/about",
    isExternal: false,
    section: "main",
    id: NavItemIds.About
  },
  {
    label: "Stack",
    icon: <Layers2 size={20} />,
    url: "/stack",
    isExternal: false,
    section: "resources",
    id: NavItemIds.Stack
  },

  {
    label: "Contact",
    icon: <Send size={20} />,
    url: "/contact",
    isExternal: false,
    section: "contacts",
    id: NavItemIds.Contact
  },
  {
    label: "LinkedIn",
    icon: <Linkedin size={20} />,
    url: "https://www.linkedin.com/in/giuseppe-messina/",
    isExternal: true,
    section: "contacts",
    id: NavItemIds.LinkedIn
  },
  {
    label: "GitHub",
    icon: <Github size={20} />,
    url: "https://github.com/giuseppe-messi",
    isExternal: true,
    section: "contacts",
    id: NavItemIds.GitHub
  }
];

type useNavState = {
  activeId: number;
  setActiveId: (id: number) => void;
};

const getInitialSelectedFromUrl = () => {
  const currentPageOnLoad = window.location.pathname.split("/")[1];
  if (currentPageOnLoad === "") return NavItemIds.Home;

  const navItem = navItems.find(
    (item) => item.label.toLowerCase() === currentPageOnLoad
  );

  if (!navItem) return NavItemIds.Home; // safe default
  return navItem.id;
};

export const useNav = create<useNavState>((set) => ({
  activeId: getInitialSelectedFromUrl(),
  setActiveId: (id: number) => set({ activeId: id })
}));
