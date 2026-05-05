export const TOKENS = {
  green: {
    primary: '#6DFF00',
    dark: '#5AD400',
    light: '#9BFF5A',
    tint: '#E4FFC9',
  },
  neutral: {
    charcoal: '#1A1A1A',
    darkGray: '#4A4A4A',
    midGray: '#8A8A8A',
    gray: '#EAEAEA',
    lightGray: '#F4F4F4',
    offWhite: '#F9F9F5',
    white: '#FFFFFF',
  },
};

export const SERVICES = [
  { slug: 'installation', short: 'Installation', title: 'Commercial Furniture Installation', icon: 'Building2', blurb: 'Experienced crews for projects ranging from single-office installs to multi-floor corporate deployments.' },
  { slug: 'warehousing', short: 'Warehousing', title: 'Warehousing & Receiving', icon: 'Warehouse', blurb: 'Secure warehouse support for receiving, inspection, staging, storage, dispatch, and project coordination.' },
  { slug: 'decommissioning', short: 'Decommissioning', title: 'Decommissioning & Relocation', icon: 'Recycle', blurb: 'Orderly furniture removal, relocation, and transition support with minimal disruption.' },
  { slug: 'asset-management', short: 'Asset Management', title: 'Long-Term Asset Management', icon: 'BarChart3', blurb: 'Tracked storage, inventory visibility, and redeployment support designed to extend the value of existing assets.' },
  { slug: 'modular-walls', short: 'Modular Walls', title: 'Modular Walls', icon: 'LayoutGrid', blurb: 'Installation support for demountable wall systems and modular environments requiring careful coordination and finish quality.' },
  { slug: 'mac-day2', short: 'MAC & Day 2', title: 'MAC & Day 2 Services', icon: 'RefreshCw', blurb: 'Ongoing facility support: moves, adds, changes for enterprise clients. Your outsourced facility team.' },
];

export const INDUSTRIES = [
  { slug: 'corporate-office', title: 'Corporate Office', blurb: 'From private offices to multi-floor campuses, OSI supports the installations, reconfigurations, relocations, and ongoing service needs of active workplaces.', img: '/photos/hero-open-plan.jpg' },
  { slug: 'healthcare', title: 'Healthcare', blurb: 'OSI supports furniture projects in healthcare environments where coordination, cleanliness, and minimal disruption matter.', img: '/photos/project-privacy-desks.jpg' },
  { slug: 'education', title: 'Education', blurb: 'From administrative offices to classrooms, libraries, and campus facilities, OSI helps education clients complete furniture work on schedule and with care.', img: '/photos/project-training-room.jpg' },
  { slug: 'hospitality', title: 'Hospitality', blurb: 'OSI supports furniture installation, replacement, and transition work in hospitality environments where timing, presentation, and coordination are critical.', img: '/photos/project-cafe-lounge.jpg' },
  { slug: 'government', title: 'Government', blurb: 'OSI provides dependable support for public-sector offices, departments, and facilities that require organized execution and a professional local partner.', img: '/photos/install-cubicle-floor.jpg' },
];

export const MANUFACTURERS = [
  'Steelcase','MillerKnoll','Haworth','Teknion','Kimball Intl.','HNI / Allsteel',
  'Global Furniture','KI','AIS','9to5 Seating','Humanscale','Vitra',
  'Okamura','KOKUYO','SitOnIt','Geiger'
];

