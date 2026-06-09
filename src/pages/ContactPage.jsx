import { useState } from 'react';
import { FadeIn } from '../components/Motion';
import { Section, Container, Eyebrow, Green } from '../components/Primitives';
import JotFormEmbed from '../components/JotFormEmbed';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const shipBlock = `Office Systems Installation\n[Your OSI project number here]\n135 E Watkins St\nPhoenix, AZ 85004`;
  return (
    <>
      <Section className="bg-[#F9F9F5] pt-20 pb-16 md:pt-28">
        <Container>
          <FadeIn>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 font-display font-black tracking-tight leading-[1.02] text-5xl md:text-6xl lg:text-7xl max-w-5xl">
              Let's talk about <Green>your project</Green>.
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-[#4A4A4A] leading-relaxed">Whether it's a single install, an ongoing support program, or a full facility transition — reach out and we'll respond within one business day.</p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#EAEAEA]">
                <h2 className="font-display font-bold text-2xl">Tell us about it</h2>
                <p className="mt-2 text-[#4A4A4A]">Fill this out and we'll route it to the right person on our team.</p>
                <div className="mt-6"><JotFormEmbed domId="JotFormIFrame-contact" /></div>
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-5 space-y-8" delay={0.1}>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E6E6E]">Call us</div>
                <a href="tel:+16022539392" className="mt-2 block font-display font-black text-4xl text-[#2f7d44] hover:text-[#276a39]">(602) 253-9392</a>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E6E6E]">Email</div>
                <a href="mailto:requestaquote@osinstall.com" className="mt-2 block font-display font-bold text-xl text-[#1A1A1A] hover:text-[#2f7d44]">requestaquote@osinstall.com</a>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E6E6E]">Office / Warehouse</div>
                  <p className="mt-2 text-[#1A1A1A] leading-relaxed">135 E Watkins St<br/>Phoenix, AZ 85004</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E6E6E]">Warehouse Hours</div>
                  <p className="mt-2 text-[#1A1A1A] leading-relaxed">Mon – Fri<br/>8:00 AM – 3:00 PM MST</p>
                  <p className="mt-2 text-xs text-[#6E6E6E]">Arizona: MST year-round. No DST shifts.</p>
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E6E6E]">Delivery & Receiving</div>
                <p className="mt-2 text-[#1A1A1A] leading-relaxed">Delivery appointments are required. Schedule with Receiving at <a className="underline" href="tel:+16022539392">(602) 253-9392</a> or <a className="underline" href="mailto:warehouse@ofms-az.com">warehouse@ofms-az.com</a>.</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E6E6E] mb-2">Shipping Instructions</div>
                <div className="bg-[#F4F4F4] rounded-xl p-5 relative">
                  <pre className="font-mono text-[13px] whitespace-pre-wrap text-[#1A1A1A]">{shipBlock}</pre>
                  <button
                    onClick={() => { navigator.clipboard.writeText(shipBlock); setCopied(true); setTimeout(()=>setCopied(false),1500); }}
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-white border border-[#EAEAEA] text-xs font-semibold hover:border-[#1A1A1A]">
                    {copied ? 'Copied ✓' : 'Copy'}
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="pb-20">
        <Container>
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl overflow-hidden border border-[#EAEAEA] aspect-[4/3] bg-[#F4F4F4]">
                <img src="/photos/osi-building.jpg" alt="OSI Arizona building" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#EAEAEA] aspect-[4/3] bg-[#F4F4F4]">
                <iframe
                  title="OSI Arizona location"
                  src="https://www.google.com/maps?q=135+E+Watkins+St,+Phoenix,+AZ+85004&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
