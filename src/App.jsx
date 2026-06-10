import { useEffect, lazy, Suspense } from 'react';
import { RouterProvider, useRoute } from './components/Router';
import { QuoteProvider } from './components/QuoteModal';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PageRoutes from './PageRoutes';
import { getPageMeta } from './seo';

// Route-level code splitting: each page is fetched on demand to keep the
// initial bundle small. (The prerender entry imports these statically instead.)
const lazyPages = {
  Home: lazy(() => import('./pages/HomePage')),
  ServicesLanding: lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesLandingPage }))),
  ServiceSubpage: lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServiceSubpage }))),
  IndustriesLanding: lazy(() => import('./pages/IndustriesPage').then(m => ({ default: m.IndustriesLandingPage }))),
  IndustrySubpage: lazy(() => import('./pages/IndustriesPage').then(m => ({ default: m.IndustrySubpage }))),
  Projects: lazy(() => import('./pages/ProjectsPage')),
  About: lazy(() => import('./pages/AboutPage')),
  Contact: lazy(() => import('./pages/ContactPage')),
  ThankYou: lazy(() => import('./pages/ThankYouPage')),
  Privacy: lazy(() => import('./pages/PrivacyPolicyPage')),
  Terms: lazy(() => import('./pages/TermsOfUsePage')),
  Cities: lazy(() => import('./pages/CitiesWeServePage')),
  NotFound: lazy(() => import('./pages/NotFoundPage')),
};

// Keep <title> and meta description in sync on client-side navigation so they
// match the prerendered tags after the SPA takes over.
function useDocumentMeta(path) {
  useEffect(() => {
    const { title, description } = getPageMeta(path);
    document.title = title;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) { tag = document.createElement('meta'); tag.setAttribute('name', 'description'); document.head.appendChild(tag); }
    tag.setAttribute('content', description);
  }, [path]);
}

function MainArea({ pages }) {
  const { path } = useRoute();
  useDocumentMeta(path);
  const label = path === '/' ? '00 Home' : path.split('/').filter(Boolean).join(' / ');
  return (
    <main id="main" data-screen-label={label}>
      <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
        <PageRoutes pages={pages} />
      </Suspense>
    </main>
  );
}

export default function App({ pages = lazyPages, initialPath }) {
  return (
    <RouterProvider initialPath={initialPath}>
      <QuoteProvider>
        <Nav />
        <MainArea pages={pages} />
        <Footer />
      </QuoteProvider>
    </RouterProvider>
  );
}
