import { motion, useScroll, useTransform } from '../components/Motion';
import { FadeIn, Stagger, StaggerItem, CountUp, RotatingWord } from '../components/Motion';
import { Section, Container, Eyebrow, Button, StatPill, SectionHeading, Green, ImgOrPlaceholder } from '../components/Primitives';
import { Link } from '../components/Router';
import Icon from '../components/Icon';
import { useQuote } from '../components/QuoteModal';
import FinalCTA from '../components/FinalCTA';
import { SERVICES, MANUFACTURERS, PROJECTS, CLIENT_LOGOS, REVIEWS } from '../data/tokens';

function HeroHome() {
  const quote = useQuote();
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, -60]);
  return (
    <Section className="relative overflow-hidden bg-[#F9F9F5]">
      <Container className="pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Stagger>
              <StaggerItem>
                <Eyebrow>Relax. You Found Us.</Eyebrow>
              </StaggerItem>
              <StaggerItem className="mt-6">
                <h1 className="font-display font-black tracking-tight leading-[0.98] text-[44px] sm:text-[56px] md:text-[72px] lg:text-[84px] text-[#1A1A1A]">
                  <span className="block">One partner for</span>
                  <span className="block min-h-[1em] leading-[0.98]">
                    <RotatingWord words={['Installation','Warehousing','Asset Management','MAC & Day 2','Modular Walls']} />
                  </span>
                  <span className="block">and everything around it.</span>
                </h1>
              </StaggerItem>
              <StaggerItem className="mt-7">
                <p className="max-w-xl text-[17px] md:text-lg text-[#4A4A4A] leading-relaxed">
                  From receiving and warehousing to installation, decommissioning, modular walls, and long-term asset management, OSI helps dealers and enterprise clients execute furniture projects with less friction and one accountable local partner.
                </p>
              </StaggerItem>
              <StaggerItem className="mt-8">
                <div className="flex flex-wrap gap-3">
                  <StatPill n={80} suffix="+" label="Installers"/>
                  <StatPill n={60000} label="Sq ft warehouse"/>
                  <StatPill n={20} suffix="+" label="Years in Phoenix"/>
                </div>
              </StaggerItem>
              <StaggerItem className="mt-10">
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="lg" onClick={() => quote.open()}>Request a Quote</Button>
                  <Button variant="outlineDark" size="lg" onClick={() => quote.open()} iconRight={null}>Talk to OSI</Button>
                </div>
              </StaggerItem>
            </Stagger>
          </div>

          <div className="lg:col-span-5">
            <motion.div style={{ y: imgY }} className="relative aspect-[4/5] lg:aspect-auto lg:h-[620px] rounded-2xl overflow-hidden bg-[#EEEEE8]">
              <ImgOrPlaceholder src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80" alt="OSI-installed corporate office" caption="HERO — OSI-INSTALLED CORPORATE OFFICE" />
              <div className="absolute left-5 bottom-5 bg-white/95 backdrop-blur rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6DFF00] animate-pulse" />
                <span className="font-mono text-[11px] tracking-widest uppercase text-[#1A1A1A]">Phoenix, AZ</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function AudienceCard({ title, body, bullets, ctaLabel, ctaTo, variant }) {
  return (
    <div className="h-full flex flex-col">
      <h3 className="font-display font-black text-2xl md:text-[28px] tracking-tight leading-tight">{title}</h3>
      <p className="mt-4 text-[#4A4A4A] leading-relaxed">{body}</p>
      <ul className="mt-5 space-y-2.5 flex-grow">
        {bullets.map(b => (
          <li key={b} className="flex items-start gap-3 text-[15px] text-[#1A1A1A]">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6DFF00] shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7"><Button variant={variant} size="md" to={ctaTo}>{ctaLabel}</Button></div>
    </div>
  );
}

function AudienceSplit() {
  return (
    <Section className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Who We Serve" sub="OSI supports two core client groups: dealers who need a dependable Phoenix execution partner, and enterprise teams who need ongoing furniture and facility support.">
            Not Just Installation. <Green>Total Project Support.</Green>
          </SectionHeading>
        </FadeIn>

        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          <FadeIn className="lg:col-span-5">
            <div className="relative h-[460px] lg:h-full rounded-2xl overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)' }}>
              <ImgOrPlaceholder src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=1200&q=80" alt="OSI installer on site" caption="INSTALLER IN OSI HI-VIS VEST" />
            </div>
          </FadeIn>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <AudienceCard
                title="For Dealers, PMs & A&D Teams"
                body="OSI acts as your team on the ground in Phoenix. We receive, inspect, warehouse, deliver, and install on your behalf — helping protect the client relationship while keeping projects organized and on schedule."
                bullets={['Receiving, inspection, and issue reporting','Secure warehousing and staging','Delivery and professional installation','Punch, warranty, and Day 2 support','A local partner that helps you look good in front of your client']}
                ctaLabel="Become an OSI Partner"
                ctaTo="/contact?topic=dealer"
                variant="primary"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <AudienceCard
                title="For Enterprise & Facility Teams"
                body="From MAC work to large relocations and multi-floor installations, OSI supports the furniture and facility work that internal teams often do not have the time, labor, or infrastructure to manage well on their own."
                bullets={['Campus and multi-floor installations','MAC and recurring daily services','Decommissioning and relocation','Asset storage, tracking, and redeployment','Custom support programs by site or portfolio']}
                ctaLabel="Discuss Facility Needs"
                ctaTo="/contact?topic=enterprise"
                variant="outlineDark"
              />
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function WhyOSI() {
  const items = [
    { icon: 'Layers', title: 'Operational depth', body: 'Receiving, inspection, staging, warehousing, delivery, installation, and follow-through under one roof.' },
    { icon: 'MapPin', title: 'Local scale', body: 'The crews, warehouse capacity, and Phoenix market presence to support more complex work.' },
    { icon: 'ShieldCheck', title: 'Client protection', body: 'Execution that helps dealers look good and helps enterprise teams stay focused on higher-value priorities.' },
    { icon: 'Repeat', title: 'Long-term support', body: 'MAC work, decommissions, modular walls, and asset programs that continue long after the initial install.' },
  ];
  return (
    <Section className="py-24 md:py-32 bg-[#F4F4F4]">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionHeading eyebrow="Why OSI" sub="Because successful furniture projects take more than labor on install day.">
              Why Clients <Green>Choose OSI</Green>
            </SectionHeading>
          </FadeIn>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {items.map((it, i) => (
              <FadeIn key={it.title} delay={i*0.05}>
                <div className="h-full bg-white rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#E4FFC9] flex items-center justify-center text-[#5AD400]">
                    <Icon name={it.icon} className="w-5 h-5" strokeWidth={2}/>
                  </div>
                  <h3 className="font-display font-bold text-xl mt-5 tracking-tight">{it.title}</h3>
                  <p className="mt-3 text-[#4A4A4A] leading-relaxed text-[15px]">{it.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ServicesOverview() {
  return (
    <Section className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Services" sub="From receiving and installation to daily services and long-term asset management, OSI provides one partner across the full furniture lifecycle.">
            We do <Green>everything</Green> but sell furniture.
          </SectionHeading>
        </FadeIn>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.slug} delay={i*0.05}>
              <Link to={`/services/${s.slug}`} className="group block h-full rounded-2xl border border-[#EAEAEA] p-7 bg-white hover:border-[#1A1A1A] transition">
                <div className="w-12 h-12 rounded-xl bg-[#E4FFC9] flex items-center justify-center text-[#5AD400]">
                  <Icon name={s.icon} className="w-5 h-5"/>
                </div>
                <h3 className="font-display font-bold text-xl mt-6 tracking-tight">{s.title}</h3>
                <p className="mt-3 text-[#4A4A4A] leading-relaxed text-[15px]">{s.blurb}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5AD400] group-hover:gap-3 transition-all">
                  Learn More <Icon name="ArrowRight" className="w-4 h-4"/>
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

function BrandWall() {
  return (
    <Section dark className="py-24 md:py-32 overflow-hidden">
      <Container>
        <FadeIn>
          <SectionHeading dark eyebrow="Experience" sub="For more than 20 years, OSI has worked across leading commercial furniture manufacturers, systems, seating lines, and modular environments." maxW="max-w-3xl">
            In 20+ years we've seen a lot. Our team is <Green>experienced</Green> with:
          </SectionHeading>
        </FadeIn>
      </Container>

      <div className="mt-16 space-y-6">
        <div className="marquee overflow-hidden">
          <div className="marquee-track flex items-center gap-16 w-max">
            {[...MANUFACTURERS, ...MANUFACTURERS].map((m, i) => (
              <span key={i} className="font-display font-bold text-2xl md:text-[28px] text-white/45 hover:text-white transition whitespace-nowrap">{m}</span>
            ))}
          </div>
        </div>
        <div className="marquee overflow-hidden">
          <div className="marquee-track reverse flex items-center gap-16 w-max">
            {[...MANUFACTURERS.slice().reverse(), ...MANUFACTURERS.slice().reverse()].map((m, i) => (
              <span key={i} className="font-display font-bold text-2xl md:text-[28px] text-white/30 hover:text-white transition whitespace-nowrap">{m}</span>
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
            <SectionHeading eyebrow="Work" sub="See how we've delivered for enterprise clients across Arizona." maxW="max-w-xl">
              <Green>Featured</Green> Projects
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
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E4FFC9] text-[#2D7A00] text-xs font-semibold tracking-wider uppercase">{p.tag}</span>
                  <h3 className="mt-4 font-display font-bold text-xl tracking-tight group-hover:text-[#5AD400] transition"><span className="text-[#6DFF00]">{p.title.split(' ')[0]}</span>{' ' + p.title.split(' ').slice(1).join(' ')}</h3>
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
  return (
    <Section dark className="py-20">
      <Container>
        <FadeIn>
          <div className="text-center">
            <Eyebrow dark className="justify-center">Trust</Eyebrow>
            <h3 className="mt-4 font-display font-bold text-2xl md:text-3xl tracking-tight"><Green>Trusted by</Green> Dealers, Facility Teams, and Recognized Brands</h3>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {CLIENT_LOGOS.map(l => (
              <span key={l} className="font-display font-semibold text-lg text-white/50 hover:text-white transition">{l}</span>
            ))}
          </div>
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
              What Clients Say
            </SectionHeading>
            <div className="flex items-center gap-3 p-3 rounded-xl border border-[#EAEAEA] bg-white">
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23 12.25c0-.7-.06-1.37-.17-2.02H12v3.82h6.2c-.27 1.44-1.09 2.66-2.32 3.48v2.89h3.75c2.2-2.02 3.47-5 3.47-8.17z"/><path fill="#34A853" d="M12 23c3.13 0 5.76-1.04 7.68-2.82l-3.75-2.9c-1.04.7-2.37 1.12-3.93 1.12-3.02 0-5.58-2.04-6.5-4.78H1.62v3c1.91 3.79 5.83 6.38 10.38 6.38z"/><path fill="#FBBC05" d="M5.5 13.62a6.9 6.9 0 0 1 0-4.24V6.38H1.62a11 11 0 0 0 0 10.24l3.88-3z"/><path fill="#EA4335" d="M12 5.38c1.7 0 3.23.59 4.44 1.74l3.32-3.32C17.75 1.94 15.12 1 12 1 7.45 1 3.53 3.59 1.62 7.38l3.88 3c.92-2.74 3.48-4.78 6.5-4.78z"/></svg>
              <div>
                <div className="text-[13px] font-semibold">Google</div>
                <div className="flex items-center gap-1">
                  {[0,1,2,3,4].map(i => <Icon key={i} name="Star" className="w-3.5 h-3.5 text-[#F5B400] fill-[#F5B400]"/>)}
                  <span className="text-[12px] text-[#4A4A4A] ml-1">5.0 &middot; 17 reviews</span>
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
              <button className="mt-4 text-[13px] font-semibold text-[#5AD400] self-start">Read more &rarr;</button>
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
      <AudienceSplit />
      <WhyOSI />
      <ServicesOverview />
      <BrandWall />
      <FeaturedProjects />
      <TrustedBy />
      <GoogleReviews />
      <FinalCTA />
    </>
  );
}
