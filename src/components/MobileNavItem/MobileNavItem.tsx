import clsx from "clsx";
import { borderLight } from "../../shared/styles";
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
        "flex flex-col p-2 items-center gap-2 min-w-18 flex-shrink-0 text-sm text-[var(--text-gray)]",
        isActive &&
          `${borderLight} bg-[#2c2c2c] rounded-sm text-[var(--text-white)]`
      )}
    >
      <div>{item.icon}</div>
      <div>{item.label}</div>
    </div>
  );
};
