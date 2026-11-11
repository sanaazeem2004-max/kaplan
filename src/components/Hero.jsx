import { Scale, ArrowRight, MapPin } from 'lucide-react';
import ArrowButton from './ArrowButton';
import { attorneys } from '../data/site';

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink pt-[76px]">
      {/* Atmosphere: navy glow + faint warm light, no figurative imagery behind the copy */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_75%_40%,rgba(26,43,77,.8),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_35%_at_10%_15%,rgba(200,146,46,.07),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(60%_60%_at_50%_40%,#000,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
      </div>

      {/* One shared frame: both columns stretch to the same top and bottom edge */}
      <div className="container-site grid items-stretch gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:pb-20 lg:pt-14">
        {/* Copy */}
        <div className="relative z-10 flex flex-col">
          <p className="eyebrow">Employment &amp; Civil Rights Law</p>
          <h1 className="mt-6 font-serif text-[2.6rem] font-semibold leading-[1.08] sm:text-6xl lg:text-[3rem] xl:text-[3.5rem]">
            <span className="block text-balance">Champions of Employee Rights.</span>
            <span className="accent mt-1 block pl-[0.07em] lg:whitespace-nowrap">Advocates for Justice.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            When your rights at work are violated, you deserve experienced attorneys who will listen,
            stand by you and fight for the justice you deserve.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ArrowButton href="#contact">Speak With an Attorney</ArrowButton>
            <a href="#practice-areas" className="btn-ghost">
              Explore Practice Areas <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          {/* Credibility tiles (verified facts only) */}
          <div className="mt-9 grid max-w-xl gap-4 sm:grid-cols-2">
            <a href="#attorneys" className="card group flex flex-col justify-between gap-4 p-5 transition-colors hover:border-gold/60">
              <span className="text-sm font-semibold"><span className="text-gold-light">A full team</span> of employee-side attorneys</span>
              <span className="flex items-center">
                {attorneys.slice(0, 4).map((a, i) => (
                  <img key={a.name} src={a.photo} alt="" className="h-10 w-10 rounded-full border-2 border-navy object-cover object-top" style={{ marginLeft: i ? -10 : 0 }} />
                ))}
                <span className="-ml-2.5 grid h-10 w-10 place-items-center rounded-full border-2 border-navy bg-gold text-ink transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </span>
            </a>
            <div className="card flex flex-col justify-between gap-3 p-5">
              <span className="flex items-baseline gap-2">
                <span className="font-serif text-4xl font-semibold">4</span>
                <span className="text-sm font-semibold text-gold-light">Offices</span>
              </span>
              <span className="flex items-start gap-2 text-xs leading-relaxed text-mist">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                Austin · Houston · Chicago · Albuquerque — serving clients nationwide
              </span>
            </div>
          </div>
        </div>

        {/* Portrait composition */}
        <div className="relative mx-auto h-[520px] w-full max-w-[520px] sm:h-[620px] lg:h-auto lg:max-w-none">
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[58%] rounded-t-full bg-gradient-to-b from-gold to-gold-dark" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[58%] rounded-t-full bg-[repeating-radial-gradient(circle_at_50%_100%,transparent_0_22px,rgba(5,7,12,.08)_22px_23px)]" />
          <div className="absolute inset-y-0 left-[12%] right-[12%] overflow-hidden rounded-t-full border border-white/10 shadow-2xl shadow-black/60">
            <img
              src="/images/austin-kaplan.webp"
              alt="Austin Kaplan, Founder and Managing Attorney of Kaplan Law Firm"
              className="h-full w-full object-cover object-top"
              fetchpriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
          </div>

          {/* Name plate */}
          <div className="absolute bottom-6 left-0 z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/85 py-3 pl-3 pr-5 backdrop-blur-md">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-ink"><Scale size={18} aria-hidden="true" /></span>
            <span className="leading-tight">
              <span className="block font-serif text-lg">Austin Kaplan</span>
              <span className="text-xs text-mist">Founder &amp; Managing Attorney</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
