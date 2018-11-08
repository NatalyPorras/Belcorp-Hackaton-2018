import React, { Component, Fragment } from 'react';
import Header from './Header'


const Consultant = ({ consultantInfo }) => {
  console.log(consultantInfo)
}

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

  handleChange = ({ target: { value }}) => {
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
                      <p>{this.state.consultants[0].name}</p>
                      <p>{this.state.consultants[0].phoneNumber}</p>
                      <p>{this.state.consultants[0].email}</p>
                    </div>
                  ) 
                  : null
                }
              </div>
              <div className="form-group">

                <div className="checkbox">

                  <label data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <b>O si aún no tienes una, búscala por:</b>
                  </label>
                  <p><input type="checkbox" /> Ubicación</p>
                </div>
              </div>
              <div id="collapseTwo" aria-expanded="true" className="collapse in">
                <div>

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