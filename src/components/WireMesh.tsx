import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

function Wireframe() {
  const ref = useRef<Mesh>(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.06
    ref.current.rotation.y += delta * 0.09
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshBasicMaterial color="#f2f0ea" wireframe transparent opacity={0.35} />
    </mesh>
  )
}

/**
 * Quiet 3D detail, not a hero centerpiece: a slow-rotating wireframe
 * icosahedron, monochrome and untextured. Lazy-mounted by the caller.
 */
export function WireMesh() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null
  }
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <Wireframe />
    </Canvas>
  )
}
