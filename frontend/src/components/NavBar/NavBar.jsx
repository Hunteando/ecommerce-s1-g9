import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-secondary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0 gap-5">
                        <li class="nav-item">
                            <a class="nav-link fw-bold" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="#">Texto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold">Texto</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav mb-2 ms-5 me-4 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="#">sing in</a>
                        </li>
                        <li className='fs-5 fw-bold mt-1'>|</li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href='#'>sing up</a>
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
