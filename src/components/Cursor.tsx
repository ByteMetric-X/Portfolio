import { useEffect, useRef } from 'react'

/** Small dot + trailing ring that reacts to hoverable elements. Desktop only. */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    let ringX = 0,
      ringY = 0,
      mouseX = 0,
      mouseY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`
      }
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [data-cursor-hover]')
      if (ring.current) {
        ring.current.style.width = interactive ? '48px' : '28px'
        ring.current.style.height = interactive ? '48px' : '28px'
        ring.current.style.borderColor = interactive
          ? 'var(--color-fg)'
          : 'var(--color-fg-muted)'
      }
    }

    let raf = 0
    const tick = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ring.current) {
        ring.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
