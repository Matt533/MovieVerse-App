import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import './css/App.css'
import { MovieProvider } from './context/MovieContext'
import { Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

