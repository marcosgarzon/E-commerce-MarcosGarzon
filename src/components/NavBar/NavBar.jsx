import React from "react";
import logo from "../../logo.svg";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { data } from "../Data/Data";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <img src={logo} alt="" width="50" height="44" />
        </Link>{" "}
        <p className="p-3">Tienda Elden</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link active p-3" to="/" aria-current="page">
                Home🏠
              </Link>
            </li>
            <div className="nav-item dropdown">
              <Link
                className="p-3 nav-link dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to="/"
              >
                Categorías🔎
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="/Category/espadon">
                    Espadones
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Category/katana">
                    Katanas
                  </Link>
                </li>
              </ul>
            </div>
            <li className="nav-item">
              <a className="nav-link p-3">Iniciar sesión🔒</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <CartWidget />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
