import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieCard movie={{ title: "Peter", release_date: "2024" }} />
      <MovieCard movie={{ title: "Wiki", release_date: "2024" }} />
    </>
  )
}





export default App
