import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './view/Home';
import Esika from './view/Esika';
import LBel from './view/LBel';
import Cyzone from './view/Cyzone';
import ShopList from './view/ShopList';
import * as Data from './data/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: {},
      orderList: []
    }
  }

  addItem = (item) => this.setState({ orderList: [...this.state.orderList, item] })

  addCount = (id) => this.setState({
    orderList: this.state.orderList.map(item => {
      if (item.id === id) item.count++;
      return item
    })
  })

  removeItem = (index) => {
    const { orderList } = this.state;
    orderList.splice(index, 1);
    this.setState({ orderList });
  }

  reduceCount = (id, index) => this.setState({
    orderList: this.state.orderList.map(item => {
      if (item.id === id) item.count--;
      if (item.count === 0) this.removeItem(index)
      return item
    })
  })

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
            render={() => <Home data={this.state.brands} />}
          />
          <Route
            path='/esika'
            exact
            render={() => <Esika data={esika} addItem={this.addItem} addCount={this.addCount} reduceCount={this.reduceCount} />}
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
            render={() => <ShopList orderList={this.state.orderList} />}
          />
        </Switch>
      </Router>
    )
  }
};


export default App;
