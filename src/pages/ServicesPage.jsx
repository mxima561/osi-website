import { FadeIn, CountUp } from '../components/Motion';
import { Section, Container, Eyebrow, Button, SectionHeading, Green, ImgOrPlaceholder } from '../components/Primitives';
import { Link } from '../components/Router';
import Icon from '../components/Icon';
import { useQuote } from '../components/QuoteModal';
import FinalCTA from '../components/FinalCTA';
import { SERVICES, SERVICE_PAGES } from '../data/tokens';
import NotFoundPage from './NotFoundPage';

export function ServicesLandingPage() {
  const quote = useQuote();
  return (
    <>
      <Section dark className="pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <Container className="relative">
          <FadeIn>
            <Eyebrow dark>Services</Eyebrow>
            <h1 className="mt-5 font-display font-black tracking-tight leading-[1.02] text-5xl md:text-6xl lg:text-7xl max-w-5xl">
              Services Built Around How Furniture Projects <Green>Actually Work</Green>
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-white/70 leading-relaxed">Installation is only part of the job. OSI supports the work before, during, and after install day with the labor, warehouse capacity, and ongoing service infrastructure needed to keep projects moving.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" onClick={() => quote.open()}>Request a Quote</Button>
              <a href="tel:+16022539392" className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold rounded-full border border-white/30 text-white hover:border-white hover:bg-white hover:text-black transition-colors duration-200">Call (602) 253-9392</a>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-24 md:py-32">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="What We Offer" align="center" maxW="max-w-3xl">
              More than installers. A true <Green>service platform</Green>.
            </SectionHeading>
            <div className="mt-8 max-w-3xl mx-auto text-center text-lg text-[#4A4A4A] leading-relaxed space-y-5">
              <p>OSI provides commercial furniture support across the full project lifecycle — from receiving and warehousing to installation, MAC work, decommissioning, modular walls, and asset management.</p>
              <p>Some clients come to us for a single installation. Others rely on us as an ongoing Arizona partner. Either way, the value is the same: one accountable team that understands how to execute commercial furniture work with less friction and better follow-through.</p>
            </div>
            <div className="mt-14 max-w-5xl mx-auto aspect-[16/8] rounded-2xl overflow-hidden bg-[#F1F2F3]">
              <ImgOrPlaceholder src="/photos/services-what-we-offer.jpg" alt="OSI commercial furniture service platform" caption="WHAT WE OFFER" />
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-24 md:py-32 bg-[#F1F2F3]">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="Core Services" sub="Whether you are a dealer coordinating a client project or a facility team managing ongoing needs, OSI provides the local support needed to execute the work well.">
              Our <Green>Core Services</Green>
            </SectionHeading>
          </FadeIn>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s,i) => (
              <FadeIn key={s.slug} delay={i*0.05}>
                <Link to={`/services/${s.slug}`} className="group block h-full rounded-2xl border border-[#EAEAEA] p-8 bg-white hover:border-[#1A1A1A] transition">
                  <div className="w-14 h-14 rounded-xl bg-[#E8F4DC] flex items-center justify-center text-[#4aa25a]">
                    <Icon name={s.icon} className="w-6 h-6"/>
                  </div>
                  <h3 className="font-display font-bold text-[22px] mt-6 tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[#4A4A4A] leading-relaxed">{s.blurb}</p>
                  <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#3d8f4e] group-hover:gap-3 transition-all">Learn More <Icon name="ArrowRight" className="w-4 h-4"/></div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-24 md:py-32">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-5">
              <SectionHeading eyebrow="Why OSI" sub="Clients choose OSI because successful projects take more than labor on install day.">
                One local partner across the full <Green>furniture lifecycle</Green>
              </SectionHeading>
            </FadeIn>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                ['Organized before install day', 'Receiving, inspection, warehousing, staging, and dispatch support keep projects controlled before product reaches the site.', '/photos/services-why-organized.jpg'],
                ['Built for complex work', 'Experienced crews, warehouse capacity, trucks, and field coordination help OSI support larger, phased, and schedule-sensitive projects.', '/photos/services-why-complex.jpg'],
                ['Support after the install', 'MAC work, reconfigurations, repairs, relocations, decommissions, modular walls, and asset management keep clients supported long term.', '/photos/services-why-support.jpg'],
                ['One accountable partner', 'Fewer vendors, fewer handoffs, and better follow-through across the full furniture lifecycle.', '/photos/services-why-accountable.jpg'],
              ].map(([t,b,img], i) => (
                <FadeIn key={t} delay={i*0.05}>
                  <div className="group h-full bg-white rounded-2xl border border-[#EAEAEA] overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden bg-[#EEEEE8]">
                      <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                        <ImgOrPlaceholder src={img} alt={t} caption={t.toUpperCase()} />
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-display font-bold text-lg">{t}</h4>
                      <p className="mt-1.5 text-[#4A4A4A] leading-relaxed">{b}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24 bg-[#F4F4F4]">
        <Container>
          <FadeIn>
            <SectionHeading align="center" maxW="max-w-2xl">Built for two core client groups</SectionHeading>
          </FadeIn>
          <div className="mt-14 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            <FadeIn delay={0.05}>
              <div className="h-full bg-white rounded-2xl overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden bg-[#EEEEE8]">
                  <ImgOrPlaceholder src="/photos/services-group-dealers.jpg" alt="Dealers, project managers, and A&D teams" caption="DEALERS / PMS / A&D" />
                </div>
                <div className="p-10">
                  <h3 className="font-display font-bold text-2xl">For Dealers, Project Managers & A&D Teams</h3>
                  <p className="mt-4 text-[#4A4A4A] leading-relaxed">OSI acts as your Arizona execution partner, helping protect the client relationship while keeping the project organized and on schedule.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="h-full bg-[#0F1E3D] text-white rounded-2xl overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden bg-[#0b1730]">
                  <ImgOrPlaceholder src="/photos/services-group-enterprise.jpg" alt="Enterprise clients and facility teams" caption="ENTERPRISE / FACILITY TEAMS" />
                </div>
                <div className="p-10">
                  <h3 className="font-display font-bold text-2xl">For Enterprise Clients & Facility Teams</h3>
                  <p className="mt-4 text-white/70 leading-relaxed">OSI supports the furniture and facility work that internal teams often do not have the time, labor, or infrastructure to manage well on their own.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <FinalCTA title={<>Need the right <Green>service partner</Green> in Arizona?</>} subtitle="Whether you need support for one project or a long-term local partner, OSI is ready to help." />
    </>
  );
}

export function ServiceSubpage({ slug }) {
  const resolvedSlug = slug === 'asset-management' ? 'asset-management-storage' : slug;
  const d = SERVICE_PAGES[resolvedSlug];
  const quote = useQuote();
  if (!d) return <NotFoundPage />;
  return (
    <>
      <Section dark={d.heroDark} className={`pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden ${!d.heroDark ? 'bg-[#F1F2F3]' : ''}`}>
        {d.heroDark && <div className="absolute inset-0 grid-bg opacity-40" />}
        <Container className="relative">
          <FadeIn>
            <Eyebrow dark={d.heroDark}>{d.eyebrow}</Eyebrow>
            <h1 className={`mt-5 font-display font-black tracking-tight leading-[1.02] text-5xl md:text-6xl lg:text-7xl max-w-5xl ${d.heroDark ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {d.title[0]} <Green>{d.title[1]}</Green>
            </h1>
            <p className={`mt-7 max-w-2xl text-lg leading-relaxed ${d.heroDark ? 'text-white/70' : 'text-[#4A4A4A]'}`}>{d.sub}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" onClick={() => quote.open()}>{d.ctas[0]}</Button>
              <a href="tel:+16022539392" className={`inline-flex items-center gap-2 px-7 py-4 text-base font-semibold rounded-full border transition-colors duration-200 whitespace-nowrap ${d.heroDark ? 'border-white/30 text-white hover:border-white hover:bg-white hover:text-black' : 'border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'}`}>Call (602) 253-9392</a>
            </div>
          </FadeIn>
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
              <div className="text-center space-y-6">
                {d.intro.map((p,i) => <p key={i} className="text-lg leading-relaxed text-[#4A4A4A]">{p}</p>)}
              </div>
            </div>
            {d.introImg && (
              <div className="mt-14 max-w-4xl mx-auto aspect-[16/8] rounded-2xl overflow-hidden bg-[#F1F2F3]">
                <ImgOrPlaceholder src={d.introImg} alt={d.introHeader} caption="SERVICE OVERVIEW" />
              </div>
            )}
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-24 bg-[#F4F4F4]">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-5">
              <SectionHeading eyebrow="Scope" sub={d.supportSub}>
                {d.supportTitle}
              </SectionHeading>
            </FadeIn>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {d.supportList.map((s,i) => (
                <FadeIn key={s} delay={i*0.04}>
                  <div className="bg-white rounded-xl p-5 flex items-start gap-3">
                    <Icon name="Check" className="w-4 h-4 text-[#4aa25a] mt-1 shrink-0" strokeWidth={3}/>
                    <span className="text-[15px] text-[#1A1A1A]">{s}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {d.extra && (
        <Section className="py-24 md:py-28">
          <Container>
            <FadeIn>
              <div className="max-w-4xl mx-auto">
                <Eyebrow>{d.extra.title}</Eyebrow>
                <h2 className="mt-4 font-display font-black text-4xl md:text-5xl tracking-tight leading-tight">{d.extra.sub}</h2>
                {d.extra.body && <p className="mt-6 text-lg text-[#4A4A4A] leading-relaxed">{d.extra.body}</p>}
                {d.extra.list && (
                  <ul className="mt-6 space-y-3">
                    {d.extra.list.map(l => (
                      <li key={l} className="flex items-start gap-3">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#4aa25a] shrink-0" />
                        <span className="text-[#1A1A1A]">{l}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {d.extra.img && (
                  <div className="mt-10 aspect-[16/8] rounded-2xl overflow-hidden bg-[#F1F2F3]">
                    <ImgOrPlaceholder src={d.extra.img} alt={d.extra.title} caption={d.extra.title.toUpperCase()} />
                  </div>
                )}
              </div>
            </FadeIn>
          </Container>
        </Section>
      )}

      {d.statCallout && (
        <Section dark className="py-24">
          <Container>
            <FadeIn>
              <div className="text-center">
                <div className="font-display font-black text-[120px] md:text-[200px] leading-none text-[#4aa25a] tracking-tight">
                  <CountUp to={d.statCallout.n} />{d.statCallout.suffix}
                </div>
                <div className="font-mono text-sm tracking-[0.3em] text-white/60 mt-2">{d.statCallout.label}</div>
                <p className="mt-6 text-lg text-white/80">{d.statCallout.caption}</p>
              </div>
            </FadeIn>
          </Container>
        </Section>
      )}

      <Section className="py-24 md:py-28 bg-[#F1F2F3]">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-6">
              <div className="max-w-xl">
                <Eyebrow>Why OSI</Eyebrow>
                {d.whyHeader && <h3 className="font-display font-bold text-2xl md:text-3xl mt-4 tracking-tight">{d.whyHeader}</h3>}
                {d.whySub && <p className="mt-3 text-lg text-[#4A4A4A]">{d.whySub}</p>}
                {d.whyBody && <p className="mt-5 text-lg text-[#4A4A4A] leading-relaxed">{d.whyBody}</p>}
                {d.whyList && (
                  <ul className="mt-6 space-y-3">
                    {d.whyList.map(w => (
                      <li key={w} className="flex items-start gap-3 text-[#1A1A1A]">
                        <Icon name="Check" className="w-4 h-4 text-[#4aa25a] mt-1 shrink-0" strokeWidth={3}/>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                )}
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

      <FinalCTA
        title={<>{d.closingTitle[0]} <Green>{d.closingTitle[1]}</Green></>}
        subtitle={d.closingBody}
      />
    </>
  );
}
