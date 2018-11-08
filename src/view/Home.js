import React, { Component } from 'react';
import Logo from '../assets/img/Logo.PNG';
import esikaLogo from '../assets/img/esikaLogo.PNG';
import lbelLogo from '../assets/img/lbelLogo.PNG';
import cyzoneLogo from '../assets/img/cyzoneLogo.PNG';
import * as Data from '../data/data.json';

import MainCard from '../component/MainCard';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: {}
    }
  }

  componentWillMount() {
    this.setState({ brands: Data.default })
  }

  render() {
    const { esika, lbel, cyzone } = this.state.brands;
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
}

export default Home