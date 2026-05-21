import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Salesforce Web-to-Lead redirects to a real pathname (/thank-you).
// Convert non-root pathnames to hash routes so the SPA router handles them.
if (window.location.pathname !== '/' && !window.location.hash) {
  window.location.replace('/#' + window.location.pathname + window.location.search);
} else {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
