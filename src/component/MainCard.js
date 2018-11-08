import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, link, image, logo, slogan }) => {
  return (
    <div className="card">
      <img className="overlay card-img-top" src={image} alt={`Portada de catálogo de ${title}`} />
      <div className="mask">
        <img src={logo} alt={`Logo de ${title}`}/>
        <p>{slogan}</p>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <Link to={`/${link}`} className={`btn btn-primary`}>Catálogo</Link>
      </div>
    </div>
  )
}

export default Card;