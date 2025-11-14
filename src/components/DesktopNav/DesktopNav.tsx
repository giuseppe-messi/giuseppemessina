import clsx from "clsx";
import giuseppesAvatar from "../../assets/giuseppe.jpeg";
import { ChevronRight } from "lucide-react";
import { DesktopNavGroup } from "../DesktopNavGroup/DesktopNavGroup";
import { desktopNavTransition } from "../../shared/emotionProps";
import { hoverBlockBorderDivAndText } from "../../shared/styles";
import { motion } from "motion/react";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import type { NavItem } from "../../stores/useNav";

const NAV_OPEN = 320;
const NAV_COLLAPSED = 98;

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
      className="sticky top-0 px-6 pt-6 bg-[var(--main-gray)] flex flex-col items-center"
    >
      <motion.div
        animate={isOpen ? { x: 5 } : { x: 2 }}
        className="flex items-center w-full mb-6 gap-6"
      >
        <div className="flex-none w-12 h-12">
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
            <p className="text-md font-semibold">Giuseppe Messina</p>
            <p className="text-sm text-[var(--text-gray)]">
              Full Stack Developer
            </p>
          </div>
        </div>
      </motion.div>

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
          "absolute top-[36px] right-[-14px] w-7 h-7 rounded-full bg-[var(--main-gray)]",
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
            size={19}
          />
        </motion.div>
      </div>

      <Tooltip
        id="tooltip"
        place="right"
        noArrow
        border="1px solid var(--medium-gray)"
        style={{
          background: "var(--main-gray)",
          borderRadius: 12,
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        disableTooltip={() => isOpen}
      />
    </motion.nav>
  );
}
