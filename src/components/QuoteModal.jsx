// TODO(karim): Salesforce Web-to-Lead integration
// Client (Jesse/Sarah) will provide the Salesforce intake script.
// Once received, replace the placeholder onSubmit handler below with the
// Salesforce-provided form action / fetch call. Field name attributes
// may need to be remapped to Salesforce field IDs (e.g. first_name -> 00N...).
// Until then: form does not submit anywhere. Submit button shows a
// placeholder success state for visual QA only.

import { useState, useEffect, createContext, useContext, useRef } from 'react';
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

// eslint-disable-next-line no-unused-vars
export function QuoteForm({ inline = false, prefill = {}, onSuccess }) {
  const [state, setState] = useState({
    first_name: '', last_name: '', title: '', company: '',
    email: '', phone: '', product_description: '',
    attachments: [], referral_source: ''
  });
  const [status, setStatus] = useState('idle');
  const fileInputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const update = (k, v) => setState(s => ({ ...s, [k]: v }));

  const handleFiles = (files) => {
    const validTypes = ['application/pdf','image/jpeg','image/png','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    const maxSize = 10 * 1024 * 1024;
    const maxFiles = 5;
    const current = state.attachments;
    const newFiles = Array.from(files).filter(f => validTypes.includes(f.type) && f.size <= maxSize);
    const combined = [...current, ...newFiles].slice(0, maxFiles);
    update('attachments', combined);
  };

  const removeFile = (idx) => {
    update('attachments', state.attachments.filter((_, i) => i !== idx));
  };

  // TODO(karim): Salesforce Web-to-Lead integration
  // Client (Jesse/Sarah) will provide the Salesforce intake script.
  // Once received, replace the placeholder onSubmit handler below with the
  // Salesforce-provided form action / fetch call. Field name attributes
  // may need to be remapped to Salesforce field IDs (e.g. first_name -> 00N...).
  // Until then: form does not submit anywhere. Submit button shows a
  // placeholder success state for visual QA only.
  async function handleSubmit(e) {
    e.preventDefault();
    if (!state.first_name || !state.last_name || !state.title || !state.company || !state.email || !state.phone || !state.product_description) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    // PLACEHOLDER — simulates submission for visual QA only
    await new Promise(r => setTimeout(r, 900));
    setStatus('success');
    if (onSuccess) onSuccess();
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 p-8 bg-[#E8F4DC] rounded-2xl border border-[#6AA63F]/40">
        <div className="w-12 h-12 rounded-full bg-[#6AA63F] flex items-center justify-center text-white">
          <Icon name="Check" className="w-6 h-6" strokeWidth={3} />
        </div>
        <h3 className="font-display font-black text-2xl">Thanks — your request is recorded.</h3>
        <p className="text-[#4A4A4A]">We'll be in touch within one business day.</p>
      </div>
    );
  }

  const fieldCls = 'w-full bg-white border border-[#EAEAEA] rounded-xl px-4 py-3.5 text-[15px] focus:border-[#6AA63F] focus:ring-2 focus:ring-[#6AA63F]/20 outline-none transition placeholder:text-[#8A8A8A]';
  const labelCls = 'block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8A8A8A] mb-2';
  const sectionCls = 'space-y-4';

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-800 mb-6">
          Please fill out all required fields. Or call (602) 253-9392 or email requestaquote@osinstall.com.
        </div>
      )}

      {/* Section 1: Your details */}
      <div className={sectionCls}>
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-[11px] font-bold font-mono">1</span>
          <span className="text-sm font-semibold text-[#1A1A1A]">Your details</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>First Name *</label>
            <input required name="first_name" className={fieldCls} value={state.first_name} onChange={e=>update('first_name', e.target.value)} placeholder="Jane" />
          </div>
          <div>
            <label className={labelCls}>Last Name *</label>
            <input required name="last_name" className={fieldCls} value={state.last_name} onChange={e=>update('last_name', e.target.value)} placeholder="Smith" />
          </div>
          <div>
            <label className={labelCls}>Title *</label>
            <input required name="title" className={fieldCls} value={state.title} onChange={e=>update('title', e.target.value)} placeholder="Project Manager" />
          </div>
          <div>
            <label className={labelCls}>Company *</label>
            <input required name="company" className={fieldCls} value={state.company} onChange={e=>update('company', e.target.value)} placeholder="Acme Corp" />
          </div>
          <div>
            <label className={labelCls}>Email *</label>
            <input required type="email" name="email" className={fieldCls} value={state.email} onChange={e=>update('email', e.target.value)} placeholder="jane@acme.com" />
          </div>
          <div>
            <label className={labelCls}>Phone Number *</label>
            <input required type="tel" name="phone" className={fieldCls} value={state.phone} onChange={e=>update('phone', e.target.value)} placeholder="(555) 000-0000" />
          </div>
        </div>
      </div>

      <div className="border-t border-dashed border-[#EAEAEA] my-7" />

      {/* Section 2: Project details */}
      <div className={sectionCls}>
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-[11px] font-bold font-mono">2</span>
          <span className="text-sm font-semibold text-[#1A1A1A]">Project details</span>
        </div>
        <div>
          <label className={labelCls}>Product Description *</label>
          <textarea required rows={4} name="product_description" className={fieldCls} value={state.product_description} onChange={e=>update('product_description', e.target.value)} placeholder="Brief overview of scope, timeline, or any special requirements..." />
          <p className="mt-1.5 text-xs text-[#8A8A8A]">Please include any details that may be critical for accurate pricing (over-time, stair-carry, etc).</p>
        </div>
        <div>
          <label className={labelCls}>Attachments <span className="normal-case tracking-normal font-normal">(optional — PDF, JPG, PNG, DOCX, XLSX, max 10MB each, up to 5 files)</span></label>
          <div
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition ${dragOver ? 'border-[#6AA63F] bg-[#E8F4DC]/30' : 'border-[#EAEAEA] hover:border-[#6AA63F]'}`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
          >
            <Icon name="Upload" className="w-6 h-6 mx-auto text-[#8A8A8A] mb-2" />
            <p className="text-sm text-[#8A8A8A]">Drag & drop files here, or click to browse</p>
            <input
              ref={fileInputRef}
              type="file"
              name="attachments"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.docx,.xlsx"
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
          </div>
          {state.attachments.length > 0 && (
            <div className="mt-3 space-y-2">
              {state.attachments.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[#4A4A4A] bg-[#F4F4F4] rounded-lg px-3 py-2">
                  <Icon name="File" className="w-4 h-4 shrink-0" />
                  <span className="truncate flex-grow">{f.name}</span>
                  <button type="button" onClick={() => removeFile(i)} className="text-[#8A8A8A] hover:text-red-500"><Icon name="X" className="w-3.5 h-3.5" /></button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <label className={labelCls}>How did you hear about us?</label>
          <select name="referral_source" className={fieldCls} value={state.referral_source} onChange={e=>update('referral_source', e.target.value)}>
            <option value="">— Select one —</option>
            <option value="Referral">Referral</option>
            <option value="Search engine">Search engine</option>
            <option value="Trade show">Trade show</option>
            <option value="Social media">Social media</option>
            <option value="Previous project">Previous project</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="border-t border-dashed border-[#EAEAEA] my-7" />

      {/* Submit */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Button type="submit" onClick={handleSubmit} size="lg" variant="primary">
          {status === 'submitting' ? 'Sending…' : 'Submit Request'}
        </Button>
        <p className="text-xs text-[#8A8A8A]">We'll respond within one business day.<br className="hidden sm:block" /> Or call <a className="underline text-[#6AA63F] hover:text-[#5A8E35]" href="tel:+16022539392">(602) 253-9392</a>.</p>
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
              <p className="text-[#4A4A4A] text-[15px] mb-6">We look forward to serving you — complete for immediate assistance.</p>
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
