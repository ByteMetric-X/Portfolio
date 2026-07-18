import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { Reveal } from './Reveal'
import { Connect } from './Connect'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      message: String(data.get('message') || ''),
    }

    if (!supabase) {
      // No Supabase env vars configured yet — see README for setup.
      console.warn('Supabase is not configured; contact form cannot submit.')
      setStatus('error')
      return
    }

    setStatus('sending')
    const { error } = await supabase.from('contact_messages').insert(payload)
    if (error) {
      setStatus('error')
      return
    }
    setStatus('sent')
    form.reset()
  }

  return (
    <section id="contact" className="px-6 py-16 md:px-12 md:py-24">
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-muted">
          / contact
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-fg md:text-4xl">
          Working on something data-heavy? Let&apos;s talk.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
        <Reveal delay={0.1}>
          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-line px-6 py-8"
              >
                <p className="font-display text-lg text-fg">Message sent.</p>
                <p className="mt-2 text-sm text-fg-muted">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-widest text-fg-dim">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full border-b border-line bg-transparent py-2 text-fg outline-none focus:border-fg"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-widest text-fg-dim">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-b border-line bg-transparent px-1 py-3 text-fg outline-none focus:border-fg"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-widest text-fg-dim">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-none border-b border-line bg-transparent px-1 py-3 text-fg outline-none focus:border-fg"
                  />
                </div>

                {status === 'error' && (
                  <p className="font-mono text-xs text-fg-muted">
                    Couldn&apos;t send that — try again in a moment, or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  data-cursor-hover
                  className="w-full border-b border-line bg-transparent px-1 py-3 text-fg outline-none focus:border-fg"                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>

        <Connect />
      </div>
    </section>
  )
}
