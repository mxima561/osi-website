import { useState } from 'react';
import { FadeIn } from '../components/Motion';
import { Section, Container, Eyebrow, Button, Green, ImgOrPlaceholder } from '../components/Primitives';
import FinalCTA from '../components/FinalCTA';
import { PROJECTS } from '../data/tokens';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const cats = ['All','Corporate','Healthcare','Higher Ed','Hospitality','Government'];
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);
  return (
    <>
      <Section className="bg-[#F9F9F5] pt-20 pb-20 md:pt-28 md:pb-28">
        <Container>
          <FadeIn>
            <Eyebrow>Projects</Eyebrow>
            <h1 className="mt-5 font-display font-black tracking-tight leading-[1.02] text-5xl md:text-6xl lg:text-7xl max-w-5xl">
              Projects That Show <Green>How We Work</Green>
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-[#4A4A4A] leading-relaxed">From corporate campuses to healthcare and higher education environments, OSI supports projects where coordination, speed, and execution matter.</p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-14 border-b border-[#EAEAEA] sticky top-[73px] z-30 bg-white/90 backdrop-blur-md">
        <Container>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {cats.map(c => (
              <button key={c} onClick={()=>setFilter(c)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold border transition ${filter===c ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#4A4A4A] border-[#EAEAEA] hover:border-[#1A1A1A]'}`}>{c}</button>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-20 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p,i) => (
              <FadeIn key={p.id} delay={(i%6)*0.05}>
                <div className="group">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#EEEEE8] relative">
                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                      <ImgOrPlaceholder src={p.img} alt={p.title} caption={p.placeholder ? 'PLACEHOLDER' : `PROJECT — ${p.title.toUpperCase()}`} />
                    </div>
                    <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-[#3D7A1C] text-xs font-semibold tracking-wider uppercase">{p.tag}</span>
                  </div>
                  <h3 className="mt-5 font-display font-bold text-xl tracking-tight group-hover:text-[#6AA63F] transition">{p.title}</h3>
                  <p className="mt-2 text-[15px] text-[#4A4A4A] leading-relaxed">{p.result}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA title={<>Have a project worth <Green>talking about?</Green></>} subtitle="Tell us about the scope, timing, and location. We'll come back with a real plan — not a templated proposal." />
    </>
  );
}
