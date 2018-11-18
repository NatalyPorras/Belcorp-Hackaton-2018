import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, link, image, logo, slogan }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card mt-4">
        <img className="overlay card-img-top" src={image} alt={`Portada de catálogo de ${title}`} />
        <div className="mask">
          <img src={logo} alt={`Logo de ${title}`} />
          <p className="fontBhiso">{slogan}</p>
          <Link to={`/${link}`} className={`btn btn-primary`}>Ver catálogo</Link>
        </div>
      </div>
    </div>
  )
}

export default Card;