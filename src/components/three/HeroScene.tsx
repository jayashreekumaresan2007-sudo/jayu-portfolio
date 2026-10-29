import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Group } from 'three'
import { useFinePointer } from '../../hooks/useFinePointer'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

function Sculpture({ reduced }: { reduced: boolean }) {
  const group = useRef<Group>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const fine = useFinePointer()

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((_, delta) => {
    if (!group.current) return
    const targetY = fine ? pointer.current.x * 0.35 : 0
    const targetX = fine ? pointer.current.y * 0.18 : 0
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.045
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.045
    if (!reduced) group.current.rotation.z += delta * 0.04
  })

  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.35, 0.03, 12, 80]} />
        <meshPhysicalMaterial color="#C7C7C7" metalness={0.85} roughness={0.22} />
      </mesh>
      <mesh rotation={[0.4, 0.2, 0.1]}>
        <torusGeometry args={[0.95, 0.025, 12, 64]} />
        <meshPhysicalMaterial
          color="#8A8C68"
          metalness={0.4}
          roughness={0.18}
          transmission={0.35}
          thickness={0.6}
          transparent
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.48, 0]} />
        <meshPhysicalMaterial color="#F4EFE4" metalness={0.2} roughness={0.35} />
      </mesh>
      <mesh position={[0.9, 0.45, 0.2]}>
        <octahedronGeometry args={[0.16, 0]} />
        <meshStandardMaterial color="#8A8C68" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  )
}

export default function HeroScene() {
  const reduced = usePrefersReducedMotion()

  return (
    <Canvas
      camera={{ position: [0, 0, 3.4], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 4, 2]} intensity={1.25} color="#F4EFE4" />
      <pointLight position={[-2, -1, 2]} intensity={0.7} color="#8A8C68" />
      <Sculpture reduced={reduced} />
    </Canvas>
  )
}
