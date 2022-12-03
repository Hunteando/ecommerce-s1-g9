import { faArrowLeft, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CardSummary } from '../../components/CardSummary/CardSummary'

export const ChekOut = () => {

    const navigate = useNavigate()

    return (
        <div className='container-fluid'>
            <div className="row border border-top-0 border-start-0 border-end-0 pb-4">
                <FontAwesomeIcon icon={faArrowLeft} className='text-white text-start fs-4 ms-5 mt-4' style={{ width: "1em", cursor: "pointer" }} />
            </div>
            <div className="row">
                <div className="col">
                    <div className="row mt-4 ps-4 border-bottom border-2">
                        <h3 className='text-white text-start p-0'>Forma de entrega / retiro</h3>
                        <button className='rounded bg-dark mb-5 w-25' style={{ border: "solid 1px #E16026", color: "#FDEBD3" }}>Cambiar CP 1101</button>
                        <h4 className='text-white mt-4'>ENTREGA</h4>
                    </div>
                    <div className="row ps-4 pt-4">
                        <span className='text-muted mt-3'>Retirar por</span>
                        <div className="row mt-4 mb-5">
                            <div className="col">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label text-white" for="flexRadioDefault1">
                                        Punto de retiro Correo Argentino
                                    </label>
                                    <label className="form-check-label text-muted" for="flexRadioDefault1">
                                        Llega en 5 a 9 días habiles
                                    </label>
                                </div>
                            </div>
                            <div className="col d-flex flex-column">
                                <span className='fw-bold text-center' style={{ color: "#E16026" }}>$1200</span>
                                <button className='border-0 bg-dark text-muted' >ver direcciones</button>
                            </div>
                        </div>
                        <span className='text-muted'>Envio a domicilio</span>
                        <div className="row mt-4 mb-5">
                            <div className="col">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label text-white" for="flexRadioDefault2">
                                        Andreani estandar
                                    </label>
                                    <label className="form-check-label text-muted" for="flexRadioDefault2">
                                        Llega en 5 a 9 días habiles
                                    </label>
                                </div>
                            </div>
                            <div className="col d-flex flex-column">
                                <span className='fw-bold text-center' style={{ color: "#E16026" }}>$1500</span>
                            </div>
                        </div>
                        <span className='text-muted'>Nuestro local</span>
                        <div className="row mt-4">
                            <div className="col">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                    <label className="form-check-label text-white" for="flexRadioDefault3">
                                        San Martin Norte 202, Villa Cavecera, San carlos, Mendoza, Argentina
                                    </label>
                                </div>
                            </div>
                            <div className="col d-flex flex-column">
                                <span className='fw-bold text-center' style={{ color: "#E16026" }}>GRATIS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col border-start px-5 pt-5">
                    <span className='text-muted'>Tu compra</span>
                    <div className="col">
                        <CardSummary />
                        <CardSummary />
                    </div>
                    <div className="row mt-4">
                        <span className='text-white col-4 border fw-bold fs-5 py-2'>$1000</span>
                        <button className='col-4 border-0 ms-5' style={{ backgroundColor: "#E16026" }}
                        onClick={()=>navigate('/summary')}><FontAwesomeIcon icon={faCartPlus} /><span className='fw-bold ms-2'>CONTINUAR</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
