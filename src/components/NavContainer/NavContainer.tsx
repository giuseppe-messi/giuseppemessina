import { DesktopNav } from "../DesktopNav/DesktopNav";
import { MobileNav } from "../MobileNav/MobileNav";
import { navItems, useNav } from "../../stores/useNav";

export const NavContainer = () => {
  const { activeId, setActiveId } = useNav();

  return (
    <>
      <div className="hidden lg:flex">
        <DesktopNav
          items={navItems}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </div>
      <div className="flex lg:hidden">
        <MobileNav
          items={navItems}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </div>
    </>
  );
};
