import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark" style={{color: "#FDEBD3"}}>
            <div class="container-fluid">
                <NavLink to='/'><img src={logo} alt="Logo" /></NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0 gap-5">
                        <li class="nav-item">
                            <NavLink to='/' style={{color: "#FDEBD3", textDecoration: "none"}}>Inicio</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to='/products' style={{color: "#FDEBD3", textDecoration: "none"}}>Productos</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to='/processes' style={{color: "#FDEBD3", textDecoration: "none"}}>Procesos</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to='' style={{color: "#FDEBD3", textDecoration: "none"}}>Sobre Nosotros</NavLink>
                        </li>
                    </ul>
                    <ul class="navbar-nav mb-2 ms-5 me-4 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="#" style={{color: "#FDEBD3"}}>sing in</a>
                        </li>
                        <li className='fs-5 fw-bold mt-1'>|</li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href='#' style={{color: "#FDEBD3"}}>sing up</a>
                        </li>
                    </ul>
                    <form class="d-flex bg-light rounded-pill col-3 col-md-1 justify-content-around" role="search">
                        <div class="btn-group dropstart">
                            <button type="button" class="btn btn-outline-ligth border-0 " data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                            <ul class="dropdown-menu">
                                <input type="search" id="form1" class="form-control-dropdown border-0" data-bs-focus='border-0'/>
                            </ul>
                        </div>
                        <button class="btn btn-outline-light text-dark border-0" type="submit"><FontAwesomeIcon icon={faBagShopping} /></button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
