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
        <div className="container-fluid p-0">
          <div className="row p-0 m-0">
            <div className="col-md-8 p-0">
              {
                orderList.length ?
                  orderList.map(({ title, consultantPrice, webPrice, count, img, id }, i) =>
                    <div className="d-flex justify-content-center p-3" key={i}>
                      <img className="align-self-center image mr-3" src={img} height="120px" alt={title} />
                      <div className="d-flex flex-column content">
                        <h5 className="mt-0">{title}</h5>
                        <div className="d-flex text-center fontBold">
                          <p className="border-right border-dark mr-3 pr-3">
                            {webPrice}
                            <br />
                            Precio
                            <br />
                            Online
                          </p>
                          <p className="text-danger">
                            {consultantPrice}
                            <br />
                            Precio contactando
                            <br />
                            a consultora
                          </p>
                        </div>
                        <div className="mt-0 align-self-center">
                          <i className="fas fa-minus border p-2" onClick={() => reduceCount(title, i)}></i>
                          <span className="p-2">{count}</span>
                          <i className="fas fa-plus border p-2" onClick={() => addCount(id)}></i>
                        </div>
                      </div>
                      <button type="button" className="close align-self-start" onClick={() => removeItem(i)}><span>×</span></button>
                    </div>
                  )
                  : <h1 className="p-md-3 mt-2 mb-2 mt-md-0 mb-md-0 mb-0 p-2 fontBhiso size">Empieza a añadir artículos a tu bolsa</h1>
              }
            </div>
            <div className="d-md-flex flex-md-column bg-conditionel justify-content-center col-md-4 p-0">
              <div className=" fontBold d-flex justify-content-between align-items-center bg-grey p-2 pr-4 pl-4 p-md-3 mt-3 mb-2 m-md-0">
                <span>Total Online </span> <span className="">S/ {total}</span>
              </div>
              {
                orderList.length ?
                  // <div className="container-fluid">
                  <div className="d-flex flex-column justify-content-sm-around flex-sm-row flex-md-column align-items-center">
                    <button className=" m-4 shadow btn-width btn btn-dark">Compra online</button>
                    <Link to="/contact-a-consultant" className=" m-4 btn-width shadow btn btn-danger">Contactar consultora</Link>
                    <button className=" m-4 shadow btn-width btn btn-light border border-dark" onClick={this.handleStoresBelcorp}>Buscar en tienda</button>
                  </div>
                  // </div>
                  : null
              }
            </div>
          </div>
          <div>
            {this.state.showComponentStore ? <StoresBelcorp /> : null}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ShopList;