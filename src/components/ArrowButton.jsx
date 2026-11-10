import { ArrowUpRight } from 'lucide-react';

/** Gold pill CTA with circular arrow badge (reference-style). */
export default function ArrowButton({ href, children, className = '', ...rest }) {
  return (
    <a href={href} className={`btn-gold ${className}`} {...rest}>
      {children}
      <span className="btn-dot" aria-hidden="true"><ArrowUpRight size={18} /></span>
    </a>
  );
}
