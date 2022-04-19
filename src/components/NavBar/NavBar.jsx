import React from 'react';
import logo from '../../logo.svg'
import CartWidget from '../CartWidget/CartWidget'

export default function NavBar() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <img src={logo} alt="" width="50" height="44" /> <p className='p-3'>Tienda Elden</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active p-3" aria-current="page">Home🏠</a>
        </li>
        <li className="nav-item">
          <a className="nav-link p-3">Categorías🔎</a>
        </li>
        <li className="nav-item">
          <a className="nav-link p-3">Iniciar sesión🔒</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><CartWidget /></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}


