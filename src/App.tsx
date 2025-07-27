import React, { useState, useEffect, useCallback } from 'react';
import {
  LoadingScreen,
  Navigation,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  ErrorBoundary,
} from './components';
import './App.css';

interface AppProps {
  loadingDuration?: number;
}

const LOADING_DURATION = 3000;

const App: React.FC<AppProps> = ({ loadingDuration = LOADING_DURATION }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(handleLoadingComplete, loadingDuration);
    return () => clearTimeout(timer);
  }, [loadingDuration, handleLoadingComplete]);

  const handleError = useCallback((error: Error, errorInfo: React.ErrorInfo) => {
    // Log error to external service in production
    if (import.meta.env.PROD) {
      // Example: logErrorToService(error, errorInfo);
      console.error('App error:', error, errorInfo);
    }
  }, []);

  if (isLoading) {
    return (
      <ErrorBoundary onError={handleError}>
        <LoadingScreen duration={loadingDuration} />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary onError={handleError}>
      <div className="app">
        {/* Pixel grid background */}
        <div className="pixel-grid" aria-hidden="true" />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main content */}
        <main className="portfolio-container" role="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </ErrorBoundary>
  );
};

App.displayName = 'App';

export default React.memo(App);