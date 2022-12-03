import React from 'react'
import { NavLink } from 'react-router-dom'
import ig from '../../assets/img/footer/ig.png'
import fb from '../../assets/img/footer/fb.png'
import wa from '../../assets/img/footer/wa.png'
import logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
    return (
        <div className='container-fluid mt-4 border-top pt-4 pb-0' style={{ backgroundColor: "#E16026" }}>
            <div className="row">
                <div className="col-3 d-flex flex-column align-items-center">
                    <img src={logo} alt="Logo" style={{width: "5em"}} />
                    <p className='fs-2 text-white tex-center' >TAWA</p>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col">
                            <p className='fs-5 text-white'>Navegación</p>
                            <ul style={{ listStyle: "none" }}>
                                <li>
                                    <NavLink to='/' style={{ color: "#FDEBD3", textDecoration: "none" }}>Inicio</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/products' style={{ color: "#FDEBD3", textDecoration: "none" }}>Productos</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/processes' style={{ color: "#FDEBD3", textDecoration: "none" }}>Procesos</NavLink></li>
                                <li>
                                    <NavLink to='/about' style={{ color: "#FDEBD3", textDecoration: "none" }}>Sobre Nosotros</NavLink></li>
                            </ul>
                        </div>
                        <div className="col">
                            <p className='fs-5 text-white'>Seguinos</p>
                            <ul style={{ listStyle: "none" }}>
                                <li>
                                    <a href="https://www.instagram.com/carlos_ovand/" target={"_blank"} style={{ color: "#FDEBD3", textDecoration: "none" }}><img src={ig} alt="Instagram" className='me-2' />Instagram</a>
                                </li>
                                <li>
                                <a href="https://www.facebook.com/lalovando" target={"_blank"} style={{ color: "#FDEBD3", textDecoration: "none" }}><img src={fb} alt="Instagram" className='me-2' />Facebook</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <p className='fs-5 text-white'>Nuestra locacion</p>
                            <ul className='p-0 d-flex  flex-column'>
                                <li className='text-white list-group d-flex flex-row'><FontAwesomeIcon icon={faLocationDot} className='me-3'/><span className='w-75'>San Martin Norte 202, Villa Cavecera, San Carlos, Mendoza, Argentina</span></li>
                                <li className='text-white list-group d-flex flex-row' ><FontAwesomeIcon icon={faEnvelope} className='me-3' /><span>Correo</span></li>
                                <li className='text-white list-group d-flex flex-row'><img src={wa} alt="whatsapp" className='me-2' /><span>Whatsapp</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: "#F6B17B" }}>
                <p className='text-center mt-2'>Página hecha por el equipo 9 de <span className='fw-bold'>Hunteando</span></p>
            </div>
        </div>
    )
}
