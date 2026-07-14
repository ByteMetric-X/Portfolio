import { useEffect, useRef } from 'react'

/**
 * Signature hero element: a continuously-drawing forecast line — a jagged
 * "historical" series that hands off to a smooth dashed "predicted" series
 * inside a softly pulsing confidence band. Direct visual reference to his
 * SARIMAX forecasting work, rendered in pure grayscale on canvas.
 */
export function ForecastCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0,
      height = 0,
      dpr = Math.min(window.devicePixelRatio || 1, 2)

    const POINTS = 64
    const SPLIT = 40 // index where "history" hands off to "forecast"
    let seed = Array.from({ length: POINTS }, () => Math.random())

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    let t = 0
    let raf = 0

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const stepX = width / (POINTS - 1)
      const midY = height * 0.55
      const amp = height * 0.16

      const values: number[] = []
      for (let i = 0; i < POINTS; i++) {
        const noise =
          Math.sin(i * 0.6 + seed[i] * 6) * 0.5 + Math.sin(i * 0.13 + t * 0.4) * 0.5
        values.push(midY - noise * amp)
      }

      // Confidence band (forecast region only), very low opacity
      ctx.beginPath()
      for (let i = SPLIT; i < POINTS; i++) {
        const spread = ((i - SPLIT) / (POINTS - SPLIT)) * height * 0.14
        const x = i * stepX
        const y = values[i] - spread
        i === SPLIT ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      for (let i = POINTS - 1; i >= SPLIT; i--) {
        const spread = ((i - SPLIT) / (POINTS - SPLIT)) * height * 0.14
        const x = i * stepX
        const y = values[i] + spread
        ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.fillStyle = 'rgba(242,240,234,0.045)'
      ctx.fill()

      // Historical line (solid)
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(242,240,234,0.55)'
      ctx.lineWidth = 1.4
      for (let i = 0; i <= SPLIT; i++) {
        const x = i * stepX
        const y = values[i]
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Forecast line (dashed)
      ctx.beginPath()
      ctx.setLineDash([5, 6])
      ctx.strokeStyle = 'rgba(242,240,234,0.4)'
      for (let i = SPLIT; i < POINTS; i++) {
        const x = i * stepX
        const y = values[i]
        i === SPLIT ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.setLineDash([])

      // Handoff marker
      const mx = SPLIT * stepX
      const my = values[SPLIT]
      ctx.beginPath()
      ctx.arc(mx, my, 2.5, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(242,240,234,0.8)'
      ctx.fill()

      if (!reduced) t += 0.006
      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  )
}
