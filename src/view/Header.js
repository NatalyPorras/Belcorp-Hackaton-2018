import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './belcorp.png';
import './Header.css'

const Header = () =>{
    return (
        <nav className="contentNav">
        <img src={Logo} className="m-3" alt="Logo de Belcorp" />
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/esika" className="nav-link">Esika</Link>
          </li>
          <li className="nav-item">
            <Link to="/lbel" className="nav-link">Lbel</Link>
          </li>
          <li className="nav-item">
            <Link to="/cyzone" className="nav-link">Cyzone</Link>
          </li>
          <li className="nav-item">
            <Link to="/shopList" className="nav-link">Bolsa</Link>
          </li>

        </ul>
      
      </nav>
    )
}
export default Header