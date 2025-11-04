import { Outlet } from 'react-router-dom';
import { SideNav } from './components/SideNav/SideNav';
import { Toaster } from '@react-lab-mono/ui';

export const Layout = () => (
  <div className="flex">
    <SideNav />
    <main className="flex flex-col flex-1">
      <div className="max-w-300 m-auto">
        <Outlet />
      </div>
    </main>
    <Toaster />
  </div>
);
