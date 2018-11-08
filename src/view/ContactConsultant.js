import React, { Component, Fragment } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';


// const Consultant = ({ consultantInfo }) => {
//   console.log(consultantInfo)
// }

class ContactConsultant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      consultantCode: null,
      consultants: [
        { code: 123456, name: 'Ailim Moscoso', phoneNumber: 980671333, email: 'ailim.moscoso@gmail.com' },
        { code: 654321, name: 'Miluska González', phoneNumber: 933500732, email: 'miluska.gonzalezar@gmail.com' },
        { code: 554433, name: 'Mely Hidalgo', phoneNumber: 929940441, email: 'mely.hidalgo.crespo@gmail.com' },
        { code: 334455, name: 'Nataly Porras', phoneNumber: 953211790, email: 'natalypc27@gmail.com' }
      ]
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      consultantCode: value,
    })
  }


  render() {
    return (
      <Fragment>
        <Header itemsCount={this.props.itemsCount} />
        <div className="container mt-4">
          <div className="row">
            <form className="col-md-6 offset-md-3">
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
              <div>
                {
                  this.state.consultantCode === "123456"
                    ? (
                      <div>
                        <form>
                          <fieldset disabled>
                            <div class="form-group">
                              <label for="disabledTextInput">Nombre de consultora</label>
                              <input type="text" id="disabledTextInput" class="form-control" placeholder={this.state.consultants[0].name} />
                            </div>
                            <div class="form-group">
                              <label for="disabledPhone">Teléfono</label>
                              <input id="disabledPhone" class="form-control" placeholder={this.state.consultants[0].phoneNumber} />
                            </div>
                            <div class="form-group">
                              <label for="disabledEmail">email</label>
                              <input id="disabledEmail" class="form-control" placeholder={this.state.consultants[0].email} />
                            </div>

                          </fieldset>
                          <div className="form-group">
                            <button type="button" class="btn btn-danger"><Link to="/savelist"> Realizar pedido </Link></button>
                          </div>
                        </form>
                      </div>
                    )
                    : null
                }
              </div>
              <div className="form-group">

                <div className="checkbox">

                  <label >
                    <b>O si aún no tienes una, búscala por:</b>
                  </label>
                  <p><input type="checkbox" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" /> Ubicación</p>
                </div>
              </div>
              <div id="collapseTwo" aria-expanded="true" className="collapse in">
                <div>
                  <img className="image-fluid" height="400px" src="https://user-images.githubusercontent.com/39412664/48228873-78f78900-e374-11e8-9e56-694727ee8a3f.PNG" />
                  <div class="list-group">
                    {this.state.consultants.map(({ code, name, phoneNumber, email }, i) => {
                      return (
                        <div key={i} class="list-group-item list-group-item-action flex-column align-items-start">
                          <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{name}</h5>
                            <small>{code}</small>
                          </div>
                          <p class="mb-1">Número de contácto {phoneNumber}</p>
                          <small>Email: {email}</small>
                        </div>
                      )

                    })}
                  </div>
                </div>
              </div>

            </form>
          </div>

        </div>

      </Fragment>
    )
  }
};

export default ContactConsultant;