export const PROJECTS = [
  { id: 1, tag: 'Corporate', cat: 'Corporate', title: 'Corporate Campus Installation', result: 'Installed 400 workstations across 3 floors in 5 days.', img: '/photos/hero-open-plan.jpg' },
  { id: 2, tag: 'Corporate', cat: 'Corporate', title: 'Open Plan Workstation Deployment', result: 'Full open-plan office with monitor arms and privacy screens delivered on schedule.', img: '/photos/install-finished-workstations.jpg' },
  { id: 3, tag: 'Training', cat: 'Corporate', title: 'Training Center Build-Out', result: 'Training room tables, seating, and AV furniture installed across two floors.', img: '/photos/project-training-room-2.jpg' },
  { id: 4, tag: 'Corporate', cat: 'Corporate', title: 'Multi-Building Campus Relocation', result: 'Coordinated a phased relocation across 4 buildings with zero business interruption.', img: '/photos/project-open-plan-glass.jpg' },
  { id: 5, tag: 'Modular', cat: 'Corporate', title: 'Framery Pod & Privacy Suite', result: 'Installed phone booths and meeting pods across a 60,000 sq ft corporate floor.', img: '/photos/framery-meeting-pod.jpg' },
  { id: 6, tag: 'Hospitality', cat: 'Hospitality', title: 'Café & Lounge Installation', result: 'Collaborative lounge, café seating, and booth furniture delivered for a corporate amenity space.', img: '/photos/project-cafe-lounge.jpg' },
  { id: 7, tag: 'Corporate', cat: 'Corporate', title: 'Downtown Tower Restack', result: 'Multi-floor workstation reconfiguration completed over three weekends.', img: '/photos/install-cubicle-floor.jpg' },
  { id: 8, tag: 'Corporate', cat: 'Corporate', title: 'Executive Suite Fit-Out', result: 'Private offices with casegoods, monitor arms, and guest seating installed in a single weekend.', img: '/photos/project-executive-office.jpg' },
  { id: 9, tag: 'Modular', cat: 'Corporate', title: 'Wire-Frame Pod & Lounge', result: 'Architectural pod and lounge seating installed in a new corporate lobby.', img: '/photos/project-wire-pod-lounge.jpg' },
];

export const CLIENT_LOGOS = ['Choice Hotels','Wells Fargo','Amazon','State Farm','Phoenix Suns'];

export const REVIEWS = [
  { name: 'Dana R.', initials: 'DR', text: 'OSI handled our multi-floor install without a hiccup — responsive, professional, and on schedule. We rely on them for every Phoenix project now.' },
  { name: 'Marcus P.', initials: 'MP', text: 'The team arrived on time, protected every surface, and finished the punch list before we even asked. Night-and-day difference from prior installers.' },
  { name: 'Keiko T.', initials: 'KT', text: 'Their receiving and staging support saved us on a tight rollout. Honest communication the whole way through.' },
  { name: 'Brian L.', initials: 'BL', text: 'We use OSI for daily MAC work across our Phoenix portfolio. They treat our spaces like their own.' },
  { name: 'Alicia S.', initials: 'AS', text: 'Warehouse was organized, delivery windows were exact, installers were sharp. Quoted fairly and stood behind the work.' },
  { name: 'Jorge M.', initials: 'JM', text: 'OSI decommissioned an entire floor for us in a weekend. Seamless — and they helped us redeploy what we kept.' },
];

