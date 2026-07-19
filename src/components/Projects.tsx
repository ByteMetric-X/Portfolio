import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './Reveal'

type Project = {
  slug: string
  name: string
  tag: string
  stack: string[]
  problem: string
  approach: string
  result: string
  links?: { label: string; href: string }[]
}

const PROJECTS: Project[] = [
  {
    slug: 'engro-forecast',
    name: 'ENGRO Stock Forecasting',
    tag: 'University group project',
    stack: ['Python', 'SARIMAX', 'pandas', 'statsmodels'],
    problem:
      'Forecast ENGRO\u2019s share price with a defensible, testable model rather than a curve-fit demo — for a 3-person university project.',
    approach:
      'Built and tuned a SARIMAX time series model on historical price data, validated on a held-out test window rather than in-sample fit.',
    result: 'RMSE \u2248 22 PKR on held-out test data.',
  },
  {
    slug: 'financial-extraction',
    name: 'Financial Data Extraction Pipeline',
    tag: 'Personal build',
    stack: ['Python', 'yfinance', 'openpyxl'],
    problem:
      'Manually pulling bulk historical price data for multiple tickers into a usable, shareable format was slow and repetitive.',
    approach:
      'Wrote a Python script using yfinance for bulk extraction, formatting output into clean, ready-to-use Excel workbooks.',
    result: 'Turns a multi-ticker manual pull into a single script run with formatted output.',
  },
  {
    slug: 'dice',
    name: 'Dice',
    tag: 'Personal build — in progress',
    stack: ['Vite', 'React', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'OpenRouter'],
    problem:
      'Wanted a full-stack AI chat app with real persistence and per-project system instructions, not a wrapper around a single prompt.',
    approach:
      'Built auth and chat persistence on Supabase, a conversations sidebar with auto-titling, and a Projects feature for scoped system instructions, integrated with OpenRouter for model access.',
    result: 'A working full-stack app covering auth, persistence, and a custom project system — currently local and private.',
    links: [{ label: 'GitHub', href: 'https://github.com/ByteMetric-X' }],
  },
]

export function Projects() {
  const [open, setOpen] = useState<string | null>(PROJECTS[0].slug)

  return (
    <section id="work" className="scroll-mt-20 border-b border-line px-6 pt-10 pb-14 md:px-12 md:pt-14 md:pb-20">
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-muted">
          / work
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-fg md:text-4xl">
          Three things I&apos;ve actually built.
        </h2>
      </Reveal>

      <div className="mt-16 border-t border-line">
        {PROJECTS.map((p, i) => {
          const isOpen = open === p.slug
          return (
            <Reveal key={p.slug} delay={i * 0.05}>
              <div className="border-b border-line">
                <button
                  data-cursor-hover
                  onClick={() => setOpen(isOpen ? null : p.slug)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div>
                    <div className="mb-1 font-mono text-xs uppercase tracking-widest text-fg-dim">
                      /projects/{p.slug} — {p.tag}
                    </div>
                    <h3 className="font-display text-xl text-fg md:text-2xl">{p.name}</h3>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-2xl text-fg-muted"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-8 items-start pb-6 md:grid-cols-[1fr_1fr]">
                        <div className="space-y-5">
                          <div>
                            <p className="mb-1 font-mono text-xs uppercase tracking-widest text-fg-dim">
                              Problem
                            </p>
                            <p className="text-sm leading-relaxed text-fg-muted">{p.problem}</p>
                          </div>
                          <div>
                            <p className="mb-1 font-mono text-xs uppercase tracking-widest text-fg-dim">
                              Approach
                            </p>
                            <p className="text-sm leading-relaxed text-fg-muted">{p.approach}</p>
                          </div>
                          <div>
                            <p className="mb-1 font-mono text-xs uppercase tracking-widest text-fg-dim">
                              Result
                            </p>
                            <p className="text-sm leading-relaxed text-fg">{p.result}</p>
                          </div>
                        </div>
                        <div>
                          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-fg-dim">
                            Stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {p.stack.map((s) => (
                              <span
                                key={s}
                                className="border border-line px-2.5 py-1 font-mono text-xs text-fg-muted"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                          {p.links && (
                            <div className="mt-6 flex gap-4">
                              {p.links.map((l) => (
                                
                                  key={l.href}
                                  href={l.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  data-cursor-hover
                                  className="font-mono text-xs uppercase tracking-widest text-fg underline underline-offset-4"
                                >
                                  {l.label} ↗
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
