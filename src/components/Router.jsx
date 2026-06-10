import { useState, useEffect, useCallback, createContext, useContext } from 'react';

const RouterCtx = createContext({ path: '/', navigate: () => {}, query: {} });

function parseQuery(q) {
  const query = {};
  if (q) q.split('&').forEach(kv => { const [k, v] = kv.split('='); if (k) query[decodeURIComponent(k)] = decodeURIComponent(v || ''); });
  return query;
}

// Read the current location. On the server (prerender) there is no `window`,
// so fall back to the path supplied by the SSR entry.
function parseLocation(initialPath) {
  if (typeof window === 'undefined') {
    const [p, q] = (initialPath || '/').split('?');
    return { path: p || '/', query: parseQuery(q) };
  }
  return {
    path: window.location.pathname || '/',
    query: parseQuery(window.location.search.replace(/^\?/, '')),
  };
}

export function RouterProvider({ children, initialPath }) {
  const [state, setState] = useState(() => parseLocation(initialPath));
  useEffect(() => {
    // Back/forward navigation updates the URL without a full load.
    const onPop = () => setState(parseLocation());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const navigate = useCallback((to) => {
    const url = to.startsWith('#') ? to.slice(1) : to;
    if (url === window.location.pathname + window.location.search) return;
    window.history.pushState({}, '', url);
    setState(parseLocation());
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return <RouterCtx.Provider value={{ ...state, navigate }}>{children}</RouterCtx.Provider>;
}

export const useRoute = () => useContext(RouterCtx);

const isExternal = (to) => to.startsWith('tel:') || to.startsWith('mailto:') || to.startsWith('http') || to.startsWith('#');

export function Link({ to, children, className = '', onClick, ...rest }) {
  const { navigate } = useRoute();
  const external = isExternal(to);
  const handle = (e) => {
    if (external) { if (onClick) onClick(e); return; }
    // Respect modified clicks / non-primary buttons so "open in new tab" works.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };
  // Internal links now render real, crawlable hrefs (e.g. /about) instead of
  // hash fragments (#/about).
  return <a href={to} className={className} onClick={handle} {...rest}>{children}</a>;
}
