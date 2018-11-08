import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/img/Logo.PNG';


const Header = () =>{
    return (
        <nav>
        <img src={Logo} className="m-3" alt="Logo de Belcorp" />
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <Link to="/" class="nav-link active">Inicio</Link>
          </li>
          <li class="nav-item">
            <Link to="/esika" class="nav-link">Esika</Link>
          </li>
          <li class="nav-item">
            <Link to="/lbel" class="nav-link">Lbel</Link>
          </li>

        </ul>
      
      </nav>
    )
}
export default Header