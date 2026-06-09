import { FadeIn, Stagger, StaggerItem, CountUp, TypingWord } from '../components/Motion';
import { Section, Container, Eyebrow, Button, StatPill, SectionHeading, Green, ImgOrPlaceholder } from '../components/Primitives';
import { Link } from '../components/Router';
import Icon from '../components/Icon';
import { useQuote } from '../components/QuoteModal';
import FinalCTA from '../components/FinalCTA';
import { SERVICES, MANUFACTURERS, PROJECTS, CLIENT_LOGOS, REVIEWS, REVIEW_AGGREGATE } from '../data/tokens';

const HERO_WORDS = ['Furniture Installation', 'Warehousing', 'Asset Management', 'MAC & Daily Services', 'Modular Walls'];

function HeroHome() {
  const quote = useQuote();
  return (
    <Section className="relative overflow-hidden bg-white">
      <Container className="pt-8 pb-20 md:pt-12 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Stagger>
              <StaggerItem>
                <Eyebrow>Relax. You Found Us.</Eyebrow>
              </StaggerItem>
              <StaggerItem className="mt-6">
                <h1 aria-label="One partner for complete furniture services, and everything around it." className="font-display font-black tracking-tight leading-[0.98] text-[34px] sm:text-[46px] md:text-[56px] lg:text-[60px] text-[#1A1A1A]">
                  <span className="block">One partner for</span>
                  <span className="block min-h-[1.1em] leading-[1.1]">
                    <TypingWord words={HERO_WORDS} />
                  </span>
                  <span className="block">and everything around it.</span>
                </h1>
              </StaggerItem>
              <StaggerItem className="mt-10">
                <div className="flex flex-wrap gap-3 items-center">
                  <Button variant="primary" size="lg" onClick={() => quote.open()}>Request a Quote</Button>
                  <Button variant="outlineDark" size="lg" to="/services" iconRight={null}>Explore Services</Button>
                </div>
              </StaggerItem>
            </Stagger>
          </div>

          <div className="lg:col-span-5">
            <FadeIn>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#F1F2F3]">
                <ImgOrPlaceholder src="/photos/home-hero.jpg" alt="OSI commercial furniture installation in Arizona" caption="OSI" />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function StatsBar() {
  return (
    <div className="border-y border-[#EAEAEA] bg-white">
      <Container>
        <div className="py-6 flex flex-wrap gap-8 md:gap-16 items-center justify-center md:justify-start">
          {[
            { n: 80, suffix: '+', label: 'Field Installers' },
            { n: 60000, suffix: '', label: 'Sq Ft Warehouse' },
            { n: 20, suffix: '+', label: 'Years in Arizona' },
          ].map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="font-display font-black text-[32px] text-[#1A1A1A] leading-none">
                <CountUp to={s.n} />{s.suffix}
              </span>
              <span className="text-[13px] font-medium text-[#6E6E6E] uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

function ServicesOverview() {
  return (
    <Section className="py-24 md:py-32 bg-white">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Services" sub="From receiving and installation to daily services and asset management, OSI provides one partner across the full furniture lifecycle.">
            We do <Green>everything</Green> but sell furniture.
          </SectionHeading>
        </FadeIn>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.slug} delay={i*0.05}>
              <Link to={`/services/${s.slug}`} className="group block h-full rounded-2xl border border-[#EAEAEA] bg-white hover:border-[#1A1A1A] transition overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden bg-[#EEEEE8]">
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                    <ImgOrPlaceholder src={s.img} alt={s.title} caption={`SERVICE — ${s.title.toUpperCase()}`} />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display font-bold text-xl tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[#4A4A4A] leading-relaxed text-[15px]">{s.blurb}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#276a39] group-hover:gap-3 transition-all">
                    Learn More <Icon name="ArrowRight" className="w-4 h-4"/>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outlineDark" to="/services">Explore All Services</Button>
        </div>
      </Container>
    </Section>
  );
}

function AudienceSplit() {
  return (
    <Section className="py-24 md:py-32 bg-white">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Who We Work With" sub="OSI supports two core groups with the same quality of service.">
            Not just installation. <Green>Total project support.</Green>
          </SectionHeading>
        </FadeIn>
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Card 1: Dealers */}
          <FadeIn delay={0.05}>
            <div className="rounded-2xl overflow-hidden bg-[#F1F2F3]">
              <div className="aspect-[16/9]">
                <ImgOrPlaceholder
                  src="/photos/audience-dealer.jpg"
                  alt="Dealer coordination"
                  caption="DEALERS / PROJECT MANAGERS / A&D"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E6E6E] mb-3">For Dealers & Project Managers</div>
                <h3 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A]">Your Arizona execution partner</h3>
                <p className="mt-4 text-[#4A4A4A] leading-relaxed">OSI acts as the boots-on-the-ground team that helps dealers protect the client relationship and keep projects organized, on schedule, and professionally executed.</p>
                <div className="mt-6 flex flex-wrap gap-3 text-[14px] text-[#4A4A4A]">
                  {['Receiving & staging', 'Installation', 'Punch & follow-through', 'Ongoing MAC support'].map(t => (
                    <span key={t} className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2f7d44]" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
          {/* Card 2: Enterprise */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden bg-[#0F1E3D]">
              <div className="aspect-[16/9]">
                <ImgOrPlaceholder
                  src="/photos/audience-enterprise.jpg"
                  alt="Enterprise facility management"
                  caption="ENTERPRISE / FACILITY TEAMS"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4aa25a] mb-3">For Enterprise Clients & Facility Teams</div>
                <h3 className="font-display font-bold text-2xl tracking-tight text-white">The infrastructure you don't have to build</h3>
                <p className="mt-4 text-white/70 leading-relaxed">OSI supports the furniture and facility work that internal teams often don't have the time, labor, or infrastructure to manage well — from large installs to daily ongoing service.</p>
                <div className="mt-6 flex flex-wrap gap-3 text-[14px] text-white/70">
                  {['Large-scale installs', 'Asset management', 'Decommissioning', 'Warehouse support'].map(t => (
                    <span key={t} className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2f7d44]" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

function WhyOSI() {
  const items = [
    { icon: 'Layers', title: 'Dock to done', body: 'Receiving, inspection, warehousing, staging, delivery, installation, punch, and follow-through.', img: '/photos/why-dock-to-done.jpg' },
    { icon: 'Building2', title: 'Real infrastructure', body: '80+ installers, 60,000 sq. ft. of warehouse capacity, trucks, field leadership, and project coordination.', img: '/photos/why-real-infrastructure.jpg' },
    { icon: 'ShieldCheck', title: 'Total project support', body: 'Installation, MAC work, decommissions, relocations, modular walls, asset management, storage, and redeployment.', img: '/photos/why-total-support.jpg' },
    { icon: 'Repeat', title: 'Dealer and facility team fluency', body: 'We help dealers protect the client relationship and help facility teams manage the work they do not have the time, labor, or infrastructure to absorb.', img: '/photos/why-dealer-fluency.jpg' },
  ];
  return (
    <Section className="py-24 md:py-32 bg-[#F1F2F3]">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionHeading eyebrow="Why OSI" sub="Because furniture projects are bigger than install day.">
              Why OSI <Green>Works Better</Green>
            </SectionHeading>
            <p className="mt-6 text-[#4A4A4A] leading-relaxed">
              Product arrives early, late, damaged, partial, mislabeled, or in phases. Sites change. Schedules move. Teams relocate. Punch items happen. Furniture needs to be received, stored, installed, moved, tracked, reused, or removed.
            </p>
            <p className="mt-4 font-semibold text-lg text-[#1A1A1A]">OSI is built for the whole job.</p>
          </FadeIn>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {items.map((it, i) => (
              <FadeIn key={it.title} delay={i*0.05}>
                <div className="group h-full bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                  <div className="aspect-[16/10] overflow-hidden bg-[#EEEEE8]">
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                      <ImgOrPlaceholder src={it.img} alt={it.title} caption={it.title.toUpperCase()} />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display font-bold text-xl tracking-tight">{it.title}</h3>
                    <p className="mt-3 text-[#4A4A4A] leading-relaxed text-[15px]">{it.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function BrandWall() {
  return (
    <Section dark className="py-24 md:py-32 overflow-hidden">
      <Container>
        <FadeIn>
          <SectionHeading dark eyebrow="Experience" sub="For more than 20 years, OSI has worked across leading commercial furniture manufacturers, systems, seating lines, and modular environments." maxW="max-w-3xl">
            Experience Across the <Green>Brands</Green> Our Clients Use
          </SectionHeading>
        </FadeIn>
      </Container>

      <div className="mt-16 space-y-6">
        <div className="marquee overflow-hidden">
          <div className="marquee-track flex items-center gap-16 w-max">
            {[...MANUFACTURERS, ...MANUFACTURERS].map((m, i) => (
              <span key={i} className="font-display font-bold text-2xl md:text-[28px] text-white/70 hover:text-white transition whitespace-nowrap">{m}</span>
            ))}
          </div>
        </div>
        <div className="marquee overflow-hidden">
          <div className="marquee-track reverse flex items-center gap-16 w-max">
            {[...MANUFACTURERS.slice().reverse(), ...MANUFACTURERS.slice().reverse()].map((m, i) => (
              <span key={i} className="font-display font-bold text-2xl md:text-[28px] text-white/50 hover:text-white transition whitespace-nowrap">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function FeaturedProjects() {
  return (
    <Section className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeading eyebrow="Work" sub="Real projects that show the coordination, speed, and execution behind OSI." maxW="max-w-xl">
              A Look at the <Green>Work.</Green>
            </SectionHeading>
            <Button variant="ghost" to="/projects" className="hidden md:inline-flex">View All Projects</Button>
          </div>
        </FadeIn>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.slice(0,3).map((p, i) => (
            <FadeIn key={p.id} delay={i*0.08}>
              <Link to="/projects" className="group block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#EEEEE8] relative">
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                    <ImgOrPlaceholder src={p.img} alt={p.title} caption={`PROJECT — ${p.title.toUpperCase()}`} />
                  </div>
                </div>
                <div className="mt-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E8F4DC] text-[#276a39] text-xs font-semibold tracking-wider uppercase">{p.tag}</span>
                  <h3 className="mt-4 font-display font-bold text-xl tracking-tight group-hover:text-[#2f7d44] transition">{p.title}</h3>
                  <p className="mt-2 text-[#4A4A4A] text-[15px]">{p.result}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 md:hidden"><Button variant="outlineDark" to="/projects">View All Projects</Button></div>
      </Container>
    </Section>
  );
}

function TrustedBy() {
  const allLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <Section dark className="py-20">
      <Container>
        <FadeIn>
          <div className="text-center">
            <Eyebrow dark className="justify-center">Proof</Eyebrow>
            <h3 className="mt-4 font-display font-black tracking-tight leading-[1.05] text-4xl md:text-5xl lg:text-[56px] text-white">Dependable Work for <Green>Recognized Organizations</Green></h3>
            <p className="mt-4 max-w-3xl mx-auto text-white/60 text-[15px] leading-relaxed">
              Clients use OSI when the work needs to be organized, professional, and done right. OSI has supported project-related work for recognized employers, brands, institutions, and public-facing organizations across Arizona including:
            </p>
          </div>
          <div className="mt-10 marquee overflow-hidden">
            <div className="marquee-track flex items-center gap-14 w-max">
              {allLogos.map((l, i) => (
                <span key={i} className="inline-flex items-center gap-14 whitespace-nowrap">
                  <span className="font-display font-bold text-xl md:text-2xl text-white/50 hover:text-[#2f7d44] transition-colors duration-300 whitespace-nowrap">{l}</span>
                  {i < allLogos.length - 1 && (
                    <span className="text-white/20 font-light select-none">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-400">Company names are shown to reflect project-related experience. No endorsement is implied.</p>
        </FadeIn>
      </Container>
    </Section>
  );
}

function GoogleReviews() {
  return (
    <Section className="py-24 md:py-32 bg-white">
      <Container>
        <FadeIn>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeading eyebrow="Reviews" maxW="max-w-xl">
              What Clients <Green>Notice</Green>
            </SectionHeading>
            <div className="flex items-center gap-3 p-3 rounded-xl border border-[#EAEAEA] bg-white">
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23 12.25c0-.7-.06-1.37-.17-2.02H12v3.82h6.2c-.27 1.44-1.09 2.66-2.32 3.48v2.89h3.75c2.2-2.02 3.47-5 3.47-8.17z"/><path fill="#34A853" d="M12 23c3.13 0 5.76-1.04 7.68-2.82l-3.75-2.9c-1.04.7-2.37 1.12-3.93 1.12-3.02 0-5.58-2.04-6.5-4.78H1.62v3c1.91 3.79 5.83 6.38 10.38 6.38z"/><path fill="#FBBC05" d="M5.5 13.62a6.9 6.9 0 0 1 0-4.24V6.38H1.62a11 11 0 0 0 0 10.24l3.88-3z"/><path fill="#EA4335" d="M12 5.38c1.7 0 3.23.59 4.44 1.74l3.32-3.32C17.75 1.94 15.12 1 12 1 7.45 1 3.53 3.59 1.62 7.38l3.88 3c.92-2.74 3.48-4.78 6.5-4.78z"/></svg>
              <div>
                <div className="text-[13px] font-semibold">Google</div>
                <div className="flex items-center gap-1">
                  {[0,1,2,3,4].map(i => <Icon key={i} name="Star" className="w-3.5 h-3.5 text-[#F5B400] fill-[#F5B400]"/>)}
                  <span className="text-[12px] text-[#4A4A4A] ml-1">{REVIEW_AGGREGATE.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 flex gap-5 overflow-x-auto no-scrollbar -mx-6 px-6 pb-4">
          {REVIEWS.map(r => (
            <div key={r.name} className="shrink-0 w-[340px] rounded-2xl bg-white border border-[#EAEAEA] p-6 flex flex-col">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-sm font-bold">{r.initials}</div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="flex">{[0,1,2,3,4].map(i => <Icon key={i} name="Star" className="w-3 h-3 text-[#F5B400] fill-[#F5B400]"/>)}</div>
                </div>
              </div>
              <p className="mt-4 text-[14px] text-[#4A4A4A] leading-relaxed line-clamp-4 flex-grow">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <StatsBar />
      <ServicesOverview />
      <AudienceSplit />
      <WhyOSI />
      <BrandWall />
      <FeaturedProjects />
      <TrustedBy />
      <GoogleReviews />
      <FinalCTA />
    </>
  );
}
