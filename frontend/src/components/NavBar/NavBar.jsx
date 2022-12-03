import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { Card } from '../Card/Card'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" style={{ color: "#FDEBD3" }}>
            <div className="container-fluid px-3">
                <NavLink to='/'><img src={logo} alt="Logo" style={{ width: "10%" }} /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0 gap-5">
                        <li className="nav-item">
                            <NavLink to='/' style={{ color: "#FDEBD3", textDecoration: "none" }}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/products' style={{ color: "#FDEBD3", textDecoration: "none" }}>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/processes' style={{ color: "#FDEBD3", textDecoration: "none" }}>Procesos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' style={{ color: "#FDEBD3", textDecoration: "none" }}>Sobre Nosotros</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 ms-5 me-4 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#" style={{ color: "#FDEBD3" }}>sing in</a>
                        </li>
                        <li className='fs-5 fw-bold mt-1'>|</li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href='#' style={{ color: "#FDEBD3" }}>sing up</a>
                        </li>
                    </ul>
                </div>
                <button className='bg-dark text-white border-0 me-3'><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
        </nav>
    )
}
