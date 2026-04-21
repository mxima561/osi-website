import { useState, useEffect, useCallback, createContext, useContext } from 'react';

const RouterCtx = createContext({ path: '/', navigate: () => {}, query: {} });

function parseHash() {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  const [p, q] = raw.split('?');
  const query = {};
  if (q) q.split('&').forEach(kv => { const [k,v] = kv.split('='); if(k) query[decodeURIComponent(k)] = decodeURIComponent(v||''); });
  return { path: p || '/', query };
}

export function RouterProvider({ children }) {
  const [state, setState] = useState(parseHash());
  useEffect(() => {
    const onChange = () => { setState(parseHash()); window.scrollTo({ top: 0, behavior: 'instant' }); };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  const navigate = useCallback((to) => {
    window.location.hash = to.startsWith('#') ? to.slice(1) : to;
  }, []);
  return <RouterCtx.Provider value={{...state, navigate}}>{children}</RouterCtx.Provider>;
}

export const useRoute = () => useContext(RouterCtx);

export function Link({ to, children, className = '', onClick, ...rest }) {
  const { navigate } = useRoute();
  const handle = (e) => {
    if (to.startsWith('tel:') || to.startsWith('mailto:') || to.startsWith('http')) return;
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };
  const href = to.startsWith('tel:') || to.startsWith('mailto:') || to.startsWith('http') ? to : `#${to}`;
  return <a href={href} className={className} onClick={handle} {...rest}>{children}</a>;
}
