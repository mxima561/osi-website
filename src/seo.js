import { SERVICES, SERVICE_PAGES, INDUSTRIES, INDUSTRY_PAGES } from './data/tokens.js';

// Canonical production origin — used for sitemap.xml, robots.txt and
// <link rel="canonical"> / og:url tags.
export const SITE_ORIGIN = 'https://www.osinstall.com';

const SUFFIX = ' | OSI';
const joinTitle = (t) => (Array.isArray(t) ? t.join(' ') : t);
const clamp = (s, n = 158) => {
  s = (s || '').replace(/\s+/g, ' ').trim();
  return s.length > n ? s.slice(0, n - 1).replace(/[ ,.;:]+\S*$/, '') + '…' : s;
};

// Per-route <title> and meta description. Subpage copy is derived from the
// existing content tokens — no new marketing copy is invented here.
const STATIC = {
  '/': {
    title: 'OSI — Commercial Furniture Installation & Services in Phoenix, AZ',
    description: 'Commercial furniture installation, warehousing, MAC, decommissioning, modular walls, and asset management. Phoenix-based. 20+ years.',
  },
  '/services': {
    title: 'Commercial Furniture Services' + SUFFIX,
    description: 'Full-lifecycle commercial furniture services: installation, warehousing & receiving, MAC & Day 2, decommissioning, modular walls, and asset management.',
  },
  '/industries': {
    title: 'Industries We Serve' + SUFFIX,
    description: 'Commercial furniture services for corporate office, healthcare, education, hospitality, and government environments across Arizona.',
  },
  '/projects': {
    title: 'Projects' + SUFFIX,
    description: 'A portfolio of completed commercial furniture installation, relocation, and reconfiguration projects across Arizona.',
  },
  '/about': {
    title: 'About Us' + SUFFIX,
    description: 'Phoenix-based commercial furniture services company with 20+ years of experience, 80+ installers, and a 60,000 sq ft warehouse.',
  },
  '/contact': {
    title: 'Contact & Request a Quote' + SUFFIX,
    description: 'Request a quote or reach the OSI team for commercial furniture installation and services in Phoenix and across Arizona.',
  },
  '/cities-we-serve': {
    title: 'Cities We Serve' + SUFFIX,
    description: 'OSI provides commercial furniture services across Phoenix and cities throughout Arizona.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy' + SUFFIX,
    description: 'How OSI collects, uses, and protects your information.',
  },
  '/terms-of-use': {
    title: 'Terms of Use' + SUFFIX,
    description: 'The terms governing your use of the OSI website.',
  },
  '/thank-you': {
    title: 'Thank You' + SUFFIX,
    description: 'Thanks for reaching out to OSI. A member of our team will be in touch shortly.',
  },
};

export function getPageMeta(path) {
  if (STATIC[path]) return STATIC[path];
  if (path.startsWith('/services/')) {
    const slug = path.split('/')[2];
    const page = SERVICE_PAGES[slug];
    const svc = SERVICES.find((s) => s.slug === slug);
    if (page) return { title: joinTitle(page.title) + SUFFIX, description: clamp(svc?.blurb || (Array.isArray(page.intro) ? page.intro[0] : page.intro)) };
  }
  if (path.startsWith('/industries/')) {
    const slug = path.split('/')[2];
    const page = INDUSTRY_PAGES[slug];
    const ind = INDUSTRIES.find((s) => s.slug === slug);
    if (page) return { title: joinTitle(page.title) + SUFFIX, description: clamp(ind?.blurb || (Array.isArray(page.intro) ? page.intro[0] : page.intro)) };
  }
  return { title: 'Page Not Found' + SUFFIX, description: 'The page you are looking for could not be found.' };
}

// Routes that should not be indexed (get a robots noindex tag and are kept out
// of the sitemap), but are still prerendered so direct loads work.
export const NOINDEX = new Set(['/thank-you']);

// Every route to prerender to a static HTML file.
export const PRERENDER_ROUTES = [
  '/',
  '/services',
  ...SERVICES.map((s) => `/services/${s.slug}`),
  '/industries',
  ...INDUSTRIES.map((s) => `/industries/${s.slug}`),
  '/projects',
  '/about',
  '/contact',
  '/cities-we-serve',
  '/privacy-policy',
  '/terms-of-use',
  '/thank-you',
];

// Indexable routes for the sitemap (excludes noindex pages).
export const SITEMAP_ROUTES = PRERENDER_ROUTES.filter((p) => !NOINDEX.has(p));
