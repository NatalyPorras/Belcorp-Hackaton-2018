import React, { Component, Fragment } from 'react';
import Header from './Header';
import StoresBelcorp from './storesBelcorp';
import { Link } from 'react-router-dom'
// import Stores from './storesBelcorp';

class ShopList extends Component {
  constructor() {
    super();
    this.state = {
      showComponentStore: false,
    }
  }

  handleStoresBelcorp = () => {
    if (!this.state.showComponentStore) {
      this.setState({
        showComponentStore: true
      })
    } else {
      this.setState({
        showComponentStore: false
      })
    }
  }

  render() {
    const { orderList, reduceCount, addCount, removeItem, total } = this.props
    return (
      <Fragment>
        <Header itemsCount={orderList.length} />
        <div className="row m-0 p-0 bg-light">
          <div className="col-md-8 ml-3">
            {
              orderList.length ?
                orderList.map(({ title, consultantPrice, webPrice, count, img, id }, i) =>
                  <div className="d-flex align-items-start p-3" key={i}>
                    <img className="align-self-center image mr-3" src={img} height="120px" alt={title} />
                    <div className="">
                      <h5 className="mt-0">{title}</h5>
                      <div className="d-flex flex-direction-column fontBold">
                        <p className="border-right border-dark mr-3 pr-3">
                          {webPrice}
                          <br />
                          Precio Online
                        </p>
                        <p className="text-danger">
                          {consultantPrice}
                          <br />
                          Precio comprando con consultora
                        </p>
                      </div>
                      <div className="mt-0">
                        <i className="fas fa-minus border p-2" onClick={() => reduceCount(title, i)}></i>
                        <span className="p-2">{count}</span>
                        <i className="fas fa-plus border p-2" onClick={() => addCount(id)}></i>
                      </div>
                    </div>
                    <button type="button" className="close" onClick={() => removeItem(i)}><span>×</span></button>
                  </div>
                )
                : <h1 className="p-md-4 mt-3 mt-md-0 mb-0 p-2 fontBhiso size">Empieza a añadir artículos a tu bolsa</h1>
            }
          </div>
          <div className="col-md-3 fontBold d-flex align-items-center justify-content-between bg-grey p-2 pr-4 pl-4 p-md-4 mt-3 mb-2 m-md-0">
            <span>Total Online </span> <span className="">S/ {total}</span>
          </div>
        </div>
        <div className="container-fluid">
          <div className="d-flex justify-content-md-around flex-column flex-md-row align-items-center">
            <button className=" m-4 shadow btn-width btn btn-dark">Compra online</button>
            <Link to="/contact-a-consultant" className=" m-4 btn-width shadow btn btn-danger">Contactar consultora</Link>
            <button className=" m-4 shadow btn-width btn btn-outline-dark" onClick={this.handleStoresBelcorp}>Buscar en tienda</button>
          </div>
        </div>
        <div>
          {this.state.showComponentStore ? <StoresBelcorp /> : null}
        </div>
      </Fragment>
    )
  }
}

export default ShopList;