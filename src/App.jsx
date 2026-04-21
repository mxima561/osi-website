import { useEffect } from 'react';
import { RouterProvider, useRoute } from './components/Router';
import { QuoteProvider } from './components/QuoteModal';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { ServicesLandingPage, ServiceSubpage } from './pages/ServicesPage';
import { IndustriesLandingPage, IndustrySubpage } from './pages/IndustriesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

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
  useDocumentTitle('404 — OSI');
  return <NotFoundPage/>;
}

function MainArea() {
  const { path } = useRoute();
  const label = path === '/' ? '00 Home' : path.split('/').filter(Boolean).join(' / ');
  return (
    <main id="main" data-screen-label={label}>
      <PageShell path={path} />
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
