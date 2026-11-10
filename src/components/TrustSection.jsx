import { Landmark, Clock, ShieldCheck, Globe2 } from 'lucide-react';
import Reveal from './Reveal';

// Every point here is stated on kaplanlawatx.com (home, /about, /speak-to-an-attorney).
const ITEMS = [
  { icon: Landmark, big: 'State & Federal', label: 'Courts where our attorneys litigate clients’ cases' },
  { icon: Clock, big: '24 Hours', label: 'To hear back after you submit an intake form' },
  { icon: ShieldCheck, big: '100%', label: 'Confidential — protected by attorney-client privilege' },
  { icon: Globe2, big: 'Nationwide', label: 'Clients served from Texas, Illinois & New Mexico' },
];

export default function TrustSection() {
  return (
    <section aria-label="Why clients trust Kaplan Law Firm" className="relative bg-ink py-14 sm:py-20">
      <div className="container-site">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, big, label }, i) => (
            <Reveal as="li" key={big} delay={i * 90} className="card group relative overflow-hidden px-3 py-5 text-center transition-colors duration-300 hover:border-gold/50 sm:p-6">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <Icon size={20} className="mx-auto text-gold" aria-hidden="true" />
              <p className="mt-3 font-serif text-lg font-semibold leading-tight sm:mt-4 sm:text-[1.7rem] sm:leading-none">{big}</p>
              <p className="mx-auto mt-2 max-w-[15rem] text-xs leading-relaxed text-mist sm:mt-3 sm:text-sm">{label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
