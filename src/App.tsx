import { Route, Routes } from 'react-router-dom'
import './App.css'
import TeachableMachine from './pages/TeachableMachine'
import Navigation from './pages/Navigation'
import Landing from './pages/Landing'
import About from './pages/About'
import PlantDescription from './pages/PlantDescription'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/plants/:id" element={<PlantDescription />} />
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<TeachableMachine />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </>
  )
}

export default App
