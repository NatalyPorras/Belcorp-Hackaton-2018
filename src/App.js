import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './view/Home';
import Esika from './view/Esika';
import LBel from './view/LBel';
import Cyzone from './view/Cyzone';
import ShopList from './view/ShopList';

const App = () => (
  <Router>
    <Switch>
      <Route
        path='/'
        exact
        component={Home}
      />
      <Route
        path='/esika'
        exact
        component={Esika}
      />
      <Route
        path='/lbel'
        exact
        component={LBel}
      />
      <Route
        path='/cyzone'
        exact
        component={Cyzone}
      />
      <Route
        path='/shoplist'
        exact
        component={ShopList}
      />
    </Switch>
  </Router>
);


export default App;
