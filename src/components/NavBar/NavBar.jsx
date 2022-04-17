import React from 'react';
import logo from '../../logo.svg'

export default function NavBar() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <img src={logo} alt="" width="30" height="24"/> Tienda Elden
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Carrito 🛒</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Iniciar sesión🔒</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

