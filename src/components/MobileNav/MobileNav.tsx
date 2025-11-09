import { MobileNavItem } from "../MobileNavItem/MobileNavItem";
import type { NavItem } from "../../stores/useNav";

type MobileNavProps = {
  items: NavItem[];
  activeId: number;
  setActiveId: (id: number) => void;
};

export const MobileNav = ({ items, activeId, setActiveId }: MobileNavProps) => (
  <nav className="fixed p-4 bg-[var(--main-gray)] overflow-x-scroll whitespace-nowrap gap-4 flex justify-around bottom-0 w-full">
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
