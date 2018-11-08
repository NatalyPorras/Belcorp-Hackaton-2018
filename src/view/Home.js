import React from 'react';
import Logo from '../assets/img/Logo.PNG';
import esikaLogo from '../assets/img/esikaLogo.PNG';
import lbelLogo from '../assets/img/lbelLogo.PNG';
import cyzoneLogo from '../assets/img/cyzoneLogo.PNG';


import MainCard from '../component/MainCard';

const Home = ({ data: { lbel, esika, cyzone } }) => {
  return (
    <div>
      <nav>
        <img src={Logo} className="m-3" alt="Logo de Belcorp" />
      </nav>
      <div className="container">
        <div className="card-deck">
          <MainCard title="ésika" image={esika.cover} link="esika" logo={esikaLogo} />
          <MainCard title="L'BEL" image={lbel.cover} link="lbel" logo={lbelLogo} />
          <MainCard title="Cyzone" image={cyzone.cover} link="cyzone" logo={cyzoneLogo} />
        </div>
      </div>
    </div>
  );
}

export default Home