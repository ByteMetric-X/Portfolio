import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const TOP_THRESHOLD = 40

export function Nav() {
  const [atTop, setAtTop] = useState(true)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < TOP_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const el = headerRef.current
    if (!el) return

    const setNavHeight = () => {
      document.documentElement.style.setProperty('--nav-h', `${el.offsetHeight}px`)
    }
    setNavHeight()

    const observer = new ResizeObserver(setNavHeight)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -40, opacity: 0 }}
      animate={{
        y: 0,
        opacity: atTop ? 1 : 0,
        filter: atTop ? 'blur(0px)' : 'blur(8px)',
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: atTop ? 'auto' : 'none' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12"
    >
      <a href="#top" data-cursor-hover className="font-display text-sm tracking-widest text-fg uppercase">
        Hassan
      </a>
      <nav className="hidden gap-8 md:flex">
        {LINKS.map((l) => (
          
            key={l.href}
            href={l.href}
            data-cursor-hover
            className="font-mono text-xs uppercase tracking-widest text-fg-muted transition-colors hover:text-fg"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a href="/resume.pdf" data-cursor-hover className="font-mono text-xs uppercase tracking-widest text-fg-muted transition-colors hover:text-fg">
        Resume ↓
      </a>
    </motion.header>
  )
}
