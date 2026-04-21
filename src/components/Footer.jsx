import { Link } from './Router';
import { Container, OSILogo } from './Primitives';
import { SERVICES, INDUSTRIES } from '../data/tokens';

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] text-white">
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <OSILogo variant="light" />
            <p className="mt-5 text-white/60 text-[15px] leading-relaxed max-w-xs">Commercial furniture services, Phoenix-built.</p>
            <div className="mt-6 text-sm text-white/50 leading-relaxed">
              135 E Watkins St<br/>Phoenix, AZ 85004
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6DFF00] mb-5">Services</div>
            <ul className="space-y-2.5">
              {SERVICES.map(s => (
                <li key={s.slug}><Link to={`/services/${s.slug}`} className="text-[14px] text-white/70 hover:text-white">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6DFF00] mb-5">Industries</div>
            <ul className="space-y-2.5">
              {INDUSTRIES.map(i => (
                <li key={i.slug}><Link to={`/industries/${i.slug}`} className="text-[14px] text-white/70 hover:text-white">{i.title}</Link></li>
              ))}
              <li className="pt-3"><Link to="/about" className="text-[14px] text-white/70 hover:text-white">About</Link></li>
              <li><Link to="/projects" className="text-[14px] text-white/70 hover:text-white">Projects</Link></li>
              <li><Link to="/contact" className="text-[14px] text-white/70 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6DFF00] mb-5">Contact</div>
            <ul className="space-y-2.5 text-[14px] text-white/70">
              <li><a href="tel:+16022539392" className="hover:text-white">(602) 253-9392</a></li>
              <li><a href="mailto:info@osinstall.com" className="hover:text-white">info@osinstall.com</a></li>
            </ul>
            <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-2">Warehouse hours</div>
            <div className="text-[14px] text-white/70 leading-relaxed">
              Mon – Fri<br/>
              8:00 AM – 3:00 PM MST
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
          <span>&copy; 2026 Office Systems Installation. All rights reserved.</span>
          <span>Built by Maxim AI Labs</span>
        </div>
      </Container>
    </footer>
  );
}
