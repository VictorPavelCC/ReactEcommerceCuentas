import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';


const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid navbar-container">
            <a className="navbar-brand" href="/#">HyperSoft</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">Inicio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/#">PC Armado</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categoria
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/#">Motherboard</a></li>
                    <li><a className="dropdown-item" href="/#">Procesadores</a></li>
                    <li><a className="dropdown-item" href="/#">RAM</a></li>
                    <li><a className="dropdown-item" href="/#">Almacenamiento</a></li>
                    <li><a className="dropdown-item" href="/#">Tarjeta Grafica</a></li>
                    <li><a className="dropdown-item" href="/#">Fuentes de Alimentacion</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/#">Perifericos</a></li>
                </ul>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            <div>
            <FaShoppingCart size="3rem"/>
            <span>2</span>

            </div>


            </div>
        </div>
    </nav>
  )
}

export default Menu