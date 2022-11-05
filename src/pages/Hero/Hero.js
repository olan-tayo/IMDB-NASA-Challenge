import React, { useState, useEffect } from 'react'
import classes from '../Hero/Hero.module.css'
import axios from 'axios'
import moment from 'moment'

const Hero = () => {
  //   const baseURL = ''
  const [heroData, setHeroData] = useState({})

  const handleGetHeroData = async () => {
    let response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR`,
    )

    setHeroData({
      image: response.data.hdurl,
      date: response.data.date,
    })
  }

  useEffect(() => {
    handleGetHeroData()
  }, [])
  return (
    <div className={classes.container}>
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
