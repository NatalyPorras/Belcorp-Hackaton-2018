import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, link, image, logo }) => {
  return (
    <div className="card">
      <img className="overlay image-fluid" src={image} alt={`Portada de catálogo de ${title}`} />
      <div className="mask flex-center rgba-white">
        <img src={logo} alt={`Logo de ${title}`}/>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <Link to={`/${link}`} className={`btn btn-primary`}>Catálogo</Link>
      </div>
    </div>
  )
}

export default Card;