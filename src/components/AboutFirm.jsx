import { Gavel, Compass } from 'lucide-react';
import Reveal from './Reveal';
import ArrowButton from './ArrowButton';
import { firm, founder } from '../data/site';

export default function AboutFirm() {
  return (
    <section id="about" className="relative bg-ink py-20 sm:py-28">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <Reveal className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl">
              <img src="/images/office.webp" alt="Austin Kaplan standing in the firm's office" loading="lazy"
                className="aspect-[3/4.4] h-full w-full object-cover object-[50%_30%] transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="mt-12 overflow-hidden rounded-2xl">
              <img src="/images/consult.webp" alt="An attorney reviewing case documents at her desk" loading="lazy"
                className="aspect-[3/4.4] h-full w-full object-cover object-[35%_50%] transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-[6px] border-ink bg-navy px-4 py-5 text-center shadow-2xl sm:w-44">
            <p className="font-serif text-4xl font-semibold text-gold-light">4</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em]">Offices in<br />3 states</p>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={120}>
          <p className="eyebrow">About the firm</p>
          <h2 className="h-section mt-5">
            Dedicated to protecting employee rights &amp; ensuring <span className="accent">workplace justice.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-mist">
            Kaplan Law Firm represents individuals in employment and civil rights matters. If your company is
            taking advantage of you, they likely have lawyers advising them — you don’t want to be caught
            flat-footed. We help cut through the fog: what’s unfair but not illegal, what is illegal and
            actionable, and the steps, outcomes and damages you might expect.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card p-5">
              <Gavel size={20} className="text-gold" aria-hidden="true" />
              <h3 className="mt-3 font-serif text-lg text-gold-light">Litigators at heart</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mist">Our attorneys litigate clients’ cases in state and federal court — including before juries.</p>
            </div>
            <div className="card p-5">
              <Compass size={20} className="text-gold" aria-hidden="true" />
              <h3 className="mt-3 font-serif text-lg text-gold-light">Clarity, fast</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mist">Book online — often as soon as the next day — with transparent rates and scheduling.</p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <ArrowButton href={firm.links.about} target="_blank" rel="noopener noreferrer">Our Firm</ArrowButton>
            <div className="flex items-center gap-3">
              <img src={founder.photo} alt="" className="h-12 w-12 rounded-full object-cover object-top" />
              <span className="leading-tight">
                <span className="block font-serif">{founder.name}</span>
                <span className="text-xs text-mist">{founder.role}</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
