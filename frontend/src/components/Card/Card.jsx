import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../../assets/img/products/img1.png'
import React from 'react'

export const Card = () => {
    return (
        <div className="card" style={{width: "20rem"}}>
            <img src={img1} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Título</h5>
                    <p className="fs-6 fw-lighter">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
                    <div className='container-fluid d-flex justify-content-between align-items-center'>
                        <span>$1000</span>
                        <button className='border-0 py-2 px-3 rounded' style={{ 
                            backgroundColor: "#E16026", 
                            color: "#FDEBD3" }}><FontAwesomeIcon icon={faCartShopping} /></button>
                    </div>
                </div>
        </div>
    )
}
