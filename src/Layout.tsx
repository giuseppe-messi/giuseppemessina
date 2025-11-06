import { DesktopNav } from "./components/DesktopNav/DesktopNav";
import { Outlet } from "react-router-dom";
import { Toaster } from "@react-lab-mono/ui";

export const Layout = () => (
  <div className="flex">
    <DesktopNav />
    <main className="flex flex-col flex-1">
      <div className="max-w-300 m-auto">
        <Outlet />
      </div>
    </main>
    <Toaster />
  </div>
);
