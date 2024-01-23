import { useEffect } from 'react'
import { EVENTS } from '../Consts'

export function useNavigate (setCurrentLocation) {
  const navigate = (href) => {
    window.history.pushState({}, '', href)

    const navigationEvent = new Event(EVENTS.PUSHSTATE)

    window.dispatchEvent(navigationEvent)
  }

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentLocation(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return { navigate }
}
