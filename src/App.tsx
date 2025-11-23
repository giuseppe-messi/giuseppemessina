import NotFound from "./pages/NotFound/NotFound";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { Layout } from "./Layout";
import { LoadingSpinner } from "@react-lab-mono/ui";

const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const About = lazy(() => import("./pages/About/About"));
const Stack = lazy(() => import("./pages/Stack/Stack"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const App: React.FC = () => (
  <ErrorBoundary>
    <Router>
      <Suspense fallback={<LoadingSpinner size="lg" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<Home />} index path="/" />
            <Route element={<Projects />} index path="/projects" />
            <Route element={<About />} index path="/about" />
            <Route element={<Stack />} index path="/stack" />
            <Route element={<Contact />} index path="/contact" />
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  </ErrorBoundary>
);
export default App;
