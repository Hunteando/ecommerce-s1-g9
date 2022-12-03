import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../../assets/img/products/img1.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Card = () => {
    const navigate = useNavigate()
    return (
        <div className="card" style={{ width: "15rem" }}>
            <img src={img1} className="card-img-top" alt="Producto" onClick={() => navigate('detail')}
                style={{ cursor: "pointer" }} />
            <div className="card-body d-flex flex-column gap-2">
                <h5 className="card-title fw-bolder">Título</h5>
                <span className='fw-bold'>$1000</span>
                <p className="fs-6 fw-lighter">Producto hecho en arcilla</p>
                <button className='border-0 py-2 px-3 rounded text-dark fw-bold' style={{
                    backgroundColor: "#E16026"
                }}>Agregar al carrito</button>
            </div>
        </div>
    )
}
