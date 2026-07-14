import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Bot,
  Code2,
  Database,
  DatabaseZap,
  GitBranch,
  Plug,
  Server,
  Sigma,
  SlidersHorizontal,
  SquareTerminal,
  Table2,
  TrendingUp,
} from 'lucide-react'
import { Reveal } from './Reveal'

type Skill = { name: string; icon: LucideIcon; core?: boolean }

const CLUSTERS: { label: string; icon: LucideIcon; skills: Skill[] }[] = [
  {
    label: 'Data Analytics & BI',
    icon: BarChart3,
    skills: [
      { name: 'Python', icon: Code2, core: true },
      { name: 'SQL', icon: Database, core: true },
      { name: 'Power BI / DAX', icon: BarChart3, core: true },
      { name: 'Statistical analysis', icon: Sigma },
      { name: 'Time series forecasting (SARIMAX)', icon: TrendingUp },
      { name: 'Data cleaning & visualization', icon: SlidersHorizontal },
    ],
  },
  {
    label: 'AI-Assisted Development',
    icon: Bot,
    skills: [
      { name: 'React / TypeScript', icon: Code2, core: true },
      { name: 'Node.js / Express', icon: Server, core: true },
      { name: 'API integration', icon: Plug },
      { name: 'LLM / OpenRouter integration', icon: Bot },
      { name: 'Supabase', icon: DatabaseZap },
    ],
  },
  {
    label: 'Tools & Platforms',
    icon: SquareTerminal,
    skills: [
      { name: 'Git & GitHub', icon: GitBranch, core: true },
      { name: 'VS Code', icon: SquareTerminal },
      { name: 'MySQL', icon: Database },
      { name: 'Excel', icon: Table2 },
    ],
  },
]

function SkillChip({ skill, delay }: { skill: Skill; delay: number }) {
  const Icon = skill.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      data-cursor-hover
      className={`group flex items-center gap-2 border px-3 py-2 font-mono text-xs transition-colors ${
        skill.core
          ? 'border-fg-dim text-fg hover:border-fg'
          : 'border-line text-fg-muted hover:border-fg-dim hover:text-fg'
      }`}
    >
      <Icon size={14} strokeWidth={1.75} className="shrink-0 opacity-70 group-hover:opacity-100" />
      <span>{skill.name}</span>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="border-b border-line px-6 py-16 md:px-12 md:py-24">
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-muted">
          / skills
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-fg md:text-4xl">
          Two disciplines, one workflow.
        </h2>
        <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-fg-muted">
          Highlighted tags mark what I reach for first — everything else is working
          knowledge I use regularly.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CLUSTERS.map((cluster, ci) => {
          const ClusterIcon = cluster.icon
          return (
            <Reveal key={cluster.label} delay={ci * 0.08} className="h-full">
              <div className="flex h-full flex-col border border-line bg-bg-raised p-6 md:p-7">
                <div className="mb-6 flex items-center gap-2.5 border-b border-line pb-5">
                  <ClusterIcon size={16} strokeWidth={1.75} className="text-fg-muted" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-fg-muted">
                    {cluster.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cluster.skills.map((s, i) => (
                    <SkillChip key={s.name} skill={s} delay={i * 0.04} />
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
