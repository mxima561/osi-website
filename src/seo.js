import { SERVICES, SERVICE_PAGES, INDUSTRIES, INDUSTRY_PAGES } from './data/tokens.js';
import { CITY_SLUGS, getCity } from './data/cities.js';

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
// existing content tokens unless an explicit override is provided below.
const STATIC = {
  '/': {
    title: 'OSI | Commercial Furniture Installation, Phoenix AZ',
    description: 'Phoenix commercial furniture installation, warehousing, MAC, decommissioning, modular walls & asset management. 20+ years, 80+ installers. Request a quote.',
  },
  '/services': {
    title: 'Commercial Furniture Services' + SUFFIX,
    description: "Full-lifecycle furniture services in Arizona: installation, warehousing & receiving, MAC & Day 2, decommissioning, modular walls, and asset management. Let's talk.",
  },
  '/industries': {
    title: 'Industries We Serve | OSI Arizona',
    description: 'Commercial furniture services for corporate office, healthcare, education, hospitality, and government environments across Arizona. See how OSI can help.',
  },
  '/projects': {
    title: 'Project Portfolio | OSI Arizona',
    description: 'Completed commercial furniture installations, relocations, and reconfigurations across Arizona — from 220-workstation campuses to sportsbook arenas. View the work.',
  },
  '/about': {
    title: 'About OSI | Phoenix Furniture Installers',
    description: 'Phoenix-based commercial furniture company with 20+ years of experience, 80+ installers, and a 60,000 sq ft warehouse. Learn what sets OSI apart.',
  },
  '/contact': {
    title: 'Contact & Request a Quote' + SUFFIX,
    description: "Request a quote or reach the OSI team for commercial furniture installation and services in Phoenix and across Arizona. We'll be in touch shortly.",
  },
  '/cities-we-serve': {
    title: 'Cities We Serve | OSI Arizona',
    description: 'OSI provides commercial furniture services across Phoenix, Scottsdale, Tempe, Mesa, Chandler, Tucson, and cities throughout Arizona. Find your area.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy' + SUFFIX,
    description: 'How Office Systems Installation (OSI) collects, uses, and protects the information you share with us.',
  },
  '/terms-of-use': {
    title: 'Terms of Use' + SUFFIX,
    description: 'The terms governing your use of the OSI website and the services described on it.',
  },
  '/thank-you': {
    title: 'Thank You' + SUFFIX,
    description: 'Thanks for reaching out to OSI. A member of our team will be in touch shortly to discuss your commercial furniture project.',
  },
};

// Explicit per-subpage title/description overrides. When present, these take
// precedence over copy derived from the content tokens.
const SUBPAGE_META = {
  '/services/installation': {
    title: 'Commercial Furniture Installation' + SUFFIX,
    description: 'Experienced Arizona crews for single offices to multi-floor campus deployments, backed by warehouse support and project coordination. Request an install quote.',
  },
  '/services/warehousing': {
    title: 'Warehousing & Receiving | OSI Phoenix',
    description: 'Secure 60,000 sq ft Arizona warehouse for furniture receiving, inspection, staging, storage, and dispatch — keeping projects organized before install day. Talk to us.',
  },
  '/services/decommissioning': {
    title: 'Decommissioning & Relocation' + SUFFIX,
    description: 'Orderly furniture removal, relocation, and workplace transitions with minimal disruption — for closures, consolidations, and renovations. Discuss your project.',
  },
  '/services/asset-management-storage': {
    title: 'Asset Management & Storage' + SUFFIX,
    description: "Secure, climate-controlled storage with real-time inventory tracking and redeployment support to extend the value of furniture you already own. Let's discuss.",
  },
  '/services/modular-walls': {
    title: 'Modular Wall Installation' + SUFFIX,
    description: 'Field support for demountable wall systems and modular environments needing careful sequencing, finish quality, and clean execution. Discuss a project with OSI.',
  },
  '/services/mac-day2': {
    title: 'MAC & Day 2 Furniture Services' + SUFFIX,
    description: 'Ongoing support for moves, adds, changes, reconfigurations, and repairs across active Arizona workplaces — reducing the burden on internal teams. Talk to OSI.',
  },
  '/industries/corporate-office': {
    title: 'Corporate Office Furniture Services' + SUFFIX,
    description: "From private offices to multi-floor campuses, OSI handles installation, reconfiguration, relocation, and ongoing service for active Arizona workplaces. Let's talk.",
  },
  '/industries/healthcare': {
    title: 'Healthcare Furniture Services' + SUFFIX,
    description: 'Furniture installation, replacement, and relocation for clinical and non-clinical healthcare spaces where coordination, cleanliness, and minimal disruption matter.',
  },
  '/industries/education': {
    title: 'Education Furniture Services | OSI Arizona',
    description: 'Classroom, library, and campus furniture projects completed on schedule across K-12 and higher education in Arizona — installs, moves, and reconfigurations. Talk to us.',
  },
  '/industries/hospitality': {
    title: 'Hospitality Furniture Services' + SUFFIX,
    description: "Furniture installation, replacement, and transition work for guest-facing and back-of-house hospitality spaces where timing and presentation are critical. Let's talk.",
  },
  '/industries/government': {
    title: 'Government Furniture Services' + SUFFIX,
    description: 'Organized, dependable furniture support for public-sector offices, departments, and facilities across Arizona — installs, relocations, and ongoing service. Talk to OSI.',
  },
};

