import React from 'react';

const sumTotalOrder = (arr) => {
  let sum = 0;
  arr.forEach(({ wedPrice }) => sum += wedPrice);
  return sum
}

const ShopList = ({ orderList }) => {
  const total = sumTotalOrder(orderList);
  return (
    <div className="">
      <h3>Bolsa de compra</h3>
      {
        orderList.map(({ title, consultanPrice, wedPrice, count, img }) =>
          <div className="media p-3 border">
            <img className="align-self-center mr-3" src={img} />
            <div className="media-body">
              <h5>{title}</h5>
              <div className="d-flex flex-direction-column">
                <p className="border-right m-3 p-3">
                  {consultanPrice}
                  <br />
                  Precio Online
                </p>
                <p className="mt-3 mb-3 pt-3 pb-3 text-red">
                  {wedPrice}
                  <br />
                  Precio comprando con consultora
                </p>
              </div>
              <div>
                <i class="fas fa-minus border p-2"></i>
                <span>{count}</span>
                <i className="fas fa-plus border p-2"></i>
              </div>
            </div>
            <button type="button" class="close" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
        )
      }
      <div className="bg-light">
        <span>Total Online <b className="ml-4">{total}</b></span>
      </div>
      <div className="container">
        <div className="row">
          <button className="col-md-4 m-4 shadow btn btn-black">Compra online</button>
          <button className="col-md-4 m-4 shadow btn btn-red">Conectar consultora</button>
          <button className="col-md-4 m-4 shadow btn btn-white">Buscar en tienda</button>
        </div>
      </div>
    </div>

  );
}

export default ShopList;