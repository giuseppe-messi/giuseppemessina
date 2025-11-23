import { NavContainer } from "./components/NavContainer/NavContainer";
import { Outlet } from "react-router-dom";
import { Toaster } from "@react-lab-mono/ui";
import { Footer } from "./components/Footer/Footer";

export const Layout = () => (
  <div className="flex">
    <NavContainer />
    <main className="flex flex-col items-center flex-1">
      <div className="min-h-screen px-15 flex flex-col max-w-270 items-start mt-30">
        <Outlet />
      </div>
      <div className="bg-[var(--main-gray)] w-full">
        <div className="max-w-270 px-15 pt-10 mx-auto">
          <Footer />
        </div>
      </div>
    </main>
    <Toaster />
  </div>
);