export const SERVICE_PAGES = {
  'installation': {
    eyebrow: 'SERVICES / INSTALLATION',
    title: ['Commercial Furniture Installation', 'Done Right'],
    sub: 'From private offices to corporate campuses, OSI provides experienced installation crews for projects that need to be organized, professional, and completed with care.',
    ctas: ['Request an Installation Quote','Talk to OSI'],
    heroDark: true,
    intro: [
      'Furniture installation is the core of what we do — but what makes OSI different is everything around it. We bring the labor, field leadership, warehouse support, and project coordination needed to execute installations with fewer surprises and better results.',
      'We support dealers, project managers, general contractors, and enterprise clients across a wide range of commercial environments throughout the Phoenix market.'
    ],
    supportTitle: 'What We Handle',
    supportSub: 'Installation support for projects of all sizes.',
    supportList: ['Single-office and small-suite installs','Multi-floor corporate deployments','Campus-wide rollouts','Phased occupancy projects','Reconfigurations and restacks','Punch and post-install support'],
    extra: { title: 'What We Install', sub: 'Experienced across major commercial furniture systems.', body: 'OSI works across leading manufacturers, seating lines, casegoods, workstations, conference furniture, ancillary products, and modular environments. Our crews are built for commercial furniture work, not generic moving labor.' },
    whyTitle: 'Why OSI',
    whyList: ['Experienced commercial furniture crews','Professional field execution and site coordination','Support for punch, warranty, and follow-through','Warehouse and receiving support when needed','A Phoenix partner built for both dealer and enterprise work'],
    closingTitle: ['Installation is only one day.','The project is bigger than that.'],
    closingBody: 'That is why clients rely on OSI for more than labor. We help make sure the installation is supported by the right planning, staging, coordination, and follow-through before and after the work hits the floor.',
    closingCta: 'Request an Installation Quote',
  },
  'warehousing': {
    eyebrow: 'SERVICES / WAREHOUSING',
    title: ['Warehousing & Receiving That', 'Keep Projects Organized'],
    sub: 'A successful installation starts long before install day. OSI provides the warehouse space, receiving process, and staging support needed to keep furniture projects under control from the moment product arrives.',
    ctas: ['Discuss Warehouse Support','Request a Quote'],
    heroDark: false,
    intro: [
      'For many projects, the real headaches start when furniture arrives in pieces, across multiple shipments, on inconsistent timelines. OSI helps bring order to that process with secure warehousing, receiving, inspection, staging, and dispatch support.',
      'For dealers, this means a dependable Phoenix partner on the ground. For enterprise clients, it means better control over furniture assets, project timing, and site readiness.'
    ],
    supportTitle: 'What We Provide',
    supportSub: 'Warehouse support built for furniture projects.',
    supportList: ['Receiving and shipment intake','Inspection and issue identification','Secure short-term warehousing','Project staging and dispatch','Delivery coordination','Support tied directly to installation schedules'],
    extra: { title: 'Why It Matters', sub: 'Better warehouse support means fewer problems on install day.', body: 'When product is received, staged, and organized properly, the installation runs better. There is less scrambling, less confusion, and fewer avoidable delays caused by missing product, poor coordination, or bad handoffs.' },
    whyTitle: 'Why OSI',
    whyBody: 'With a 60,000 sq. ft. warehouse and a team built around commercial furniture work, OSI provides more than storage space. We provide the local infrastructure needed to support project execution.',
    statCallout: { n: 60000, suffix: '', label: 'SQ FT', caption: 'Secure warehouse in Phoenix.' },
    closingTitle: ['Talk to us about','warehousing.'],
    closingBody: 'Tell us about your project, your timeline, and your shipments — we will help you bring order to the front half of the job.',
    closingCta: 'Talk to OSI About Warehousing',
  },
  'mac-day2': {
    eyebrow: 'SERVICES / MAC & DAY 2',
    title: ['MAC & Day 2 Services for', 'Ongoing Facility Needs'],
    sub: 'Furniture work does not end after the initial install. OSI provides ongoing support for moves, adds, changes, reconfigurations, repairs, and day-to-day furniture needs across active workplaces.',
    ctas: ['Discuss Ongoing Support','Talk to OSI'],
    heroDark: true,
    intro: [
      'Many clients need more than project-based installation. They need a local partner who can respond to the work that continues after occupancy: employee moves, departmental changes, workstation reconfigurations, furniture adjustments, repairs, and small ongoing requests that internal teams do not always have the time or bandwidth to manage.',
      'That is where OSI fits.'
    ],
    supportTitle: 'What We Support',
    supportSub: 'Practical support for real-world workplace change.',
    supportList: ['Moves, adds, and changes','Workstation and office reconfigurations','Furniture repairs and adjustments','Small installs and add-ons','Daily and recurring service requests','Ongoing support programs by site or portfolio'],
    extra: { title: 'Who This Is For', sub: 'Teams who need dependable ongoing support.', list: ['Enterprise clients and facility teams who need dependable local support','Dealers who want post-install service support for their clients','Organizations with growing, changing, or frequently reconfigured workplaces'] },
    whyTitle: 'Why Clients Use OSI',
    whyList: ['Faster access to experienced furniture labor','A local team that already understands commercial environments','Less burden on internal staff','Better continuity after the initial project is complete'],
    closingTitle: ['Ongoing work still needs','a professional team.'],
    closingBody: 'OSI helps clients manage the work that never really stops — without having to build that capability entirely in-house.',
    closingCta: 'Discuss MAC & Day 2 Services',
  },
  'decommissioning': {
    eyebrow: 'SERVICES / DECOMMISSIONING',
    title: ['Decommissioning & Relocation', 'Without the Chaos'],
    sub: 'OSI helps clients remove, relocate, and transition furniture in an organized way that minimizes disruption and keeps projects moving.',
    ctas: ['Discuss a Relocation Project','Request a Quote'],
    heroDark: false,
    intro: [
      'Office transitions can get messy quickly. Whether a client is consolidating space, relocating teams, closing a facility, or clearing furniture ahead of a renovation, OSI provides the labor and coordination needed to handle the process cleanly.',
      'We support both planned relocations and decommissioning projects that require furniture removal, internal moves, storage, redeployment, or disposal coordination.'
    ],
    supportTitle: 'What We Handle',
    supportSub: 'Transitions done in an organized way.',
    supportList: ['Office and facility relocations','Internal furniture moves','Decommissioning ahead of renovation or turnover','Furniture removal and transition support','Storage and redeployment coordination','Multi-phase projects with minimal disruption'],
    whyTitle: 'Why OSI',
    whySub: 'A better transition starts with a better process.',
    whyBody: 'OSI helps clients bring structure to work that can otherwise become disruptive, disorganized, and expensive. Because we also provide warehousing, installation, and asset support, we can help clients think beyond removal and support what comes next.',
    closingTitle: ['Moving out, moving over,','or starting fresh.'],
    closingBody: 'Whatever the transition looks like, OSI helps clients handle it with less disruption and one accountable local partner.',
    closingCta: 'Talk to OSI About Relocation',
  },
  'asset-management': {
    eyebrow: 'SERVICES / ASSET MANAGEMENT',
    title: ['Asset Management & Storage That', 'Extend the Value of Furniture'],
    sub: 'Not every furniture asset should be discarded, and not every client wants to lose track of what they already own. OSI helps clients store, track, manage, and redeploy furniture with more visibility and control.',
    ctas: ['Discuss Asset Management','Talk to OSI'],
    heroDark: true,
    intro: [
      'For clients with surplus inventory, phased projects, changing headcount, or multiple locations, furniture assets can either become a resource or a headache. OSI helps make them useful.',
      'Our asset management and storage services are designed to support long-term furniture visibility, organization, and redeployment — especially for clients who want more than overflow storage.'
    ],
    supportTitle: 'What We Provide',
    supportSub: 'More than storage space.',
    supportList: ['Secure long-term furniture storage','Inventory tracking and organization','Asset visibility and reporting','Redeployment support','Program-based support for changing furniture needs'],
    extra: { title: 'Why It Matters', sub: 'Better asset management protects past furniture investment.', body: 'When furniture is stored and tracked properly, clients have more options. They can reuse assets, support future moves, reduce waste, and avoid unnecessary replacement costs.' },
    whyTitle: 'Why OSI',
    whyBody: 'OSI combines warehouse capacity with operational support. That means clients get more than a place to put furniture — they get a partner who can help manage it, locate it, and put it back to work when needed.',
    closingTitle: ['Furniture is an asset.','Treat it like one.'],
    closingBody: 'Let us help you make sense of what you already own — and put it back to work.',
    closingCta: 'Discuss Asset Management & Storage',
  },
  'modular-walls': {
    eyebrow: 'SERVICES / MODULAR WALLS',
    title: ['Modular Wall Installation with', 'the Right Field Support'],
    sub: 'Modular wall systems require careful coordination, precise execution, and a team that understands commercial project conditions. OSI provides installation support for demountable wall systems and modular environments across the Phoenix market.',
    ctas: ['Discuss a Modular Wall Project','Talk to OSI'],
    heroDark: false,
    intro: [
      'Modular walls are different from standard furniture installation. They require tighter coordination, sequencing, finish awareness, and crews who understand how the system interacts with the surrounding space.',
      'OSI supports modular wall projects for dealers, contractors, and clients who need a dependable installation partner for demountable environments.'
    ],
    supportTitle: 'What We Support',
    supportSub: 'Field support for demountable systems.',
    supportList: ['Demountable wall system installation','Modular environment build-outs','Coordination with surrounding trades and site conditions','Projects requiring careful sequencing and finish quality','Support tied to broader furniture or workplace projects'],
    whyTitle: 'Why OSI',
    whySub: 'A stronger field partner for more demanding installations.',
    whyBody: 'OSI brings the labor, professionalism, and project mindset needed for work that has to be installed cleanly and coordinated carefully. For clients already relying on OSI for furniture services, modular walls are a natural extension of that support.',
    closingTitle: ['When the project requires more precision,','the partner matters more.'],
    closingBody: 'OSI helps clients execute modular wall work with the care and coordination these environments demand.',
    closingCta: 'Talk to OSI About Modular Walls',
  },
};

