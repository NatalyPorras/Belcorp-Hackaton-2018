import React, { Component } from 'react';
import './storesBelcorp.css'
import MapConsultant from '../component/MapConsultant'

class Stores extends Component {
    constructor(){
        super();
        this.state={
            input:"",
            storesRetail: [
                {
                  name: 'ESIKA REAL PLAZA PRIMAVERA',
                  coordinates: {
                    lat: -12.1102146,
                    lng: -77.0044751
                  }
                },
                {
                  name: 'ESIKA MALL DEL SUR',
                  coordinates: {
                    lat: -12.1542517,
                    lng: -76.9848709
                  }
                },
                {
                  name: 'ESIKA JOCKEY PLAZA',
                  coordinates: {
                    lat: -12.0852769,
                    lng: -76.9795208
                  }
                }
              ]
        }
    }

handleInputEmail(e){
   this.setState({input:e.target.value})
}

// handleClickMessage = () =>{
//     if(this.state.input !== ""){
//         window.$.ajax({
//             type: "POST",
//             url: "https://mandrillapp.com/api/1.0/messages/send.json",
//             data: {
//               'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
//               'message': {
//                 "html": "<p>Example HTML content</p>",
//                 "text": "Example text content",
//                 "subject": "example subject",
//                 'from_email': 'nat@laboratoria.la',
//                 'to': [
//                   {
//                     'email': 'natalypc27@gmail.com ',
//                     'name': 'Nataly Porras',
//                     'type': 'to'
//                   }
//                 ],
//                 "images": [
//                   {
//                       "type": "image/png",
//                       "name": "IMAGECID",
//                       "content": "ZXhhbXBsZSBmaWxl"
//                   }
//               ],
//                 'subject': 'Lista de Pedidos',
//                 'html': '<h2>Hola Nataly</h2>',
//                 'text': 'Te enviamos una lista con los productos que seleccionase para la compra.   ',
//                 'html': '<ul><ol>Revisa el detalle de tu compra.</ol><ol>Finalizala ingresando al enlace de ecommerce que te enviamos</ol></ul>'        
//               }
//             }
//           });
//     }else{
//         alert("Agrega un correo porfavor")
//     }
//     this.setState({input:""})
// }
    render(){
        return(
            <section>  
                <div className= "container">
                    <div className="row">
                        <h3>Nuestras Tiendas</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Seleccionar país</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option>Perú</option>
                        <option>Chile</option>
                        <option>Colombia</option>
                        </select>
                    </div>
                    <div>
                    <MapConsultant consultants={this.state.storesRetail} />
                    </div>
                    <div className="primeraTienda">
                        <h3>ESIKA REAL PLAZA PRIMAVERA</h3>
                        <p>Av. Angamos Este 2681, San Borja 15036</p>
                        <p>Teléfono: (01) 6118200</p>
                        <p>Horario de Atención</p>
                        <p>Lunes a Vieres</p>
                        <p>10:00–22:00</p>
                    </div>
                    <hr /> 
                    <div className="segundaTienda">
                        <h3>ESIKA MALL DEL SUR</h3>
                        <p>Av. Los Lirios con, San Juan de Miraflores, Av Pedro Miotta, Cercado de Lima</p>
                        <p>Teléfono: (01) 6071593</p>
                        <p>Horario de Atención</p>
                        <p>Lunes a Vieres</p>
                        <p>10:00–22:00</p>
                    </div>
                    <hr />
                    <div className="terceraTienda">
                        <h3>ESIKA JOCKEY PLAZA</h3>
                        <p>Av. Javier Prado Este 4200, Santiago de Surco de Lima, LIMA 15023</p>
                        <p>Teléfono: (01) 6223001</p>
                        <p>Horario de Atención</p>
                        <p>Lunes a Vieres</p>
                        <p>11:00–22:00</p>
                    </div>
                    
                    <h5>Puedes enviar una copia de tu pedido a:</h5>

                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={this.state.input} onChange={this.handleInputEmail}/>
                        <button type="button" className="btn btn-outline-dark" onClick={this.handleClickMessage}>Enviar</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Stores;