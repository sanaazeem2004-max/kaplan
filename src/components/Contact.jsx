import { useState } from 'react';
import { Phone, MapPin, CalendarCheck, Lock, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { firm, offices } from '../data/site';

// Each option routes to the firm's real intake / booking page.
const PATHS = [
  { id: 'employment', label: 'Employment issue', hint: 'Termination, discrimination, wages, retaliation, whistleblowing', url: firm.links.employmentIntake },
  { id: 'civil', label: 'Civil rights matter', hint: 'Including police excessive force', url: firm.links.civilRightsIntake },
  { id: 'review', label: 'Document review', hint: 'Severance, non-compete or employment contract — book directly', url: firm.links.directBooking },
];

export default function Contact() {
  const [choice, setChoice] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const path = PATHS.find((p) => p.id === choice);
    if (!path) { setError('Please choose the option that best describes your matter.'); return; }
    window.location.assign(path.url);
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img src="/images/team.webp" alt="" className="h-full w-full object-cover opacity-[0.12] grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      </div>

      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 font-serif text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl">
            Your Rights Matter. <span className="accent inline-block pl-[0.07em]">Let’s Talk.</span>
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-mist">
            Tell us a little about your situation. An attorney reviews every intake, and we’ll contact you within
            24 hours to let you know whether an appointment is right for you.
          </p>

          <a href={firm.phoneHref} className="group mt-9 flex w-fit items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-gold text-ink transition-transform group-hover:scale-105">
              <Phone size={20} aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-xs uppercase tracking-[0.2em] text-mist">Call the firm</span>
              <span className="font-serif text-2xl transition-colors group-hover:text-gold-light">{firm.phoneDisplay}</span>
            </span>
          </a>

          <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {offices.map((o) => (
              <li key={o.city} className="flex gap-3">
                <MapPin size={17} className="mt-1 shrink-0 text-gold" aria-hidden="true" />
                <address className="not-italic text-sm leading-relaxed text-mist">
                  <a href={o.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-gold-light">{o.city}, {o.region}</a>
                  <br />{o.lines[0]}<br />{o.lines[1]}
                </address>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} noValidate className="card relative p-7 shadow-2xl shadow-black/50 sm:p-9" aria-labelledby="intake-title">
            <span aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <h3 id="intake-title" className="font-serif text-2xl font-semibold">Start your case review</h3>
            <p className="mt-2 text-sm text-mist">Choose what fits best and we’ll take you to the right secure form.</p>

            <fieldset className="mt-7" aria-describedby={error ? 'intake-error' : undefined}>
              <legend className="mb-3 text-sm font-semibold">What do you need help with?</legend>
              <div className="space-y-3">
                {PATHS.map((p) => (
                  <label key={p.id}
                    className={`flex cursor-pointer gap-4 rounded-xl border p-4 transition-colors ${
                      choice === p.id ? 'border-gold bg-gold/10' : 'border-white/10 hover:border-white/30'
                    }`}>
                    <input type="radio" name="matter" value={p.id} checked={choice === p.id}
                      onChange={() => { setChoice(p.id); setError(''); }}
                      className="mt-1 h-4 w-4 shrink-0 accent-[#c8922e]" />
                    <span>
                      <span className="block text-sm font-semibold">{p.label}</span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-mist">{p.hint}</span>
                    </span>
                  </label>
                ))}
              </div>
              {error && <p id="intake-error" role="alert" className="mt-3 text-sm text-red-300">{error}</p>}
            </fieldset>

            <button type="submit" className="btn-gold mt-7 w-full justify-between">
              Continue to Intake
              <span className="btn-dot" aria-hidden="true"><ArrowUpRight size={18} /></span>
            </button>

            <div className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-xs leading-relaxed text-mist">
              <p className="flex gap-2"><Lock size={14} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />Everything you share is kept confidential and protected by attorney-client privilege.</p>
              <p className="flex gap-2"><CalendarCheck size={14} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />Already know you want advice? <a href={firm.links.directBooking} className="font-semibold text-gold-light underline-offset-2 hover:underline">Book a paid appointment directly</a>.</p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
