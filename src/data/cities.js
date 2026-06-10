// Per-city landing-page content. Each entry is written to be genuinely
// differentiated (district names, local industry, coverage from the Phoenix
// warehouse) so the pages are useful local landing pages — not thin/duplicate
// "doorway" pages. Consumed by CityPage.jsx, seo.js, and structuredData.js.

export const CITIES = [
  {
    slug: 'phoenix',
    name: 'Phoenix',
    region: 'Phoenix Metro',
    tagline: 'Our home base — commercial furniture installation across the Valley',
    intro: [
      'Phoenix is where OSI is headquartered, and it is the center of everything we do. Our 60,000-square-foot warehouse sits minutes from downtown, so receiving, staging, and dispatch for Phoenix projects happen on the shortest possible timeline.',
      'From high-rises in the Downtown and Midtown cores to office campuses along the Camelback Corridor, Deer Valley, and the Sky Harbor business district, we install, reconfigure, and relocate commercial furniture for dealers, general contractors, and enterprise facility teams.',
    ],
    districts: 'Downtown, Midtown, Camelback Corridor, Deer Valley, and the Sky Harbor / airport business district',
    coverage: 'Same-day and next-day crews from our downtown Phoenix warehouse, with full receiving and staging on-site.',
    nearby: ['tempe', 'scottsdale', 'glendale'],
  },
  {
    slug: 'scottsdale',
    name: 'Scottsdale',
    region: 'Phoenix Metro',
    tagline: 'Furniture installation for Scottsdale offices and the Airpark',
    intro: [
      'Scottsdale pairs a dense professional, financial, and medical office base with one of Arizona’s largest employment hubs at the Scottsdale Airpark. OSI handles the installations, reconfigurations, and Day 2 service these workplaces need without disrupting client-facing operations.',
      'Whether the project is a Class A suite near Old Town or a multi-tenant building in North Scottsdale, our crews coordinate access, freight elevators, and after-hours windows so the work lands clean and on schedule.',
    ],
    districts: 'Scottsdale Airpark, North Scottsdale, the Shea corridor, and Old Town',
    coverage: 'Roughly 20 minutes from our Phoenix warehouse — same-day crews and full receiving support.',
    nearby: ['phoenix', 'tempe', 'mesa'],
  },
  {
    slug: 'tempe',
    name: 'Tempe',
    region: 'Phoenix Metro',
    tagline: 'Installation and MAC services for Tempe’s tech and education campuses',
    intro: [
      'Tempe packs a lot into a small footprint: Arizona State University, a fast-moving tech and startup scene, and corporate campuses lining the 101 and 202. That mix means frequent moves, adds, and changes — exactly the ongoing work OSI is built to support.',
      'We install workstations, benching, and collaborative furniture for growing teams near Mill Avenue, Tempe Town Lake, and the Rio Salado corridor, and we keep active offices running with responsive Day 2 service.',
    ],
    districts: 'Downtown Tempe / Mill Avenue, Tempe Town Lake, the Rio Salado corridor, and the ASU research park',
    coverage: 'About 15 minutes from our Phoenix warehouse — same-day crews for installs and reconfigurations.',
    nearby: ['phoenix', 'mesa', 'chandler'],
  },
  {
    slug: 'mesa',
    name: 'Mesa',
    region: 'Phoenix Metro',
    tagline: 'Commercial furniture services for the East Valley’s largest city',
    intro: [
      'Mesa is the largest city in the East Valley and the third-largest in Arizona, with growing healthcare, aerospace, and education employers anchored around the Mesa Gateway area and a revitalizing downtown.',
      'OSI supports Mesa facility teams and dealers with installation, relocation, decommissioning, and storage — scaling from single-office refreshes to phased, multi-floor deployments.',
    ],
    districts: 'Downtown Mesa, the Mesa Gateway / Falcon Field employment areas, and the Superstition Springs corridor',
    coverage: 'About 30 minutes from our Phoenix warehouse, with staging space to keep East Valley projects organized.',
    nearby: ['tempe', 'chandler', 'gilbert'],
  },
  {
    slug: 'chandler',
    name: 'Chandler',
    region: 'Phoenix Metro',
    tagline: 'Workstation installs and reconfigurations across the Price Corridor',
    intro: [
      'Chandler is one of Arizona’s strongest tech markets, with major employers concentrated along the Price Road Corridor. High-density workstation environments mean regular installs, restacks, and reconfigurations as teams grow and shift.',
      'OSI brings the crews, field leadership, and warehouse support to execute these projects cleanly — coordinating around live operations so production never stops.',
    ],
    districts: 'The Price Road Corridor, Downtown Chandler, and the Chandler Airpark',
    coverage: 'About 30 minutes from our Phoenix warehouse — ideal for staged, high-density workstation rollouts.',
    nearby: ['tempe', 'mesa', 'gilbert'],
  },
  {
    slug: 'gilbert',
    name: 'Gilbert',
    region: 'Phoenix Metro',
    tagline: 'Furniture installation for Gilbert’s growing office and healthcare market',
    intro: [
      'Gilbert has grown from a farming town into one of the fastest-expanding communities in the country, with modern office parks, healthcare facilities, and professional services filling in around the Heritage District.',
      'OSI installs and services commercial furniture for these newer buildings and tenant improvements, handling receiving, staging, and clean install-day execution for dealers and facility teams.',
    ],
    districts: 'The Heritage District, the Gilbert healthcare corridor, and the SanTan / Rivulon office areas',
    coverage: 'About 35 minutes from our Phoenix warehouse, with full receiving for new tenant improvements.',
    nearby: ['chandler', 'mesa', 'tempe'],
  },
  {
    slug: 'glendale',
    name: 'Glendale',
    region: 'Phoenix Metro',
    tagline: 'Commercial furniture services for the West Valley’s sports and entertainment hub',
    intro: [
      'Glendale anchors the West Valley around its sports and entertainment district — State Farm Stadium, Desert Diamond Arena, and Westgate — alongside a steady base of government, healthcare, and corporate offices.',
      'OSI serves these West Valley workplaces with installation, relocation, and ongoing MAC service, bringing crews and warehouse support across town without the West Valley being an afterthought.',
    ],
    districts: 'The Westgate / sports & entertainment district, Downtown Glendale, and the Arrowhead area',
    coverage: 'About 25 minutes from our Phoenix warehouse — full crews and freight coordination for West Valley jobs.',
    nearby: ['phoenix', 'peoria', 'scottsdale'],
  },
  {
    slug: 'peoria',
    name: 'Peoria',
    region: 'Phoenix Metro',
    tagline: 'Installation and Day 2 service for Peoria’s growing commercial base',
    intro: [
      'Peoria continues to add commercial space around the P83 entertainment district and its expanding healthcare and professional-services market in the northwest Valley.',
      'OSI handles installs, reconfigurations, and decommissioning for Peoria offices and facilities, with the receiving and storage capacity to keep phased projects on track.',
    ],
    districts: 'The P83 district, the Peoria healthcare corridor, and the Lake Pleasant / Vistancia growth areas',
    coverage: 'About 35 minutes from our Phoenix warehouse, with staging space for phased West Valley work.',
    nearby: ['glendale', 'phoenix', 'scottsdale'],
  },
  {
    slug: 'tucson',
    name: 'Tucson',
    region: 'Greater Arizona',
    tagline: 'Coordinated commercial furniture projects in Southern Arizona',
    intro: [
      'Tucson is Southern Arizona’s largest market, with the University of Arizona, a strong aerospace and defense sector, and a revitalizing downtown driving steady commercial activity.',
      'OSI serves Tucson with planned, well-coordinated trips from our Phoenix warehouse — consolidating receiving and staging so installations, relocations, and decommissioning run efficiently roughly two hours south.',
    ],
    districts: 'Downtown Tucson, the University of Arizona area, and the aerospace / defense corridor',
    coverage: 'Roughly two hours south of our Phoenix warehouse — projects are scheduled and staged for efficient single trips.',
    nearby: ['phoenix', 'chandler', 'mesa'],
  },
  {
    slug: 'flagstaff',
    name: 'Flagstaff',
    region: 'Greater Arizona',
    tagline: 'Furniture installation for Northern Arizona’s high country',
    intro: [
      'Flagstaff anchors Northern Arizona, home to Northern Arizona University, a regional healthcare hub, and government and education facilities serving the high country.',
      'OSI brings the same crews and project coordination north for Flagstaff installations, relocations, and Day 2 work — planning receiving and staging around the longer haul and mountain conditions.',
    ],
    districts: 'Downtown Flagstaff, the NAU campus area, and the regional medical and government facilities',
    coverage: 'Roughly two hours north of our Phoenix warehouse — projects are coordinated and staged for efficient trips.',
    nearby: ['phoenix', 'scottsdale', 'glendale'],
  },
];

export const CITY_SLUGS = CITIES.map((c) => c.slug);
export const getCity = (slug) => CITIES.find((c) => c.slug === slug);
