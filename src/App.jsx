import { useState } from 'react'
import { useNavigate } from './hooks/useNavigate'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'

function App () {
  const [currentLocation, setCurrentLocation] = useState(window.location.pathname)
  const { navigate } = useNavigate(setCurrentLocation)

  return (
    <main>
      {currentLocation === '/' && <HomePage onNavigate={navigate}/>}
      {currentLocation === '/about' && <AboutPage onNavigate={navigate}/>}
    </main>
  )
}

export default App
