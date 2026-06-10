import { useState } from 'react';
import { Link } from './Router';
import Icon from './Icon';
import { MagneticButton, CountUp } from './Motion';

export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-[1320px] px-6 md:px-10 ${className}`}>{children}</div>;
}

export function Section({ children, className = '', dark = false, id }) {
  return (
    <section id={id} className={`relative ${dark ? 'bg-[#0F1E3D] text-white' : ''} ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className = '', dark = false }) {
  return (
    <div className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${dark ? 'text-white/60' : 'text-[#4A4A4A]'} ${className}`}>
      <span className={`h-px w-8 ${dark ? 'bg-white/30' : 'bg-[#1A1A1A]/30'}`} />
      {children}
    </div>
  );
}

export function Button({ variant = 'primary', size = 'md', children, onClick, to, magnetic = true, className = '', iconRight = 'ArrowRight', type = 'button' }) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3.5 text-[15px]',
    lg: 'px-7 py-4 text-base',
  };
  const variants = {
    primary: 'bg-[#2f7d44] text-white hover:bg-[#276a39]',
    outlineDark: 'border border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white',
    outlineLight: 'border border-white/30 text-white hover:border-white hover:bg-white hover:text-black',
    ghost: 'text-[#1A1A1A] hover:text-[#2f7d44]',
    ghostLight: 'text-white/80 hover:text-white',
    dark: 'bg-[#1A1A1A] text-white hover:bg-[#2A2A2A]',
  };
  const cls = `inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#2f7d44] focus-visible:ring-offset-2 ${sizes[size]} ${variants[variant]} ${className}`;
  const inner = (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span key="label">{children}</span>
      {iconRight ? <Icon key="icon" name={iconRight} className="w-4 h-4" /> : null}
    </span>
  );
  if (to) {
    return <Link to={to} className={cls}>{inner}</Link>;
  }
  if (magnetic) {
    return <MagneticButton onClick={onClick} type={type} className={cls}>{inner}</MagneticButton>;
  }
  return <button onClick={onClick} type={type} className={cls}>{inner}</button>;
}

export function StatPill({ n, suffix = '', label, className = '' }) {
  return (
    <div className={`inline-flex items-baseline gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-2 whitespace-nowrap ${className}`}>
      <span className="font-display font-black text-lg text-[#1A1A1A]"><CountUp to={n} suffix={suffix} /></span>
      <span className="text-[13px] font-medium text-[#4A4A4A]">{label}</span>
    </div>
  );
}

export function SectionHeading({ eyebrow, children, sub, dark = false, align = 'left', maxW = 'max-w-3xl' }) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : ''} ${maxW}`}>
      {eyebrow && <Eyebrow dark={dark} className={align === 'center' ? 'justify-center' : ''}>{eyebrow}</Eyebrow>}
      <h2 className={`font-display font-black tracking-tight leading-[1.05] mt-4 text-4xl md:text-5xl lg:text-[56px] ${dark ? 'text-white' : 'text-[#1A1A1A]'}`}>
        {children}
      </h2>
      {sub && <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-[#4A4A4A]'} ${maxW}`}>{sub}</p>}
    </div>
  );
}

export function Green({ children }) {
  return <span className="text-[#2f7d44]">{children}</span>;
}

export function Placeholder({ className = '', label = 'PHOTO', caption, dark = false }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${dark ? 'bg-[#151515]' : 'bg-[#EEEEE8]'}`} style={{
        backgroundImage: dark
          ? 'repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 16px)'
          : 'repeating-linear-gradient(135deg, rgba(0,0,0,0.06) 0 2px, transparent 2px 16px)'
      }} />
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-6">
        <span className={`font-mono text-[10px] tracking-[0.3em] uppercase ${dark ? 'text-white/60' : 'text-black/50'}`}>{label}</span>
        {caption && <span className={`font-mono text-[11px] mt-1 text-center ${dark ? 'text-white/40' : 'text-black/40'}`}>{caption}</span>}
      </div>
    </div>
  );
}

export function ImgOrPlaceholder({ src, alt, caption, className = '', imgClassName = '', priority = false }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <Placeholder className={className} label="PHOTO" caption={caption || alt} />;
  return (
    <img
      src={src}
      alt={alt || ''}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      onError={() => setFailed(true)}
      className={`w-full h-full object-cover ${imgClassName}`}
    />
  );
}

export function OSILogo({ variant = 'dark', className = '' }) {
  if (variant === 'light') {
    // Dark/navy backgrounds: seat the white-background logo on a clean white chip
    return (
      <span className={`inline-flex items-center rounded-lg bg-white px-3 py-2 ${className}`}>
        <img src="/osi-logo-wave.jpg" alt="OSI — Office Systems Installation" className="h-9 w-auto" />
      </span>
    );
  }
  // Light backgrounds: multiply makes the white logo background blend seamlessly into the surface
  return (
    <img
      src="/osi-logo-wave.jpg"
      alt="OSI — Office Systems Installation"
      className={`h-16 w-auto mix-blend-multiply ${className}`}
    />
  );
}
