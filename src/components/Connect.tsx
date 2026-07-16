import type { LucideIcon } from 'lucide-react'
import { AtSign, Briefcase, SquareCode, UserRound } from 'lucide-react'
import { Reveal } from './Reveal'

const LINKS: { label: string; sub: string; href: string; icon: LucideIcon }[] = [
  { label: 'GitHub', sub: 'Code & repos', href: 'https://github.com/ByteMetric-X', icon: SquareCode },
  {
    label: 'LinkedIn',
    sub: 'Professional profile',
    href: 'https://www.linkedin.com/in/hassan-shahid-668a8041a',
    icon: UserRound,
  },
  {
    label: 'Upwork',
    sub: 'Hire me for a project',
    href: 'https://www.upwork.com/freelancers/~01319d1686c0ec36fa?mp_source=share',
    icon: Briefcase,
  },
  {
    label: 'Email',
    sub: 'heymehassan@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=heymehassan@gmail.com',
    icon: AtSign,
  },
]
export function Connect() {
  return (
    <Reveal delay={0.15}>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-muted">
        / elsewhere
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {LINKS.map((l) => {
          const Icon = l.icon
          const isMail = l.href.startsWith('mailto:')
          return (
            <a
              key={l.label}
              href={l.href}
              target={isMail ? undefined : '_blank'}
              rel={isMail ? undefined : 'noreferrer'}
              data-cursor-hover
              className="group flex items-center gap-3 border border-line bg-bg-raised px-4 py-4 transition-colors hover:border-fg-dim"
            >
              <Icon size={18} strokeWidth={1.5} className="shrink-0 text-fg-muted group-hover:text-fg" />
              <span className="min-w-0 flex-1">
                <span className="block font-display text-base text-fg">{l.label}</span>
                <span className="block truncate font-mono text-[11px] text-fg-dim">{l.sub}</span>
              </span>
              <span className="shrink-0 font-mono text-sm text-fg-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          )
        })}
      </div>
    </Reveal>
  )
}
