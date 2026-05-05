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

  const fieldCls = 'w-full bg-white border border-[#EAEAEA] rounded-xl px-4 py-3.5 text-[15px] focus:border-[#6DFF00] focus:ring-2 focus:ring-[#6DFF00]/20 outline-none transition placeholder:text-[#8A8A8A]';
  const labelCls = 'block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8A8A8A] mb-2';
  const sectionCls = 'space-y-4';

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-800 mb-6">
          Something went wrong. Please call (602) 253-9392 or email info@osinstall.com.
        </div>
      )}

      {/* Section 1: Contact Info */}
      <div className={sectionCls}>
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-[11px] font-bold font-mono">1</span>
          <span className="text-sm font-semibold text-[#1A1A1A]">Your details</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Full name *</label>
            <input required className={fieldCls} value={state.name} onChange={e=>update('name', e.target.value)} placeholder="Jane Smith" />
          </div>
          <div>
            <label className={labelCls}>Company *</label>
            <input required className={fieldCls} value={state.company} onChange={e=>update('company', e.target.value)} placeholder="Acme Corp" />
          </div>
          <div>
            <label className={labelCls}>Email *</label>
            <input required type="email" className={fieldCls} value={state.email} onChange={e=>update('email', e.target.value)} placeholder="jane@acme.com" />
          </div>
          <div>
            <label className={labelCls}>Phone</label>
            <input type="tel" className={fieldCls} value={state.phone} onChange={e=>update('phone', e.target.value)} placeholder="(555) 000-0000" />
          </div>
        </div>
        <div>
          <label className={labelCls}>I am a…</label>
          <div className="flex flex-wrap gap-2">
            {clientOpts.map(o => (
              <button type="button" key={o} onClick={()=>update('clientType', o)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-all duration-200 ${state.clientType===o ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm' : 'bg-white text-[#4A4A4A] border-[#EAEAEA] hover:border-[#1A1A1A] hover:shadow-sm'}`}>
                {o}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-dashed border-[#EAEAEA] my-7" />

      {/* Section 2: Project Info */}
      <div className={sectionCls}>
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-[11px] font-bold font-mono">2</span>
          <span className="text-sm font-semibold text-[#1A1A1A]">Project details</span>
        </div>
        <div>
          <label className={labelCls}>Services needed <span className="normal-case tracking-normal font-normal">(select all that apply)</span></label>
          <div className="flex flex-wrap gap-2">
            {serviceOpts.map(s => (
              <button type="button" key={s} onClick={()=>toggleService(s)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-all duration-200 ${state.services.includes(s) ? 'bg-[#E4FFC9] text-[#2D7A00] border-[#6DFF00] shadow-sm' : 'bg-white text-[#4A4A4A] border-[#EAEAEA] hover:border-[#6DFF00] hover:shadow-sm'}`}>
                {state.services.includes(s) && <span className="mr-1.5">✓</span>}{s}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Project location</label>
            <input className={fieldCls} value={state.location} onChange={e=>update('location', e.target.value)} placeholder="City, State"/>
          </div>
          <div>
            <label className={labelCls}>Estimated start</label>
            <input type="month" className={fieldCls} value={state.start} onChange={e=>update('start', e.target.value)} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Project description</label>
          <textarea rows={4} className={fieldCls} value={state.description} onChange={e=>update('description', e.target.value)} placeholder="Brief overview of scope, timeline, or any special requirements…" />
        </div>
      </div>

      <div className="border-t border-dashed border-[#EAEAEA] my-7" />

      {/* Section 3: Submit */}
      <div>
        <div>
          <label className={labelCls}>How did you hear about us?</label>
          <input className={fieldCls} value={state.source} onChange={e=>update('source', e.target.value)} placeholder="Referral, search, trade show…" />
        </div>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <Button type="submit" onClick={handleSubmit} size="lg" variant="primary">
            {status === 'submitting' ? 'Sending…' : 'Submit Request'}
          </Button>
          <p className="text-xs text-[#8A8A8A]">We'll respond within one business day.<br className="hidden sm:block" /> Or call <a className="underline hover:text-[#1A1A1A]" href="tel:+16022539392">(602) 253-9392</a>.</p>
        </div>
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
            className="relative w-full md:max-w-[680px] md:max-h-[calc(100vh-80px)] bg-[#F9F9F5] md:rounded-2xl shadow-2xl flex flex-col my-0 md:my-10"
            onClick={e => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#F9F9F5] md:rounded-t-2xl p-6 md:px-10 md:pt-10 md:pb-0 z-10">
              <button onClick={onClose} aria-label="Close" className="absolute top-5 right-5 w-10 h-10 rounded-full hover:bg-black/5 flex items-center justify-center transition">
                <Icon name="X" className="w-5 h-5"/>
              </button>
              <Eyebrow>Request a Quote</Eyebrow>
              <h2 className="font-display font-black text-3xl md:text-4xl mt-3 mb-2 leading-[1.05]">Tell us about <Green>your project.</Green></h2>
              <p className="text-[#4A4A4A] text-[15px] mb-6">Fill out the details below and we'll get back to you within one business day.</p>
            </div>
            <div className="overflow-y-auto px-6 md:px-10 pb-6 md:pb-10">
              <QuoteForm prefill={prefill} onSuccess={() => setTimeout(onClose, 2000)} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
