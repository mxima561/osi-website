/* eslint-disable react-refresh/only-export-components -- SSR build entry, not a fast-refreshed module */
import { renderToString } from 'react-dom/server';
import App from './App';
import { getPageMeta, PRERENDER_ROUTES, SITEMAP_ROUTES, NOINDEX, SITE_ORIGIN } from './seo';

// Statically-imported pages (no React.lazy) so renderToString produces the full
// markup synchronously. The client (App.jsx) still code-splits via lazy().
import HomePage from './pages/HomePage';
import { ServicesLandingPage, ServiceSubpage } from './pages/ServicesPage';
import { IndustriesLandingPage, IndustrySubpage } from './pages/IndustriesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import CitiesWeServePage from './pages/CitiesWeServePage';
import NotFoundPage from './pages/NotFoundPage';

const staticPages = {
  Home: HomePage,
  ServicesLanding: ServicesLandingPage,
  ServiceSubpage,
  IndustriesLanding: IndustriesLandingPage,
  IndustrySubpage,
  Projects: ProjectsPage,
  About: AboutPage,
  Contact: ContactPage,
  ThankYou: ThankYouPage,
  Privacy: PrivacyPolicyPage,
  Terms: TermsOfUsePage,
  Cities: CitiesWeServePage,
  NotFound: NotFoundPage,
};

export function render(path) {
  const html = renderToString(<App pages={staticPages} initialPath={path} />);
  return { html, ...getPageMeta(path) };
}

export { PRERENDER_ROUTES, SITEMAP_ROUTES, NOINDEX, SITE_ORIGIN };
