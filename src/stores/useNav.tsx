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
  section: Section;
  id: number;
};

export const navItems: NavItem[] = [
  { label: "Home", icon: <House size={22} />, section: "main", id: 1 },
  {
    label: "Projects",
    icon: <Pencil size={22} />,
    section: "main",
    id: 2
  },
  { label: "About", icon: <UserSearch size={22} />, section: "main", id: 3 },
  { label: "Stack", icon: <Layers2 size={22} />, section: "resources", id: 4 },

  {
    label: "Contact",
    icon: <Send size={22} />,
    section: "contacts",
    id: 5
  },
  {
    label: "LinkedIn",
    icon: <Linkedin size={22} />,
    section: "contacts",
    id: 6
  },
  { label: "GitHub", icon: <Github size={20} />, section: "contacts", id: 7 }
];

type useNavState = {
  activeId: number;
  setActiveId: (id: number) => void;
};

export const useNav = create<useNavState>((set) => ({
  activeId: 1,
  setActiveId: (id: number) => set({ activeId: id })
}));
