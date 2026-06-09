import { useEffect, useState } from 'react';

// OSI "Tell us about your project." quote form, hosted on JotForm
// (supports file uploads; routed to Salesforce + confirmation email via Zapier).
const FORM_ID = '261589143087162';
const FORM_ORIGIN = 'https://form.jotform.com/';
const HANDLER_SRC = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';

/**
 * Embeds the JotForm quote form and wires up JotForm's embed handler so the
 * iframe auto-resizes to the form's content height (no inner scrollbar).
 * `domId` lets the same form be embedded in more than one place (modal +
 * contact page) without duplicate element IDs.
 */
export default function JotFormEmbed({ domId = `JotFormIFrame-${FORM_ID}`, title = 'Tell us about your project.', className = '' }) {
  const [loaded, setLoaded] = useState(false);

  // Reveal the form once it has actually rendered. The iframe's own `load`
  // event is unreliable here (JotForm's embed handler rewrites the iframe src,
  // and cross-origin load events often don't fire), so we poll the iframe
  // height instead: once the handler resizes it past its initial 539px, the
  // form has rendered. A max-attempt cap guarantees the spinner never sticks.
  useEffect(() => {
    let done = false;
    let attempts = 0;
    const reveal = () => { if (!done) { done = true; setLoaded(true); } };
    const id = setInterval(() => {
      attempts += 1;
      const el = document.getElementById(domId);
      if (el && el.getBoundingClientRect().height > 560) { reveal(); clearInterval(id); }
      else if (attempts > 40) { reveal(); clearInterval(id); } // ~10s ultimate fallback
    }, 250);
    return () => clearInterval(id);
  }, [domId]);

  useEffect(() => {
    let cancelled = false;
    const runHandler = () => {
      if (cancelled || typeof window.jotformEmbedHandler !== 'function') return;
      window.jotformEmbedHandler(`iframe[id='${domId}']`, FORM_ORIGIN);
    };

    if (typeof window.jotformEmbedHandler === 'function') {
      runHandler();
      return () => { cancelled = true; };
    }

    let script = document.querySelector(`script[src='${HANDLER_SRC}']`);
    if (!script) {
      script = document.createElement('script');
      script.src = HANDLER_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener('load', runHandler);
    return () => { cancelled = true; script.removeEventListener('load', runHandler); };
  }, [domId]);

  return (
    <div className="relative min-h-[420px]">
      {/* The iframe is rendered once with fixed props and never re-touched by
          React — JotForm's handler mutates its src/height directly, and
          re-applying React-controlled props would break it. The spinner is a
          sibling overlay (state-driven), so toggling it never re-renders the
          iframe. */}
      <iframe
        id={domId}
        title={title}
        allow="geolocation; microphone; camera; fullscreen; payment"
        src={`${FORM_ORIGIN}${FORM_ID}`}
        className={className}
        style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
        scrolling="no"
      />
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#6E6E6E] bg-[#F9F9F5]">
          <span className="w-8 h-8 rounded-full border-2 border-[#EAEAEA] border-t-[#2f7d44] animate-spin" />
          <span className="text-sm">Loading the form…</span>
        </div>
      )}
    </div>
  );
}
