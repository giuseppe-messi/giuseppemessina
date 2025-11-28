import clsx from "clsx";
import { borderMedium } from "../../shared/styles";
import { useNavigate } from "react-router-dom";
import type { NavItem } from "../../config/navItems";

type MobileNavItemProps = {
  item: NavItem;
  activeId: number;
};

export const MobileNavItem = ({ item, activeId }: MobileNavItemProps) => {
  const navigate = useNavigate();
  const isActive = activeId === item.id;

  return (
    <div
      key={item.id}
      onClick={() => {
        if (item.isExternal)
          window.open(item.url, "_blank", "noopener,noreferrer");
        else {
          navigate(item.url);
        }
      }}
      className={clsx(
        "flex flex-col py-2 items-center gap-1 min-w-16 flex-shrink-0 text-xs text-[var(--text-gray)]",
        isActive &&
          `${borderMedium} bg-[#2c2c2c] rounded-sm text-[var(--text-white)]`
      )}
    >
      <div>{item.icon}</div>
      <div>{item.label}</div>
    </div>
  );
};
