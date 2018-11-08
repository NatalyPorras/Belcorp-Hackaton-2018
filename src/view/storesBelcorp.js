import React, { Component } from 'react';
import Mapa from '../assets/img/Captura.JPG'
class Stores extends Component {
    render(){
        return(
            <section>  
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

                    <div>

                    </div>
                    <hr /> 
                    <div>
                    
                    </div>
                    <hr />
                    <div>
                    
                    </div>

                    <h4>Envia una copia de tu pedido a:</h4>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        <button type="button" class="btn btn-outline-dark">Dark</button>

                    </div>
                </div>

            </section>
        )
    }
}

export default Stores;