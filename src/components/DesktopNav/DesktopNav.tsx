import clsx from "clsx";
import giuseppesAvatar from "../../assets/giuseppe.jpeg";
import {
  ChevronRight,
  Github,
  House,
  Layers2,
  Linkedin,
  Pencil,
  Send,
  UserSearch
} from "lucide-react";
import { DesktopNavGroup } from "../DesktopNavGroup/DesktopNavGroup";
import { desktopNavTransition } from "../../shared/emotionProps";
import { hoverBlockBorderDivAndText } from "../../shared/styles";
import { motion } from "motion/react";
import { useState, type JSX } from "react";

const NAV_OPEN = 240;
const NAV_COLLAPSED = 77;

export type NavItem = {
  label: string;
  icon: JSX.Element;
  id: number;
};

const items: NavItem[] = [
  { label: "Home", icon: <House size={20} />, id: 1 },
  {
    label: "Projects",
    icon: <Pencil size={20} />,
    id: 2
  },
  { label: "About", icon: <UserSearch size={20} />, id: 3 }
];

const resources: NavItem[] = [
  { label: "Stack", icon: <Layers2 size={20} />, id: 4 }
];

const contacts: NavItem[] = [
  {
    label: "Contact",
    icon: <Send size={20} />,
    id: 5
  },
  { label: "LinkedIn", icon: <Linkedin size={20} />, id: 6 },
  { label: "GitHub", icon: <Github size={20} />, id: 7 }
];

export function DesktopNav() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeId, setActiveId] = useState(2);
  const handleSetId = (id: number) => setActiveId(id);

  return (
    <motion.nav
      animate={{ width: isOpen ? NAV_OPEN : NAV_COLLAPSED }}
      transition={desktopNavTransition}
      className="sticky top-0 px-4 pt-6 bg-[var(--main-gray)] flex flex-col items-center"
    >
      <div className="flex items-center w-full mb-2 gap-6">
        <div className="flex-none w-10 h-10">
          <motion.img
            transition={desktopNavTransition}
            animate={isOpen ? { scale: 1.2 } : { scale: 1 }}
            src={giuseppesAvatar}
            alt="Giuseppe Messina"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <div className="overflow-hidden">
          <div className="whitespace-nowrap leading-tight">
            <p className="text-sm font-semibold">Giuseppe Messina</p>
            <p className="text-xs text-gray-500">Full Stack Developer</p>
          </div>
        </div>
      </div>

      <DesktopNavGroup
        items={items}
        isOpen={isOpen}
        activeId={activeId}
        handleSetId={handleSetId}
      />
      <DesktopNavGroup
        items={resources}
        isOpen={isOpen}
        activeId={activeId}
        handleSetId={handleSetId}
        label="RESOURCES"
      />
      <DesktopNavGroup
        items={contacts}
        isOpen={isOpen}
        activeId={activeId}
        handleSetId={handleSetId}
        label="CONNECT"
      />

      <div
        className={clsx(
          "absolute top-[38px] right-[-10px] w-5 h-5 rounded-full bg-[var(--main-gray)]",
          hoverBlockBorderDivAndText
        )}
      >
        <motion.div
          onClick={() => setIsOpen((o) => !o)}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={desktopNavTransition}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        >
          <ChevronRight
            className={clsx(
              "absolute left-1/2 top-1/2 -translate-x-[47%] -translate-y-1/2"
            )}
            size={15}
          />
        </motion.div>
      </div>
    </motion.nav>
  );
}
