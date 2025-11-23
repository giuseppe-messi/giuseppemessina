import { MobileNavItem } from "../MobileNavItem/MobileNavItem";
import type { NavItem } from "../../stores/useNav";

type MobileNavProps = {
  items: NavItem[];
  activeId: number;
  setActiveId: (id: number) => void;
};

export const MobileNav = ({ items, activeId, setActiveId }: MobileNavProps) => (
  <nav className="fixed py-2 gap-2 bg-[var(--main-gray)] overflow-x-scroll whitespace-nowrap flex justify-around bottom-0 w-full border-t-1 border-[var(--medium-gray)]">
    {items.flatMap((item) => (
      <MobileNavItem
        key={item.id}
        item={item}
        activeId={activeId}
        setActiveId={setActiveId}
      />
    ))}
  </nav>
);
