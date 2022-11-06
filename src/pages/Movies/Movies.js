import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card from '../../components/Card/Card'
import '../Movies/Movies.scss'
import gallery from '../../assets/gallery.png'

const Movies = () => {
  // Endpoint to get the list of all the movies
  const baseURL = `https://api.themoviedb.org/3/search/movie?language=en-US&query=NASA&include_adult=false&1&api_key=${process.env.REACT_APP_IMDB_API_KEY}`

  const [moviesData, setMoviesData] = useState([])

  const handleGetMoviesData = async () => {
    try {
      let response = await axios.get(baseURL)
      setMoviesData(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetMoviesData()
  }, [])

  return (
    <section className="movies-container">
      {moviesData.map((data, index) => {
        return (
          <Card
            key={index}
            img={
              data.poster_path
                ? 'https://image.tmdb.org/t/p/original//' + data.poster_path
                : gallery
            }
            href={`/movie/${data.id}`}
            title={data.title}
            description={data.overview}
            popularity={data.popularity}
            releaseDate={data.release_date}
          />
        )
      })}
    </section>
  )
}

export default Movies
