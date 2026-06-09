import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from './Motion';
import Icon from './Icon';
import { Eyebrow, Green } from './Primitives';
import JotFormEmbed from './JotFormEmbed';

const QuoteCtx = createContext({ open: () => {} });
export const useQuote = () => useContext(QuoteCtx);

export function QuoteProvider({ children }) {
  const [open, setOpen] = useState(false);
  const ctx = { open: () => setOpen(true), close: () => setOpen(false) };
  return (
    <QuoteCtx.Provider value={ctx}>
      {children}
      <QuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </QuoteCtx.Provider>
  );
}

function QuoteModal({ isOpen, onClose }) {
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
            <div className="overflow-y-auto px-4 md:px-8 pb-6 md:pb-10">
              <JotFormEmbed domId="JotFormIFrame-modal" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
