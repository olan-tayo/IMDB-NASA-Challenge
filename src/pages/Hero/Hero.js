import React, { useState, useEffect } from 'react'
import '../Hero/Hero.scss'
import axios from 'axios'
import moment from 'moment'

const Hero = () => {
  // Endpoint to get the hero date and image
  const baseURL = `https://api.nasa.gov/planetary/apod?api_key=SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR`
  const [heroData, setHeroData] = useState({})

  const handleGetHeroData = async () => {
    try {
      let response = await axios.get(baseURL)
      setHeroData({
        image: response.data.hdurl,
        date: response.data.date,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetHeroData()
  }, [])

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
