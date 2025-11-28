import { DesktopNav } from "../DesktopNav/DesktopNav";
import { MobileNav } from "../MobileNav/MobileNav";
import { useLocation } from "react-router-dom";
import { getActiveNavItemId, navItems } from "../../config/navItems";

export const NavContainer = () => {
  const { pathname } = useLocation();
  const activeId = getActiveNavItemId(pathname);

  return (
    <>
      <div className="hidden lg:flex">
        <DesktopNav items={navItems} activeId={activeId} />
      </div>
      <div className="flex lg:hidden">
        <MobileNav items={navItems} activeId={activeId} />
      </div>
    </>
  );
};
