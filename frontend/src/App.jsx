import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  const movieNumber = 1;

  const [count, setCount] = useState(0)



  return (
    <>
      {movieNumber === 2 ? (
        <MovieCard movie={{ title: "Peter", release_date: "2024" }} />
      ) : (
        <MovieCard movie={{ title: "wikiwiki", release_date: "2024" }} />
      )
      }
    </>
  )
}





export default App
