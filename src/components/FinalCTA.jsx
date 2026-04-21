import { FadeIn } from './Motion';
import { Section, Container, Button, Green } from './Primitives';
import { useQuote } from './QuoteModal';

export default function FinalCTA({ title, subtitle }) {
  const quote = useQuote();
  return (
    <Section dark className="py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <Container className="relative">
        <FadeIn>
          <div className="max-w-4xl">
            <h2 className="font-display font-black tracking-tight leading-[1.05] text-4xl md:text-6xl lg:text-7xl">
              {title || <>Need a <Green>stronger furniture services partner</Green> in Phoenix?</>}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
              {subtitle || 'Whether you are managing a client project, planning a relocation, or building a long-term support program, OSI is ready to help.'}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" onClick={() => quote.open()}>Request a Quote</Button>
              <Button variant="outlineLight" size="lg" onClick={() => quote.open()} iconRight={null}>Talk to OSI</Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
