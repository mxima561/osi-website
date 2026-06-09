import { useEffect, lazy, Suspense } from 'react';
import { RouterProvider, useRoute } from './components/Router';
import { QuoteProvider } from './components/QuoteModal';
import Nav from './components/Nav';
import Footer from './components/Footer';

// Route-level code splitting: each page is fetched on demand to keep the
// initial bundle small.
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesLandingPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesLandingPage })));
const ServiceSubpage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServiceSubpage })));
const IndustriesLandingPage = lazy(() => import('./pages/IndustriesPage').then(m => ({ default: m.IndustriesLandingPage })));
const IndustrySubpage = lazy(() => import('./pages/IndustriesPage').then(m => ({ default: m.IndustrySubpage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfUsePage = lazy(() => import('./pages/TermsOfUsePage'));
const CitiesWeServePage = lazy(() => import('./pages/CitiesWeServePage'));

function useDocumentTitle(title) {
  useEffect(() => { document.title = title; }, [title]);
}

function PageShell({ path }) {
  if (path === '/') { useDocumentTitle('OSI — Office Systems Installation'); return <HomePage/>; }
  if (path === '/services') { useDocumentTitle('Services — OSI'); return <ServicesLandingPage/>; }
  if (path.startsWith('/services/')) {
    const slug = path.split('/')[2];
    useDocumentTitle(`${slug} — OSI`);
    return <ServiceSubpage slug={slug} />;
  }
  if (path === '/industries') { useDocumentTitle('Industries — OSI'); return <IndustriesLandingPage/>; }
  if (path.startsWith('/industries/')) {
    const slug = path.split('/')[2];
    useDocumentTitle(`${slug} — OSI`);
    return <IndustrySubpage slug={slug} />;
  }
  if (path === '/projects') { useDocumentTitle('Projects — OSI'); return <ProjectsPage/>; }
  if (path === '/about') { useDocumentTitle('About — OSI'); return <AboutPage/>; }
  if (path === '/contact') { useDocumentTitle('Contact — OSI'); return <ContactPage/>; }
  if (path === '/thank-you') { useDocumentTitle('Thank You — OSI'); return <ThankYouPage/>; }
  if (path === '/privacy-policy') { useDocumentTitle('Privacy Policy — OSI'); return <PrivacyPolicyPage/>; }
  if (path === '/terms-of-use') { useDocumentTitle('Terms of Use — OSI'); return <TermsOfUsePage/>; }
  if (path === '/cities-we-serve') { useDocumentTitle('Cities We Serve — OSI'); return <CitiesWeServePage/>; }
  useDocumentTitle('404 — OSI');
  return <NotFoundPage/>;
}

function MainArea() {
  const { path } = useRoute();
  const label = path === '/' ? '00 Home' : path.split('/').filter(Boolean).join(' / ');
  return (
    <main id="main" data-screen-label={label}>
      <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
        <PageShell path={path} />
      </Suspense>
    </main>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <QuoteProvider>
        <Nav />
        <MainArea />
        <Footer />
      </QuoteProvider>
    </RouterProvider>
  );
}
