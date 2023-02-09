import React, { useEffect, useState } from 'react'
import './app.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

// 5e899f6e

const API_URL = 'http://www.omdbapi.com/?apikey=5e899f6e'
// const API_URL = 'https://api.npoint.io/5d673a6870459bcc031e'

export default function App() {
	const [listOfMovies, setListOfMovies] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	function searchMovies(title) {
        let search_url = `${API_URL}&s=${title}`
        console.log(search_url)

		fetch(search_url)
			.then((response) => response.json())
			.then((movies) => {
				setListOfMovies(movies.Search)
			})
			.catch((err) => console.log(err))
	}

	useEffect(() => {
		searchMovies('avengers')
	}, [])

	return (
		<div className="app">
			<h1>Movies</h1>

			<div className="search">
				<input
					type="text"
					placeholder="Enter a movie name"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<img srcSet={SearchIcon} alt="Search icon" onClick={() => searchMovies(searchTerm)}/>
			</div>

			{listOfMovies !== undefined ? (
				<div className="container">
					{listOfMovies.map((movie) => (
						<a href="#" key={movie.imdbID}><MovieCard movie={movie} /></a>
					))}
				</div>
			) : (
				<div className="empty">
                    <h2>Busque por um filme</h2>
				</div>
			)}
          
		</div>
	)
}