// Per-route Open Graph image (root-relative). Falls back to OG_IMAGE_FALLBACK.
const OG_IMAGE_FALLBACK = '/osi-logo-wave.jpg';
const OG_IMAGES = {
  '/': '/photos/home-hero.jpg',
  '/services': '/photos/services-what-we-offer.jpg',
  '/services/installation': '/photos/svc-installation-overview.jpg',
  '/services/warehousing': '/photos/svc-warehousing-overview.jpg',
  '/services/decommissioning': '/photos/svc-decommissioning-overview.jpg',
  '/services/asset-management-storage': '/photos/svc-asset-management-storage-overview.jpg',
  '/services/modular-walls': '/photos/svc-modular-walls-overview.jpg',
  '/services/mac-day2': '/photos/svc-mac-day2-overview.jpg',
  '/industries': '/photos/industries-our-approach.jpg',
  '/industries/corporate-office': '/photos/ind-corporate-office-overview.jpg',
  '/industries/healthcare': '/photos/ind-healthcare-overview.jpg',
  '/industries/education': '/photos/ind-education-overview.jpg',
  '/industries/hospitality': '/photos/ind-hospitality-overview.jpg',
  '/industries/government': '/photos/ind-government-overview.jpg',
  '/projects': '/photos/project-corporate-campus.jpg',
  '/about': '/photos/osi-building.jpg',
  '/contact': '/photos/osi-building.jpg',
  '/cities-we-serve': '/photos/osi-building.jpg',
  '/privacy-policy': '/osi-logo-wave.jpg',
  '/terms-of-use': '/osi-logo-wave.jpg',
  '/thank-you': '/osi-logo-wave.jpg',
};

export function getPageMeta(path) {
  if (STATIC[path]) return STATIC[path];
  if (SUBPAGE_META[path]) return SUBPAGE_META[path];
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
  if (path.startsWith('/cities/')) {
    const city = getCity(path.split('/')[2]);
    if (city) return { title: `Furniture Installation in ${city.name}, AZ` + SUFFIX, description: clamp(city.intro[0]) };
  }
  return { title: 'Page Not Found' + SUFFIX, description: 'The page you are looking for could not be found.' };
}

// Root-relative Open Graph / Twitter image for a route, falling back to the
// brand image for routes without a dedicated photo.
export function getOgImage(path) {
  if (OG_IMAGES[path]) return OG_IMAGES[path];
  if (path.startsWith('/cities/')) return '/photos/home-hero.jpg';
  return OG_IMAGE_FALLBACK;
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
  ...CITY_SLUGS.map((slug) => `/cities/${slug}`),
  '/privacy-policy',
  '/terms-of-use',
  '/thank-you',
];

// Indexable routes for the sitemap (excludes noindex pages).
export const SITEMAP_ROUTES = PRERENDER_ROUTES.filter((p) => !NOINDEX.has(p));
