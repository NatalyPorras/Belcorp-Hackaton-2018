import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './belcorp.png';
import './Header.css';
import IconWhite from '../assets/icon/icon-white.png'

const Header = ({ itemsCount }) => {
  return (
    <nav className="navbar contentNav p-0">
      <Link to="/Belcorp-Hackaton-2018" className="navbar-brand p-0 m-0"><img src={Logo} className="logo m-2" alt="Logo de Belcorp" /></Link>
      <div className="nav">
        <Link to="/esika" className="m-2">Esika</Link>
        <Link to="/lbel" className="m-2">L'bel</Link>
        <Link to="/cyzone" className="m-2">Cyzone</Link>
        <Link to="/shopList" className="mr-2 ml-1 mb-2 mt-2">
          <img className="" alt="Bolsa" height="25px" src={IconWhite}></img>
          <span className="badge badge-pill badge-light ml-1">{itemsCount}</span>
        </Link>
      </div>
    </nav>
  )
}
export default Header