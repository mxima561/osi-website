import { Link } from './Router';
import { Container, OSILogo } from './Primitives';
import { SERVICES, INDUSTRIES } from '../data/tokens';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#EAEAEA] text-[#1A1A1A]">
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <OSILogo variant="dark" />
            <div className="mt-6 text-sm text-[#6E6E6E] leading-relaxed">
              135 E Watkins St<br/>Phoenix, AZ 85004
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#276a39] mb-5">Services</div>
            <ul className="space-y-2.5">
              {SERVICES.map(s => (
                <li key={s.slug}><Link to={`/services/${s.slug}`} className="text-[14px] text-[#4A4A4A] hover:text-[#2f7d44] transition">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#276a39] mb-5">Industries</div>
            <ul className="space-y-2.5">
              {INDUSTRIES.map(i => (
                <li key={i.slug}><Link to={`/industries/${i.slug}`} className="text-[14px] text-[#4A4A4A] hover:text-[#2f7d44] transition">{i.title}</Link></li>
              ))}
              <li className="pt-3"><Link to="/about" className="text-[14px] text-[#4A4A4A] hover:text-[#2f7d44] transition">About</Link></li>
              <li><Link to="/projects" className="text-[14px] text-[#4A4A4A] hover:text-[#2f7d44] transition">Projects</Link></li>
              <li><Link to="/contact" className="text-[14px] text-[#4A4A4A] hover:text-[#2f7d44] transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#276a39] mb-5">Contact</div>
            <ul className="space-y-2.5 text-[14px] text-[#4A4A4A]">
              <li><a href="tel:+16022539392" className="hover:text-[#2f7d44] transition">(602) 253-9392</a></li>
              <li><a href="mailto:requestaquote@osinstall.com" className="hover:text-[#2f7d44] transition">requestaquote@osinstall.com</a></li>
            </ul>
            <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#276a39] mb-2">Warehouse hours</div>
            <div className="text-[14px] text-[#4A4A4A] leading-relaxed">
              Mon – Fri<br/>
              8:00 AM – 3:00 PM MST
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[#EAEAEA] flex flex-col md:flex-row justify-between gap-3 text-xs text-[#6E6E6E]">
          <span>© 2026 Office Systems Installation. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <Link to="/privacy-policy" className="hover:text-[#1A1A1A] transition">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms-of-use" className="hover:text-[#1A1A1A] transition">Terms of Use</Link>
            <span>·</span>
            <span>Built by Maxim AI Labs</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
