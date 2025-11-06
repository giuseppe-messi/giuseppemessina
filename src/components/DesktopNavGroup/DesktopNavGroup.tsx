import { DesktopNavItem } from "../DesktopNavItem/DesktopNavItem";
import { desktopNavTransition } from "../../shared/emotionProps";
import { motion } from "motion/react";
import type { NavItem } from "../DesktopNav/DesktopNav";

type DesktopNavItemProps = {
  label?: string;
  isOpen: boolean;
  items: NavItem[];
  activeItem: string;
};

export const DesktopNavGroup = ({
  label,
  isOpen,
  activeItem,
  items
}: DesktopNavItemProps) => (
  <motion.div
    layout
    animate={isOpen ? { marginTop: 15 } : { marginTop: 0 }}
    className="w-full"
  >
    {label && isOpen && (
      <motion.div
        layout
        transition={desktopNavTransition}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="origin-left flex items-center w-full gap-6 text-xs font-medium text-[var(--text-gray)] mt-6 ml-4"
      >
        <p>{label}</p>
      </motion.div>
    )}

    {items.map((item) => (
      <DesktopNavItem
        key={item.label}
        item={item}
        isOpen={isOpen}
        activeItem={activeItem}
      />
    ))}
  </motion.div>
);
