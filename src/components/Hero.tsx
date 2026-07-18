import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { ForecastCanvas } from './ForecastCanvas'

const HEADLINE_WORDS = [
  'Data', 'analyst', 'turning', 'raw', 'business', 'data', 'into',
  'forecasts', 'and', 'dashboards', '—', 'built', 'faster', 'with',
  'AI-assisted', 'tooling.',
]

export function Hero() {
  const scope = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.word', {
        yPercent: 110,
        opacity: 0,
        duration: 0.9,
        ease: 'expo.out',
        stagger: 0.035,
        delay: 0.2,
      })
    }, scope)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="top"
      ref={scope}
      className="relative flex min-h-[75vh] flex-col justify-center overflow-hidden border-b border-line px-6 pb-16 pt-32 md:min-h-screen md:justify-end md:px-12 md:pb-24"
    >
      <ForecastCanvas />

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-6 font-mono text-xs uppercase tracking-widest text-fg-muted"
        >
          Hassan / Business Data Analyst
        </motion.p>

        <h1 className="text-balance max-w-4xl overflow-hidden font-display text-[9vw] font-medium leading-[0.98] tracking-tight text-fg md:text-[5.2vw]">
          {HEADLINE_WORDS.map((w, i) => (
            <span key={i} className="mr-[0.28em] inline-block overflow-hidden last:mr-0">
              <span className="word inline-block">{w}</span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            data-cursor-hover
            className="border border-fg px-6 py-3 font-mono text-xs uppercase tracking-widest text-fg transition-colors hover:bg-fg hover:text-bg"
          >
            View work
          </a>
          <a
            href="#contact"
            data-cursor-hover
            className="px-6 py-3 font-mono text-xs uppercase tracking-widest text-fg-muted transition-colors hover:text-fg"
          >
            Get in touch →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
