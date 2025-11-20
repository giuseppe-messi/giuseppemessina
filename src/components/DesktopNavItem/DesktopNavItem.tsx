import clsx from "clsx";
import { borderLight, borderMedium, hoverText } from "../../shared/styles";
import { desktopNavTransition } from "../../shared/emotionProps";
import { motion } from "motion/react";
import type { NavItem } from "../../stores/useNav";

type DesktopNavItemProps = {
  isOpen: boolean;
  item: NavItem;
  activeId: number;
  setActiveId: (id: number) => void;
};

export const DesktopNavItem = ({
  isOpen,
  activeId,
  setActiveId,
  item
}: DesktopNavItemProps) => {
  const isActive = activeId === item.id;

  return (
    <motion.button
      transition={desktopNavTransition}
      animate={isOpen ? { y: 10 } : { y: 0 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setActiveId(item.id)}
      className={clsx(
        `flex items-center w-full gap-3 p-1 ${hoverText} cursor-pointer`,
        isActive
          ? `bg-[#2c2c2c] ${borderLight} rounded-sm text-[var(--text-white)]`
          : "border-transparent"
      )}
    >
      <div
        data-tooltip-id="tooltip"
        data-tooltip-content={item.label}
        className="flex-none w-8 h-8 flex items-center justify-center"
      >
        {item.icon}
      </div>

      <div className="overflow-hidden flex items-center justify-between mr-3 w-full">
        <div className="whitespace-nowrap leading-tight">
          <p className="text-sm font-medium"> {item.label}</p>
        </div>
        <div
          className={clsx(
            `w-5 h-6 text-xs flex items-center justify-center rounded-sm`,
            isActive ? borderLight : borderMedium
          )}
        >
          {item.id}
        </div>
      </div>
    </motion.button>
  );
};
