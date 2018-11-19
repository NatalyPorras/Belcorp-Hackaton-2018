import React, { Fragment } from 'react';
import esikaLogo from '../assets/img/esikaLogo.PNG';
import lbelLogo from '../assets/img/lbelLogo.PNG';
import cyzoneLogo from '../assets/img/cyzoneLogo.PNG';
import Header from './Header'
import MainCard from '../component/MainCard';
import Icon from '../assets/icon/icon.png'

const Home = ({ data: { lbel, esika, cyzone }, itemsCount }) => {
  return (
    <Fragment>
      <Header itemsCount={itemsCount} />
      <div className="container mt-4">
        <div className="card-deck">
          <MainCard title="ésika" image={esika.cover} link="esika" logo={esikaLogo} slogan="Tú y tu belleza lo pueden todo." />
          <MainCard title="L'BEL" image={lbel.cover} link="lbel" logo={lbelLogo} slogan="Belleza de verdad para mujeres de verdad." />
          <MainCard title="Cyzone" image={cyzone.cover} link="cyzone" logo={cyzoneLogo} slogan="Atrévete con actitud." />
        </div>
        <h1 className="fontBhiso size text-danger mt-4">¿Cómo usar el catálogo virtual?</h1>
        <div className="d-flex align-items-center m-1">
          <i className="fas fa-location-arrow p-2 icon"></i>
          <p className="p-2 m-0 fontLi">Revisa los <span className="fontBhiso"><b>productos</b></span></p>
        </div>
        <div className="d-flex align-items-center m-1">
          <i className="p-3 icon m-0 shadow pulse-button position-static"></i>
          <p className="p-2 m-0 fontLi">Haz clic en el <span className="fontBhiso"><b> botón interactivo</b></span> para ver detalle</p>
        </div>
        <div className="d-flex align-items-center m-1">
          <img className="p-2 " height="45px" width="45px" src={Icon} alt="Bolsa"></img>
          <p className="p-2 m-0 fontLi">Agrega los productos a tu <span className="fontBhiso"><b>bolsa</b></span></p>
        </div>
        <div className="d-flex align-items-center m-1">
          <i className="far fa-check-square p-2 icon "></i>
          <p className="p-2 m-0 fontLi">Elige cualquiera de los <span className="fontBhiso"><b>3 canales</b></span> de compra</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Home