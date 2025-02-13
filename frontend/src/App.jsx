import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';

function App() {

  const movieNumber = 1;

  const [count, setCount] = useState(0)



  return (
    <>
      <main className='main-contain'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  )
}





export default App
