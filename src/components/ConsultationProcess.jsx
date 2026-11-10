import { Info } from 'lucide-react';
import Reveal from './Reveal';
import ArrowButton from './ArrowButton';
import { steps } from '../data/site';

export default function ConsultationProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink-800 py-20 sm:py-28">
      <div aria-hidden="true" className="absolute -right-40 top-10 h-[420px] w-[420px] rounded-full border border-gold/10" />
      <div aria-hidden="true" className="absolute -right-24 top-28 h-[420px] w-[420px] rounded-full border border-gold/10" />

      <div className="container-site relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">How it works</p>
          <h2 className="h-section mt-5">Speak with an attorney in <span className="accent">three steps</span></h2>
          <p className="mt-5 leading-relaxed text-mist">
            Through client feedback, we built a streamlined process that gets your case in front of an attorney
            faster than most firms.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
          <span aria-hidden="true" className="absolute left-[calc(16.66%)] right-[calc(16.66%)] top-8 hidden h-px bg-gradient-to-r from-gold/70 via-gold/40 to-gold/70 lg:block" />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 140} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
              {i < steps.length - 1 && (
                <span aria-hidden="true" className="absolute left-8 top-16 h-[calc(100%-1.5rem)] w-px bg-gold/30 lg:hidden" />
              )}
              <span className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full border border-gold bg-ink font-serif text-xl text-gold-light shadow-[0_0_0_8px_#0b1020]">
                {s.n}
              </span>
              <div className="lg:mt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Step {i + 1}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist lg:mx-auto lg:max-w-xs">{s.text}</p>
                {s.aside && (
                  <p className="mt-4 inline-flex items-start gap-2 rounded-lg bg-navy/70 px-3 py-2 text-left text-xs leading-relaxed text-white/75">
                    <Info size={14} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                    {s.aside}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 flex justify-center">
          <ArrowButton href="#contact">Get Started</ArrowButton>
        </Reveal>
      </div>
    </section>
  );
}
