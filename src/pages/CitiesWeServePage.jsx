import { Section, Container, SectionHeading, Green, Button } from '../components/Primitives';
import { FadeIn } from '../components/Motion';
import { Link } from '../components/Router';
import FinalCTA from '../components/FinalCTA';

const PHOENIX_METRO = ['Phoenix', 'Mesa', 'Chandler', 'Gilbert', 'Glendale', 'Scottsdale', 'Tempe', 'Peoria', 'Surprise', 'Avondale', 'Buckeye'];
const STATEWIDE = ['Bisbee', 'Bullhead City', 'Casa Grande', 'Flagstaff', 'Florence', 'Globe', 'Holbrook', 'Kingman', 'Lake Havasu City', 'Nogales', 'Payson', 'Prescott', 'Safford', 'Sedona', 'Sierra Vista', 'Tucson', 'Wickenburg', 'Yuma'];

function CityGroup({ title, cities }) {
  return (
    <FadeIn>
      <h2 className="font-display font-black text-2xl md:text-[28px] tracking-tight text-[#1A1A1A]">{title}</h2>
      <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3.5 text-[16px] text-[#4A4A4A]">
        {cities.map(city => <li key={city}>{city}</li>)}
      </ul>
    </FadeIn>
  );
}

export default function CitiesWeServePage() {
  return (
    <>
      <Section className="py-20 md:py-28 bg-[#F9F9F5]">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="Service Area" maxW="max-w-3xl">
              Cities We <Green>Serve</Green>
            </SectionHeading>
            <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[#4A4A4A]">
              OSI provides commercial office furniture installation, relocation, decommissioning,
              and repair across the state of Arizona. Headquartered in Phoenix with a 60,000-square-foot
              warehouse, our crews handle everything from single-office installs to multi-floor corporate
              deployments — in the Valley and well beyond it. Dealers, project managers, and facility
              teams rely on us in Tucson, Flagstaff, Prescott, Yuma, and dozens of communities in between.
              We also regularly support projects in the Las Vegas area and parts of Southern California.
              If your project is in the Southwest, chances are we already work where you are.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="space-y-16">
            <CityGroup title="Phoenix Metro" cities={PHOENIX_METRO} />
            <CityGroup title="Statewide Arizona" cities={STATEWIDE} />
          </div>

          <FadeIn>
            <div className="mt-20 rounded-2xl border border-[#EAEAEA] bg-[#F9F9F5] p-8 md:p-12 max-w-3xl">
              <h2 className="font-display font-black text-2xl md:text-[28px] tracking-tight text-[#1A1A1A]">Don&rsquo;t see your city?</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-[#4A4A4A]">
                We also serve the Las Vegas area and parts of Southern California. Whether you need{' '}
                <Link to="/services/installation" className="text-[#2f7d44] font-medium hover:underline">commercial furniture installation</Link>{' '}
                or <Link to="/services/decommissioning" className="text-[#2f7d44] font-medium hover:underline">decommissioning and relocation</Link>,
                tell us where the project is and we&rsquo;ll tell you how we can help.
              </p>
              <div className="mt-8">
                <Button variant="primary" to="/contact">Request a Quote</Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
