import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Ensure the root element exists
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    'Failed to find the root element. Make sure there is an element with id="root" in your HTML.'
  );
}

// Create and render the app
const root = createRoot(rootElement);

const renderApp = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Handle errors during rendering
try {
  renderApp();
} catch (error) {
  console.error('Failed to render the application:', error);
  
  // Fallback UI for critical errors
  rootElement.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: Arial, sans-serif;
      text-align: center;
      background: #0a0a0a;
      color: #00ff00;
    ">
      <h1 style="margin-bottom: 1rem;">Application Failed to Load</h1>
      <p style="margin-bottom: 2rem;">Sorry, there was a critical error loading the portfolio.</p>
      <button 
        onclick="window.location.reload()" 
        style="
          padding: 0.75rem 1.5rem;
          background: #00ff00;
          color: #0a0a0a;
          border: none;
          cursor: pointer;
          font-weight: bold;
        "
      >
        Reload Page
      </button>
    </div>
  `;
}

// Enable hot module replacement in development
if (import.meta.hot) {
  import.meta.hot.accept();
}