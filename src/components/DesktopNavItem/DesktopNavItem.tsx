import clsx from "clsx";
import { borderLight, hoverText } from "../../shared/styles";
import { desktopNavTransition } from "../../shared/emotionProps";
import { motion } from "motion/react";
import { Tooltip } from "react-tooltip";
import type { NavItem } from "../DesktopNav/DesktopNav";

type DesktopNavItemProps = {
  isOpen: boolean;
  item: NavItem;
  activeId: number;
  handleSetId: (id: number) => void;
};

export const DesktopNavItem = ({
  isOpen,
  activeId,
  handleSetId,
  item
}: DesktopNavItemProps) => {
  const isActive = activeId === item.id;

  return (
    <motion.button
      transition={desktopNavTransition}
      animate={isOpen ? { y: 10 } : { y: 0 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleSetId(item.id)}
      className={clsx(
        `flex items-center w-full gap-2 ${hoverText} cursor-pointer outline-none shadow-none border-transparent`,
        isActive &&
          `bg-[#2c2c2c] ${borderLight} rounded-sm text-[var(--text-white)]`
      )}
    >
      <Tooltip
        id={item.label}
        place="right"
        noArrow
        border="1px solid var(--light-gray)"
        style={{
          background: "var(--main-gray)",
          borderRadius: 12,
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        content={item.label}
        disableTooltip={() => isOpen}
      />
      <div
        data-tooltip-id={item.label}
        className="flex-none w-10 h-10 flex items-center justify-center"
      >
        {item.icon}
      </div>

      <div className="overflow-hidden flex items-center justify-between mr-3 w-full">
        <div className="whitespace-nowrap leading-tight">
          <p className="text-sm font-semibold"> {item.label}</p>
        </div>
        <div
          className={`${borderLight} w-5 h-6 text-xs flex items-center justify-center rounded-sm`}
        >
          {item.id}
        </div>
      </div>
    </motion.button>
  );
};
