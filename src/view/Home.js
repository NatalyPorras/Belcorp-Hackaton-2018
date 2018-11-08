import React from 'react';
import esikaLogo from '../assets/img/esikaLogo.PNG';
import lbelLogo from '../assets/img/lbelLogo.PNG';
import cyzoneLogo from '../assets/img/cyzoneLogo.PNG';
import Header from './Header'
import MainCard from '../component/MainCard';

const Home = ({ data: { lbel, esika, cyzone }, itemsCount }) => {


  return (
    <div>
      <Header itemsCount={itemsCount} />
      <div className="container mt-4">
        <div className="card-deck">
          <MainCard title="ésika" image={esika.cover} link="/Belcorp-Hackaton-2018/esika" logo={esikaLogo} slogan="Tú y tu belleza lo pueden todo." />
          <MainCard title="L'BEL" image={lbel.cover} link="/Belcorp-Hackaton-2018/lbel" logo={lbelLogo} slogan="Belleza de verdad para mujeres de verdad." />
          <MainCard title="Cyzone" image={cyzone.cover} link="/Belcorp-Hackaton-2018/cyzone" logo={cyzoneLogo} slogan="Atrévete con actitud." />
        </div>
      </div>
    </div>
  );
}

export default Home