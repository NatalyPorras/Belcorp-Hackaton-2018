import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './view/Home';
import Esika from './view/Esika';
import LBel from './view/LBel';
import Cyzone from './view/Cyzone';
import ShopList from './view/ShopList';
import * as Data from './data/data.json';

class App extends Component {
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
      <Router>
        <Switch>
          <Route
            path='/'
            exact
            render={()=><Home data={this.state.brands}/>}
          />
          <Route
            path='/esika'
            exact
            render={() => <Esika data={esika} />}
          />
          <Route
            path='/lbel'
            exact
            render={() => <LBel data={lbel} />}
          />
          <Route
            path='/cyzone'
            exact
            render={() => <Cyzone data={cyzone} />}
          />
          <Route
            path='/shoplist'
            exact
            render={() => <ShopList />}
          />
        </Switch>
      </Router>
    )
  }
};


export default App;
