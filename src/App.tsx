import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Layout } from './Layout';
import { LoadingSpinner } from '@react-lab-mono/ui';

const App: React.FC = () => (
  <ErrorBoundary>
    <Router>
      <Suspense fallback={<LoadingSpinner size="lg" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<Home />} index path="/" />
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  </ErrorBoundary>
);
export default App;
