import React from 'react';

const ContactConsultant = () => (
  <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">Escribe tu correo:</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="hola@mail.com" />
    </div>
    <div class="container">
    <label>Encuentra tu consultora por:</label>
      <div class="form-group">
        <div class="checkbox">
          <label data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <input type="checkbox" /> código
      </label>
        </div>
      </div>
      <div id="collapseOne" aria-expanded="false" class="collapse">
        <div>


        </div>
      </div>
      <div class="form-group">
        <div class="checkbox">
          <label data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <input type="checkbox" checked /> zona
      </label>
        </div>
      </div>
      <div id="collapseTwo" aria-expanded="true" class="collapse in">
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ut molestias eius, nam neque esse eos modi corrupti harum fugit, hic recusandae praesentium, minima ipsa eligendi architecto at! Culpa, explicabo.</div>
      </div>
    </div>
  </form>
);

export default ContactConsultant;