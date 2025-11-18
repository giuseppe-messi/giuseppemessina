import { NavContainer } from "./components/NavContainer/NavContainer";
import { Outlet } from "react-router-dom";
import { Toaster } from "@react-lab-mono/ui";
import { Footer } from "./components/Footer/Footer";

export const Layout = () => (
  <div className="flex">
    <NavContainer />
    <main className="flex flex-col items-center flex-1">
      <div className="min-h-screen flex flex-col max-w-250 items-start mt-30">
        <Outlet />
      </div>
      <Footer />
    </main>
    <Toaster />
  </div>
);
