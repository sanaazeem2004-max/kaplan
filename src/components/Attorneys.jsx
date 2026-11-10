import { ArrowUpRight, Quote } from 'lucide-react';
import Reveal from './Reveal';
import ArrowButton from './ArrowButton';
import { firm, founder, attorneys } from '../data/site';

export default function Attorneys() {
  return (
    <section id="attorneys" className="relative bg-ink py-20 sm:py-28">
      <div className="container-site">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Our attorneys</p>
            <h2 className="h-section mt-5 max-w-2xl">The people in your <span className="accent">corner</span></h2>
          </div>
          <a href={`${firm.links.about}#attorneys`} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            View the full team <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Founder feature */}
          <Reveal as="article" className="card grid overflow-hidden sm:grid-cols-[.9fr_1.1fr] lg:grid-cols-1 xl:grid-cols-[.9fr_1.1fr]">
            <div className="relative min-h-[340px] overflow-hidden">
              <img src={founder.photo} alt={`${founder.name}, ${founder.role}`} loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-[50%_15%]" />
              <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-ink">Founder</span>
            </div>
            <div className="flex flex-col p-7 sm:p-8">
              <h3 className="font-serif text-3xl font-semibold">{founder.name}</h3>
              <p className="mt-1 text-sm font-semibold text-gold-light">{founder.role}</p>
              <p className="mt-5 text-sm leading-relaxed text-mist">{founder.bio}</p>
              <blockquote className="mt-6 border-l-2 border-gold pl-4 font-serif text-lg italic leading-snug text-white/90">
                <Quote size={16} className="mb-1 text-gold" aria-hidden="true" />
                {founder.pull}
              </blockquote>
              <div className="mt-auto pt-7">
                <ArrowButton href={founder.href} target="_blank" rel="noopener noreferrer">
                  Read Austin’s Bio
                </ArrowButton>
              </div>
            </div>
          </Reveal>

          {/* Team grid */}
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {attorneys.map((a, i) => (
              <Reveal as="li" key={a.name} delay={(i % 3) * 80}>
                <a href={a.href} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-navy">
                    <img src={a.photo} alt={a.name} loading="lazy"
                      className="h-full w-full object-cover object-top grayscale-[35%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/95 via-ink/30 to-transparent p-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <p className="text-xs leading-snug text-white/90">{a.note}</p>
                    </div>
                  </div>
                  <p className="mt-3 flex items-start justify-between gap-2 font-serif text-[1.02rem] leading-snug transition-colors group-hover:text-gold-light">
                    {a.name}
                    <ArrowUpRight size={15} className="mt-0.5 shrink-0 text-gold opacity-60 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </p>
                  <p className="text-xs text-mist">{a.role}</p>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
