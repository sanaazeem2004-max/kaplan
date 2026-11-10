import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { firm, reviews } from '../data/site';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const total = reviews.list.length;
  const go = (d) => setI((v) => (v + d + total) % total);
  const r = reviews.list[i];

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="relative bg-ink py-20 sm:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Featured */}
        <Reveal>
          <p className="eyebrow">Client reviews</p>
          <h2 id="reviews-title" className="sr-only">What our clients say</h2>
          <Quote size={56} className="mt-8 text-gold/80" aria-hidden="true" />
          <blockquote>
            <p className="mt-4 font-serif text-3xl leading-[1.25] sm:text-[2.6rem]">
              “Everyone I dealt with at the firm was knowledgeable, helpful and operated with a{' '}
              <span className="accent">high degree of integrity.</span>”
            </p>
            <footer className="mt-7 flex items-center gap-3 text-sm">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <cite className="not-italic font-semibold">{reviews.featured.name}</cite>
            </footer>
          </blockquote>
          <a href={firm.links.reviews} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-10">
            Read all reviews <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>

        {/* Carousel */}
        <Reveal delay={120} className="flex flex-col">
          <div className="card relative flex min-h-[300px] flex-1 flex-col p-8 sm:p-10" aria-roledescription="carousel" aria-label="More client reviews">
            <div key={i} aria-live="polite" className="flex flex-1 flex-col animate-[fade_.5s_ease]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Worked with {r.about}</p>
              <p className="mt-5 flex-1 text-lg leading-relaxed text-white/90">“{r.quote}”</p>
              <p className="mt-6 font-serif text-xl">{r.name}</p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <p className="text-sm text-mist"><span className="font-semibold text-white">{String(i + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}</p>
              <div className="flex gap-2">
                <button type="button" onClick={() => go(-1)} aria-label="Previous review"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:bg-gold hover:text-ink">
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next review"
                  className="grid h-11 w-11 place-items-center rounded-full bg-gold text-ink transition-colors hover:bg-gold-light">
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-mist/80">Reviews reproduced verbatim from the firm’s reviews page.</p>
        </Reveal>
      </div>
    </section>
  );
}
