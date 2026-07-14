import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12"
      >
        <a
          href="#top"
          data-cursor-hover
          className="font-display text-sm tracking-widest text-fg uppercase"
        >
          Hassan
        </a>

        <nav className="hidden gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor-hover
              className="font-mono text-xs uppercase tracking-widest text-fg-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          data-cursor-hover
          className="hidden font-mono text-xs uppercase tracking-widest text-fg-muted transition-colors hover:text-fg md:block"
        >
          Resume ↓
        </a>

        <button
          type="button"
          data-cursor-hover
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex items-center justify-center text-fg md:hidden"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-bg px-6 md:hidden"
          >
            <nav className="flex flex-col divide-y divide-line border-t border-line">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  data-cursor-hover
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="py-6 font-display text-3xl text-fg"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.a
              href="/resume.pdf"
              data-cursor-hover
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 font-mono text-xs uppercase tracking-widest text-fg-muted"
            >
              Resume ↓
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
