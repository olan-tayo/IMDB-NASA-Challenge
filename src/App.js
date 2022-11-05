import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Movie from './pages/Movie/Movie'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/" element={<LandingPage />} exact />
      </Routes>
    </div>
  )
}

export default App
