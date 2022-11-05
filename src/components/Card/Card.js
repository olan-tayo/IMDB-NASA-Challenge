import React from 'react'
import classes from '../Card/Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({ img, href, title, description, popularity, releaseDate }) => {
  return (
    <div className={classes.container}>
      <Link to={href}>
        <div>
          <img src={img} alt="" />
        </div>
        <h1>{title}</h1>
        <h4>Description:</h4>
        <p>{description}</p>
        <p>
          Popularity: <em>{popularity}</em>
        </p>
        <p>
          Release Date: <em>{releaseDate}</em>
        </p>
      </Link>
    </div>
  )
}

export default Card
