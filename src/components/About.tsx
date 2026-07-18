import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="border-b border-line px-6 py-24 md:px-12 md:py-32">
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-muted">
          / about
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-fg md:text-4xl">
          Not exactly the plan.
        </h2>
      </Reveal>

      <div className="mt-12 max-w-2xl space-y-6 border-t border-line pt-10">
        <Reveal delay={0.05}>
          <p className="text-base leading-relaxed text-fg-muted">
            Hi, I'm Hassan. I'm a Business Data Analytics student at COMSATS working with
            dashboards, forecasting, and increasingly AI-assisted tooling, with a growing
            curiosity about data science.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-fg-muted">
            Every origin story needs a villain, and mine is merit lists. Fresh out of
            intermediate, I did what half of Pakistan does at eighteen: chased Computer
            Science and Cybersecurity for the promise of a good salary, not because I'd had
            some early love affair with code. It was the safe, high-demand bet.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-base leading-relaxed text-fg-muted">
            The year I applied, CS merit numbers went up like they'd read too many LinkedIn
            posts. I didn't make the cut anywhere, except one seat, in a program I'd ranked
            dead last on my list: Business Data Analytics.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-base leading-relaxed text-fg-muted">
            I could've waited a year and tried again. Instead, I enrolled, mostly to avoid
            burning twelve months on a gap year and a "we'll see" plan.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="text-base leading-relaxed text-fg-muted">
            Four semesters later, the joke's on eighteen-year-old me: I actually like this.
            Forecasting models, dashboards, the whole discipline of turning noise into a
            decision. That turned out to be the thing I didn't know I wanted, and I'm
            genuinely curious now about where data science takes it further.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="border-t border-line pt-6 font-display text-lg leading-relaxed text-fg">
            If you're stuck where I was: unsure, chasing the safe bet, picking your "last
            priority" option. That's a completely normal place to start. Keep going, keep
            building, and eventually the thing that excites you finds you. Everything after
            that is just history.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
