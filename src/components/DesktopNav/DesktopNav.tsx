import clsx from "clsx";
import giuseppesAvatar from "../../assets/giuseppe.jpeg";
import { ChevronRight } from "lucide-react";
import { DesktopNavGroup } from "../DesktopNavGroup/DesktopNavGroup";
import { desktopNavTransition } from "../../shared/emotionProps";
import { hoverBlockBorderDivAndText } from "../../shared/styles";
import { motion } from "motion/react";
import { useState } from "react";
import type { NavItem } from "../../stores/useNav";

const NAV_OPEN = 240;
const NAV_COLLAPSED = 77;

type DesktopNavProps = {
  items: NavItem[];
  activeId: number;
  setActiveId: (id: number) => void;
};

export function DesktopNav({ items, activeId, setActiveId }: DesktopNavProps) {
  const [isOpen, setIsOpen] = useState(true);

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
        items={items.filter((i) => i.section === "main")}
        isOpen={isOpen}
        activeId={activeId}
        setActiveId={setActiveId}
      />
      <DesktopNavGroup
        items={items.filter((i) => i.section === "resources")}
        isOpen={isOpen}
        activeId={activeId}
        setActiveId={setActiveId}
        label="RESOURCES"
      />
      <DesktopNavGroup
        items={items.filter((i) => i.section === "contacts")}
        isOpen={isOpen}
        activeId={activeId}
        setActiveId={setActiveId}
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
