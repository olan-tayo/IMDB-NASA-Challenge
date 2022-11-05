import React, { useState, useEffect } from 'react'
import '../Movie/Movie.scss'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Movie = () => {
  const { id } = useParams()
  const [movieData, setMoviesData] = useState({})

  // function to get movie by id
  const handleGetMovieDetails = async () => {
    let response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=48b43c71c226d58239efb833d05ab17c`,
    )

    setMoviesData({
      image:
        ' https://image.tmdb.org/t/p/original//' + response.data.poster_path,
      title: response.data.title,
      tagline: response.data.tagline,
      overview: response.data.overview,
      vote_average: response.data.vote_average,
      total_votes: response.data.vote_count,
      status: response.data.status,
      imdb_link: response.data.imdb_id,
      budget: response.data.budget,
      production_countries: response.data.production_countries,
      genres: response.data.genres,
      languages: response.data.spoken_languages,
    })
  }

  useEffect(() => {
    handleGetMovieDetails()
  }, [])

  return (
    <div className="movie-container">
      <img src={movieData.image} alt="Movie" />
      <h2>
        <strong>Title: </strong>
        {movieData.title}
      </h2>
      <h2>
        <strong>Tagline: </strong> {movieData.tagline || 'N/A'}
      </h2>
      <h2>
        <strong>Overview: </strong> {movieData.overview}
      </h2>
      <h2>
        <strong>Vote Average: </strong> {movieData.vote_average}
      </h2>
      <h2>
        <strong>Total Vote: </strong> {movieData.total_votes}
      </h2>
      <h2>
        <strong>Status: </strong> {movieData.status}
      </h2>
      <h2>
        <strong>IMDB Link: </strong>
        <a
          href={'https://www.imdb.com/title/' + movieData.imdb_link}
          target="_blank"
          rel="noreferrer"
        >
          {movieData.imdb_link}
        </a>
      </h2>
      <h2>
        <strong>Budget: </strong> {movieData.budget}
      </h2>
      <h2>
        <strong>Production Countries: </strong>
      </h2>
      <ul>
        {movieData.production_countries
          ? movieData.production_countries.map(
              (productionCountriesData, index) => {
                return <li key={index}> {productionCountriesData.name}</li>
              },
            )
          : null}
      </ul>
      <h2>
        <strong>Genres: </strong>
      </h2>
      <ul>
        {movieData.genres
          ? movieData.genres.map((genresData, index) => {
              return <li key={index}> {genresData.name}</li>
            })
          : null}
      </ul>
      <h2>
        <strong>Languages: </strong>
      </h2>
      <ul>
        {movieData.languages
          ? movieData.languages.map((languagesData, index) => {
              return <li key={index}> {languagesData.name}</li>
            })
          : null}
      </ul>
    </div>
  )
}

export default Movie
