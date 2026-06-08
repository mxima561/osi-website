import { Section, Container, Button, Green } from '../components/Primitives';
import { Link } from '../components/Router';

export default function NotFoundPage() {
  return (
    <Section className="py-32 md:py-48 bg-[#F9F9F5] min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-2xl">
          <div className="font-display font-black text-[120px] md:text-[180px] leading-none text-[#4aa25a] tracking-tighter">404</div>
          <h1 className="mt-4 font-display font-black text-5xl md:text-6xl tracking-tight">Page not found.</h1>
          <p className="mt-5 text-lg text-[#4A4A4A]">The page you're looking for doesn't exist — but the OSI warehouse is still open.</p>
          <div className="mt-10 flex flex-wrap gap-3 items-center">
            <Button variant="primary" to="/">Back to Home</Button>
            <Link to="/contact" className="text-sm font-semibold text-[#3d8f4e] hover:text-[#1A1A1A]">or talk to us &rarr;</Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
