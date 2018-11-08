import React, {Component, Fragment } from 'react';
import Header from './Header';
import StoresBelcorp from  './storesBelcorp';
import { Link } from 'react-router-dom'
// import Stores from './storesBelcorp';
 
class ShopList extends Component {
  constructor(){
    super();
    this.state={
      showComponentStore:false,

    }
  }

  handleStoresBelcorp = ()=>{
    console.log("onclick");
    if(!this.state.showComponentStore){
        this.setState({
            showComponentStore: true 
        })
    }else{
                this.setState({
            showComponentStore: false 
        })
    }
 }
  render(){
    const {orderList, reduceCount, addCount, removeItem, total} = this.props
    return(
      <Fragment className="container" >
      <Header itemsCount={orderList.length} />
      {
        orderList.map(({ title, consultantPrice, webPrice, count, img, id }, i) =>
          <div className="media p-3" key={i}>
            <img className="align-self-center image mr-3" src={img} height="120px" alt={title} />
            <div className="media-body">
              <h5 className="mt-0">{title}</h5>
              <div className="d-flex flex-direction-column">
                <p className="border-right m-3 p-3 
                ">
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
      <div className="bg-light ml-5 mt-5 mb-5">
        <span>Total Online <b className="ml-4">s/ {total}</b></span>
      </div>
      <div className="container">
        <div className="row">
          <button className="col-md-4 m-4 shadow btn btn-dark">Compra online</button>
          <button className="col-md-4 m-4 shadow btn btn-danger"><Link to="/Belcorp-Hackaton-2018/contact-a-consultant">Contactar consultora</Link></button>
          <button className="col-md-4 m-4 shadow btn btn-outline-dark" onClick={this.handleStoresBelcorp}>Buscar en tienda</button>
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