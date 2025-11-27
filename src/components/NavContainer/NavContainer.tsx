import { DesktopNav } from "../DesktopNav/DesktopNav";
import { MobileNav } from "../MobileNav/MobileNav";
import { navItems, useNav } from "../../stores/useNav";
import { useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { NAV_IDS } from "../../interfaces/nav";
import { ROUTES } from "../../routes";
import path from "path";

export const NavContainer = () => {
  // const { activeId, setActiveId } = useNav();

  // const [activeId, setActiveId] = useState();

  const { pathname } = useLocation();

  const activeId = useMemo(
    () =>
      Object.values(ROUTES).find((r) => r.path === `/${pathname.split("/")[1]}`)
        ?.navId ?? 0,
    [pathname]
  );

  console.log("🚀 ~ activeId:", activeId);

  return (
    <>
      <div className="hidden lg:flex">
        <DesktopNav
          items={navItems}
          activeId={activeId}
          // setActiveId={setActiveId}
        />
      </div>
      <div className="flex lg:hidden">
        <MobileNav
          items={navItems}
          activeId={activeId}
          // setActiveId={setActiveId}
        />
      </div>
    </>
  );
};
