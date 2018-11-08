import React from 'react';
import esikaLogo from '../assets/img/esikaLogo.PNG';
import lbelLogo from '../assets/img/lbelLogo.PNG';
import cyzoneLogo from '../assets/img/cyzoneLogo.PNG';
import Header from './Header'
import MainCard from '../component/MainCard';
import Icon from '../assets/icon/icon.png'

const Home = ({ data: { lbel, esika, cyzone }, itemsCount }) => {


  return (
    <div>
      <Header itemsCount={itemsCount} />
      <div className="container mt-4">
        <div className="card-deck">
          <MainCard title="ésika" image={esika.cover} link="esika" logo={esikaLogo} slogan="Tú y tu belleza lo pueden todo." />
          <MainCard title="L'BEL" image={lbel.cover} link="lbel" logo={lbelLogo} slogan="Belleza de verdad para mujeres de verdad." />
          <MainCard title="Cyzone" image={cyzone.cover} link="cyzone" logo={cyzoneLogo} slogan="Atrévete con actitud." />
        </div>
        <h4 className="fontBhiso size text-danger mt-4">¿Cómo usar el catálogo virtual?</h4>
        <p className="p-2 mb-0"><i className="fas fa-location-arrow p-2 icon m-1"></i>Revisa los <span className="fontBhiso"><b>productos</b></span></p>
        <p className="p-2 mb-0"><i className="p-2 icon m-1 shadow border border-dark rounded-circle pulse-button position-static"></i>Haz clic en el <span className="fontBhiso"><b> botón interactivo</b></span> para ver detalle</p>
        <p className="p-2 mb-0"><img className="p-2 m-1 " height="45px" src={Icon}></img>Agrega los productos a tu <span className="fontBhiso"><b>bolsa</b></span></p>
        <p className="p-2 mb-0"><i className="far fa-check-square p-2 icon m-1 "></i>Elige cualquiera de los <span className="fontBhiso"><b>3 canales</b></span> de compra</p>
      </div> 
    </div>
  );
}

export default Home