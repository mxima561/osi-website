import { useRoute } from './components/Router';

// Maps the current path to a page component. Shared by the client (App.jsx,
// with lazily-loaded pages) and the prerender server entry (entry-server.jsx,
// with statically-imported pages) so the routing table lives in one place.
export default function PageRoutes({ pages }) {
  const { path } = useRoute();
  let Page = pages.NotFound;
  let props = {};
  if (path === '/') Page = pages.Home;
  else if (path === '/services') Page = pages.ServicesLanding;
  else if (path.startsWith('/services/')) { Page = pages.ServiceSubpage; props = { slug: path.split('/')[2] }; }
  else if (path === '/industries') Page = pages.IndustriesLanding;
  else if (path.startsWith('/industries/')) { Page = pages.IndustrySubpage; props = { slug: path.split('/')[2] }; }
  else if (path === '/projects') Page = pages.Projects;
  else if (path === '/about') Page = pages.About;
  else if (path === '/contact') Page = pages.Contact;
  else if (path === '/thank-you') Page = pages.ThankYou;
  else if (path === '/privacy-policy') Page = pages.Privacy;
  else if (path === '/terms-of-use') Page = pages.Terms;
  else if (path === '/cities-we-serve') Page = pages.Cities;
  return <Page {...props} />;
}
