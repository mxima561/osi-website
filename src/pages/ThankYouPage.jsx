import { FadeIn } from '../components/Motion';
import { Section, Container, Eyebrow, Button, Green } from '../components/Primitives';

export default function ThankYouPage() {
  return (
    <Section className="bg-[#F9F9F5] py-24 lg:py-32 min-h-[70vh] flex items-center">
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <Eyebrow>Confirmation</Eyebrow>
            <h1 className="mt-5 font-display font-black tracking-tight leading-[1.02] text-5xl md:text-6xl lg:text-7xl">
              Thanks — we <Green>got it.</Green>
            </h1>
            <p className="mt-6 text-xl text-[#1A1A1A]">We'll be in touch within one business day.</p>
            <p className="mt-6 text-[#4A4A4A] leading-relaxed">
              Someone from the OSI team will review your request and reach out at the email or phone number you provided. If you have drawings, floor plans, or photos to share, email them to{' '}
              <a href="mailto:requestaquote@osinstall.com" className="font-semibold text-[#0F1E3D] hover:text-[#2f7d44] transition">requestaquote@osinstall.com</a>
              {' '}and reference the project details you just submitted.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" to="/">Back to Home</Button>
              <Button variant="outlineDark" size="lg" to="/projects" iconRight={null}>View Our Work</Button>
            </div>
            <p className="mt-8 text-sm text-[#6E6E6E]">
              In a hurry? Call us directly at <a href="tel:+16022539392" className="font-semibold text-[#1A1A1A] hover:text-[#2f7d44]">(602) 253-9392</a>.
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
