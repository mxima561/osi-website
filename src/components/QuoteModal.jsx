import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from './Motion';
import Icon from './Icon';
import { Eyebrow, Button, Green } from './Primitives';

const QuoteCtx = createContext({ open: () => {} });
export const useQuote = () => useContext(QuoteCtx);

export function QuoteProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState({});
  const ctx = { open: (data = {}) => { setPrefill(data); setOpen(true); }, close: () => setOpen(false) };
  return (
    <QuoteCtx.Provider value={ctx}>
      {children}
      <QuoteModal isOpen={open} onClose={() => setOpen(false)} prefill={prefill} />
    </QuoteCtx.Provider>
  );
}

export function QuoteForm({ inline = false, prefill = {}, onSuccess }) {
  const [state, setState] = useState({
    name: '', company: '', email: '', phone: '',
    clientType: prefill.clientType || '',
    services: prefill.services || [],
    location: '', start: '', description: '', source: ''
  });
  const [status, setStatus] = useState('idle');
  const serviceOpts = ['Installation','Warehousing','MAC','Decommissioning','Asset Management','Modular Walls','Other'];
  const clientOpts = ['Dealer','PM','A&D','Enterprise','Facility Team','Other'];

  const update = (k, v) => setState(s => ({ ...s, [k]: v }));
  const toggleService = (s) => setState(p => ({ ...p, services: p.services.includes(s) ? p.services.filter(x=>x!==s) : [...p.services, s] }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (!state.name || !state.company || !state.email) { setStatus('error'); return; }
    setStatus('submitting');
    await new Promise(r => setTimeout(r, 900));
    try {
      setStatus('success');
      if (onSuccess) onSuccess();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 p-8 bg-[#E4FFC9] rounded-2xl border border-[#6DFF00]/40">
        <div className="w-12 h-12 rounded-full bg-[#6DFF00] flex items-center justify-center">
          <Icon name="Check" className="w-6 h-6" strokeWidth={3} />
        </div>
        <h3 className="font-display font-black text-2xl">Thanks — we're on it.</h3>
        <p className="text-[#4A4A4A]">We'll be in touch within one business day.</p>
      </div>
    );
  }

  const fieldCls = 'w-full bg-white border border-[#EAEAEA] rounded-lg px-4 py-3 text-[15px] focus:border-[#6DFF00] focus:ring-2 focus:ring-[#6DFF00]/20 transition';
  const labelCls = 'block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#4A4A4A] mb-2';

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${inline ? '' : ''}`}>
      {status === 'error' && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800">
          Something went wrong. Please call (602) 253-9392 or email info@osinstall.com.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Full name *</label>
          <input required className={fieldCls} value={state.name} onChange={e=>update('name', e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Company *</label>
          <input required className={fieldCls} value={state.company} onChange={e=>update('company', e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Email *</label>
          <input required type="email" className={fieldCls} value={state.email} onChange={e=>update('email', e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Phone</label>
          <input type="tel" className={fieldCls} value={state.phone} onChange={e=>update('phone', e.target.value)} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Client type</label>
        <div className="flex flex-wrap gap-2">
          {clientOpts.map(o => (
            <button type="button" key={o} onClick={()=>update('clientType', o)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${state.clientType===o ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#4A4A4A] border-[#EAEAEA] hover:border-[#1A1A1A]'}`}>
              {o}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={labelCls}>Service needed (select all that apply)</label>
        <div className="flex flex-wrap gap-2">
          {serviceOpts.map(s => (
            <button type="button" key={s} onClick={()=>toggleService(s)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${state.services.includes(s) ? 'bg-[#E4FFC9] text-[#2D7A00] border-[#6DFF00]' : 'bg-white text-[#4A4A4A] border-[#EAEAEA] hover:border-[#6DFF00]'}`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Project location</label>
          <input className={fieldCls} value={state.location} onChange={e=>update('location', e.target.value)} placeholder="City, state"/>
        </div>
        <div>
          <label className={labelCls}>Estimated start</label>
          <input type="month" className={fieldCls} value={state.start} onChange={e=>update('start', e.target.value)} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Project description</label>
        <textarea rows={4} className={fieldCls} value={state.description} onChange={e=>update('description', e.target.value)} />
      </div>

      <div>
        <label className={labelCls}>How did you hear about us?</label>
        <input className={fieldCls} value={state.source} onChange={e=>update('source', e.target.value)} />
      </div>

      <div className="pt-2">
        <Button type="submit" onClick={handleSubmit} size="lg" variant="primary">
          {status === 'submitting' ? 'Sending…' : 'Submit Request'}
        </Button>
        <p className="text-xs text-[#8A8A8A] mt-3">We'll respond within one business day. Or call <a className="underline" href="tel:+16022539392">(602) 253-9392</a>.</p>
      </div>
    </form>
  );
}

function QuoteModal({ isOpen, onClose, prefill }) {
  useEffect(() => {
    const onEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) { window.addEventListener('keydown', onEsc); document.body.style.overflow = 'hidden'; }
    return () => { window.removeEventListener('keydown', onEsc); document.body.style.overflow = ''; };
  }, [isOpen, onClose]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-90 bg-[#1A1A1A]/85 backdrop-blur-md flex items-start md:items-center justify-center p-0 md:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
            className="relative w-full md:max-w-2xl bg-[#F9F9F5] md:rounded-2xl p-6 md:p-10 my-0 md:my-8"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 w-10 h-10 rounded-full hover:bg-black/5 flex items-center justify-center">
              <Icon name="X" className="w-5 h-5"/>
            </button>
            <Eyebrow>Request a Quote</Eyebrow>
            <h2 className="font-display font-black text-3xl md:text-4xl mt-3 mb-6 leading-[1.05]">Tell us about <Green>your project.</Green></h2>
            <QuoteForm prefill={prefill} onSuccess={() => setTimeout(onClose, 2000)} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
