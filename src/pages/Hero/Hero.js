import React, { useState, useEffect, useCallback } from 'react'
import '../Hero/Hero.scss'
import axios from 'axios'
import moment from 'moment'
import hero_loader from '../../assets/hero-loader.png'

const Hero = () => {
  // Endpoint to get the hero date and image
  const baseURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`

  const [heroData, setHeroData] = useState({})
  const [loading, setLoading] = useState(true)

  // Get hero data which includes the date and the picture of the day from NASA
  const handleGetHeroData = useCallback(async () => {
    try {
      let response = await axios.get(baseURL)
      setHeroData({
        image: response.data.hdurl,
        url: response.data.url,
        date: response.data.date,
        media_type: response.data.media_type,
      })
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }, [baseURL])

  useEffect(() => {
    handleGetHeroData()
  }, [handleGetHeroData])

  return (
    <div className="hero-container">
      {/* Display loading image if data is being retrieved  */}
      {loading ? (
        <img src={hero_loader} alt="Hero" title="Loading" />
      ) : (
        <div>
          {/* Display loading image if the data media type is a video */}
          {heroData.media_type === 'video' ? (
            <>
              <img src={hero_loader} alt="Hero" title="Loading" />
            </>
          ) : (
            <>
              {/* Display picture of the day and date if the data media type is an image */}
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
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Hero
