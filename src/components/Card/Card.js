import React from 'react'
import '../Card/Card.scss'
import { Link } from 'react-router-dom'

const Card = ({ img, href, title, description, popularity, releaseDate }) => {
  return (
    <div className="card-container">
      <Link to={href}>
        <div>
          <img src={img} alt="Movies" />
        </div>
        <h1 data-testid="card-title">{title}</h1>
        <h4>Description:</h4>
        <p data-testid="card-description">{description}</p>
        <p>
          Popularity: <em data-testid="card-popularity">{popularity}</em>
        </p>
        <p>
          Release Date: <em data-testid="card-release-date">{releaseDate}</em>
        </p>
      </Link>
    </div>
  )
}

export default Card
