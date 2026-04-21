import { FadeIn } from '../components/Motion';
import { Section, Container, Eyebrow, Button, SectionHeading, Green, ImgOrPlaceholder } from '../components/Primitives';
import { Link } from '../components/Router';
import Icon from '../components/Icon';
import { useQuote } from '../components/QuoteModal';
import FinalCTA from '../components/FinalCTA';
import { INDUSTRIES, INDUSTRY_PAGES } from '../data/tokens';
import NotFoundPage from './NotFoundPage';

export function IndustriesLandingPage() {
  const quote = useQuote();
  return (
    <>
      <Section className="pt-20 pb-20 md:pt-28 md:pb-28 bg-[#F9F9F5]">
        <Container>
          <FadeIn>
            <Eyebrow>Industries</Eyebrow>
            <h1 className="mt-5 font-display font-black tracking-tight leading-[1.02] text-5xl md:text-6xl lg:text-7xl max-w-5xl">
              Furniture Services for <Green>More Than Just the Office</Green>
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-[#4A4A4A] leading-relaxed">OSI supports commercial furniture projects across a wide range of environments, from corporate offices and hospitals to universities, hospitality spaces, and government facilities.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" onClick={() => quote.open()}>Request a Quote</Button>
              <Button variant="outlineDark" size="lg" onClick={() => quote.open()} iconRight={null}>Talk to OSI</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-24 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeading align="center" maxW="max-w-3xl">
              Built for the <Green>demands of different environments</Green>
            </SectionHeading>
            <p className="mt-8 max-w-3xl mx-auto text-center text-lg text-[#4A4A4A] leading-relaxed">
              Every industry has its own pace, constraints, and expectations. A corporate office rollout is different from a hospital refresh. A university renovation is different from a government move. OSI brings the labor, warehouse support, and project coordination needed to execute furniture work in environments where professionalism, timing, and follow-through matter.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-20 bg-[#F4F4F4]">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="Environments">Industries <Green>We Serve</Green></SectionHeading>
          </FadeIn>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((it,i) => (
              <FadeIn key={it.slug} delay={i*0.05}>
                <Link to={`/industries/${it.slug}`} className="group block bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                      <ImgOrPlaceholder src={it.img} alt={it.title} caption={`INDUSTRY — ${it.title.toUpperCase()}`} />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display font-bold text-xl tracking-tight">{it.title}</h3>
                    <p className="mt-3 text-[15px] text-[#4A4A4A] leading-relaxed">{it.blurb}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#5AD400] group-hover:gap-3 transition-all">Learn More <Icon name="ArrowRight" className="w-4 h-4"/></div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-24 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-5">
              <SectionHeading eyebrow="Why OSI" sub="Clients across industries rely on OSI for the same core reasons:">
                One partner across <Green>different project environments</Green>
              </SectionHeading>
            </FadeIn>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                ['Commercial furniture expertise','A team built for real furniture projects, not generic moving labor.'],
                ['Operational support','Receiving, warehousing, staging, installation, MAC work, relocation, and long-term asset support.'],
                ['Local execution','Phoenix-based crews and infrastructure that help projects move with fewer handoff issues.'],
                ['Professional follow-through','Organized, reliable support before, during, and after install day.'],
              ].map(([t,b],i) => (
                <FadeIn key={t} delay={i*0.05}>
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#E4FFC9] flex items-center justify-center text-[#5AD400]"><Icon name="Check" className="w-4 h-4" strokeWidth={3}/></div>
                    <h4 className="mt-4 font-display font-bold text-lg">{t}</h4>
                    <p className="mt-2 text-[#4A4A4A] leading-relaxed">{b}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA
        title={<>Different environments. Same need for a <Green>dependable partner</Green>.</>}
        subtitle="Whether the project is in an office, hospital, school, hotel, or government facility, OSI helps clients execute the work with less friction and one accountable local team."
      />
    </>
  );
}

export function IndustrySubpage({ slug }) {
  const d = INDUSTRY_PAGES[slug];
  const quote = useQuote();
  if (!d) return <NotFoundPage />;
  return (
    <>
      <Section className="bg-[#F9F9F5] pt-16 pb-16 md:pt-20 md:pb-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <FadeIn className="lg:col-span-7">
              <Eyebrow>Industries / {d.title[1].split(' ').pop()}</Eyebrow>
              <h1 className="mt-5 font-display font-black tracking-tight leading-[1.02] text-5xl md:text-6xl">
                {d.title[0]} <Green>{d.title[1]}</Green>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-[#4A4A4A] leading-relaxed">{d.sub}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="primary" size="lg" onClick={() => quote.open()}>Request a Quote</Button>
                <Button variant="outlineDark" size="lg" onClick={() => quote.open()} iconRight={null}>Talk to OSI</Button>
              </div>
            </FadeIn>
            <FadeIn className="lg:col-span-5" delay={0.1}>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <ImgOrPlaceholder src={d.img} alt={d.title.join(' ')} caption="INDUSTRY HERO" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="py-24 md:py-28">
        <Container>
          <FadeIn>
            <p className="max-w-3xl mx-auto text-center text-lg text-[#4A4A4A] leading-relaxed">{d.intro}</p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-20 bg-[#F4F4F4]">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-5">
              <SectionHeading eyebrow="What We Support" sub={d.supportSub}>
                Scope of <Green>work</Green>
              </SectionHeading>
            </FadeIn>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {d.supportList.map((s,i) => (
                <FadeIn key={s} delay={i*0.04}>
                  <div className="bg-white rounded-xl p-5 flex items-start gap-3">
                    <Icon name="Check" className="w-4 h-4 text-[#5AD400] mt-1 shrink-0" strokeWidth={3}/>
                    <span className="text-[15px]">{s}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <Eyebrow>Why OSI</Eyebrow>
              <p className="mt-6 text-xl leading-relaxed text-[#1A1A1A]">{d.why}</p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <FinalCTA title={<>{d.closing[0]} <Green>{d.closing[1]}</Green></>} subtitle={d.closingBody} />
    </>
  );
}
