import { faHeart, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card } from '../Card/Card'

export const ProductsComponent = () => {
    return (
        <div className='container col'>
            <h3 className='text-left mt-4 fs-1' style={{ color: "#FDEBD3" }}>Catálogo</h3>
            <div className='row justify-content-between mt-5 py-0 px-3'>
                <div className="col-5">
                    <div className='input-group'>
                        <button className='border-0 rounded-start'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        <input type="text" class="form-control col-1" placeholder="Buscar" aria-label="Buscar" />
                    </div>
                </div>
                <div className="col">
                    <div className="row d-flex gap-1">
                        <select className="col form-select mx-0" aria-label="Default select example" style={{ cursor: "pointer" }}>
                            <option selected value="1">Tamaño</option>
                            <option value="2">Nuevo</option>
                            <option value="3">Precio</option>
                        </select>
                        <select className="col form-select mx-0" aria-label="Default select example" style={{ cursor: "pointer" }}>
                            <option selected value="1">Material</option>
                            <option value="2">Nuevo</option>
                            <option value="3">Precio</option>
                        </select>
                        <button className='col-4 rounded p-0'><FontAwesomeIcon className='me-3' icon={faHeart} />Guaradado</button>
                    </div>
                </div>
            </div>
            <div className='tags container-fluid my-4 ps-4'>
                <span className='rounded-pill bg-secondary py-2 px-3'>Peso de 120kg <button className='border-0 bg-secondary'><FontAwesomeIcon icon={faXmark} /></button></span>
            </div>
            <div className='podructs container-fluid d-flex flex-row flex-wrap justify-content-around' style={{padding: "1em" }}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
