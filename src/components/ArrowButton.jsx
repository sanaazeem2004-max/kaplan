import { ArrowUpRight } from 'lucide-react';

/**
 * Pill CTA.
 * - variant="primary" (default): gold pill with circular arrow — reserved for contact actions only.
 * - variant="outline": quiet outlined pill for secondary navigation (View all, bios, articles).
 * - tone="light" adapts the outline variant for light backgrounds.
 */
export default function ArrowButton({ href, children, variant = 'primary', tone = 'dark', className = '', ...rest }) {
  if (variant === 'outline') {
    const toneCls = tone === 'light'
      ? 'border-ink/20 text-ink hover:border-bronze hover:text-bronze'
      : '';
    return (
      <a href={href} className={`btn-ghost ${toneCls} ${className}`} {...rest}>
        {children}
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    );
  }
  return (
    <a href={href} className={`btn-gold ${className}`} {...rest}>
      {children}
      <span className="btn-dot" aria-hidden="true"><ArrowUpRight size={18} /></span>
    </a>
  );
}
