import React, { Component } from 'react';
import Mapa from '../assets/img/Captura.JPG'
class Stores extends Component {
    
  handleInputEmail(){

}
componentDidMount(){
    fetch("https://mandrillapp.com/api/1.0/messages/send.json")
    .then(response=>{
        console.log(response);
        
    })
}
// handleClickMessage = () =>{
//   $.ajax({
//     type: "POST",
//     url: "https://mandrillapp.com/api/1.0/messages/send.json"   ,
//     data: {
//       'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
//       'message': {
//         "html": "<p>Example HTML content</p>",
//         "text": "Example text content",
//         "subject": "example subject",
//         'from_email': 'nat@laboratoria.la',
//         'to': [
//           {
//             'email': 'natalypc27@gmail.com ',
//             'name': 'Nataly Porras',
//             'type': 'to'
//           }
//         ],
//         "images": [
//           {
//               "type": "image/png",
//               "name": "IMAGECID",
//               "content": "ZXhhbXBsZSBmaWxl"
//           }
//       ],
//         'subject': 'title',
//         'html': 'html can be used'

//       }
//     }
//   });
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
                        <img src={Mapa} />
                    </div>

                    <div>
                        <h3>ESIKA REAL PLAZA PRIMAVERA</h3>
                        <p>Av. Angamos Este 2681, San Borja 15036</p>
                        <p>Teléfono: (01) 6118200</p>
                        <p>Horario de Atención</p>
                        <p>Lunes a Vieres</p>
                        <p>10:00–22:00</p>
                    </div>
                    <hr /> 
                    <div>
                        <h3>ESIKA MALL DEL SUR</h3>
                        <p>Av. Los Lirios con, San Juan de Miraflores, Av Pedro Miotta, Cercado de Lima</p>
                        <p>Teléfono: (01) 6071593</p>
                        <p>Horario de Atención</p>
                        <p>Lunes a Vieres</p>
                        <p>10:00–22:00</p>
                    </div>
                    <hr />
                    <div>
                        <h3>ESIKAJOCKEY PLAZA</h3>
                        <p>Av. Javier Prado Este 4200, Santiago de Surco de Lima, LIMA 15023</p>
                        <p>Teléfono: (01) 6223001</p>
                        <p>Horario de Atención</p>
                        <p>Lunes a Vieres</p>
                        <p>11:00–22:00</p>
                    </div>
                    
                    <h4>Envia una copia de tu pedido a:</h4>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        <button type="button" className="btn btn-outline-dark" onClick={this.handleClickMessage}>Dark</button>
                    </div>
                </div>

            </section>
        )
    }
}

export default Stores;