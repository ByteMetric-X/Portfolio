import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { ForecastCanvas } from './ForecastCanvas'

const HEADLINE_WORDS = [
  'Data',
  'analyst',
  'turning',
  'business',
  'data',
  'into',
  'dashboards',
  'and',
  'forecasts,',
  'using',
  'AI-assisted',
  'development',
  'to',
  'deliver',
  'efficiently.',
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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-line px-6 pt-36 pb-24 md:px-12 lg:px-20"
    >
      <ForecastCanvas />

      <div className="relative z-10 max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-fg-muted"
        >
          Hassan • Business Data Analyst
        </motion.p>

        <h1 className="max-w-5xl overflow-hidden font-display text-[clamp(3rem,8vw,6.8rem)] font-medium leading-[0.96] tracking-[-0.04em] text-fg">
          {HEADLINE_WORDS.map((word, index) => (
            <span
              key={index}
              className="mr-[0.28em] inline-block overflow-hidden last:mr-0"
            >
              <span className="word inline-block">
                {word}
              </span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 max-w-2xl text-lg leading-8 text-fg-muted"
        >
          I build dashboards, forecasting models, and data-driven web
          applications that help businesses make faster, smarter decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.1,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-14 flex flex-wrap gap-5"
        >
          <a
            href="#work"
            data-cursor-hover
            className="rounded-full border border-fg px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-fg transition-all duration-300 hover:bg-fg hover:text-bg"
          >
            View Work
          </a>

          <a
            href="#contact"
            data-cursor-hover
            className="rounded-full border border-line px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-fg-muted transition-all duration-300 hover:border-fg hover:text-fg"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.8 }}
          className="mt-24 font-mono text-[10px] uppercase tracking-[0.4em] text-fg-muted"
        >
          Scroll ↓
        </motion.div>
      </div>
    </section>
  )
}
