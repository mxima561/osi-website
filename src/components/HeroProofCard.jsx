import { motion, useReducedMotion } from 'framer-motion';
import Icon from './Icon';

const EASE = [0.16, 1, 0.3, 1];

const STATS = [
  { value: '20+', label: 'Years in Arizona', accent: false },
  { value: '80+', label: 'Field installers', accent: false },
  { value: '60,000', label: 'Sq ft secure warehouse', accent: true },
];

const CLIENTS = ['Coca-Cola', 'Western Alliance Bank', 'Hyatt Regency', 'CarMax', 'City of Phoenix', 'KPMG'];

export default function HeroProofCard() {
  const reduce = useReducedMotion();
  const anim = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, ease: EASE, delay },
        };

  return (
    <div className="relative w-full h-[560px] lg:h-[620px] rounded-2xl overflow-hidden bg-[#0F1E3D] text-white">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative h-full p-8 flex flex-col justify-between">

        {/* Google rating */}
        <motion.div {...anim(0.05)}>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="Star" className="w-[18px] h-[18px] fill-[#F5B400] text-[#F5B400]" strokeWidth={0} />
            ))}
          </div>
          <div className="mt-2 flex items-baseline gap-2.5">
            <span className="font-display font-black text-3xl leading-none">5.0</span>
            <span className="text-white/60 text-[13px]">Google &middot; 17 reviews</span>
          </div>
        </motion.div>

        {/* Proof stats */}
        <div className="flex flex-col gap-5">
          {STATS.map((s, i) => (
            <motion.div key={s.label} {...anim(0.18 + i * 0.07)}>
              <div className={`font-display font-black text-[40px] leading-none ${s.accent ? 'text-[#4aa25a]' : 'text-white'}`}>
                {s.value}
              </div>
              <div className="mt-1 font-mono uppercase text-white/55 text-[11px] tracking-[0.18em]">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trusted by + Arizona */}
        <motion.div {...anim(0.45)}>
          <div className="font-mono uppercase text-white/40 text-[10px] tracking-[0.2em]">Trusted by teams at</div>
          <p className="mt-2 text-white/55 text-[13px] leading-relaxed">
            {CLIENTS.map((name, i) => (
              <span key={name}>
                {name}
                {i < CLIENTS.length - 1 && <span className="text-white/20 mx-1.5">&middot;</span>}
              </span>
            ))}
          </p>
          <div className="mt-5 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4aa25a] animate-pulse" />
            <span className="font-mono uppercase text-[#4aa25a] text-[11px] tracking-[0.2em]">Arizona</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
