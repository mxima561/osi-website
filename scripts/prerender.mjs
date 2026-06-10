// Build-time prerender: render every route to static HTML so crawlers (and
// `curl`, with no JS execution) receive full page content. Runs after the
// client build and the SSR build. The emitted HTML hydrates on load.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const serverEntry = pathToFileURL(path.join(root, 'dist-server', 'entry-server.js')).href;

const { render, PRERENDER_ROUTES, SITEMAP_ROUTES, NOINDEX, SITE_ORIGIN } = await import(serverEntry);

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const canonicalFor = (route) => SITE_ORIGIN + (route === '/' ? '/' : route);

const OG_IMAGE = SITE_ORIGIN + '/osi-logo-wave.jpg';

function headTags({ title, description }, route, noindex) {
  const canonical = canonicalFor(route);
  return [
    `<link rel="canonical" href="${esc(canonical)}">`,
    noindex ? '<meta name="robots" content="noindex, follow">' : '',
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="OSI">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${esc(canonical)}">`,
    `<meta property="og:image" content="${esc(OG_IMAGE)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${esc(OG_IMAGE)}">`,
  ].filter(Boolean).join('\n    ');
}

function buildHtml(route, meta, html, noindex) {
  let out = template;
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`);
  out = out.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(meta.description)}">`);
  out = out.replace('</head>', `    ${headTags(meta, route, noindex)}\n  </head>`);
  out = out.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  return out;
}

function outFile(route) {
  if (route === '/') return path.join(distDir, 'index.html');
  return path.join(distDir, route.replace(/^\//, ''), 'index.html');
}

function writePage(route, file, noindex) {
  const { html, title, description } = render(route);
  const out = buildHtml(route, { title, description }, html, noindex);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, out);
  return { route, file: path.relative(root, file) };
}

const written = [];
for (const route of PRERENDER_ROUTES) {
  written.push(writePage(route, outFile(route), NOINDEX.has(route)));
}
// Styled 404 page (served by Vercel for unmatched paths when no rewrite applies).
written.push(writePage('/404', path.join(distDir, '404.html'), true));

// sitemap.xml — indexable clean URLs only.
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITEMAP_ROUTES.map((r) => `  <url>
    <loc>${esc(canonicalFor(r))}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r === '/' ? '1.0' : '0.7'}</priority>
  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);

// robots.txt — regenerated here so the Sitemap URL always matches SITE_ORIGIN.
fs.writeFileSync(path.join(distDir, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`);

console.log(`Prerendered ${written.length} pages:`);
for (const w of written) console.log(`  ${w.route.padEnd(34)} -> ${w.file}`);
console.log(`Sitemap: ${SITEMAP_ROUTES.length} URLs -> dist/sitemap.xml`);
