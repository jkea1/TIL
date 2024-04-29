import { useEffect } from 'react'

export const useWindowScrollEvent = (listener) => {
  useEffect(() => {
    window.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])
}
