export function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-4 px-6 py-8 font-mono text-xs uppercase tracking-widest text-fg-dim md:flex-row md:items-center md:px-12">
      <span>© {new Date().getFullYear()} Hassan</span>
    </footer>
  )
}
