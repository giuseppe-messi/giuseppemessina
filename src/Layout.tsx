import { NavContainer } from "./components/NavContainer/NavContainer";
import { Outlet } from "react-router-dom";
import { Toaster } from "@react-lab-mono/ui";
import { Footer } from "./components/Footer/Footer";

export const Layout = () => (
  <div className="flex">
    <NavContainer />
    <main className="flex flex-col flex-1 items-center">
      <div className="min-h-screen px-5 md:px-15 w-full flex flex-col max-w-270 flex-1 items-start pt-10 md:mt-14">
        <Outlet />
      </div>
      <div className="bg-[var(--main-gray)] w-full flex flex-col items-center">
        <div className="max-w-270 px-5 md:px-15 pt-10 w-full">
          <Footer />
        </div>
      </div>
    </main>
    <Toaster />
  </div>
);
