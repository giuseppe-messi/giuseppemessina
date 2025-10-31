import { Outlet } from 'react-router-dom';
import { SideNav } from './components/SideNav/SideNav';
import { Toaster } from '@react-lab-mono/ui';

export const Layout = () => (
  <div className="flex">
    <SideNav />
    <main className="flex flex-col flex-1 ">
      <Outlet />
    </main>
    <Toaster />
  </div>
);
