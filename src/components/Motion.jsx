import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useRoute } from './Router';

export { motion, AnimatePresence, useScroll, useTransform, useReducedMotion };

export function FadeIn({ children, y = 24, delay = 0, duration = 0.7, once = true, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, delayChildren = 0.1, stagger = 0.1, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { delayChildren, staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, y = 32, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16,1,0.3,1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ to, duration = 1.6, suffix = '', className = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) { setVal(to); return; }
    let stopped = false;
    const el = ref.current;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !stopped) {
          stopped = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now-start)/(duration*1000));
            const eased = 1 - Math.pow(1-t, 3);
            setVal(Math.round(to * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration, reduced]);
  return <span ref={ref} className={`whitespace-nowrap ${className}`}>{val.toLocaleString()}{suffix}</span>;
}

export function TypingWord({
  words,
  color = '#2f7d44',
  typeSpeed = 65,
  deleteSpeed = 34,
  holdFull = 1500,
  holdEmpty = 350,
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing'); // 'typing' | 'deleting'
  const reduced = useReducedMotion();
  const { query } = useRoute();
  const isStatic = query.static === '1' || reduced;

  useEffect(() => {
    if (isStatic) return;
    const word = words[index % words.length];
    let delay;
    if (phase === 'typing') {
      delay = text.length < word.length ? typeSpeed : holdFull;
    } else {
      delay = text.length > 0 ? deleteSpeed : holdEmpty;
    }
    const id = setTimeout(() => {
      if (phase === 'typing') {
        if (text.length < word.length) setText(word.slice(0, text.length + 1));
        else setPhase('deleting');
      } else if (text.length > 0) {
        setText(word.slice(0, text.length - 1));
      } else {
        setIndex((i) => (i + 1) % words.length);
        setPhase('typing');
      }
    }, delay);
    return () => clearTimeout(id);
  }, [text, phase, index, words, isStatic, typeSpeed, deleteSpeed, holdFull, holdEmpty]);

  if (isStatic) {
    return <span className="whitespace-nowrap" style={{ color }}>{words[0]}</span>;
  }
  return (
    <span className="whitespace-nowrap" style={{ color }} aria-hidden="true">
      {text}
      <span className="typed-caret" />
    </span>
  );
}

export function MagneticButton({ children, className = '', strength = 0.18, ...rest }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18 });
  const sy = useSpring(my, { stiffness: 220, damping: 18 });

  const onMove = (e) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width/2;
    const cy = r.top + r.height/2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx,dy);
    if (dist < 140) {
      mx.set(dx*strength); my.set(dy*strength);
    } else { mx.set(0); my.set(0); }
  };
  const onLeave = () => { mx.set(0); my.set(0); };
  if (reduced) return <button ref={ref} className={className} {...rest}><span className="contents">{children}</span></button>;
  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
      {...rest}
    >
      <span className="contents">{children}</span>
    </motion.button>
  );
}
