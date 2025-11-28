import { lazy, type JSX } from "react";

type RouteConfig = {
  path: string;
  element: JSX.Element;
  index?: boolean;
  id: number;
};

export const ROUTE_IDS = {
  home: 1,
  projects: 2,
  about: 3,
  stack: 4,
  contact: 5,
  linkedIn: 6,
  gitHub: 7
} as const;

const Home = lazy(() => import("../pages/Home/Home"));
const Projects = lazy(() => import("../pages/Projects/Projects"));
const ProjectView = lazy(() => import("../pages/ProjectView/ProjectView"));
const About = lazy(() => import("../pages/About/About"));
const Stack = lazy(() => import("../pages/Stack/Stack"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

export const ROUTES: Record<string, RouteConfig> = {
  home: { path: "/", element: <Home />, index: true, id: ROUTE_IDS.home },
  projects: {
    path: "/projects",
    element: <Projects />,
    id: ROUTE_IDS.projects
  },
  projectView: {
    path: "/projects/:id",
    element: <ProjectView />,
    id: ROUTE_IDS.projects
  },
  about: { path: "/about", element: <About />, id: ROUTE_IDS.about },
  stack: { path: "/stack", element: <Stack />, id: ROUTE_IDS.stack },
  contact: { path: "/contact", element: <Contact />, id: ROUTE_IDS.contact }
};
