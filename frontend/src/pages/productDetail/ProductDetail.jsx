import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import img1 from '../../assets/img/products/img1.png'

export const ProductDetail = () => {
    return (
        <div className='container-fluid border-top' style={{ height: "100vh" }}>
            <div className="row">
                <div className="col-4">
                    <div className="row border-bottom py-4 ps-2">
                        <p style={{ color: "#E16026" }}>Lorem ipsum dolor sit amet.</p>
                        <h2 className='text-white text-start fw-bold fs-1 mb-5'>Obra 254-9</h2>
                        <h4 className='text-white text-start fs-5'>DESCRIPCION DE LA OBRA</h4>
                        <p className='text-white text-justify text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quam nulla, est eius reprehenderit nemo impedit neque repellendus placeat vero, accusamus autem maxime dolor ab! Corporis facilis sit voluptates. Doloremque ducimus, temporibus cum nesciunt provident quo unde nulla incidunt consequuntur reprehenderit similique assumenda, quibusdam delectus consequatur harum, hic rem perspiciatis?</p>
                    </div>
                    <div className="row mt-4">
                        <span className='text-white mb-4 text-muted'>Especificaciones</span>
                        <span class=" w-25 py-1 rounded mx-1" style={{ backgroundColor: "#FDEBD3" }} >Alto 100cm</span>
                        <span class=" w-25 py-1 rounded mx-1" style={{ backgroundColor: "#FDEBD3" }} >Largo 20cm</span>
                        <span class=" w-25 py-1 rounded mx-1" style={{ backgroundColor: "#FDEBD3" }} >Ancho 60cm</span>
                    </div>
                    <div className="row mt-4">
                        <span className='text-white col-4 border fw-bold fs-5 py-2'>$1000</span>
                        <button className='col border-0' style={{ backgroundColor: "#E16026" }}><FontAwesomeIcon icon={faCartPlus} /><span className='fw-bold ms-2'>AÑADIR AL CARRITO</span></button>
                    </div>
                </div>
                <div className="col-8 ps-5">
                    <div className="row">
                        <img src={img1} alt="Producto" className=' w-50 m-auto mt-5'/>
                    </div>
                    <div className="row justify-content-between mt-4">
                        <div className="col-2"><img src={img1} alt="Producto" className='w-75 m-auto'/></div>
                        <div className="col-2"><img src={img1} alt="Producto" className='w-75 m-auto'/></div>
                        <div className="col-2"><img src={img1} alt="Producto" className='w-75 m-auto'/></div>
                        <div className="col-2"><img src={img1} alt="Producto" className='w-75 m-auto'/></div>
                        <div className="col-2"><img src={img1} alt="Producto" className='w-75 m-auto'/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
