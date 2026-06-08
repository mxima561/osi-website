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
      <Section className="pt-20 pb-20 md:pt-28 md:pb-28 bg-[#F1F2F3]">
        <Container>
          <FadeIn>
            <Eyebrow>Industries</Eyebrow>
            <h1 className="mt-5 font-display font-black tracking-tight leading-[1.02] text-5xl md:text-6xl lg:text-7xl max-w-5xl">
              Furniture Services for <Green>More Than Just the Office</Green>
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-[#4A4A4A] leading-relaxed">OSI supports commercial furniture projects across a wide range of environments, from corporate offices and hospitals to universities, hospitality spaces, and government facilities.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" onClick={() => quote.open()}>Request a Quote</Button>
              <a href="tel:+16022539392" className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold rounded-full border border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-200">Call (602) 253-9392</a>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-24 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="Our Approach" align="center" maxW="max-w-3xl">
              Built for the <Green>demands of different environments</Green>
            </SectionHeading>
            <p className="mt-8 max-w-3xl mx-auto text-center text-lg text-[#4A4A4A] leading-relaxed">
              Every industry has its own pace, constraints, and expectations. A corporate office rollout is different from a hospital refresh. A university renovation is different from a government move. OSI brings the labor, warehouse support, and project coordination needed to execute furniture work in environments where professionalism, timing, and follow-through matter.
            </p>
            <div className="mt-14 max-w-5xl mx-auto aspect-[16/8] rounded-2xl overflow-hidden bg-[#F1F2F3]">
              <ImgOrPlaceholder src="/photos/industries-our-approach.jpg" alt="OSI furniture services across industries" caption="OUR APPROACH" />
            </div>
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
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4aa25a] group-hover:gap-3 transition-all">Learn More <Icon name="ArrowRight" className="w-4 h-4"/></div>
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
              <SectionHeading eyebrow="Why OSI" sub="Clients choose OSI because every environment has different demands — and the work still has to be organized, professional, and done right.">
                One partner across <Green>different project environments</Green>
              </SectionHeading>
            </FadeIn>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                ['Built for every environment','Offices, hospitals, schools, resorts, and public-sector environments all operate differently. OSI understands how to adapt the work around schedules, access, occupants, and site conditions.','/photos/industries-why-every-env.jpg'],
                ['Beyond standard office installs','We support more than standard office installs — including classrooms, clinical spaces, guest-facing hospitality areas, staff spaces, common areas, specialty facilities, and multi-site programs.','/photos/industries-why-beyond.jpg'],
                ['Infrastructure to control the process','Receiving, warehousing, staging, delivery, installation, relocation, MAC work, decommissioning, and asset support help keep projects organized from start to finish.','/photos/industries-why-infrastructure.jpg'],
                ['Dependable execution in active spaces','Whether the project is happening around employees, students, patients, guests, or public-sector operations, OSI helps minimize disruption and keep the work moving.','/photos/industries-why-dependable.jpg'],
              ].map(([t,b,img],i) => (
                <FadeIn key={t} delay={i*0.05}>
                  <div className="group h-full bg-white rounded-2xl border border-[#EAEAEA] overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden bg-[#EEEEE8]">
                      <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                        <ImgOrPlaceholder src={img} alt={t} caption={t.toUpperCase()} />
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-display font-bold text-lg">{t}</h4>
                      <p className="mt-2 text-[#4A4A4A] leading-relaxed">{b}</p>
                    </div>
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
      <Section className="bg-[#F1F2F3] pt-16 pb-16 md:pt-20 md:pb-20">
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
                <a href="tel:+16022539392" className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold rounded-full border border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-200">Call (602) 253-9392</a>
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
            <div className="max-w-3xl mx-auto">
              {d.introEyebrow && (
                <div className="text-center mb-8">
                  <Eyebrow className="justify-center">{d.introEyebrow}</Eyebrow>
                  <h2 className="mt-4 font-display font-black text-3xl md:text-4xl tracking-tight text-[#1A1A1A]">{d.introHeader}</h2>
                </div>
              )}
              <p className="text-center text-lg text-[#4A4A4A] leading-relaxed">{d.intro}</p>
            </div>
            {d.introImg && (
              <div className="mt-14 max-w-4xl mx-auto aspect-[16/8] rounded-2xl overflow-hidden bg-[#F1F2F3]">
                <ImgOrPlaceholder src={d.introImg} alt={d.introHeader} caption="ENVIRONMENT OVERVIEW" />
              </div>
            )}
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
                    <Icon name="Check" className="w-4 h-4 text-[#4aa25a] mt-1 shrink-0" strokeWidth={3}/>
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
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-6">
              <div className="max-w-xl">
                <Eyebrow>Why OSI</Eyebrow>
                {d.whyHeader && <h3 className="mt-4 font-display font-bold text-2xl md:text-3xl tracking-tight text-[#1A1A1A]">{d.whyHeader}</h3>}
                <p className="mt-5 text-lg leading-relaxed text-[#4A4A4A]">{d.why}</p>
              </div>
            </FadeIn>
            {d.whyImg && (
              <FadeIn className="lg:col-span-6" delay={0.1}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#EEEEE8]">
                  <ImgOrPlaceholder src={d.whyImg} alt={d.whyHeader || 'Why OSI'} caption="WHY OSI" />
                </div>
              </FadeIn>
            )}
          </div>
        </Container>
      </Section>

      <FinalCTA title={<>{d.closing[0]} <Green>{d.closing[1]}</Green></>} subtitle={d.closingBody} />
    </>
  );
}
