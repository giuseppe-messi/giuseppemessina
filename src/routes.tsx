import { lazy, type JSX } from "react";

type RouteConfig = {
  path: string;
  element: JSX.Element;
  index?: boolean;
  navId: number;
};

type Section = "main" | "resources" | "contacts";

export type NavItem = {
  label: string;
  icon: JSX.Element;
  url: string;
  isExternal: boolean;
  section: Section;
  id: NavItemId;
};

export const NAV_IDS = {
  home: 1,
  projects: 2,
  about: 3,
  stack: 4,
  contact: 5,
  linkedIn: 6,
  gitHub: 7
} as const;

export type NavItemId = (typeof NAV_IDS)[keyof typeof NAV_IDS];

const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const ProjectView = lazy(() => import("./pages/ProjectView/ProjectView"));
const About = lazy(() => import("./pages/About/About"));
const Stack = lazy(() => import("./pages/Stack/Stack"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

export const ROUTES: Record<string, RouteConfig> = {
  home: { path: "/", element: <Home />, index: true, navId: NAV_IDS.home },
  projects: {
    path: "/projects",
    element: <Projects />,
    navId: NAV_IDS.projects
  },
  projectView: {
    path: "/projects/:id",
    element: <ProjectView />,
    navId: NAV_IDS.projects
  },
  about: { path: "/about", element: <About />, navId: NAV_IDS.about },
  stack: { path: "/stack", element: <Stack />, navId: NAV_IDS.stack },
  contact: { path: "/contact", element: <Contact />, navId: NAV_IDS.contact }
};
