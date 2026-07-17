import { Reveal } from './Reveal'

type Cert = { name: string; issuer: string; status: 'Completed' | 'In progress' }

const CERTS: Cert[] = [
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy / COMSATS',
    status: 'Completed',
  },
  {
    name: 'Microsoft Office Specialist: Associate',
    issuer: 'Microsoft (Office 2019)',
    status: 'Completed',
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera',
    status: 'In progress',
  },
]

export function Certifications() {
  return (
    <section className="border-b border-line px-6 py-16 md:px-12 md:py-24">
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-muted">
          / learning
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-fg md:text-4xl">
          Certifications, alongside the coursework.
        </h2>
      </Reveal>

      <div className="mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c, i) => (
          <Reveal key={c.name} delay={0.06 + i * 0.06} className="h-full">
            <div className="flex h-full flex-col justify-between border border-line px-5 py-6">
              <h3 className="font-display text-base leading-snug text-fg">{c.name}</h3>
              <div className="mt-6 flex items-end justify-between gap-3">
                <p className="font-mono text-[11px] text-fg-muted">{c.issuer}</p>
                <span
                  className={`whitespace-nowrap font-mono text-[10px] uppercase tracking-widest ${
                    c.status === 'Completed' ? 'text-fg-muted' : 'text-fg-dim'
                  }`}
                >
                  {c.status}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
