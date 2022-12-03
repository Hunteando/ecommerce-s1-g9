import { faArrowLeft, faCartPlus, faCreditCard, faDollarSign, faEnvelope, faLocationDot, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import mp_logo from '../../assets/img/mp_logo.webp'
import { CardSummary } from '../../components/CardSummary/CardSummary'

export const Summary = () => {

    const navigate = useNavigate()

    return (
        <div className='container-fluid'>
            <div className="row border border-top-0 border-start-0 border-end-0 pb-4">
                <FontAwesomeIcon icon={faArrowLeft} className='text-white text-start fs-4 ms-5 mt-4' style={{ width: "1em", cursor: "pointer" }} />
            </div>
            <div className="row">
                <div className="col border-end">
                    <div className="row">
                        <h4 className='text-white my-5 ms-4'>Forma de entrega / pago</h4>
                    </div>
                    <div className="row border border-start-0 border-end-0 py-4 ps-4">
                        <div className="col-1"><FontAwesomeIcon icon={faEnvelope} className='text-white' /></div>
                        <div className="col"><span className='text-white'>emailejemplo@correo.com</span></div>
                    </div>
                    <div className="row border-bottom py-4 ps-4">
                        <div className="col-1"><FontAwesomeIcon icon={faLocationDot} className='text-white' /></div>
                        <div className="col-8 d-flex flex-column">
                            <span className='text-white'>Calle, Numero, Departamento</span>
                            <span className='text-white'>Codigo postal</span>
                            <span className='text-white'>Ciudad, Provincia, Numero de contacto</span>
                        </div>
                        <div className="col">
                            <button className='text-white bg-dark border-0 mt-3 fw-bold' onClick={()=> navigate('/checkout')} >CAMBIAR</button>
                        </div>
                    </div>
                    <div className="row py-4 ps-4 d-flex flex-column">
                        <h3 className='text-white mt-2 mb-4'>FORMA DE PAGO</h3>
                        <img src={mp_logo} alt="Mercado Pago" className='w-25 my-3' />
                        <p className='text-white my-4'>Utilizando la opción pagar a través de <span className='fw-bold'>Mercado Pago</span> serás redirigido y podrás pagar de las siguientes formas:</p>
                        <div className="row ms-2">
                            <div className="col-1"><FontAwesomeIcon icon={faCreditCard} className='text-white' /></div>
                            <div className="col"><p className='text-white'>Tarjeta de crédito</p></div>
                        </div>
                        <div className="row ms-2">
                            <div className="col-1"><FontAwesomeIcon icon={faCreditCard} className='text-white' /></div>
                            <div className="col"><p className='text-white'>Tarjeta de débito</p></div>
                        </div>
                        <div className="row ms-2">
                            <div className="col-1"><FontAwesomeIcon icon={faDollarSign} className='text-white' /></div>
                            <div className="col"><p className='text-white'>Efectivo</p></div>
                        </div>
                        <div className="row ms-2">
                            <div className="col-1"><FontAwesomeIcon icon={faMoneyBill} className='text-white' /></div>
                            <div className="col"><p className='text-white'>Saldo de Mercado Crédito</p></div>
                        </div>
                    </div>
                </div>
                <div className="col  px-5 pt-5">
                    <span className='text-muted'>Tu compra</span>
                    <div className="col">
                        <CardSummary />
                        <CardSummary />
                    </div>
                    <div className="row mt-4">
                        <span className='text-white col-4 fw-bold fs-5 py-2'>$1000</span>
                        <button className='col-4 border-0 ms-5' style={{ backgroundColor: "#E16026" }}
                            onClick={() => navigate('summary')}><FontAwesomeIcon icon={faCartPlus} /><span className='fw-bold ms-2'>FINALIZAR</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
