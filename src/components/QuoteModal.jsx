import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from './Motion';
import Icon from './Icon';
import { Eyebrow, Green } from './Primitives';

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
export function QuoteForm({ inline = false, prefill = {} }) {
  const quote = useQuote();
  const [state, setState] = useState({
    first_name: '', last_name: '', title: '', company: '',
    email: '', phone: '', description: '', lead_source: ''
  });
  const [errors, setErrors] = useState({});
  const [recaptchaError, setRecaptchaError] = useState('');

  const update = (k, v) => setState(s => ({ ...s, [k]: v }));

  useEffect(() => {
    if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const updateTimestamp = () => {
      const response = document.getElementById('g-recaptcha-response');
      if (response == null || response.value.trim() === '') {
        const captchaSettingsEl = document.querySelector('input[name="captcha_settings"]');
        if (captchaSettingsEl) {
          try {
            const elems = JSON.parse(captchaSettingsEl.value);
            elems.ts = JSON.stringify(new Date().getTime());
            captchaSettingsEl.value = JSON.stringify(elems);
          } catch (e) {
            // captcha_settings not yet rendered or malformed; skip this tick
          }
        }
      }
    };
    const intervalId = setInterval(updateTimestamp, 500);
    return () => clearInterval(intervalId);
  }, []);

  function handleSubmit(e) {
    const newErrors = {};
    if (!state.first_name.trim()) newErrors.first_name = true;
    if (!state.last_name.trim()) newErrors.last_name = true;
    if (!state.title.trim()) newErrors.title = true;
    if (!state.company.trim()) newErrors.company = true;
    if (!state.email.trim()) newErrors.email = true;
    if (!state.phone.trim()) newErrors.phone = true;
    if (!state.description.trim()) newErrors.description = true;

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
      return;
    }

    // In local dev, skip reCAPTCHA and Salesforce POST — redirect to thank-you page
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      e.preventDefault();
      quote.close();
      setTimeout(() => { window.location.hash = '/thank-you'; }, 100);
      return;
    }

    const recaptchaResponse = window.grecaptcha?.getResponse?.();
    if (!recaptchaResponse || recaptchaResponse.length === 0) {
      e.preventDefault();
      setRecaptchaError('Please complete the reCAPTCHA before submitting.');
      return;
    }

    setRecaptchaError('');
    setErrors({});
    // Native form POST proceeds — browser navigates to Salesforce, which redirects to retURL
  }

  const fieldCls = (field) => `w-full bg-white border rounded-xl px-4 py-3.5 text-[15px] focus:border-[#4aa25a] focus:ring-2 focus:ring-[#4aa25a]/20 outline-none transition placeholder:text-[#8A8A8A] ${errors[field] ? 'border-red-300' : 'border-[#EAEAEA]'}`;
  const labelCls = 'block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8A8A8A] mb-2';
  const sectionCls = 'space-y-4';

  return (
    <form
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dao00001Y21VT"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-0"
    >
      {/* Hidden Salesforce fields */}
      <input type="hidden" name="oid" value="00Dao00001Y21VT" />
      <input type="hidden" name="retURL" value="https://osi-website-seven.vercel.app/#/thank-you" />
      <input
        type="hidden"
        name="captcha_settings"
        defaultValue='{"keyname":"captchamaxim","fallback":"true","orgId":"00Dao00001Y21VT","ts":""}'
      />

      {Object.keys(errors).length > 0 && (
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
            <input required name="first_name" maxLength={40} className={fieldCls('first_name')} value={state.first_name} onChange={e=>update('first_name', e.target.value)} placeholder="Jane" />
          </div>
          <div>
            <label className={labelCls}>Last Name *</label>
            <input required name="last_name" maxLength={80} className={fieldCls('last_name')} value={state.last_name} onChange={e=>update('last_name', e.target.value)} placeholder="Smith" />
          </div>
          <div>
            <label className={labelCls}>Title *</label>
            <input required name="title" maxLength={40} className={fieldCls('title')} value={state.title} onChange={e=>update('title', e.target.value)} placeholder="Project Manager" />
          </div>
          <div>
            <label className={labelCls}>Company *</label>
            <input required name="company" maxLength={40} className={fieldCls('company')} value={state.company} onChange={e=>update('company', e.target.value)} placeholder="Acme Corp" />
          </div>
          <div>
            <label className={labelCls}>Email *</label>
            <input required type="email" name="email" maxLength={80} className={fieldCls('email')} value={state.email} onChange={e=>update('email', e.target.value)} placeholder="jane@acme.com" />
          </div>
          <div>
            <label className={labelCls}>Phone Number *</label>
            <input required type="tel" name="phone" maxLength={40} className={fieldCls('phone')} value={state.phone} onChange={e=>update('phone', e.target.value)} placeholder="(555) 000-0000" />
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
          <textarea required rows={5} name="description" maxLength={5000} className={fieldCls('description')} value={state.description} onChange={e=>update('description', e.target.value)} placeholder="Brief overview of scope, timeline, or any special requirements..." />
          <p className="mt-1.5 text-xs text-[#8A8A8A]">Please include any details that may be critical for accurate pricing (over-time, stair-carry, etc).</p>
          <p className="mt-2 text-sm text-gray-500">Need to send drawings, floor plans, or photos? Email them to <a href="mailto:requestaquote@osinstall.com" className="font-semibold text-[#0F1E3D] hover:text-[#4aa25a] transition">requestaquote@osinstall.com</a> after submitting this form.</p>
        </div>
        <div>
          <label className={labelCls}>How did you hear about us?</label>
          <select name="lead_source" className={fieldCls('')} value={state.lead_source} onChange={e=>update('lead_source', e.target.value)}>
            <option value="">— Select one —</option>
            <option value="Referral">Referral</option>
            <option value="Search engine">Search engine</option>
            <option value="Trade Show">Trade show</option>
            <option value="Social media">Social media</option>
            <option value="Previous project">Previous project</option>
            <option value="Existing client">Existing client</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="border-t border-dashed border-[#EAEAEA] my-7" />

      {/* reCAPTCHA */}
      <div className="mb-6">
        <div
          className="g-recaptcha"
          data-sitekey="6Ldl3_UsAAAAALKiS4R7PjqWxwBmHV7bxhsdeKfw"
        />
        {recaptchaError && <p className="text-red-600 text-sm mt-2">{recaptchaError}</p>}
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#4aa25a] focus-visible:ring-offset-2 px-7 py-4 text-base bg-[#4aa25a] text-white hover:bg-[#3d8f4e]"
        >
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            <span>Submit Request</span>
            <Icon name="ArrowRight" className="w-4 h-4" />
          </span>
        </button>
        <p className="text-xs text-[#8A8A8A]">We'll respond within one business day.<br className="hidden sm:block" /> Or call <a className="underline text-[#4aa25a] hover:text-[#3d8f4e]" href="tel:+16022539392">(602) 253-9392</a>.</p>
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
              <QuoteForm prefill={prefill} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
