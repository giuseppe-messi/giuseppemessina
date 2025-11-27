import NotFound from "./pages/NotFound/NotFound";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { Layout } from "./Layout";
import { LoadingSpinner } from "@react-lab-mono/ui";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { ROUTES } from "./routes";

const routesConfig = Object.values(ROUTES).map((route) => (
  <Route
    key={route.path}
    path={route.path}
    element={route.element}
    index={route.index}
  />
));

const layoutElement = <Layout />;

const App: React.FC = () => (
  <ErrorBoundary>
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner size="lg" />}>
        <Routes>
          <Route element={layoutElement}>
            {routesConfig}
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  </ErrorBoundary>
);
export default App;
