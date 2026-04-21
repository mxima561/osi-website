import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from './Motion';
import { Link } from './Router';
import Icon from './Icon';
import { Container, Button, OSILogo } from './Primitives';
import { useQuote } from './QuoteModal';
import { SERVICES, INDUSTRIES } from '../data/tokens';

function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
      <button className="inline-flex items-center gap-1 text-[14px] font-medium text-[#1A1A1A] hover:text-[#5AD400] transition py-2">
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
              {items.map(it => (
                <Link key={it.to} to={it.to} className="block px-4 py-3 rounded-xl hover:bg-[#F4F4F4] transition">
                  <div className="text-[14px] font-semibold text-[#1A1A1A]">{it.label}</div>
                  {it.sub && <div className="text-[12px] text-[#8A8A8A] mt-0.5">{it.sub}</div>}
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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const servicesItems = SERVICES.map(s => ({ to: `/services/${s.slug}`, label: s.title, sub: s.blurb.slice(0, 60)+'...' }));
  const industriesItems = INDUSTRIES.map(i => ({ to: `/industries/${i.slug}`, label: i.title, sub: i.blurb.slice(0, 60)+'...' }));

  return (
    <>
      <nav className={`sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#EAEAEA] transition-all ${scrolled ? 'py-2.5' : 'py-4'}`}>
        <Container className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <button aria-label="Menu" className="lg:hidden w-10 h-10 rounded-lg hover:bg-black/5 flex items-center justify-center" onClick={()=>setMobileOpen(true)}>
              <Icon name="Menu" className="w-5 h-5" />
            </button>
            <Link to="/" className="flex items-center">
              <OSILogo variant="dark" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-[14px] font-medium hover:text-[#5AD400]">Home</Link>
            <NavDropdown label="Services" items={[{to:'/services',label:'All Services',sub:'Overview of everything we do'}, ...servicesItems]}/>
            <NavDropdown label="Industries" items={[{to:'/industries',label:'All Industries',sub:'Environments we serve'}, ...industriesItems]}/>
            <Link to="/projects" className="text-[14px] font-medium hover:text-[#5AD400]">Projects</Link>
            <Link to="/about" className="text-[14px] font-medium hover:text-[#5AD400]">About</Link>
            <Link to="/contact" className="text-[14px] font-medium hover:text-[#5AD400]">Contact</Link>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+16022539392" className="hidden md:inline-flex items-center gap-2 text-[14px] font-semibold text-[#1A1A1A] hover:text-[#5AD400] whitespace-nowrap">
              <Icon name="Phone" className="w-4 h-4"/>
              <span className="whitespace-nowrap">(602) 253-9392</span>
            </a>
            <a href="tel:+16022539392" aria-label="Call" className="md:hidden w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center">
              <Icon name="Phone" className="w-4 h-4"/>
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
            className="fixed inset-0 z-80 bg-[#0E0E0E] text-white lg:hidden overflow-y-auto"
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
                  <Link to={l.to} onClick={()=>setMobileOpen(false)} className="block font-display font-black text-4xl hover:text-[#6DFF00]">{l.label}</Link>
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
