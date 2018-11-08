import React, { Component } from 'react';
import Header from './Header';
import Mapa from '../assets/img/Captura.JPG'
class Stores extends Component {
    render(){
        return(
            <section>  
                <Header />
                <div className= "container">
                    <div className="row">
                        <h3>Nuestras Tiendas</h3>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Seleccionar país</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>Perú</option>
                        <option>Chile</option>
                        <option>Colombia</option>
                        </select>
                    </div>
                    <div>
                        <img src={Mapa} />
                    </div>
                </div>

            </section>
        )
    }
}

export default Stores;