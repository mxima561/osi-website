import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from './Motion';
import { Link, useRoute } from './Router';
import Icon from './Icon';
import { Container, Button, OSILogo } from './Primitives';
import { useQuote } from './QuoteModal';
import { SERVICES, INDUSTRIES } from '../data/tokens';

function NavDropdown({ label, items, overviewItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
      <button className="inline-flex items-center gap-1 text-[14px] font-medium text-[#1A1A1A] hover:text-[#2f7d44] transition py-2">
        {label}
        <Icon name="ChevronDown" className="w-3.5 h-3.5"/>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72"
          >
            <div className="bg-white rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] border border-[#EAEAEA] p-2 overflow-hidden">
              {overviewItem && (
                <>
                  <Link to={overviewItem.to} className="block px-4 py-3 rounded-xl bg-[#F4F4F4] hover:bg-[#EAEAEA] transition">
                    <div className="flex items-center justify-between">
                      <div className="text-[14px] font-bold text-[#1A1A1A]">{overviewItem.label}</div>
                      <span className="text-[11px] font-semibold text-[#276a39] bg-white border border-[#EAEAEA] rounded-full px-2 py-0.5">Overview →</span>
                    </div>
                    {overviewItem.sub && <div className="text-[12px] text-[#6E6E6E] mt-0.5">{overviewItem.sub}</div>}
                  </Link>
                  <div className="border-t border-[#EAEAEA] my-1"/>
                </>
              )}
              {items.map(it => (
                <Link key={it.to} to={it.to} className="block px-4 py-2.5 rounded-xl text-[14px] font-semibold text-[#1A1A1A] hover:bg-[#F4F4F4] hover:text-[#2f7d44] transition">
                  {it.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const quote = useQuote();
  const { path } = useRoute();
  // Logo acts as Home. If already on the home page, scroll to top instead of
  // a no-op navigation (the hash wouldn't change, so it wouldn't fire).
  const onLogoClick = () => { if (path === '/') window.scrollTo({ top: 0, behavior: 'smooth' }); };
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const servicesItems = SERVICES.map(s => ({ to: `/services/${s.slug}`, label: s.title }));
  const industriesItems = INDUSTRIES.map(i => ({ to: `/industries/${i.slug}`, label: i.title }));

  return (
    <>
      <nav className={`sticky top-0 z-50 bg-white border-b border-[#EAEAEA] transition-all ${scrolled ? 'py-1.5 shadow-[0_6px_24px_-16px_rgba(15,30,61,0.3)]' : 'py-2'}`}>
        <Container className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <button aria-label="Menu" className="lg:hidden w-10 h-10 rounded-lg hover:bg-black/5 flex items-center justify-center" onClick={()=>setMobileOpen(true)}>
              <Icon name="Menu" className="w-5 h-5" />
            </button>
            <Link to="/" onClick={onLogoClick} aria-label="OSI — home" className="flex items-center">
              <OSILogo variant="dark" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <NavDropdown
              label="Services"
              overviewItem={{to:'/services', label:'All Services', sub:'Overview of everything we do'}}
              items={servicesItems}
            />
            <NavDropdown
              label="Industries"
              overviewItem={{to:'/industries', label:'All Industries', sub:'Environments we serve'}}
              items={industriesItems}
            />
            <Link to="/projects" className="text-[14px] font-medium hover:text-[#2f7d44]">Projects</Link>
            <Link to="/about" className="text-[14px] font-medium hover:text-[#2f7d44]">About</Link>
            <Link to="/contact" className="text-[14px] font-medium hover:text-[#2f7d44]">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+16022539392" className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/15 px-4 py-2.5 text-sm font-semibold text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors whitespace-nowrap">
              <Icon name="Phone" className="w-4 h-4" />
              (602) 253-9392
            </a>
            <Button variant="primary" size="sm" magnetic={false} onClick={() => quote.open()} iconRight={null}>Request a Quote</Button>
          </div>
        </Container>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
            transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
            className="fixed inset-0 z-80 bg-[#0F1E3D] text-white lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <OSILogo variant="light" />
              <button aria-label="Close menu" onClick={()=>setMobileOpen(false)} className="w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center"><Icon name="X" className="w-5 h-5"/></button>
            </div>
            <div className="px-6 py-8 space-y-6">
              {[
                {to:'/', label:'Home'},
                {to:'/services', label:'Services'},
                {to:'/industries', label:'Industries'},
                {to:'/projects', label:'Projects'},
                {to:'/about', label:'About'},
                {to:'/contact', label:'Contact'},
              ].map((l, i) => (
                <motion.div key={l.to} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:0.1+i*0.06}}>
                  <Link to={l.to} onClick={()=>setMobileOpen(false)} className="block font-display font-black text-4xl hover:text-[#2f7d44]">{l.label}</Link>
                </motion.div>
              ))}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <a href="tel:+16022539392" className="block text-xl text-white/80">(602) 253-9392</a>
                <Button onClick={() => { setMobileOpen(false); quote.open(); }} variant="primary" size="lg" magnetic={false}>Request a Quote</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
