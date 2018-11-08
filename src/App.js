import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './view/Home';
import Esika from './view/Esika';
import LBel from './view/LBel';
import Cyzone from './view/Cyzone';
import ShopList from './view/ShopList';
import ContactConsultant from './view/ContactConsultant';
import * as Data from './data/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: {},
      orderList: [],
      total: 0.00
    }
  }

  sumTotalOrder = (arr) => {
    let sum = 0;
    arr.forEach(({ webPrice, count }) => {
      const num = parseFloat(webPrice.split(' ')[1]);
      sum += num * count
    });
    this.setState({ total: sum.toFixed(2) })
  }

  addCount = (id) => {
    const { orderList } = this.state;
    orderList.forEach(item => {
      if (item.id === id) item.count++;
    })

    this.sumTotalOrder(orderList);
    this.setState({ orderList });
  }

  addItem = (item) => {
    const { orderList } = this.state;

    if (orderList.find(({ id }) => id === item.id)) {
      this.addCount(item.id)
    } else {
      orderList.push(item)
    }
    this.sumTotalOrder(orderList);
    this.setState({ orderList });
  }

  removeItem = (index) => {
    const { orderList } = this.state;
    orderList.splice(index, 1);
    this.sumTotalOrder(orderList);
    this.setState({ orderList });
  }

  reduceCount = (id, index) => {
    const { orderList } = this.state;
    orderList.forEach(item => {
      if (item.id === id) {
        item.count--;
        if (item.count === 0) {
          this.removeItem(index)
          // if (item.count === 0) item.count = 1;
        }
      }
    })
    this.sumTotalOrder(orderList);
    this.setState({ orderList });
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
            render={() => <Home data={this.state.brands} />}
          />
          <Route
            path='/esika'
            exact
            render={() => <Esika data={esika} addItem={this.addItem} itemsCount={this.state.orderList.length} />}
          />
          <Route
            path='/lbel'
            exact
            render={() => <LBel data={lbel} addItem={this.addItem} itemsCount={this.state.orderList.length} />}
          />
          <Route
            path='Belcorp-Hackaton-2018/cyzone'
            exact
            render={() => <Cyzone data={cyzone} itemsCount={this.state.orderList.length} />}
          />
          <Route
            path='/shoplist'
            exact
            render={() => <ShopList orderList={this.state.orderList} addItem={this.addItem} reduceCount={this.reduceCount} addCount={this.addCount} removeItem={this.removeItem} total={this.state.total} />}
          />
          <Route
            path='/contact-a-consultant'
            exact
            render={() => <ContactConsultant itemsCount={this.state.orderList.length} />}
          />
        </Switch>
      </Router>
    )
  }
};


export default App;
