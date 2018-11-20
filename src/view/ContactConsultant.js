import React, { Component, Fragment } from 'react';
import Header from './Header';
import Brocha from '../assets/img/brocha.jpg';
import Deco from '../assets/img/brocha-polvos-maquillaje.jpg';
import MapConsultant from '../component/MapConsultant'

// const Consultant = ({ consultantInfo }) => {
//   console.log(consultantInfo)
// }

class ContactConsultant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consultantCode: null,
      consultants: [
        {
          code: 123456,
          name: 'Ailim Moscoso',
          phoneNumber: 980671333,
          email: 'ailim.moscoso@gmail.com',
          coordinates: {
            lat: -12.0964749,
            lng: -77.0408897
          }
        },
        {
          code: 654321,
          name: 'Miluska González',
          phoneNumber: 933500732,
          email: 'miluska.gonzalezar@gmail.com',
          coordinates: {
            lat: -12.1087819,
            lng: -77.0394884
          }
        },
        {
          code: 554433,
          name: 'Mely Hidalgo',
          phoneNumber: 929940441,
          email: 'mely.hidalgo.crespo@gmail.com',
          coordinates: {
            lat: -12.1031934,
            lng: -77.0317268
          }
        },
        {
          code: 334455,
          name: 'Nataly Porras',
          phoneNumber: 953211790,
          email: 'natalypc27@gmail.com',
          coordinates: {
            lat: -12.1076761,
            lng: -77.0408198
          }
        }
      ]
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      consultantCode: value,
    })
  }

  render() {
    const { consultants, consultantCode } = this.state;
    return (
      <Fragment>
        <Header itemsCount={this.props.itemsCount} />
        <div className="container d-flex flex-column align-items-center mt-4">
          <form className="">
            <div className="form-group">
              <label for="exampleFormControlInput1">Escribe tu correo:</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Teléfono*</label>
              <input type="number" className="form-control" id="exampleFormControlInput1" />
            </div>
            <p><b>Si ya tienes una consultora:</b></p>
            <div className="form-group">
              <input onChange={this.handleChange} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Ingresa su código aquí" />
            </div>
            {
              consultantCode === "123456"
                ? (
                  <div className="">
                    <fieldset disabled>
                      <div className="form-group">
                        <label for="disabledTextInput">Nombre de consultora</label>
                        <input type="text" id="disabledTextInput" className="form-control" defaultValue={consultants[0].name} />
                      </div>
                      <div className="form-group">
                        <label for="disabledPhone">Teléfono</label>
                        <input id="disabledPhone" className="form-control" defaultValue={consultants[0].phoneNumber} />
                      </div>
                      <div className="form-group">
                        <label for="disabledEmail">Email</label>
                        <input id="disabledEmail" className="form-control" defaultValue={consultants[0].email} />
                      </div>
                    </fieldset>
                    <div className="d-flex mb-3">
                      <button className="btn btn-danger btn-width" type="button" data-toggle="modal" data-target="#message-consultant"> Realizar pedido </button>
                    </div>
                    <div className="modal fade" id="message-consultant" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-body">
                            <button type="button" className="close m-3" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-5">
                                  <img className="img-fluid" src={Deco} alt="Brocha de maquillaje" />
                                </div>
                                <div className="col-7 mt-4 d-flex align-items-center">
                                  <div className="d-flex flex-column text-center">
                                    <p>Tu lista de pedidos fue enviada a tu consultora, muy pronto ella se comunicara contigo para coordinar la entrega.</p>
                                    <p>¿Deseas la copia del pedido en tu correo?</p>
                                    <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">Sí</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
                : null
            }
            <div className="form-group">
              <div className="checkbox">
                <p>
                  <b>O si aún no tienes una, búscala por:</b>
                </p>
                <p>
                  <input type="checkbox" id="ubication" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" />
                  <label for="ubication">Ubicación</label>
                </p>
              </div>
            </div>
            <div id="collapseTwo" aria-expanded="true" className="collapse in">
              <div>
                <MapConsultant consultants={consultants} />
                <p className="mt-3 mb-3">Estas son las consultoras que se encuentran más cerca a ti. Selecciona una:</p>
                <div className="list-group">
                  {consultants.map(({ code, name, phoneNumber, email }, i) => {
                    return (
                      <div key={i}>
                        <div className="list-group-item list-group-item-action" data-toggle="modal" data-target={`#consultant${i}`}>
                          <span>{i + 1}. {name}</span>
                        </div>
                        <div className="modal fade" id={`consultant${i}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-body">
                                <button type="button" className="close m-3" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                                <div className="text-secondary m-4">
                                  <small className="mb-1">Nombre de la consultora</small>
                                  <p className="mb-2">{name}</p>
                                  <small className="mb-1">Código</small>
                                  <p className="mb-2">{code}</p>
                                  <small className="mb-1">Teléfono</small>
                                  <p className="mb-2">{phoneNumber}</p>
                                  <small className="mb-1">Correo</small>
                                  <p className="mb-2">{email}</p>
                                </div>
                                <div className="container-fluid">
                                  <div className="row">
                                    <div className="col-5">
                                      <img className="img-fluid" src={Deco} alt="Brocha de maquillaje" />
                                    </div>
                                    <div className="col-7 d-flex align-items-center">
                                      <div className="d-flex flex-column text-center">
                                        <p>Recuerda comunicarte con tu consultora y ella coordinará la entrega de tus productos.</p>
                                        <p>¿Deseas la copia del pedido en tu correo?</p>
                                        <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">Sí</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </form>
          <img src={Brocha} className="img-fluid" />
        </div>
      </Fragment>
    )
  }
};

export default ContactConsultant;