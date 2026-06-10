import { Section, Container, Eyebrow, Green, Button } from '../components/Primitives';
import { FadeIn } from '../components/Motion';
import { Link } from '../components/Router';
import FinalCTA from '../components/FinalCTA';
import NotFoundPage from './NotFoundPage';
import { SERVICES } from '../data/tokens';
import { getCity } from '../data/cities';

export default function CityPage({ slug }) {
  const city = getCity(slug);
  if (!city) return <NotFoundPage />;

  const nearby = (city.nearby || []).map(getCity).filter(Boolean);

  return (
    <>
      <Section className="py-20 md:py-28 bg-[#F9F9F5]">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <Eyebrow>{city.region} · Service Area</Eyebrow>
              <h1 className="font-display font-black tracking-tight leading-[1.05] mt-4 text-4xl md:text-5xl lg:text-[56px] text-[#1A1A1A]">
                Commercial Furniture Installation in <Green>{city.name}</Green>
              </h1>
              <p className="mt-6 text-[17px] leading-relaxed text-[#4A4A4A]">{city.intro[0]}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="primary" to="/contact">Request a Quote</Button>
                <Button variant="outlineDark" to="/services" iconRight={null}>View Services</Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <FadeIn className="lg:col-span-2">
              <p className="text-[17px] leading-relaxed text-[#4A4A4A]">{city.intro[1]}</p>
              <p className="mt-5 text-[17px] leading-relaxed text-[#4A4A4A]">
                We regularly work across {city.districts}.
              </p>
            </FadeIn>
            <FadeIn>
              <div className="rounded-2xl border border-[#EAEAEA] bg-[#F9F9F5] p-6 md:p-8">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#276a39]">Coverage</div>
                <p className="mt-3 text-[15px] leading-relaxed text-[#4A4A4A]">{city.coverage}</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <h2 className="mt-20 font-display font-black text-2xl md:text-[28px] tracking-tight text-[#1A1A1A]">
              Services we provide in {city.name}
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group rounded-2xl border border-[#EAEAEA] bg-white p-6 hover:border-[#1A1A1A]/20 hover:shadow-sm transition"
                >
                  <div className="font-display font-black text-[18px] text-[#1A1A1A]">{s.title}</div>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#4A4A4A]">{s.blurb}</p>
                </Link>
              ))}
            </div>
          </FadeIn>

          {nearby.length > 0 && (
            <FadeIn>
              <div className="mt-20 pt-10 border-t border-[#EAEAEA]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#276a39]">Nearby areas we serve</div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {nearby.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/cities/${c.slug}`}
                      className="rounded-full border border-[#EAEAEA] px-5 py-2 text-[14px] text-[#4A4A4A] hover:border-[#1A1A1A]/30 hover:text-[#1A1A1A] transition"
                    >
                      {c.name}
                    </Link>
                  ))}
                  <Link
                    to="/cities-we-serve"
                    className="rounded-full px-5 py-2 text-[14px] font-medium text-[#2f7d44] hover:underline"
                  >
                    All cities we serve →
                  </Link>
                </div>
              </div>
            </FadeIn>
          )}
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
