import React, { Fragment } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom'

const handleStoresBelcorp = () =>{
  return(<Link to="/storesBelcorp" className="nav-link active" />)
}
const ShopList = ({ orderList, reduceCount, addCount, removeItem, total }) => {
 
  return (
    <Fragment className="container" >
      <Header />
      {
        orderList.map(({ title, consultantPrice, webPrice, count, img, id }, i) =>
          <div className="media p-3" key={i}>
            <img className="align-self-center image mr-3" src={img} height="120px" alt={title} />
            <div className="media-body">
              <h5 className="mt-0">{title}</h5>
              <div className="d-flex flex-direction-column">
                <p className="border-right m-3 p-3">
                  {webPrice}
                  <br />
                  Precio Online
                </p>
                <p className="mt-3 mb-3 pt-3 pb-3 text-danger">
                  {consultantPrice}
                  <br />
                  Precio comprando con consultora
                </p>
              </div>
              <div className="mt-0">
                <i className="fas fa-minus border p-2" onClick={()=>reduceCount(title, i)}></i>
                <span className="p-2">{count}</span>
                <i className="fas fa-plus border p-2" onClick={()=>addCount(id)}></i>
              </div>
            </div>
            <button type="button" className="close" onClick={()=>removeItem(i)}><span>×</span></button>
          </div>
        )
      }
      <div className="bg-light">
        <span>Total Online <b className="ml-4">s/ {total}</b></span>
      </div>
      <div className="container">
        <div className="row">
          <button className="col-md-4 m-4 shadow btn btn-dark">Compra online</button>
          <button className="col-md-4 m-4 shadow btn btn-danger">Conectar consultora</button>
          <button className="col-md-4 m-4 shadow btn btn-outline-dark" onClick={handleStoresBelcorp()}>Buscar en tienda</button>
        </div>
      </div>
    </Fragment>
  );
}

export default ShopList;