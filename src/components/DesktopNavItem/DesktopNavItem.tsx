import clsx from "clsx";
import { borderLight, hoverText } from "../../shared/styles";
import { desktopNavTransition } from "../../shared/emotionProps";
import { motion } from "motion/react";
import { Tooltip } from "react-tooltip";
import type { NavItem } from "../DesktopNav/DesktopNav";

type DesktopNavItemProps = {
  isOpen: boolean;
  item: NavItem;
  activeItem: string;
};

export const DesktopNavItem = ({
  isOpen,
  activeItem,
  item
}: DesktopNavItemProps) => (
  <motion.div
    transition={desktopNavTransition}
    animate={isOpen ? { y: 10 } : { y: 0 }}
    whileTap={{ scale: 0.95 }}
    className={clsx(
      `flex items-center w-full gap-2 ${hoverText} cursor-pointer`,
      activeItem === item.label &&
        `bg-[#2c2c2c] ${borderLight} rounded-sm text-[var(--text-white)]`
    )}
  >
    {/* <Tooltip
      id="my-tooltip-2"
      place="bottom"
      style={{ background: "red" }}
      content="I'm a info tooltip"
    />
    <div
      data-tooltip-id="my-tooltip-2"
      className="flex-none w-10 h-10 flex items-center justify-center"
    >
      {item.icon}
    </div> */}

    <div className="flex-none w-10 h-10 flex items-center justify-center">
      {item.icon}
    </div>

    <div className="overflow-hidden flex items-center justify-between mr-3 w-full">
      <div className="whitespace-nowrap leading-tight">
        <p className="text-sm font-semibold"> {item.label}</p>
      </div>
      <div
        className={`${borderLight} w-5 h-6 text-xs flex items-center justify-center rounded-sm`}
      >
        {item.pos}
      </div>
    </div>
  </motion.div>
);
