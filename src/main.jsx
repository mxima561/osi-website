import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Legacy redirect: old hash URLs (/#/about) are no longer how the site routes.
// Hash fragments never reach the server, so we can't 301 them — instead rewrite
// them to the clean path on first load before React mounts. This keeps old
// links, bookmarks, and any previously-indexed hash URLs working.
let redirected = false;
const hash = window.location.hash;
if (hash.startsWith('#/')) {
  const target = hash.slice(1); // '#/about?x=1' -> '/about?x=1'
  const clean = target + (target.includes('?') ? '' : window.location.search);
  window.history.replaceState({}, '', clean);
  redirected = true;
}

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Hydrate the prerendered HTML when it matches the current route; otherwise
// (dev server, or after a legacy hash redirect changed the path) client-render.
if (root.hasChildNodes() && !redirected) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
