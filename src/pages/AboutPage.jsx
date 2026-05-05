import { FadeIn, CountUp } from '../components/Motion';
import { Section, Container, Eyebrow, Button, SectionHeading, Green, ImgOrPlaceholder } from '../components/Primitives';
import Icon from '../components/Icon';
import { useQuote } from '../components/QuoteModal';
import FinalCTA from '../components/FinalCTA';

export default function AboutPage() {
  const quote = useQuote();
  return (
    <>
      <Section className="bg-[#F9F9F5] pt-20 pb-20 md:pt-28 md:pb-28">
        <Container>
          <FadeIn>
            <Eyebrow>About OSI</Eyebrow>
            <h1 className="mt-5 font-display font-black tracking-tight leading-[1.02] text-5xl md:text-6xl lg:text-7xl max-w-6xl">
              Built to Support Commercial Furniture Projects <Green>the Right Way</Green>
            </h1>
            <p className="mt-7 max-w-3xl text-lg text-[#4A4A4A] leading-relaxed">OSI is a Phoenix-based commercial furniture services company providing installation, warehousing, receiving, MAC work, decommissioning, modular walls, and long-term asset management for dealers, enterprise clients, and facility teams.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" onClick={() => quote.open()}>Talk to OSI</Button>
              <Button variant="outlineDark" size="lg" onClick={() => quote.open()} iconRight={null}>Request a Quote</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="pb-0 -mt-8">
        <Container>
          <FadeIn>
            <div className="aspect-[16/6] rounded-2xl overflow-hidden">
              <ImgOrPlaceholder src="/photos/osi-building.jpg" alt="OSI Phoenix warehouse and office building" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-24 md:py-32">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-5">
              <SectionHeading eyebrow="Who We Are">More than an <Green>installation company</Green></SectionHeading>
            </FadeIn>
            <FadeIn className="lg:col-span-7 space-y-5 text-lg text-[#4A4A4A] leading-relaxed" delay={0.1}>
              <p>OSI was built around a simple idea: furniture projects go better when the client has one dependable local partner who can support the work before, during, and after install day.</p>
              <p>That means more than just installation labor. It means receiving, warehousing, staging, delivery, punch, reconfigurations, decommissions, modular walls, and ongoing support that keeps projects moving long after the initial install is complete.</p>
              <p>Today, OSI supports dealers, project managers, facility teams, and enterprise clients across the Phoenix market with the people, warehouse capacity, and operational infrastructure needed to handle real commercial furniture work.</p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section dark className="py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40"/>
        <Container className="relative">
          <div className="grid lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-5">
              <SectionHeading dark eyebrow="What Makes OSI Different">The difference is the <Green>infrastructure</Green></SectionHeading>
            </FadeIn>
            <FadeIn className="lg:col-span-7 space-y-5 text-lg text-white/75 leading-relaxed" delay={0.1}>
              <p>A lot of companies can show up and install furniture. Fewer can support the full project lifecycle in a way that reduces friction for the client.</p>
              <p>OSI combines experienced field crews with warehousing, receiving, staging, and ongoing service support so clients are not left coordinating multiple vendors or filling in operational gaps themselves.</p>
              <p>That is what allows us to support work that is larger, more complex, more ongoing, or simply too important to leave to a less organized team.</p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="py-24 md:py-32">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="Operations" sub="The difference is not just the install crews. It's the operation behind them — receiving, staging, warehouse support, field execution, and ongoing service all working together to keep projects moving.">
              The Infrastructure <Green>Behind the Work</Green>
            </SectionHeading>
          </FadeIn>
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {[
              { t: 'Receiving & Inspection', c: 'Product intake, checking, and issue identification.', img: '/photos/warehouse-steelcase-stock.png' },
              { t: 'Project Staging', c: 'Organized furniture staged for upcoming jobs.', img: '/photos/warehouse-chairs-staged.png' },
              { t: 'Secure Warehousing', c: 'Warehouse scale, racking, and tagged inventory.', img: '/photos/warehouse-racking.png' },
              { t: 'On-Site Installation', c: 'Installers actively working in commercial environments.', img: '/photos/install-in-progress.jpg' },
            ].map((it,i) => (
              <FadeIn key={it.t} delay={i*0.08}>
                <div className="aspect-[5/3] rounded-2xl overflow-hidden bg-[#EEEEE8]">
                  <ImgOrPlaceholder src={it.img} alt={it.t} />
                </div>
                <div className="mt-4">
                  <h4 className="font-display font-bold text-lg">{it.t}</h4>
                  <p className="mt-1 text-[#4A4A4A]">{it.c}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-24 bg-[#F4F4F4]">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="Who We Serve" sub="OSI primarily supports two core client groups.">
              Built for <Green>dealers and enterprise clients</Green>
            </SectionHeading>
          </FadeIn>
          <div className="mt-12 space-y-6 max-w-4xl">
            {[
              'Dealers, project managers, and A&D teams rely on OSI as their Phoenix execution partner — the team on the ground that helps protect the client relationship and keep projects organized.',
              'Enterprise clients and facility teams rely on OSI for the furniture and workplace support work that internal teams often do not have the time, labor, or infrastructure to manage well on their own.',
              'Across both groups, the value is the same: one accountable local partner with the ability to execute and follow through.',
            ].map((t,i) => (
              <FadeIn key={i} delay={i*0.05}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#6DFF00] flex items-center justify-center shrink-0 mt-0.5"><Icon name="Check" className="w-4 h-4" strokeWidth={3}/></div>
                  <p className="text-lg text-[#1A1A1A] leading-relaxed">{t}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-5">
              <SectionHeading eyebrow="Our Approach">Practical, organized, and built for <Green>follow-through</Green></SectionHeading>
            </FadeIn>
            <FadeIn className="lg:col-span-7 space-y-5 text-lg text-[#4A4A4A] leading-relaxed" delay={0.1}>
              <p>OSI is built around the realities of commercial furniture work.</p>
              <p>Projects change. Shipments arrive in phases. Schedules shift. Punch items happen. Teams move. Clients need support after the install, not just on the install.</p>
              <p>Our approach is to bring structure to that process with clear coordination, dependable execution, and the operational support needed to keep the work moving. We focus on being responsive, professional, and easy to work with — while still having the depth to handle demanding projects.</p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="py-24 bg-[#F9F9F5]">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="Loyalty" sub="Many clients first come to OSI for a single need. They stay because they find a local partner that can support much more than one install day.">
              Why Clients <Green>Stay with OSI</Green>
            </SectionHeading>
          </FadeIn>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ['Less friction','One partner for receiving, warehousing, installation, MAC work, relocation, and asset support.'],
              ['Better follow-through','Support that continues after install day, when real-world changes start happening.'],
              ['More trust','Execution that helps dealers protect client relationships and helps facility teams stay focused on bigger priorities.'],
              ['Long-term value','A local partner with the infrastructure to support changing needs over time.'],
            ].map(([t,b],i) => (
              <FadeIn key={t} delay={i*0.05}>
                <div className="bg-white rounded-2xl p-7 h-full">
                  <h4 className="font-display font-bold text-lg">{t}</h4>
                  <p className="mt-2 text-[#4A4A4A]">{b}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark className="py-24 md:py-32">
        <Container>
          <FadeIn>
            <SectionHeading dark align="center" eyebrow="Scale">Local scale that supports <Green>real project demands</Green></SectionHeading>
          </FadeIn>
          <div className="mt-16 grid md:grid-cols-3 gap-10 text-center">
            {[
              { n:80, suf:'+', label:'Installers' },
              { n:60000, suf:'', label:'Sq. Ft. Warehouse' },
              { n:20, suf:'+', label:'Years in Phoenix' },
            ].map((s,i) => (
              <FadeIn key={s.label} delay={i*0.08}>
                <div className="font-display font-black text-7xl md:text-8xl text-[#6DFF00] tracking-tight leading-none"><CountUp to={s.n}/>{s.suf}</div>
                <div className="mt-4 text-white/70 text-lg">{s.label}</div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-16 max-w-3xl mx-auto space-y-3 text-center text-white/70">
            <p>Support across installation, warehousing, MAC, relocation, modular walls, and asset management.</p>
            <p>Experience across leading commercial furniture manufacturers and project environments.</p>
          </FadeIn>
        </Container>
      </Section>

      <FinalCTA title={<>A stronger partner for <Green>the work around the furniture</Green></>} subtitle="OSI helps clients execute the work that surrounds commercial furniture projects — the coordination, receiving, installation, reconfiguration, storage, and follow-through that make the difference between a job that feels smooth and one that does not. Whether the need is a single project or an ongoing local partner, OSI is built to help." />
    </>
  );
}
