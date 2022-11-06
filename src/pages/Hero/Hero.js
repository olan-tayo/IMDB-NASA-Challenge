import React, { useState, useEffect, useCallback } from 'react'
import '../Hero/Hero.scss'
import axios from 'axios'
import moment from 'moment'

const Hero = () => {
  // Endpoint to get the hero date and image
  const baseURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`

  const [heroData, setHeroData] = useState({})

  const handleGetHeroData = useCallback(async () => {
    try {
      let response = await axios.get(baseURL)
      setHeroData({
        image: response.data.hdurl,
        date: response.data.date,
      })
    } catch (error) {}
  }, [baseURL])

  useEffect(() => {
    handleGetHeroData()
  }, [handleGetHeroData])

  return (
    <div className="hero-container">
      <h1>
        <span>NASA: </span>
        Picture of the Day
        <div>
          {moment(heroData.date).format('dddd') +
            ', ' +
            moment(heroData.date).format('LL')}
        </div>
      </h1>
      <img src={heroData.image} alt="Hero" />
    </div>
  )
}

export default Hero
