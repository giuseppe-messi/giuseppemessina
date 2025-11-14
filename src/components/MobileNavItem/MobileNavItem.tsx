import clsx from "clsx";
import { borderMedium } from "../../shared/styles";
import type { NavItem } from "../../stores/useNav";

type MobileNavItemProps = {
  item: NavItem;
  activeId: number;
  setActiveId: (id: number) => void;
};

export const MobileNavItem = ({
  item,
  activeId,
  setActiveId
}: MobileNavItemProps) => {
  const isActive = activeId === item.id;

  return (
    <div
      key={item.id}
      onClick={() => setActiveId(item.id)}
      className={clsx(
        "flex flex-col p-1 items-center gap-3 min-w-18 flex-shrink-0 text-xs text-[var(--text-gray)]",
        isActive &&
          `${borderMedium} bg-[#2c2c2c] rounded-sm text-[var(--text-white)]`
      )}
    >
      <div>{item.icon}</div>
      <div>{item.label}</div>
    </div>
  );
};
