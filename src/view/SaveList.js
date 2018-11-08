import React, { Fragment } from 'react';
import Header from './Header';
// import { Link } from 'react-router-dom';
import Deco from '../assets/img/brocha-polvos-maquillaje.jpg'

const SaveList = () => (
    <Fragment>
        <Header />
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={Deco} />
                </div>
                <div className="col-8 mt-4">
                    <div className="mt-4">
                        <div className="mt-4 pt-4">
                            <p>Tu lista de pedidos fue enviada a tu consultora, muy pronto ella se comunicara contigo para coordinar la entrega.</p>
                            <p>¿Deseas la copia del pedido en tu correo?</p>
                            <button type="button" className="btn btn-danger">Sí</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </Fragment>
);

export default SaveList