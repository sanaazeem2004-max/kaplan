import { ArrowUpRight, CalendarDays } from 'lucide-react';
import Reveal from './Reveal';
import ArrowButton from './ArrowButton';
import { firm, posts } from '../data/site';

// Shares the deep-navy background with How It Works.
function Meta({ post }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-mist">
      <span className="rounded-full bg-gold/15 px-2.5 py-0.5 font-semibold text-gold-light">{post.tag}</span>
      <span className="inline-flex items-center gap-1.5"><CalendarDays size={13} aria-hidden="true" /><time dateTime={post.iso}>{post.date}</time></span>
    </p>
  );
}

export default function Resources() {
  const [lead, ...rest] = posts;
  return (
    <section id="resources" className="relative bg-deep py-20 sm:py-28">
      <div className="container-site">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              <span className="h-px w-7 bg-gold" aria-hidden="true" />Legal resources
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-[2.1rem] font-semibold leading-[1.12] sm:text-5xl">Know your rights at work</h2>
          </div>
          <ArrowButton variant="outline" href={firm.links.blog} target="_blank" rel="noopener noreferrer">All Articles</ArrowButton>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          {/* Lead story */}
          <Reveal as="article">
            <a href={lead.href} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="overflow-hidden rounded-2xl shadow-[0_20px_50px_-25px_rgba(0,0,0,.8)]">
                <img src={lead.image} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-6"><Meta post={lead} /></div>
              <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug transition-colors group-hover:text-gold-light sm:text-3xl">{lead.title}</h3>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-light">
                Read More <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </a>
          </Reveal>

          {/* List */}
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {rest.map((p, i) => (
              <Reveal as="li" key={p.href} delay={i * 100}>
                <article>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="group grid grid-cols-[96px_1fr] gap-5 py-6 sm:grid-cols-[140px_1fr]">
                    <div className="overflow-hidden rounded-xl">
                      <img src={p.image} alt="" loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div>
                      <Meta post={p} />
                      <h3 className="mt-2.5 font-serif text-lg leading-snug transition-colors group-hover:text-gold-light">{p.title}</h3>
                      {p.byline && <p className="mt-1.5 text-xs text-mist">By {p.byline}</p>}
                      <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-light">
                        Read More <ArrowUpRight size={14} aria-hidden="true" />
                      </span>
                    </div>
                  </a>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
