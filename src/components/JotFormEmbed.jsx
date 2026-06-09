import { useEffect } from 'react';

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
    <iframe
      id={domId}
      title={title}
      allow="geolocation; microphone; camera; fullscreen; payment"
      src={`${FORM_ORIGIN}${FORM_ID}`}
      className={className}
      style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
      scrolling="no"
    />
  );
}