export const INDUSTRY_PAGES = {
  'corporate-office': {
    title: ['Furniture Services for','Corporate Office Environments'],
    sub: 'From private offices to multi-floor campuses, OSI supports the installation, relocation, reconfiguration, and ongoing service needs of active workplaces across Phoenix.',
    intro: 'Corporate office environments often require more than a one-time install. Teams move. Departments grow. Floors are reconfigured. New employees come in. Furniture needs change over time. OSI helps corporate clients manage both project-based work and ongoing workplace support with the labor, warehouse capacity, and field coordination needed to keep things moving.',
    supportSub: 'Built for the pace of active workplaces.',
    supportList: ['Corporate furniture installation','Multi-floor and campus projects','Office reconfigurations and restacks','Moves, adds, and changes','Decommissioning and relocation','Asset storage and redeployment'],
    why: 'Corporate office clients need a partner who can work professionally in occupied spaces, coordinate around schedules, and support the work that continues after the original project is complete. OSI is built for exactly that.',
    closing: ['A stronger partner for','workplace change.'],
    closingBody: 'Whether you are installing, reconfiguring, expanding, or relocating, OSI helps corporate office clients handle the work with less friction and better follow-through.',
    closingCta: 'Talk to OSI About Corporate Office Projects',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
  },
  'healthcare': {
    title: ['Furniture Services for','Healthcare Environments'],
    sub: 'OSI supports furniture installation, replacement, relocation, and ongoing service work in healthcare environments where coordination, cleanliness, and minimal disruption matter.',
    intro: 'Healthcare environments require a higher level of care in how work is planned and executed. Projects often need to be coordinated around patient areas, staff operations, phased schedules, and spaces that cannot tolerate unnecessary disruption. OSI helps healthcare clients and project partners execute furniture work with professionalism, organization, and respect for the environment.',
    supportSub: 'Built for healthcare project conditions.',
    supportList: ['Administrative and back-office furniture installation','Waiting areas, work areas, and support spaces','Furniture replacement and refresh projects','Relocations and phased transition work','Decommissioning and furniture removal','Ongoing MAC and support services'],
    why: 'Healthcare clients need a team that understands how to work carefully, communicate clearly, and support the project without adding avoidable disruption. OSI provides dependable field execution backed by warehouse and coordination support when needed.',
    closing: ['Professional support for','more demanding environments.'],
    closingBody: 'OSI helps healthcare clients complete furniture projects with the organization, care, and follow-through these spaces demand.',
    closingCta: 'Talk to OSI About Healthcare Projects',
    img: 'https://images.unsplash.com/photo-1631248055158-edec7a3c072b?w=1600&q=80',
  },
  'education': {
    title: ['Furniture Services for','Education Environments'],
    sub: 'From classrooms and libraries to administrative offices and campus facilities, OSI supports furniture projects across education environments that need to be completed on schedule and with care.',
    intro: 'Education projects often come with tight schedules, phased work, limited access windows, and multiple stakeholder groups. Whether the work is happening in a K-12 setting, higher education environment, or campus administrative space, OSI helps bring structure to the process. We support installations, moves, reconfigurations, and transition work in education environments across Phoenix.',
    supportSub: 'Built for campus and school environments.',
    supportList: ['Classroom and academic space installation','Library and collaborative space projects','Administrative office furniture work','Campus moves and relocations','Furniture replacement and refresh programs','Decommissioning and transition support'],
    why: 'Education clients need a partner who can work within real scheduling constraints and help the project move efficiently. OSI provides the labor, organization, and local support needed to execute the work cleanly.',
    closing: ['A dependable partner for','school and campus projects.'],
    closingBody: 'OSI helps education clients complete furniture work with better coordination, less disruption, and one accountable local team.',
    closingCta: 'Talk to OSI About Education Projects',
    img: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=80',
  },
  'hospitality': {
    title: ['Furniture Services for','Hospitality Environments'],
    sub: 'OSI supports furniture installation, replacement, and transition work in hospitality environments where timing, presentation, and coordination are critical.',
    intro: 'Hospitality spaces demand a polished result and a well-managed process. Whether the work involves guest-facing areas, back-of-house spaces, administrative offices, or phased furniture replacement, OSI helps clients execute the project in a way that feels organized and professional. We support installations, refreshes, relocations, and transition work across hospitality environments in the Phoenix market.',
    supportSub: 'Built for presentation-sensitive environments.',
    supportList: ['Furniture installation and replacement','Phased refresh projects','Relocation and transition support','Decommissioning and removal','Warehousing and staged delivery when needed','Ongoing support tied to broader furniture programs'],
    why: 'Hospitality projects require attention to schedule, coordination, and finish quality. OSI provides the field support and operational depth needed to help the work move smoothly and reflect well on the client.',
    closing: ['A stronger local partner','for hospitality projects.'],
    closingBody: 'OSI helps hospitality clients complete furniture work with better coordination, cleaner execution, and less disruption.',
    closingCta: 'Talk to OSI About Hospitality Projects',
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80',
  },
  'government': {
    title: ['Furniture Services for','Government Environments'],
    sub: 'OSI provides organized, dependable furniture support for government offices, departments, and public-sector facilities across the Phoenix market.',
    intro: 'Government projects often require a professional partner who can execute the work reliably, communicate clearly, and support the project in a structured way. Whether the need is installation, relocation, reconfiguration, or long-term furniture support, OSI helps public-sector clients get the work done with less friction. We support a wide range of government environments, from administrative offices to larger departmental facilities.',
    supportSub: 'Built for public-sector furniture needs.',
    supportList: ['Office and facility furniture installation','Moves, adds, and changes','Reconfigurations and relocations','Decommissioning and transition support','Warehousing and receiving support','Long-term asset storage and redeployment'],
    why: 'Government clients need a partner who is organized, responsive, and capable of supporting the project beyond install day. OSI brings local labor, warehouse support, and ongoing service capability to work that often requires more than a one-time installation crew.',
    closing: ['Dependable support for','public-sector projects.'],
    closingBody: 'OSI helps government clients execute furniture work with one accountable local team and the infrastructure to support what comes next.',
    closingCta: 'Talk to OSI About Government Projects',
    img: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1600&q=80',
  },
};
