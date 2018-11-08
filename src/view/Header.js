import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './belcorp.png';
import './Header.css'

const Header = ({ itemsCount }) => {
  return (
    <nav className="navbar contentNav">
      <Link to="/" className="navbar-brand"><img src={Logo} className="logo" alt="Logo de Belcorp" /></Link>
      <div className="nav">
        <Link to="/esika" className="m-2">Esika</Link>
        <Link to="/lbel" className="m-2">L'bel</Link>
        <Link to="/cyzone" className="m-2">Cyzone</Link>
        <Link to="/shopList" className="m-2"><i className="fas fa-shopping-bag text-white"></i><span class="badge badge-pill badge-danger">{itemsCount}</span></Link>
      </div>
    </nav>
  )
}
export default Header