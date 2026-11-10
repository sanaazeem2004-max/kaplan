import { BriefcaseBusiness, Clock3, Megaphone, Scale, FileSignature, ShieldOff, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import ArrowButton from './ArrowButton';
import { firm, practiceAreas, morePractice } from '../data/site';

const ICONS = {
  termination: BriefcaseBusiness, overtime: Clock3, whistle: Megaphone,
  discrimination: Scale, severance: FileSignature, noncompete: ShieldOff,
};

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="relative bg-ink-800 py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-line to-transparent" />
      <div className="container-site">
        <Reveal className="grid items-end gap-6 lg:grid-cols-[1.2fr_1fr_auto]">
          <div>
            <p className="eyebrow">Practice areas</p>
            <h2 className="h-section mt-5">How we fight <span className="accent">for you</span></h2>
          </div>
          <p className="max-w-md leading-relaxed text-mist">
            We represent employees across the full range of workplace and civil rights disputes — from the day
            something goes wrong all the way to the courtroom.
          </p>
          <div><ArrowButton href={firm.links.practiceAreas} target="_blank" rel="noopener noreferrer">View All</ArrowButton></div>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((p, i) => {
            const Icon = ICONS[p.key];
            return (
              <Reveal as="li" key={p.key} delay={(i % 3) * 90}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group relative flex h-full flex-col p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:bg-navy-700"
                >
                  <span className="absolute right-5 top-5 rounded-full border border-white/10 px-2.5 py-1 text-[0.7rem] font-semibold text-mist transition-colors group-hover:border-gold/50 group-hover:text-gold-light">
                    0{i + 1}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-serif text-[1.45rem] font-semibold">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{p.text}</p>
                  <span className="mt-7 flex items-center justify-between rounded-full bg-ink/70 py-2 pl-5 pr-2 text-sm font-semibold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                    <span>Learn More<span className="sr-only"> about {p.title}</span></span>
                    <span className="grid h-8 w-8 place-items-center rounded-full transition-transform duration-500 group-hover:-rotate-45">
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10 flex flex-wrap items-center gap-2.5">
          <span className="mr-2 text-sm font-semibold text-white/80">We also handle</span>
          {morePractice.map((m) => (
            <span key={m} className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-mist">{m}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
