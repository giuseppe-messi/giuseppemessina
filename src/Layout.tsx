import { NavContainer } from "./components/NavContainer/NavContainer";
import { Outlet } from "react-router-dom";
import { Toaster } from "@react-lab-mono/ui";

export const Layout = () => (
  <div className="flex">
    <NavContainer />
    <main className="flex flex-col flex-1 max-w-250">
      <div className="min-h-screen m-auto mt-30">
        <Outlet />
      </div>
    </main>
    <Toaster />
  </div>
);
