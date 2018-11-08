import React, { Fragment } from 'react';
import Header from './Header'

const ContactConsultant = ({ itemsCount }) => (
  <Fragment>
    <Header itemsCount={itemsCount} />
    <div className="container mt-4">
      <div className="row">
        <form className="col-md-6 offset-md-3">
          <div className="form-group">
            <label for="exampleFormControlInput1">Escribe tu correo:</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="hola@mail.com" />
          </div>
          <p>Encuentra tu consultora por:</p>
          <div className="form-group">
            <div className="checkbox">
              <label data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <input type="checkbox" />
                código</label>
            </div>
          </div>
          <div id="collapseOne" aria-expanded="false" className="collapse">
            <div className="form-group">
              <input type="number" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput">Example label</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Another label</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
            </div>
          </div>
          <div className="form-group">
            <div className="checkbox">
              <label data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <input type="checkbox" />zona</label>
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
);

export default ContactConsultant;