import { Route, Routes } from 'react-router-dom'
import './App.css'
import TeachableMachine from './pages/TeachableMachine'
import Navigation from './pages/Navigation'
import Landing from './pages/Landing'
import About from './pages/About'
import PlantDescription from './pages/PlantDescription'
import Services from './pages/Services'
import { ListOfPlants } from './pages/ListOfPlants'
import { ChatGpt } from './pages/ChatGpt'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/plants/:id" element={<PlantDescription />} />
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/model" element={<TeachableMachine />} />
        <Route path="/list" element={<ListOfPlants /> } />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
