import { Facebook, Instagram, Linkedin, Twitter, Phone, ArrowUp } from 'lucide-react';
import { Logo } from './Navbar';
import { firm, offices, practiceAreas } from '../data/site';

const SOCIAL_ICONS = { Facebook, Instagram, LinkedIn: Linkedin, 'X (Twitter)': Twitter };

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'Our Attorneys', href: '#attorneys' },
  { label: 'How It Works', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Resources', href: '#resources' },
  { label: 'Careers', href: firm.links.careers, external: true },
  { label: 'Press', href: firm.links.press, external: true },
];

function Col({ title, children }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{title}</h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function Footer() {
  const ext = { target: '_blank', rel: 'noopener noreferrer' };
  return (
    <footer className="border-t border-white/10 bg-ink-900 pt-16 text-sm">
      <div className="container-site grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.15fr_.65fr_.85fr_1.75fr] lg:gap-10">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs leading-relaxed text-mist">
            Employment &amp; civil rights law. Champions of employee rights, serving clients nationwide.
          </p>
          <a href={firm.phoneHref} className="mt-5 inline-flex items-center gap-2 font-semibold hover:text-gold-light">
            <Phone size={15} className="text-gold" aria-hidden="true" /> {firm.phoneDisplay}
          </a>
          <ul className="mt-6 flex gap-2.5">
            {firm.social.map((s) => {
              const Icon = SOCIAL_ICONS[s.label];
              return (
                <li key={s.label}>
                  <a href={s.href} {...ext} aria-label={`Kaplan Law Firm on ${s.label}`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gold hover:bg-gold hover:text-ink">
                    <Icon size={16} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <Col title="Navigate">
          <ul className="space-y-2.5">
            {NAV.map((n) => (
              <li key={n.label}><a href={n.href} {...(n.external ? ext : {})} className="text-mist transition-colors hover:text-white">{n.label}</a></li>
            ))}
          </ul>
        </Col>

        <Col title="Practice Areas">
          <ul className="space-y-2.5">
            {practiceAreas.map((p) => (
              <li key={p.key}><a href={p.href} {...ext} className="text-mist transition-colors hover:text-white">{p.title}</a></li>
            ))}
          </ul>
        </Col>

        <Col title="Offices">
          <ul className="grid gap-5 sm:grid-cols-2">
            {offices.map((o) => (
              <li key={o.city}>
                <address className="not-italic leading-relaxed text-mist">
                  <a href={o.href} {...ext} className="font-semibold text-white hover:text-gold-light">{o.city}</a>
                  <br />{o.lines[0]}<br />{o.lines[1]}
                </address>
              </li>
            ))}
          </ul>
        </Col>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-4 py-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kaplan Law Firm. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href={firm.links.privacy} {...ext} className="hover:text-white">Privacy Policy</a>
            <a href={firm.links.terms} {...ext} className="hover:text-white">Terms &amp; Conditions</a>
            <a href="#top" className="inline-flex items-center gap-1.5 font-semibold text-gold-light hover:text-gold">
              Back to top <ArrowUp size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="container-site pb-8 text-[0.7rem] leading-relaxed text-mist/70">
          No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. The
          information on this website is for general information only and is not legal advice.
        </p>
      </div>
    </footer>
  );
}
