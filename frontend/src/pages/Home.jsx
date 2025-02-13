import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState } from 'react'

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");


    const movies = [
        { id: 1, title: "Peter", release_date: "2023" },
        { id: 2, title: "wiki", release_date: "2024" },
        { id: 3, title: "peter and wiki", release_date: "2025" }
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("--")
    }

    return (
        <>
            <div className='home'>
                <form onSubmit={handleSearch} className='search-form'>
                    <input
                        type="text"
                        className='search-input'
                        placeholder='Search for movie ...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type='submit' className="search-button">Search</button>
                </form>
                <div className="movies-grid">
                    {movies.map((m) =>
                    (
                        <MovieCard movie={m} key={m.id} />
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default Home