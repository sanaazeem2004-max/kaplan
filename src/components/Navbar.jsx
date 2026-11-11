import { useEffect, useState } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { firm } from '../data/site';

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'Our Attorneys', href: '#attorneys' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export function Logo({ className = '' }) {
  return (
    <a href="#top" className={`flex items-center gap-3 ${className}`} aria-label="Kaplan Law Firm — back to top">
      <img src="/images/logo-sm.png" alt="" width="44" height="44" className="h-11 w-11 rounded-full bg-white/95 p-0.5" />
      <span className="leading-none">
        <span className="block font-serif text-[1.35rem] font-semibold tracking-wide">KAPLAN</span>
        <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-gold-light">Law Firm</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const close = () => mq.matches && setOpen(false);
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'border-b border-white/5 bg-ink/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-site flex h-[76px] items-center justify-between gap-6" aria-label="Primary">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="group relative text-sm font-medium text-white/80 transition-colors hover:text-white">
                {n.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={firm.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-gold-light">
            <Phone size={15} className="text-gold" aria-hidden="true" /> {firm.phoneDisplay}
          </a>
          <a href="#contact" className="btn-gold">
            Speak With an Attorney
            <span className="btn-dot" aria-hidden="true"><ArrowUpRight size={18} /></span>
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[calc(100vh-76px)] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="container-site flex h-[calc(100vh-76px)] flex-col pb-8 pt-4">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {NAV.map((n, i) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-serif text-2xl"
                >
                  {n.label}
                  <span className="text-xs font-sans text-gold">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-3">
            <a href="#contact" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="btn-gold w-full justify-between">
              Speak With an Attorney
              <span className="btn-dot" aria-hidden="true"><ArrowUpRight size={18} /></span>
            </a>
            <a href={firm.phoneHref} tabIndex={open ? 0 : -1} className="btn-ghost w-full justify-center">
              <Phone size={16} aria-hidden="true" /> Call {firm.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
