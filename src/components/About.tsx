import { Reveal } from './Reveal'

const TIMELINE = [
  {
    year: '2024',
    title: 'Started Business Data Analytics at COMSATS',
    body:
      'Began formal coursework in data mining, statistics, and business analysis, while building a habit of turning classroom assignments into shippable, documented projects instead of one-off submissions.',
  },
  {
    year: '2025',
    title: 'Picked up AI-assisted development',
    body:
      'Started pairing data-analysis work with hands-on full-stack building — integrating LLM APIs, wiring up Supabase-backed apps, and using AI tooling to move from idea to working software faster.',
  },
  {
    year: '2025 — ongoing',
    title: 'Building Dice, a full-stack AI chat app',
    body:
      'Designing and shipping Dice end to end: authentication, persistence, a projects system with per-project instructions, and a considered interface — the largest independent build so far.',
  },
  {
    year: 'Now',
    title: 'Freelancing and formalizing the skill set',
    body:
      'Building an Upwork presence, working through the Google Data Analytics Professional Certificate, and consolidating everything — forecasting, dashboards, AI-assisted builds — into a coherent practice.',
  },
]

export function About() {
  return (
    <section id="about" className="border-b border-line px-6 py-16 md:px-12 md:py-24">
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-muted">
          / about
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-fg md:text-4xl">
          Trained in analytics, shaped by building things end to end.
        </h2>
      </Reveal>

      <div className="mt-16 max-w-3xl divide-y divide-line border-t border-line">
        {TIMELINE.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="grid grid-cols-1 gap-3 py-8 md:grid-cols-[140px_1fr]">
              <span className="font-mono text-xs uppercase tracking-widest text-fg-dim">
                {item.year}
              </span>
              <div>
                <h3 className="font-display text-lg text-fg md:text-xl">{item.title}</h3>
                <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-fg-muted">
                  {item.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
