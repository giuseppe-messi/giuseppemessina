import type { NavItem } from "../../config/navItems";
import { MobileNavItem } from "../MobileNavItem/MobileNavItem";

type MobileNavProps = {
  items: NavItem[];
  activeId: number;
};

export const MobileNav = ({ items, activeId }: MobileNavProps) => (
  <nav className="fixed py-2 gap-2 bg-[var(--main-gray)] overflow-x-scroll whitespace-nowrap flex justify-around bottom-0 w-full border-t-1 border-[var(--medium-gray)]">
    {items.flatMap((item) => (
      <MobileNavItem key={item.id} item={item} activeId={activeId} />
    ))}
  </nav>
);
