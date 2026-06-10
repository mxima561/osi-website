// schema.org JSON-LD generation for OSI routes.
//
// Pure data module — no JSX, no browser APIs — so it can run in Node during
// prerender (scripts/prerender.mjs). Exposes getJsonLd(path), which returns an
// array of schema.org objects appropriate for the given route. Each object is
// JSON.stringify-ed into a <script type="application/ld+json"> tag.
//
// Shared entities (Organization, WebSite, LocalBusiness) reference each other
// by @id so blocks can co-exist without duplicating NAP data.

import {
  SERVICES,
  SERVICE_PAGES,
  INDUSTRIES,
  INDUSTRY_PAGES,
  REVIEWS,
  REVIEW_AGGREGATE,
} from './data/tokens.js';
import { SITE_ORIGIN } from './seo.js';

const ORIGIN = SITE_ORIGIN;
const LOCALBUSINESS_ID = `${ORIGIN}/#localbusiness`;
const ORG_ID = `${ORIGIN}/#organization`;
const WEBSITE_ID = `${ORIGIN}/#website`;

const abs = (path) => `${ORIGIN}${path}`;

const AREA_SERVED = [
  'Phoenix', 'Scottsdale', 'Tempe', 'Mesa', 'Chandler', 'Gilbert', 'Glendale',
  'Peoria', 'Surprise', 'Goodyear', 'Avondale', 'Tucson', 'Flagstaff',
].map((name) => ({ '@type': 'City', name, addressRegion: 'AZ' }));

// Number of on-page review items to surface in the markup.
const REVIEW_LIMIT = 6;

function buildOrganization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Office Systems Installation',
    alternateName: 'OSI',
    url: ORIGIN,
    logo: {
      '@type': 'ImageObject',
      url: abs('/osi-logo-wave.jpg'),
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-602-253-9392',
        email: 'requestaquote@osinstall.com',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
    ],
  };
}

function buildWebsite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: ORIGIN,
    name: 'Office Systems Installation',
    alternateName: 'OSI',
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  };
}

function buildReviews() {
  return REVIEWS.slice(0, REVIEW_LIMIT).map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(r.stars),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: r.text,
    itemReviewed: { '@id': LOCALBUSINESS_ID },
  }));
}

function buildLocalBusiness({ withReviews = false } = {}) {
  const business = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': LOCALBUSINESS_ID,
    name: 'Office Systems Installation',
    alternateName: 'OSI',
    description:
      'Commercial furniture installation, warehousing, receiving, and MAC/Day-2 services for dealers, general contractors, and enterprise clients across Arizona.',
    url: ORIGIN,
    image: abs('/osi-logo-wave.jpg'),
    logo: abs('/osi-logo-wave.jpg'),
    telephone: '+1-602-253-9392',
    email: 'requestaquote@osinstall.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '135 E Watkins St',
      addressLocality: 'Phoenix',
      addressRegion: 'AZ',
      postalCode: '85004',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.4385,
      longitude: -112.07,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '15:00',
      },
    ],
    areaServed: AREA_SERVED,
    parentOrganization: { '@id': ORG_ID },
  };
  // Only attach ratings/reviews on pages where the reviews are actually shown
  // (the home page), per Google's review-snippet policy.
  if (withReviews) {
    business.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: REVIEW_AGGREGATE.rating,
      reviewCount: REVIEW_AGGREGATE.total,
      bestRating: '5',
      worstRating: '1',
    };
    business.review = buildReviews();
  }
  return business;
}

function serviceSchema({ name, description, url, serviceType }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    serviceType,
    provider: { '@id': LOCALBUSINESS_ID },
    areaServed: AREA_SERVED,
  };
}

function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

const joinTitle = (t) => (Array.isArray(t) ? t.join(' ') : t);
const firstText = (v) => (Array.isArray(v) ? v[0] : v) || '';

// Human-readable label for non-dynamic routes, used for breadcrumb crumbs.
const STATIC_CRUMB = {
  '/services': 'Services',
  '/industries': 'Industries',
  '/projects': 'Projects',
  '/about': 'About',
  '/contact': 'Contact',
  '/cities-we-serve': 'Cities We Serve',
  '/privacy-policy': 'Privacy Policy',
  '/terms-of-use': 'Terms of Use',
  '/thank-you': 'Thank You',
};

/**
 * Returns an array of schema.org JSON-LD objects for the given route path.
 * @param {string} path e.g. '/', '/services/installation', '/industries/healthcare'
 * @returns {object[]}
 */
export function getJsonLd(path) {
  const blocks = [buildOrganization(), buildLocalBusiness({ withReviews: path === '/' })];

  // Home: add the WebSite entity.
  if (path === '/') {
    blocks.push(buildWebsite());
    return blocks;
  }

  // Service subpages: Service + BreadcrumbList.
  if (path.startsWith('/services/')) {
    const slug = path.split('/')[2];
    const page = SERVICE_PAGES[slug];
    const svc = SERVICES.find((s) => s.slug === slug);
    if (page || svc) {
      const name = page ? joinTitle(page.title) : svc.title;
      const description = (svc && svc.blurb) || firstText(page && page.intro);
      blocks.push(
        serviceSchema({
          name,
          description,
          url: abs(path),
          serviceType: svc ? svc.title : name,
        }),
      );
      blocks.push(
        breadcrumbSchema([
          { name: 'Home', url: ORIGIN },
          { name: 'Services', url: abs('/services') },
          { name: (svc && svc.short) || name, url: abs(path) },
        ]),
      );
    }
    return blocks;
  }

  // Industry subpages: Service + BreadcrumbList.
  if (path.startsWith('/industries/')) {
    const slug = path.split('/')[2];
    const page = INDUSTRY_PAGES[slug];
    const ind = INDUSTRIES.find((s) => s.slug === slug);
    if (page || ind) {
      const name = ind ? ind.title : joinTitle(page.title);
      const description = (ind && ind.blurb) || firstText(page && page.intro);
      blocks.push(
        serviceSchema({
          name: `Commercial Furniture Services — ${name}`,
          description,
          url: abs(path),
          serviceType: `Commercial furniture services for ${name}`,
        }),
      );
      blocks.push(
        breadcrumbSchema([
          { name: 'Home', url: ORIGIN },
          { name: 'Industries', url: abs('/industries') },
          { name, url: abs(path) },
        ]),
      );
    }
    return blocks;
  }

  // Other known subpages: BreadcrumbList.
  if (STATIC_CRUMB[path]) {
    blocks.push(
      breadcrumbSchema([
        { name: 'Home', url: ORIGIN },
        { name: STATIC_CRUMB[path], url: abs(path) },
      ]),
    );
  }

  return blocks;
}
