import { useEffect, useState } from 'react'

export function useFinePointer() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setFine(pointer.matches)
    update()
    pointer.addEventListener('change', update)
    return () => pointer.removeEventListener('change', update)
  }, [])

  return fine
}
