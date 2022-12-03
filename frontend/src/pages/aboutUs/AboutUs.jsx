import { faBox, faReply, faTruck, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const AboutUs = () => {
    return (
        <div className='container-fluid' style={{height:"100vh"}}>
            <div className="row mt-5">
                <h3 className='text-white text-center fs-1'>SOBRE NOSOTROS</h3>
                <p className='text-white text-center'>formas de pago y devoluciones</p>
            </div>
            <div className="row mx-5">
                <div className="col-3 border">
                    <div className="row pt-3 px-2">
                        <div className="col-2 pt-2">
                            <FontAwesomeIcon icon={faWallet} className='text-white fs-4' />
                        </div>
                        <div className="col">
                            <p className='text-white fw-bold'>Como comprar y forma de pago</p>
                        </div>
                    </div>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolore quo itaque et libero provident quod iusto tempore explicabo exercitationem.</p>
                </div>
                <div className="col-3 border">
                    <div className="row pt-3 px-2">
                        <div className="col-2 pt-2">
                            <FontAwesomeIcon icon={faBox} className='text-white fs-4' />
                        </div>
                        <div className="col pt-2">
                            <p className='text-white fw-bold'>Tabla de tamaño</p>
                        </div>
                    </div>
                    <p className='text-white mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, magni aliquid. Ab animi neque beatae?</p>
                </div>
                <div className="col-3 border">
                    <div className="row pt-3 px-2">
                        <div className="col-2 pt-2">
                            <FontAwesomeIcon icon={faTruck} className='text-white fs-4' />
                        </div>
                        <div className="col pt-2">
                            <p className='text-white fw-bold'>Formas de envio</p>
                        </div>
                    </div>
                    <p className='text-white mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, amet.</p>
                </div>
                <div className="col-3 border">
                    <div className="row pt-3 px-2">
                        <div className="col-2 pt-2">
                            <FontAwesomeIcon icon={faReply} className='text-white fs-4' />
                        </div>
                        <div className="col pt-2">
                            <p className='text-white fw-bold'>Devoluciones y cambio</p>
                        </div>
                    </div>
                    <p className='text-white mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolorum velit fugit aspernatur beatae architecto voluptatum.</p>
                </div>
            </div>
        </div>
    )
}
